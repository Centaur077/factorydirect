import json

from django.contrib.auth import get_user_model
from django.core.management import call_command
from django.test import Client, TestCase

from marketplace.models import BuyerProfile, City, DeliverySettings, Offer, Order, PriceTier
from marketplace.pricing import min_qty, quote


class DemoDataTestCase(TestCase):
    @classmethod
    def setUpTestData(cls):
        call_command('seed_demo', stdout=open('/dev/null', 'w'))

    def offer(self, product, maker):
        return Offer.objects.get(product__code=product, manufacturer__code=maker)


class PricingTests(DemoDataTestCase):
    """Expected numbers are what the frontend calculator shows for the same inputs."""

    def check(self, product, maker, qty, city, mode, *, unit, delivery, total, eta):
        q = quote(self.offer(product, maker), qty, City.objects.get(code=city), mode)
        self.assertEqual((q.unit_price, q.delivery, q.total, q.eta_days), (unit, delivery, total, eta))

    def test_same_city_standard(self):
        self.check('coffee', 'alatau', 30, 'almaty', 'standard', unit=5850, delivery=2500, total=178000, eta=3)

    def test_volume_tier_applies(self):
        self.check('coffee', 'alatau', 80, 'almaty', 'standard', unit=5450, delivery=2500, total=438500, eta=3)

    def test_express_and_pickup(self):
        self.check('coffee', 'alatau', 50, 'almaty', 'express', unit=5850, delivery=4400, total=296900, eta=2)
        self.check('coffee', 'alatau', 50, 'almaty', 'pickup', unit=5850, delivery=0, total=292500, eta=2)

    def test_intercity(self):
        self.check('coffee', 'alatau', 30, 'astana', 'standard', unit=5850, delivery=6400, total=181900, eta=4)
        self.check('coffee', 'eastfoods', 30, 'almaty', 'standard', unit=6800, delivery=6000, total=210000, eta=5)
        self.check('box', 'steppepack', 200, 'astana', 'standard', unit=250, delivery=6000, total=56000, eta=4)

    def test_min_qty_uses_largest_of_moq_and_first_tier(self):
        self.assertEqual(min_qty(self.offer('box', 'steppepack')), 200)
        self.assertEqual(min_qty(self.offer('coffee', 'alatau')), 10)

    def test_admin_tariff_change_is_used(self):
        settings = DeliverySettings.load()
        settings.local_price = 3000
        settings.save()
        self.check('coffee', 'alatau', 30, 'almaty', 'standard', unit=5850, delivery=3000, total=178500, eta=3)


class CatalogApiTests(DemoDataTestCase):
    def test_catalog_shape_matches_frontend(self):
        data = self.client.get('/api/catalog/').json()
        self.assertEqual(list(data['cities'])[:2], ['almaty', 'astana'])
        self.assertEqual(data['cities']['almaty']['kk'], 'Алматы')
        self.assertEqual(data['distances']['almaty']['astana'], 1210)
        coffee = next(p for p in data['products'] if p['id'] == 'coffee')
        self.assertEqual(coffee['unit']['ru'], 'кг')
        self.assertEqual(coffee['offers'][0], {'maker': 'alatau', 'base': 6500, 'tiers': [[10, 6500], [30, 5850], [80, 5450]]})
        alatau = next(m for m in data['manufacturers'] if m['id'] == 'alatau')
        self.assertEqual((alatau['city'], alatau['rating'], alatau['minOrder']), ('almaty', 4.9, 10))
        self.assertEqual(data['delivery']['localPrice'], 2500)

    def test_admin_price_change_shows_on_site(self):
        tier = PriceTier.objects.get(offer=self.offer('coffee', 'alatau'), min_qty=30)
        tier.unit_price = 5500
        tier.save()
        coffee = next(p for p in self.client.get('/api/catalog/').json()['products'] if p['id'] == 'coffee')
        self.assertIn([30, 5500], coffee['offers'][0]['tiers'])

    def test_hidden_items_are_not_published(self):
        offer = self.offer('headphones', 'tech')
        offer.manufacturer.is_active = False
        offer.manufacturer.save()
        data = self.client.get('/api/catalog/').json()
        self.assertNotIn('tech', [m['id'] for m in data['manufacturers']])
        self.assertNotIn('headphones', [p['id'] for p in data['products']], 'product without active offers must be hidden')


class OrderApiTests(DemoDataTestCase):
    payload = {
        'company': 'ТОО Тест', 'bin': '123456789012', 'contactPerson': 'Тест', 'contact': 'test@example.test',
        'comment': '', 'lang': 'ru',
        'items': [
            {'product': 'coffee', 'maker': 'alatau', 'qty': 30, 'destination': 'almaty', 'mode': 'standard'},
            {'product': 'box', 'maker': 'steppepack', 'qty': 200, 'destination': 'astana', 'mode': 'standard'},
        ],
    }

    def setUp(self):
        self.user = make_buyer('buyer@example.test')
        self.client.force_login(self.user)

    def post(self, payload):
        return self.client.post('/api/orders/', json.dumps(payload), content_type='application/json')

    def test_requires_login(self):
        self.client.logout()
        response = self.post(self.payload)
        self.assertEqual((response.status_code, response.json()['error']), (401, 'auth_required'))
        self.assertFalse(Order.objects.exists())

    def test_order_belongs_to_buyer_and_is_listed_only_for_them(self):
        number = self.post(self.payload).json()['number']
        self.assertEqual(Order.objects.get(number=number).user, self.user)
        orders = self.client.get('/api/orders/').json()['orders']
        self.assertEqual([o['number'] for o in orders], [number])
        self.assertEqual(orders[0]['status'], 'new')
        self.assertEqual(len(orders[0]['items']), 2)
        self.client.force_login(make_buyer('other@example.test'))
        self.assertEqual(self.client.get('/api/orders/').json()['orders'], [])

    def test_creates_order_with_server_side_prices(self):
        tampered = {**self.payload, 'items': [{**self.payload['items'][0], 'unitPrice': 1}, self.payload['items'][1]]}
        response = self.post(tampered)
        self.assertEqual(response.status_code, 201)
        body = response.json()
        order = Order.objects.get(number=body['number'])
        self.assertEqual((order.goods_total, order.delivery_total, order.total), (225500, 8500, 234000))
        self.assertEqual(body['total'], 234000)
        self.assertEqual([s['name'] for s in body['suppliers']], ['Alatau Coffee', 'SteppePack'])
        self.assertEqual(order.items.get(product__code='coffee').unit_price, 5850)
        self.assertEqual(order.status, Order.Status.NEW)

    def test_rejects_quantity_below_minimum(self):
        items = [{**self.payload['items'][1], 'qty': 50}]
        response = self.post({**self.payload, 'items': items})
        self.assertEqual(response.status_code, 400)
        self.assertEqual(response.json()['error'], 'below_min_order')
        self.assertFalse(Order.objects.exists())

    def test_rejects_invalid_contact_data(self):
        self.assertEqual(self.post({**self.payload, 'bin': '123'}).json()['error'], 'invalid_bin')
        self.assertEqual(self.post({**self.payload, 'company': ' '}).json()['error'], 'missing_fields')
        self.assertEqual(self.post({**self.payload, 'contact': 'abc'}).json()['error'], 'invalid_contact')

    def test_rejects_unknown_or_empty_items(self):
        self.assertEqual(self.post({**self.payload, 'items': []}).json()['error'], 'empty_cart')
        bad = [{**self.payload['items'][0], 'maker': 'steppepack'}]
        self.assertEqual(self.post({**self.payload, 'items': bad}).json()['error'], 'unknown_offer')

    def test_rejects_non_json(self):
        response = self.client.post('/api/orders/', 'not json', content_type='application/json')
        self.assertEqual(response.status_code, 400)


def make_buyer(email, password='Str0ng-pass-123'):
    user = get_user_model().objects.create_user(username=email, email=email, password=password)
    BuyerProfile.objects.create(user=user, company='ТОО Тест', contact_person='Тест', phone='+7 700 000 00 00')
    return user


class AuthApiTests(TestCase):
    registration = {'email': 'New@Example.test', 'password': 'Str0ng-pass-123', 'company': 'ТОО Новая',
                    'bin': '123456789012', 'contactPerson': 'Айгерим', 'phone': '+7 701 123 45 67'}

    def post(self, url, payload, client=None):
        return (client or self.client).post(url, json.dumps(payload), content_type='application/json')

    def test_register_logs_in_and_returns_profile(self):
        response = self.post('/api/auth/register/', self.registration)
        self.assertEqual(response.status_code, 201)
        me = self.client.get('/api/auth/me/').json()['user']
        self.assertEqual((me['email'], me['company'], me['bin']), ('new@example.test', 'ТОО Новая', '123456789012'))

    def test_register_rejects_duplicate_email_and_weak_password(self):
        self.post('/api/auth/register/', self.registration)
        self.client.logout()
        self.assertEqual(self.post('/api/auth/register/', self.registration).json()['error'], 'email_taken')
        weak = self.post('/api/auth/register/', {**self.registration, 'email': 'weak@example.test', 'password': '12345'})
        self.assertEqual(weak.json()['error'], 'weak_password')
        self.assertTrue(weak.json()['messages'])
        self.assertEqual(self.post('/api/auth/register/', {**self.registration, 'email': 'bad'}).json()['error'], 'invalid_email')
        self.assertEqual(self.post('/api/auth/register/', {**self.registration, 'email': 'x@example.test', 'company': ''}).json()['error'], 'missing_fields')

    def test_login_logout(self):
        make_buyer('buyer@example.test')
        self.assertEqual(self.post('/api/auth/login/', {'email': 'buyer@example.test', 'password': 'wrong'}).json()['error'], 'invalid_credentials')
        self.assertEqual(self.post('/api/auth/login/', {'email': 'BUYER@example.test', 'password': 'Str0ng-pass-123'}).status_code, 200)
        self.assertEqual(self.client.get('/api/auth/me/').json()['user']['email'], 'buyer@example.test')
        self.post('/api/auth/logout/', {})
        self.assertIsNone(self.client.get('/api/auth/me/').json()['user'])

    def test_login_locks_after_five_failures(self):
        make_buyer('buyer@example.test')
        for _ in range(5):
            self.post('/api/auth/login/', {'email': 'buyer@example.test', 'password': 'wrong'})
        response = self.post('/api/auth/login/', {'email': 'buyer@example.test', 'password': 'Str0ng-pass-123'})
        self.assertEqual((response.status_code, response.json()['error']), (429, 'too_many_attempts'))

    def test_profile_update(self):
        self.client.force_login(make_buyer('buyer@example.test'))
        response = self.post('/api/auth/profile/', {'company': 'ТОО Обновлённая', 'bin': '', 'contactPerson': 'Ержан', 'phone': '+7 702 000 00 00'})
        self.assertEqual(response.json()['user']['company'], 'ТОО Обновлённая')
        self.assertEqual(self.post('/api/auth/profile/', {'company': 'X', 'bin': '12', 'contactPerson': 'Y', 'phone': '+7 702 000 00 00'}).json()['error'], 'invalid_bin')

    def test_csrf_is_enforced(self):
        client = Client(enforce_csrf_checks=True)
        self.assertEqual(self.post('/api/auth/login/', {'email': 'a@b.test', 'password': 'x'}, client).status_code, 403)
        client.get('/api/auth/me/')
        token = client.cookies['csrftoken'].value
        response = client.post('/api/auth/login/', json.dumps({'email': 'a@b.test', 'password': 'x'}),
                               content_type='application/json', headers={'X-CSRFToken': token})
        self.assertEqual(response.status_code, 400)

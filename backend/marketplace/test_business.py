from datetime import timedelta
from django.test import TestCase, Client
from django.contrib.auth import get_user_model
from django.utils import timezone
from .models import Category,Company,Membership,Procurement,Proposal,BusinessNotification

class BusinessTests(TestCase):
    def setUp(self):
        U=get_user_model()
        self.buyer=U.objects.create_user('buyer',email='buyer@example.test',password='ExamplePassword123!')
        self.seller=U.objects.create_user('seller',email='seller@example.test',password='ExamplePassword123!')
        self.other=U.objects.create_user('other',email='other@example.test',password='ExamplePassword123!')
        self.category=Category.objects.create(code='packaging',name_ru='Упаковка',name_kk='Қаптама',name_en='Packaging')
        self.company=Company.objects.create(name='Test Factory',city='Алматы',role='manufacturer')
        Membership.objects.create(company=self.company,user=self.seller,role='owner')
        self.rfq=Procurement.objects.create(buyer=self.buyer,title='Стаканы',category=self.category,quantity=3000,unit='шт.',city='Алматы',deadline=timezone.localdate()+timedelta(days=5),specifications='350 мл')
    def post(self,user,action,data):
        self.client.force_login(user)
        return self.client.post('/api/business/'+action+'/',data,content_type='application/json')
    def offer(self):
        return self.post(self.seller,'proposal',dict(requestId=self.rfq.id,unitPrice='20.50',delivery='1000',days=5,terms='С налогами'))
    def test_full_flow_and_totals(self):
        self.assertEqual(self.offer().status_code,200)
        self.client.force_login(self.buyer)
        p=self.client.get('/api/business/').json()['mine'][0]['proposals'][0]
        self.assertEqual(p['total'],'62500.00')
        self.assertEqual(self.post(self.buyer,'accept',{'proposalId':p['id']}).status_code,200)
        self.client.force_login(self.seller)
        r=self.client.get('/api/business/').json()['responses'][0]
        self.assertEqual(r['buyerEmail'],'buyer@example.test')
        self.assertTrue(BusinessNotification.objects.filter(user=self.seller).exists())
    def test_other_buyer_cannot_accept_or_close(self):
        self.offer();p=Proposal.objects.get()
        self.assertEqual(self.post(self.other,'accept',{'proposalId':p.id}).status_code,403)
        self.assertEqual(self.post(self.other,'close',{'requestId':self.rfq.id}).status_code,403)
    def test_competitor_cannot_read_quotes_or_contact(self):
        self.offer();c=Company.objects.create(name='Other',city='Астана',role='seller');Membership.objects.create(company=c,user=self.other,role='owner')
        self.client.force_login(self.other)
        r=self.client.get('/api/business/').json()['market'][0]
        self.assertEqual(r['proposals'],[]);self.assertNotIn('buyerEmail',r)
    def test_viewer_cannot_offer_or_edit(self):
        Membership.objects.filter(user=self.seller).update(role='viewer')
        self.assertEqual(self.offer().status_code,403)
        self.assertEqual(self.post(self.seller,'member',dict(email=self.other.email,role='manager')).status_code,403)
    def test_no_duplicate_offers_or_second_accept(self):
        self.offer();self.offer();self.assertEqual(Proposal.objects.count(),1)
        p=Proposal.objects.get();self.post(self.buyer,'accept',{'proposalId':p.id})
        self.assertEqual(self.offer().status_code,400)
        self.assertEqual(self.post(self.buyer,'accept',{'proposalId':p.id}).status_code,400)
    def test_invalid_money(self):
        for value in ['NaN','Infinity','-1','0.001','0']:
            r=self.post(self.seller,'proposal',dict(requestId=self.rfq.id,unitPrice=value,delivery='0',days=2,terms='test'))
            self.assertEqual(r.status_code,400)
    def test_auth_and_csrf(self):
        self.assertEqual(self.client.get('/api/business/').status_code,401)
        c=Client(enforce_csrf_checks=True);c.force_login(self.buyer)
        self.assertEqual(c.post('/api/business/close/',{'requestId':self.rfq.id},content_type='application/json').status_code,403)
    def test_registration_company_and_owner_only_profile(self):
        data=dict(name='Buyer Company',role='manufacturer',city='Алматы',website='https://example.com',description='Test')
        self.assertEqual(self.post(self.buyer,'company',data).status_code,200)
        self.assertFalse(Company.objects.get(name='Buyer Company').verified)
        self.assertEqual(self.post(self.buyer,'member',dict(email=self.other.email,role='manager')).status_code,200)
        self.assertEqual(self.post(self.other,'company',data).status_code,403)
    def test_saved_companies_are_private(self):
        self.assertEqual(self.post(self.buyer,'save',{'companyId':self.company.id}).status_code,200)
        self.client.force_login(self.buyer)
        self.assertEqual(len(self.client.get('/api/business/').json()['saved']),1)
        self.client.force_login(self.other)
        self.assertEqual(self.client.get('/api/business/').json()['saved'],[])
        self.post(self.buyer,'save',{'companyId':self.company.id})
        self.assertEqual(self.client.get('/api/business/').json()['saved'],[])

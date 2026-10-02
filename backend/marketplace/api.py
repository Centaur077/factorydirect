import json
import re

from django.db import transaction
from django.db.models import Prefetch
from django.http import JsonResponse
from django.views.decorators.http import require_GET, require_http_methods

from .models import (
    Category, City, DeliverySettings, Distance, Manufacturer, Offer, Order, OrderItem, PriceTier, Product,
)
from .pricing import MODES, min_qty, quote

LANGS = ('ru', 'kk', 'en')
MAX_ITEMS = 50


def translated(obj, field):
    return {lang: getattr(obj, f'{field}_{lang}') for lang in LANGS}


@require_GET
def catalog(request):
    """Everything the site needs, in the shape frontend/script.js already uses."""
    settings = DeliverySettings.load()
    active_offers = (Offer.objects.filter(is_active=True, manufacturer__is_active=True)
                     .select_related('manufacturer').prefetch_related(Prefetch('tiers', queryset=PriceTier.objects.order_by('min_qty'))))
    products = (Product.objects.filter(is_active=True).select_related('category')
                .prefetch_related(Prefetch('offers', queryset=active_offers, to_attr='active_offers')))

    distances = {}
    for d in Distance.objects.select_related('from_city', 'to_city'):
        distances.setdefault(d.from_city.code, {})[d.to_city.code] = d.km

    return JsonResponse({
        'delivery': {
            'localPrice': settings.local_price, 'basePrice': settings.base_price, 'perKm': float(settings.per_km),
            'perWeightUnit': float(settings.per_weight_unit), 'expressMultiplier': float(settings.express_multiplier),
            'expressEtaFactor': float(settings.express_eta_factor), 'kmPerDay': settings.km_per_day,
            'unknownDistanceKm': settings.unknown_distance_km,
        },
        'cities': {c.code: {**{lang: getattr(c, f'name_{lang}') for lang in LANGS}, 'lat': c.lat, 'lng': c.lng}
                   for c in City.objects.all()},
        'distances': distances,
        'categories': [{'id': c.code, 'name': translated(c, 'name')} for c in Category.objects.all()],
        'manufacturers': [{
            'id': m.code, 'name': m.name, 'initials': m.initials, 'city': m.city.code, 'rating': float(m.rating),
            'dispatch': m.dispatch_days, 'minOrder': m.min_order, 'categories': [c.code for c in m.categories.all()],
            'description': translated(m, 'description'),
        } for m in Manufacturer.objects.filter(is_active=True).select_related('city').prefetch_related('categories')],
        'products': [{
            'id': p.code, 'icon': p.icon, 'category': p.category.code, 'retail': p.retail_price,
            'weight': float(p.weight_factor), 'name': translated(p, 'name'), 'unit': translated(p, 'unit'),
            'description': translated(p, 'description'),
            'offers': [{'maker': o.manufacturer.code, 'base': o.base_price,
                        'tiers': [[t.min_qty, t.unit_price] for t in o.tiers.all()]} for o in p.active_offers],
        } for p in products if p.active_offers],
    })


class OrderError(Exception):
    pass


def validate_contact(data):
    fields = {key: str(data.get(key) or '').strip() for key in ('company', 'bin', 'contactPerson', 'contact', 'comment')}
    if not fields['company'] or not fields['contactPerson'] or not fields['contact']:
        raise OrderError('missing_fields')
    if fields['bin'] and not re.fullmatch(r'\d{12}', fields['bin']):
        raise OrderError('invalid_bin')
    is_email = re.fullmatch(r'[^\s@]+@[^\s@]+\.[^\s@]+', fields['contact'])
    if not is_email and len(re.sub(r'\D', '', fields['contact'])) < 10:
        raise OrderError('invalid_contact')
    return fields


def price_items(raw_items):
    if not isinstance(raw_items, list) or not raw_items:
        raise OrderError('empty_cart')
    if len(raw_items) > MAX_ITEMS:
        raise OrderError('too_many_items')
    settings = DeliverySettings.load()
    priced = []
    for raw in raw_items:
        if not isinstance(raw, dict):
            raise OrderError('unknown_offer')
        offer = (Offer.objects.filter(product__code=raw.get('product'), manufacturer__code=raw.get('maker'), is_active=True,
                                      product__is_active=True, manufacturer__is_active=True)
                 .select_related('product', 'manufacturer__city').first())
        destination = City.objects.filter(code=raw.get('destination')).first()
        mode = raw.get('mode')
        if not offer or not destination or mode not in MODES:
            raise OrderError('unknown_offer')
        try:
            qty = int(raw.get('qty'))
        except (TypeError, ValueError):
            raise OrderError('invalid_quantity')
        if qty < min_qty(offer):
            raise OrderError('below_min_order')
        priced.append((offer, destination, mode, qty, quote(offer, qty, destination, mode, settings)))
    return priced


@require_http_methods(['GET', 'POST'])
def orders(request):
    """GET lists the signed-in buyer's orders; POST creates one from the cart."""
    if not request.user.is_authenticated:
        return JsonResponse({'error': 'auth_required'}, status=401)
    return create_order(request) if request.method == 'POST' else list_orders(request)


def list_orders(request):
    orders = Order.objects.filter(user=request.user).prefetch_related('items__product', 'items__manufacturer__city', 'items__destination')
    return JsonResponse({'orders': [{
        'number': o.number, 'createdAt': o.created_at.isoformat(), 'status': o.status,
        'goods': o.goods_total, 'delivery': o.delivery_total, 'total': o.total,
        'items': [{
            'product': item.product.code if item.product else None, 'productName': item.product_name,
            'maker': item.manufacturer.code if item.manufacturer else None, 'makerName': item.manufacturer_name,
            'qty': item.quantity, 'unitPrice': item.unit_price, 'destination': item.destination.code if item.destination else None,
            'mode': item.delivery_mode, 'total': item.total, 'eta': item.eta_days,
        } for item in o.items.all()],
    } for o in orders]})


def create_order(request):
    try:
        data = json.loads(request.body)
        if not isinstance(data, dict):
            raise ValueError
    except ValueError:
        return JsonResponse({'error': 'invalid_json'}, status=400)

    try:
        contact = validate_contact(data)
        priced = price_items(data.get('items'))
    except OrderError as error:
        return JsonResponse({'error': str(error)}, status=400)

    with transaction.atomic():
        order = Order.objects.create(
            user=request.user, company=contact['company'], bin=contact['bin'], contact_person=contact['contactPerson'],
            contact=contact['contact'], comment=contact['comment'],
            language=data.get('lang') if data.get('lang') in LANGS else 'ru',
            goods_total=sum(q.goods for *_, q in priced), delivery_total=sum(q.delivery for *_, q in priced),
            total=sum(q.total for *_, q in priced),
        )
        order.number = f'FD-{1000 + order.pk}'
        order.save(update_fields=['number'])
        OrderItem.objects.bulk_create(OrderItem(
            order=order, product=offer.product, manufacturer=offer.manufacturer, destination=destination,
            product_name=offer.product.name_ru, manufacturer_name=offer.manufacturer.name, destination_name=destination.name_ru,
            delivery_mode=mode, quantity=qty, unit_price=q.unit_price, goods=q.goods, delivery=q.delivery,
            total=q.total, eta_days=q.eta_days,
        ) for offer, destination, mode, qty, q in priced)

    suppliers = {}
    for offer, _, _, _, q in priced:
        maker = offer.manufacturer
        entry = suppliers.setdefault(maker.code, {'id': maker.code, 'name': maker.name, 'initials': maker.initials,
                                                  'city': maker.city.code, 'count': 0, 'total': 0})
        entry['count'] += 1
        entry['total'] += q.total
    return JsonResponse({'number': order.number, 'goods': order.goods_total, 'delivery': order.delivery_total,
                         'total': order.total, 'suppliers': list(suppliers.values())}, status=201)

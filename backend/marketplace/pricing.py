"""Server-side price and delivery calculation.

Mirrors offerCalc() in frontend/script.js so the site preview and the saved order agree;
orders are always priced here, never from numbers sent by the browser.
"""
import math
from dataclasses import dataclass

from .models import DeliverySettings, Distance

MODES = ('standard', 'express', 'pickup')


@dataclass
class Quote:
    unit_price: int
    goods: int
    delivery: int
    total: int
    eta_days: int


def min_qty(offer):
    tiers = list(offer.tiers.all())
    return max(offer.manufacturer.min_order, tiers[0].min_qty if tiers else 1)


def tier_price(offer, qty):
    price = offer.base_price
    for tier in offer.tiers.all():
        if qty >= tier.min_qty:
            price = tier.unit_price
    return price


def js_round(value):
    """Math.round semantics (halves go up), unlike Python's banker's rounding."""
    return math.floor(value + 0.5)


def quote(offer, qty, destination, mode='standard', settings=None):
    settings = settings or DeliverySettings.load()
    maker = offer.manufacturer
    unit_price = tier_price(offer, qty)
    goods = unit_price * qty

    distance = Distance.objects.filter(from_city=maker.city, to_city=destination).values_list('km', flat=True).first()
    if distance is None:
        distance = settings.unknown_distance_km

    if destination.pk == maker.city_id:
        delivery = float(settings.local_price)
    else:
        delivery = (settings.base_price + distance * float(settings.per_km)
                    + qty * float(offer.product.weight_factor) * float(settings.per_weight_unit))
    eta = max(1, math.ceil(distance / settings.km_per_day)) + maker.dispatch_days
    if mode == 'express':
        delivery *= float(settings.express_multiplier)
        eta = max(1, math.ceil(eta * float(settings.express_eta_factor)))
    elif mode == 'pickup':
        delivery = 0
        eta = maker.dispatch_days
    delivery = js_round(delivery / 100) * 100

    return Quote(unit_price=unit_price, goods=goods, delivery=delivery, total=goods + delivery, eta_days=eta)

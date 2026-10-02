import json
from pathlib import Path

from django.core.management.base import BaseCommand
from django.db import transaction

from marketplace.models import (
    Category, City, DeliverySettings, Distance, Manufacturer, Offer, PriceTier, Product,
)

FIXTURE = Path(__file__).resolve().parents[2] / 'fixtures' / 'demo_catalog.json'


class Command(BaseCommand):
    help = 'Loads the demo catalog (cities, distances, categories, manufacturers, products, prices). Safe to re-run.'

    def add_arguments(self, parser):
        parser.add_argument('--if-empty', action='store_true',
                            help='Only load when there are no products yet, so admin edits survive restarts.')

    @transaction.atomic
    def handle(self, *args, **options):
        if options['if_empty'] and Product.objects.exists():
            self.stdout.write('Catalog already has data, demo seed skipped.')
            return
        data = json.loads(FIXTURE.read_text(encoding='utf-8'))
        DeliverySettings.load()

        cities = {}
        for c in data['cities']:
            cities[c['code']], _ = City.objects.update_or_create(code=c['code'], defaults={
                'name_ru': c['ru'], 'name_kk': c['kk'], 'name_en': c['en'],
                'lat': c['lat'], 'lng': c['lng'], 'sort_order': c['sort'],
            })
        for from_code, row in data['distances'].items():
            for to_code, km in row.items():
                Distance.objects.update_or_create(from_city=cities[from_code], to_city=cities[to_code], defaults={'km': km})

        categories = {}
        for c in data['categories']:
            categories[c['code']], _ = Category.objects.update_or_create(code=c['code'], defaults={
                'name_ru': c['ru'], 'name_kk': c['kk'], 'name_en': c['en'], 'sort_order': c['sort'],
            })

        makers = {}
        for m in data['manufacturers']:
            maker, _ = Manufacturer.objects.update_or_create(code=m['id'], defaults={
                'name': m['name'], 'initials': m['initials'], 'city': cities[m['city']], 'rating': m['rating'],
                'min_order': m['minOrder'], 'dispatch_days': m['dispatch'], 'sort_order': m['sort'],
                'description_ru': m['description']['ru'], 'description_kk': m['description']['kk'],
                'description_en': m['description']['en'],
            })
            maker.categories.set(categories[c] for c in m['categories'])
            makers[m['id']] = maker

        for p in data['products']:
            product, _ = Product.objects.update_or_create(code=p['id'], defaults={
                'category': categories[p['category']], 'icon': p['icon'], 'retail_price': p['retail'],
                'weight_factor': p['weight'], 'sort_order': p['sort'],
                **{f'name_{lang}': p['name'][lang] for lang in ('ru', 'kk', 'en')},
                **{f'unit_{lang}': p['unit'][lang] for lang in ('ru', 'kk', 'en')},
                **{f'description_{lang}': p['description'][lang] for lang in ('ru', 'kk', 'en')},
            })
            for o in p['offers']:
                offer, _ = Offer.objects.update_or_create(product=product, manufacturer=makers[o['maker']], defaults={'base_price': o['base']})
                offer.tiers.all().delete()
                PriceTier.objects.bulk_create(PriceTier(offer=offer, min_qty=q, unit_price=price) for q, price in o['tiers'])

        self.stdout.write(self.style.SUCCESS(
            f"Demo catalog loaded: {len(cities)} cities, {len(makers)} manufacturers, {len(data['products'])} products."
        ))

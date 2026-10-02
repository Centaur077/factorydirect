from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin
from django.db.models import Count, Min
from django.utils.html import format_html_join

from .models import (
    BuyerProfile, Category, City, DeliverySettings, Distance, Manufacturer, Offer, Order, OrderItem, PriceTier, Product,
)

admin.site.site_header = 'FactoryDirect — администрирование'
admin.site.site_title = 'FactoryDirect'
admin.site.index_title = 'Данные сайта'
admin.site.site_url = '/'


class DistanceInline(admin.TabularInline):
    model = Distance
    fk_name = 'from_city'
    extra = 0
    verbose_name_plural = 'расстояния до других городов'


@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    list_display = ['name_ru', 'code', 'lat', 'lng', 'manufacturers_count', 'sort_order']
    list_editable = ['sort_order']
    search_fields = ['name_ru', 'name_kk', 'name_en', 'code']
    inlines = [DistanceInline]

    def get_queryset(self, request):
        return super().get_queryset(request).annotate(makers=Count('manufacturers'))

    @admin.display(description='производителей', ordering='makers')
    def manufacturers_count(self, obj):
        return obj.makers


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name_ru', 'name_kk', 'name_en', 'code', 'sort_order']
    list_editable = ['sort_order']


class OfferInline(admin.TabularInline):
    model = Offer
    extra = 0
    fields = ['product', 'manufacturer', 'base_price', 'is_active', 'tiers_summary']
    readonly_fields = ['tiers_summary']
    show_change_link = True
    autocomplete_fields = ['product', 'manufacturer']

    @admin.display(description='уровни цены (изменить — по ссылке «Изменить»)')
    def tiers_summary(self, obj):
        return tiers_text(obj) if obj.pk else '—'


def tiers_text(offer):
    return ' · '.join(f'от {t.min_qty}: {t.unit_price:,} ₸'.replace(',', ' ') for t in offer.tiers.all()) or 'нет уровней'


@admin.register(Manufacturer)
class ManufacturerAdmin(admin.ModelAdmin):
    list_display = ['name', 'city', 'rating', 'min_order', 'dispatch_days', 'is_active']
    list_editable = ['rating', 'min_order', 'dispatch_days', 'is_active']
    list_filter = ['is_active', 'city', 'categories']
    search_fields = ['name', 'code']
    filter_horizontal = ['categories']
    inlines = [OfferInline]
    fieldsets = [
        (None, {'fields': ['name', 'code', 'initials', 'city', 'is_active', 'sort_order']}),
        ('Условия', {'fields': ['rating', 'min_order', 'dispatch_days', 'categories']}),
        ('Описание', {'fields': ['description_ru', 'description_kk', 'description_en']}),
    ]


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['icon_name', 'category', 'retail_price', 'lowest_price', 'offers_count', 'is_active']
    list_editable = ['retail_price', 'is_active']
    list_filter = ['is_active', 'category']
    search_fields = ['name_ru', 'name_kk', 'name_en', 'code']
    inlines = [OfferInline]
    fieldsets = [
        (None, {'fields': ['name_ru', 'name_kk', 'name_en', 'code', 'icon', 'category', 'is_active', 'sort_order']}),
        ('Цена и доставка', {'fields': ['retail_price', 'unit_ru', 'unit_kk', 'unit_en', 'weight_factor']}),
        ('Описание', {'fields': ['description_ru', 'description_kk', 'description_en']}),
    ]

    def get_queryset(self, request):
        return super().get_queryset(request).annotate(low=Min('offers__tiers__unit_price'), offers_total=Count('offers', distinct=True))

    @admin.display(description='товар', ordering='name_ru')
    def icon_name(self, obj):
        return f'{obj.icon} {obj.name_ru}'

    @admin.display(description='оптом от, ₸', ordering='low')
    def lowest_price(self, obj):
        return obj.low

    @admin.display(description='предложений', ordering='offers_total')
    def offers_count(self, obj):
        return obj.offers_total


class PriceTierInline(admin.TabularInline):
    model = PriceTier
    extra = 1


@admin.register(Offer)
class OfferAdmin(admin.ModelAdmin):
    list_display = ['product', 'manufacturer', 'base_price', 'tiers', 'is_active']
    list_editable = ['base_price', 'is_active']
    list_filter = ['is_active', 'manufacturer', 'product__category']
    search_fields = ['product__name_ru', 'manufacturer__name']
    autocomplete_fields = ['product', 'manufacturer']
    inlines = [PriceTierInline]

    @admin.display(description='уровни цены')
    def tiers(self, obj):
        return tiers_text(obj)


@admin.register(DeliverySettings)
class DeliverySettingsAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Внутри города', {'fields': ['local_price']}),
        ('Между городами: base + км × ставка + количество × коэффициент веса × ставка',
         {'fields': ['base_price', 'per_km', 'per_weight_unit', 'unknown_distance_km']}),
        ('Экспресс и сроки', {'fields': ['express_multiplier', 'express_eta_factor', 'km_per_day']}),
    ]

    def has_add_permission(self, request):
        return not DeliverySettings.objects.exists()

    def has_delete_permission(self, request, obj=None):
        return False

    def changelist_view(self, request, extra_context=None):
        # There is only one row of tariffs, so open it directly.
        from django.shortcuts import redirect
        return redirect('admin:marketplace_deliverysettings_change', DeliverySettings.load().pk)


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0
    can_delete = False
    fields = ['product_name', 'manufacturer_name', 'quantity', 'unit_price', 'destination_name', 'delivery_mode', 'delivery', 'eta_days', 'total']
    readonly_fields = fields

    def has_add_permission(self, request, obj=None):
        return False


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['number', 'created_at', 'company', 'user', 'suppliers', 'total', 'status']
    list_editable = ['status']
    list_filter = ['status', 'created_at']
    search_fields = ['number', 'company', 'bin', 'contact_person', 'contact', 'user__email']
    date_hierarchy = 'created_at'
    inlines = [OrderItemInline]
    readonly_fields = ['number', 'user', 'created_at', 'language', 'goods_total', 'delivery_total', 'total']
    fieldsets = [
        (None, {'fields': ['number', 'status', 'created_at', 'user']}),
        ('Покупатель', {'fields': ['company', 'bin', 'contact_person', 'contact', 'comment', 'language']}),
        ('Суммы', {'fields': ['goods_total', 'delivery_total', 'total']}),
    ]

    def get_queryset(self, request):
        return super().get_queryset(request).select_related('user').prefetch_related('items')

    @admin.display(description='производители')
    def suppliers(self, obj):
        names = sorted({item.manufacturer_name for item in obj.items.all()})
        return format_html_join(', ', '{}', ((name,) for name in names))

    def has_add_permission(self, request):
        return False  # orders come from the site checkout


class BuyerProfileInline(admin.StackedInline):
    model = BuyerProfile
    can_delete = False
    verbose_name_plural = 'компания покупателя'


class BuyerOrderInline(admin.TabularInline):
    model = Order
    fields = ['number', 'created_at', 'status', 'total']
    readonly_fields = fields
    extra = 0
    can_delete = False
    show_change_link = True
    verbose_name_plural = 'заявки покупателя'

    def has_add_permission(self, request, obj=None):
        return False


User = get_user_model()
admin.site.unregister(User)


@admin.register(User)
class BuyerUserAdmin(UserAdmin):
    """Site buyers log in with their e-mail, which is also stored as the username."""
    inlines = [BuyerProfileInline, BuyerOrderInline]
    list_display = ['email', 'company', 'orders_count', 'date_joined', 'last_login', 'is_active', 'is_staff']
    list_select_related = ['buyer_profile']
    search_fields = ['email', 'username', 'buyer_profile__company', 'buyer_profile__bin']

    def get_queryset(self, request):
        return super().get_queryset(request).annotate(orders_total=Count('orders'))

    @admin.display(description='компания', ordering='buyer_profile__company')
    def company(self, obj):
        profile = getattr(obj, 'buyer_profile', None)
        return profile.company if profile else '—'

    @admin.display(description='заявок', ordering='orders_total')
    def orders_count(self, obj):
        return obj.orders_total


from .models import Company, Membership, Procurement, Proposal, BusinessNotification
admin.site.register([Company, Membership, Procurement, Proposal, BusinessNotification])

from django.conf import settings
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class City(models.Model):
    code = models.SlugField('код', unique=True, help_text='Латиницей, например almaty. Используется в ссылках и расчётах.')
    name_ru = models.CharField('название (RU)', max_length=80)
    name_kk = models.CharField('название (KZ)', max_length=80)
    name_en = models.CharField('название (EN)', max_length=80)
    lat = models.FloatField('широта')
    lng = models.FloatField('долгота')
    sort_order = models.PositiveIntegerField('порядок', default=0)

    class Meta:
        ordering = ['sort_order', 'name_ru']
        verbose_name = 'город'
        verbose_name_plural = 'города'

    def __str__(self):
        return self.name_ru


class Distance(models.Model):
    from_city = models.ForeignKey(City, on_delete=models.CASCADE, related_name='distances_from', verbose_name='откуда')
    to_city = models.ForeignKey(City, on_delete=models.CASCADE, related_name='distances_to', verbose_name='куда')
    km = models.PositiveIntegerField('расстояние, км')

    class Meta:
        ordering = ['from_city', 'to_city']
        verbose_name = 'расстояние'
        verbose_name_plural = 'расстояния'
        constraints = [models.UniqueConstraint(fields=['from_city', 'to_city'], name='unique_distance_pair')]

    def __str__(self):
        return f'{self.from_city} → {self.to_city}: {self.km} км'


class Category(models.Model):
    code = models.SlugField('код', unique=True)
    name_ru = models.CharField('название (RU)', max_length=80)
    name_kk = models.CharField('название (KZ)', max_length=80)
    name_en = models.CharField('название (EN)', max_length=80)
    sort_order = models.PositiveIntegerField('порядок', default=0)

    class Meta:
        ordering = ['sort_order', 'name_ru']
        verbose_name = 'категория'
        verbose_name_plural = 'категории'

    def __str__(self):
        return self.name_ru


class Manufacturer(models.Model):
    code = models.SlugField('код', unique=True, help_text='Латиницей. Используется в адресе страницы производителя.')
    name = models.CharField('название', max_length=120)
    initials = models.CharField('инициалы для логотипа', max_length=3)
    city = models.ForeignKey(City, on_delete=models.PROTECT, related_name='manufacturers', verbose_name='город')
    rating = models.DecimalField('рейтинг', max_digits=2, decimal_places=1, validators=[MinValueValidator(0), MaxValueValidator(5)])
    min_order = models.PositiveIntegerField('минимальный заказ')
    dispatch_days = models.PositiveIntegerField('отгрузка, дней')
    categories = models.ManyToManyField(Category, related_name='manufacturers', verbose_name='категории')
    description_ru = models.TextField('описание (RU)')
    description_kk = models.TextField('описание (KZ)')
    description_en = models.TextField('описание (EN)')
    is_active = models.BooleanField('показывать на сайте', default=True)
    sort_order = models.PositiveIntegerField('порядок', default=0)

    class Meta:
        ordering = ['sort_order', 'name']
        verbose_name = 'производитель'
        verbose_name_plural = 'производители'

    def __str__(self):
        return self.name


class Product(models.Model):
    code = models.SlugField('код', unique=True, help_text='Латиницей. Используется в адресе страницы товара.')
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name='products', verbose_name='категория')
    icon = models.CharField('иконка (эмодзи)', max_length=8)
    name_ru = models.CharField('название (RU)', max_length=120)
    name_kk = models.CharField('название (KZ)', max_length=120)
    name_en = models.CharField('название (EN)', max_length=120)
    unit_ru = models.CharField('единица (RU)', max_length=20)
    unit_kk = models.CharField('единица (KZ)', max_length=20)
    unit_en = models.CharField('единица (EN)', max_length=20)
    description_ru = models.TextField('описание (RU)', blank=True)
    description_kk = models.TextField('описание (KZ)', blank=True)
    description_en = models.TextField('описание (EN)', blank=True)
    retail_price = models.PositiveIntegerField('розничная цена, ₸', help_text='Для сравнения «экономия против розницы».')
    weight_factor = models.DecimalField('коэффициент веса для доставки', max_digits=4, decimal_places=2, default=1)
    is_active = models.BooleanField('показывать на сайте', default=True)
    sort_order = models.PositiveIntegerField('порядок', default=0)

    class Meta:
        ordering = ['sort_order', 'name_ru']
        verbose_name = 'товар'
        verbose_name_plural = 'товары'

    def __str__(self):
        return self.name_ru


class Offer(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='offers', verbose_name='товар')
    manufacturer = models.ForeignKey(Manufacturer, on_delete=models.CASCADE, related_name='offers', verbose_name='производитель')
    base_price = models.PositiveIntegerField('базовая цена, ₸', help_text='Цена за единицу, пока не достигнут первый уровень объёма.')
    is_active = models.BooleanField('активно', default=True)

    class Meta:
        ordering = ['product', 'manufacturer']
        verbose_name = 'предложение'
        verbose_name_plural = 'предложения (цены)'
        constraints = [models.UniqueConstraint(fields=['product', 'manufacturer'], name='unique_offer')]

    def __str__(self):
        return f'{self.product} — {self.manufacturer}'


class PriceTier(models.Model):
    offer = models.ForeignKey(Offer, on_delete=models.CASCADE, related_name='tiers', verbose_name='предложение')
    min_qty = models.PositiveIntegerField('от количества')
    unit_price = models.PositiveIntegerField('цена за единицу, ₸')

    class Meta:
        ordering = ['min_qty']
        verbose_name = 'уровень цены'
        verbose_name_plural = 'уровни цены'
        constraints = [models.UniqueConstraint(fields=['offer', 'min_qty'], name='unique_tier_qty')]

    def __str__(self):
        return f'от {self.min_qty}: {self.unit_price} ₸'


class DeliverySettings(models.Model):
    """Delivery tariffs used by the site and by order pricing. There is exactly one row."""

    local_price = models.PositiveIntegerField('доставка внутри города, ₸', default=2500)
    base_price = models.PositiveIntegerField('межгород: фиксированная часть, ₸', default=3500)
    per_km = models.DecimalField('межгород: за километр, ₸', max_digits=6, decimal_places=2, default=2.2)
    per_weight_unit = models.DecimalField('межгород: за единицу товара × коэффициент веса, ₸', max_digits=6, decimal_places=2, default=7)
    express_multiplier = models.DecimalField('экспресс: множитель цены', max_digits=4, decimal_places=2, default=1.75)
    express_eta_factor = models.DecimalField('экспресс: множитель срока', max_digits=4, decimal_places=2, default=0.62)
    km_per_day = models.PositiveIntegerField('км в день в пути', default=650)
    unknown_distance_km = models.PositiveIntegerField('расстояние, если нет в таблице, км', default=1000)

    class Meta:
        verbose_name = 'тарифы доставки'
        verbose_name_plural = 'тарифы доставки'

    def __str__(self):
        return 'Тарифы доставки'

    @classmethod
    def load(cls):
        settings, _ = cls.objects.get_or_create(pk=1)
        return settings


class Order(models.Model):
    class Status(models.TextChoices):
        NEW = 'new', 'Новая'
        IN_PROGRESS = 'in_progress', 'В работе'
        DONE = 'done', 'Выполнена'
        CANCELLED = 'cancelled', 'Отменена'

    number = models.CharField('номер', max_length=20, unique=True, blank=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.SET_NULL, null=True, blank=True,
                             related_name='orders', verbose_name='покупатель')
    created_at = models.DateTimeField('создана', auto_now_add=True)
    status = models.CharField('статус', max_length=20, choices=Status.choices, default=Status.NEW)
    company = models.CharField('компания', max_length=200)
    bin = models.CharField('БИН', max_length=12, blank=True)
    contact_person = models.CharField('контактное лицо', max_length=200)
    contact = models.CharField('телефон или e-mail', max_length=200)
    comment = models.TextField('комментарий', blank=True)
    language = models.CharField('язык сайта', max_length=2, default='ru')
    goods_total = models.PositiveBigIntegerField('товары, ₸', default=0)
    delivery_total = models.PositiveBigIntegerField('доставка, ₸', default=0)
    total = models.PositiveBigIntegerField('итого, ₸', default=0)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'заявка'
        verbose_name_plural = 'заявки'

    def __str__(self):
        return f'{self.number} — {self.company}'


class OrderItem(models.Model):
    class DeliveryMode(models.TextChoices):
        STANDARD = 'standard', 'Стандарт'
        EXPRESS = 'express', 'Экспресс'
        PICKUP = 'pickup', 'Самовывоз'

    # Names and prices are copied at order time so later catalog edits do not change old orders.
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items', verbose_name='заявка')
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True, related_name='+', verbose_name='товар')
    manufacturer = models.ForeignKey(Manufacturer, on_delete=models.SET_NULL, null=True, related_name='+', verbose_name='производитель')
    destination = models.ForeignKey(City, on_delete=models.SET_NULL, null=True, related_name='+', verbose_name='город доставки')
    product_name = models.CharField('товар', max_length=120)
    manufacturer_name = models.CharField('производитель', max_length=120)
    destination_name = models.CharField('город доставки', max_length=80)
    delivery_mode = models.CharField('способ доставки', max_length=20, choices=DeliveryMode.choices)
    quantity = models.PositiveIntegerField('количество')
    unit_price = models.PositiveIntegerField('цена за единицу, ₸')
    goods = models.PositiveBigIntegerField('товар, ₸')
    delivery = models.PositiveBigIntegerField('доставка, ₸')
    total = models.PositiveBigIntegerField('итого, ₸')
    eta_days = models.PositiveIntegerField('срок, дней')

    class Meta:
        verbose_name = 'позиция'
        verbose_name_plural = 'позиции'

    def __str__(self):
        return f'{self.product_name} × {self.quantity}'


class BuyerProfile(models.Model):
    """Company details of a buyer account; the login itself is the Django user (username = e-mail)."""

    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='buyer_profile',
                                verbose_name='пользователь')
    company = models.CharField('компания', max_length=200)
    bin = models.CharField('БИН', max_length=12, blank=True)
    contact_person = models.CharField('контактное лицо', max_length=200)
    phone = models.CharField('телефон', max_length=40)

    class Meta:
        verbose_name = 'профиль покупателя'
        verbose_name_plural = 'профили покупателей'

    def __str__(self):
        return self.company


class LoginThrottle(models.Model):
    """Failed sign-in attempts per e-mail, stored in the database so every server worker sees them."""

    email = models.CharField(max_length=254, unique=True)
    failures = models.PositiveIntegerField(default=0)
    locked_until = models.DateTimeField(null=True, blank=True)


class Company(models.Model):
    name = models.CharField(max_length=120)
    role = models.CharField(max_length=20, choices=[('manufacturer','Производитель'),('distributor','Дистрибьютор'),('seller','Продавец')])
    city = models.CharField(max_length=100)
    website = models.URLField(blank=True)
    description = models.TextField(blank=True)
    verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self): return self.name


class Membership(models.Model):
    company = models.ForeignKey(Company,on_delete=models.CASCADE,related_name='memberships')
    user = models.OneToOneField(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    role = models.CharField(max_length=16,choices=[('owner','Владелец'),('manager','Менеджер'),('viewer','Наблюдатель')])


class Procurement(models.Model):
    buyer = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.PROTECT)
    title = models.CharField(max_length=160)
    category = models.ForeignKey(Category,on_delete=models.PROTECT)
    quantity = models.PositiveIntegerField()
    unit = models.CharField(max_length=30)
    city = models.CharField(max_length=100)
    deadline = models.DateField()
    specifications = models.TextField()
    status = models.CharField(max_length=16,default='open',choices=[('open','Приём предложений'),('selected','Выбрано предложение'),('closed','Закрыта')])
    created_at = models.DateTimeField(auto_now_add=True)


class Proposal(models.Model):
    procurement = models.ForeignKey(Procurement,on_delete=models.CASCADE,related_name='proposals')
    company = models.ForeignKey(Company,on_delete=models.PROTECT)
    unit_price = models.DecimalField(max_digits=14,decimal_places=2)
    delivery = models.DecimalField(max_digits=14,decimal_places=2)
    days = models.PositiveIntegerField()
    terms = models.TextField()
    accepted = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        constraints = [models.UniqueConstraint(fields=['procurement','company'],name='unique_company_proposal'),models.UniqueConstraint(fields=['procurement'],condition=models.Q(accepted=True),name='one_selected_proposal')]


class BusinessNotification(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    message = models.CharField(max_length=300)
    read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)


class SavedCompany(models.Model):
    buyer = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    company = models.ForeignKey(Company,on_delete=models.CASCADE)
    class Meta:
        constraints=[models.UniqueConstraint(fields=['buyer','company'],name='unique_saved_company')]

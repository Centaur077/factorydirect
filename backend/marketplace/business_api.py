"""RFQs and company workspaces. Django session + CSRF protected."""
from datetime import date
from decimal import Decimal, InvalidOperation
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.core.validators import URLValidator
from django.db import transaction, IntegrityError
from django.http import JsonResponse
from django.utils import timezone
from django.views.decorators.http import require_GET, require_POST
from .auth_api import read_json
from .models import Company, Membership, Procurement, Proposal, BusinessNotification, Category, SavedCompany


def text(data,key,limit=2000):
    value=data.get(key)
    if not isinstance(value,str) or not value.strip() or len(value.strip())>limit:raise ValueError('Заполните поле '+key)
    return value.strip()


def number(data,key,minimum=1,maximum=1000000):
    value=data.get(key)
    if type(value) is not int or not minimum<=value<=maximum:raise ValueError('Некорректное значение '+key)
    return value


def money(data,key,minimum):
    try:
        value=Decimal(str(data.get(key)))
        if not value.is_finite() or value<minimum or value>Decimal('1000000000') or value!=value.quantize(Decimal('.01')):raise ValueError('Некорректная сумма '+key)
        return value
    except (InvalidOperation,TypeError):raise ValueError('Некорректная сумма '+key)


def membership(user,edit=False,owner=False):
    m=Membership.objects.select_related('company').filter(user=user).first()
    if not m or (edit and m.role=='viewer') or (owner and m.role!='owner'):raise PermissionError('Недостаточно прав компании.')
    return m


def company_fields(data):
    role=text(data,'role',20)
    if role not in ('manufacturer','distributor','seller'):raise ValueError('Выберите роль компании.')
    website=data.get('website','').strip()
    if website:
        if len(website)>200:raise ValueError('Слишком длинный адрес сайта.')
        URLValidator(schemes=['http','https'])(website)
    return dict(name=text(data,'name',120),role=role,city=text(data,'city',100),website=website,description=text(data,'description'))


def proposal_payload(p):
    return dict(id=p.id,company=p.company.name,companyId=p.company_id,verified=p.company.verified,role=p.company.role,
                unitPrice=str(p.unit_price),delivery=str(p.delivery),total=str(p.unit_price*p.procurement.quantity+p.delivery),days=p.days,terms=p.terms,accepted=p.accepted)


@require_GET
def dashboard(request):
    if not request.user.is_authenticated:return JsonResponse({'error':'Войдите в аккаунт.'},status=401)
    m=Membership.objects.select_related('company').filter(user=request.user).first()
    own=Procurement.objects.filter(buyer=request.user)
    market=Procurement.objects.filter(status='open',deadline__gte=timezone.localdate()).exclude(buyer=request.user) if m else Procurement.objects.none()
    def pack(r,buyer):
        proposals=r.proposals.select_related('company','procurement')
        if not buyer:proposals=proposals.filter(company=m.company)
        result=dict(id=r.id,title=r.title,category=r.category.name_ru,categoryId=r.category_id,quantity=r.quantity,unit=r.unit,city=r.city,deadline=str(r.deadline),specifications=r.specifications,status=r.status,proposals=[proposal_payload(p) for p in proposals])
        if not buyer and proposals.filter(accepted=True).exists():result['buyerEmail']=r.buyer.email
        return result
    won=Procurement.objects.filter(proposals__company=m.company).exclude(id__in=market.values('id')) if m else Procurement.objects.none()
    company=None
    if m:
        c=m.company
        company=dict(id=c.id,name=c.name,role=c.role,city=c.city,website=c.website,description=c.description,verified=c.verified,myRole=m.role,members=list(c.memberships.values('user__email','role')))
    return JsonResponse(dict(saved=list(SavedCompany.objects.filter(buyer=request.user).values('company_id','company__name')),company=company,categories=list(Category.objects.values('id','name_ru')),mine=[pack(r,True) for r in own.order_by('-id')],market=[pack(r,False) for r in market.order_by('-id')],responses=[pack(r,False) for r in won.order_by('-id')],notifications=list(BusinessNotification.objects.filter(user=request.user).order_by('-id').values('id','message','read')[:30])))


@require_POST
def action(request,action):
    if not request.user.is_authenticated:return JsonResponse({'error':'Войдите в аккаунт.'},status=401)
    data=read_json(request)
    if data is None:return JsonResponse({'error':'Некорректный JSON.'},status=400)
    try:
        with transaction.atomic():
            if action=='company':
                fields=company_fields(data)
                m=Membership.objects.filter(user=request.user).first()
                if m:
                    m=membership(request.user,owner=True)
                    for key,value in fields.items():setattr(m.company,key,value)
                    m.company.verified=False;m.company.save()
                else:
                    c=Company.objects.create(**fields);Membership.objects.create(company=c,user=request.user,role='owner')
            elif action=='member':
                m=membership(request.user,owner=True)
                role=text(data,'role',16)
                if role not in ('manager','viewer'):raise ValueError('Можно добавить менеджера или наблюдателя.')
                user=get_user_model().objects.filter(email__iexact=text(data,'email',160)).first()
                if not user:raise ValueError('Сотрудник должен сначала зарегистрироваться на сайте.')
                if Membership.objects.filter(user=user).exists():raise ValueError('Пользователь уже состоит в компании.')
                Membership.objects.create(company=m.company,user=user,role=role)
                BusinessNotification.objects.create(user=user,message='Вас добавили в компанию '+m.company.name)
            elif action=='rfq':
                deadline=date.fromisoformat(text(data,'deadline',10))
                if deadline<timezone.localdate():raise ValueError('Срок не может быть в прошлом.')
                category=Category.objects.get(id=number(data,'category'))
                Procurement.objects.create(buyer=request.user,title=text(data,'title',160),category=category,quantity=number(data,'quantity'),unit=text(data,'unit',30),city=text(data,'city',100),deadline=deadline,specifications=text(data,'specifications',5000))
            elif action=='proposal':
                m=membership(request.user,edit=True)
                r=Procurement.objects.select_for_update().get(id=number(data,'requestId'))
                if r.buyer_id==request.user.id:raise ValueError('Нельзя ответить на собственный запрос.')
                if r.status!='open' or r.deadline<timezone.localdate():raise ValueError('Приём предложений завершён.')
                fields=dict(unit_price=money(data,'unitPrice',Decimal('.01')),delivery=money(data,'delivery',Decimal('0')),days=number(data,'days',1,365),terms=text(data,'terms',3000))
                Proposal.objects.update_or_create(procurement=r,company=m.company,defaults=fields)
                BusinessNotification.objects.create(user=r.buyer,message=f'Предложение от {m.company.name[:100]} по запросу №{r.id}')
            elif action=='accept':
                p=Proposal.objects.select_related('procurement','company').get(id=number(data,'proposalId'))
                r=Procurement.objects.select_for_update().get(id=p.procurement_id)
                if r.buyer_id!=request.user.id:raise PermissionError('Это не ваш запрос.')
                if r.status!='open':raise ValueError('Предложение уже выбрано или запрос закрыт.')
                p.accepted=True;p.save();r.status='selected';r.save()
                BusinessNotification.objects.bulk_create([BusinessNotification(user=x.user,message=f'Ваше предложение по запросу №{r.id} выбрано. Контакт покупателя доступен в кабинете.') for x in p.company.memberships.select_related('user')])
            elif action=='close':
                r=Procurement.objects.select_for_update().get(id=number(data,'requestId'))
                if r.buyer_id!=request.user.id:raise PermissionError('Это не ваш запрос.')
                r.status='closed';r.save()
            elif action=='save':
                company=Company.objects.get(id=number(data,'companyId'))
                saved,created=SavedCompany.objects.get_or_create(buyer=request.user,company=company)
                if not created:saved.delete()
            elif action=='read':BusinessNotification.objects.filter(user=request.user).update(read=True)
            else:return JsonResponse({'error':'Неизвестное действие.'},status=404)
        return JsonResponse({'ok':True})
    except PermissionError as e:return JsonResponse({'error':str(e)},status=403)
    except (Procurement.DoesNotExist,Proposal.DoesNotExist,Category.DoesNotExist,Company.DoesNotExist):return JsonResponse({'error':'Запись не найдена.'},status=404)
    except (ValueError,ValidationError,IntegrityError,AttributeError) as e:return JsonResponse({'error':str(e) if isinstance(e,ValueError) else 'Проверьте данные: запись уже существует или поля заполнены неверно.'},status=400)

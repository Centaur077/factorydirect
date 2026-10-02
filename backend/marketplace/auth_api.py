"""Buyer accounts: registration, sign-in with e-mail and password, profile.

Uses Django sessions (HttpOnly cookie) and CSRF protection; the frontend sends the csrftoken
cookie back in the X-CSRFToken header.
"""
import json
import re
from datetime import timedelta

from django.contrib.auth import authenticate, get_user_model, login, logout
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.db import transaction
from django.http import JsonResponse
from django.utils import timezone
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_GET, require_POST

from .models import BuyerProfile, LoginThrottle

MAX_FAILURES = 5
LOCK_TIME = timedelta(minutes=15)


def read_json(request):
    try:
        data = json.loads(request.body or b'{}')
    except ValueError:
        return None
    return data if isinstance(data, dict) else None


def user_payload(user):
    if not user.is_authenticated:
        return None
    profile = BuyerProfile.objects.filter(user=user).first()
    return {
        'email': user.email or user.username,
        'company': profile.company if profile else '',
        'bin': profile.bin if profile else '',
        'contactPerson': profile.contact_person if profile else '',
        'phone': profile.phone if profile else '',
    }


def clean_profile(data):
    """Returns (fields, error_code) for company details shared by registration and profile edits."""
    fields = {key: str(data.get(key) or '').strip() for key in ('company', 'bin', 'contactPerson', 'phone')}
    if not fields['company'] or not fields['contactPerson'] or not fields['phone']:
        return None, 'missing_fields'
    if fields['bin'] and not re.fullmatch(r'\d{12}', fields['bin']):
        return None, 'invalid_bin'
    if len(re.sub(r'\D', '', fields['phone'])) < 10:
        return None, 'invalid_phone'
    return fields, None


def error(code, status=400, **extra):
    return JsonResponse({'error': code, **extra}, status=status)


@ensure_csrf_cookie
@require_GET
def me(request):
    return JsonResponse({'user': user_payload(request.user)})


@require_POST
def register(request):
    data = read_json(request)
    if data is None:
        return error('invalid_json')
    email = str(data.get('email') or '').strip().lower()
    password = str(data.get('password') or '')
    try:
        validate_email(email)
    except ValidationError:
        return error('invalid_email')
    fields, code = clean_profile(data)
    if code:
        return error(code)
    User = get_user_model()
    if User.objects.filter(username__iexact=email).exists():
        return error('email_taken')
    candidate = User(username=email, email=email)
    try:
        validate_password(password, candidate)
    except ValidationError as exc:
        return error('weak_password', messages=list(exc.messages))

    with transaction.atomic():
        candidate.set_password(password)
        candidate.save()
        BuyerProfile.objects.create(user=candidate, company=fields['company'], bin=fields['bin'],
                                    contact_person=fields['contactPerson'], phone=fields['phone'])
    login(request, candidate, backend='django.contrib.auth.backends.ModelBackend')
    return JsonResponse({'user': user_payload(candidate)}, status=201)


@require_POST
def sign_in(request):
    data = read_json(request)
    if data is None:
        return error('invalid_json')
    email = str(data.get('email') or '').strip().lower()
    throttle, _ = LoginThrottle.objects.get_or_create(email=email[:254])
    now = timezone.now()
    if throttle.locked_until and throttle.locked_until > now:
        return error('too_many_attempts', status=429)

    user = authenticate(request, username=email, password=str(data.get('password') or ''))
    if user is None:
        throttle.failures += 1
        if throttle.failures >= MAX_FAILURES:
            throttle.failures, throttle.locked_until = 0, now + LOCK_TIME
        throttle.save()
        return error('invalid_credentials')

    throttle.delete()
    login(request, user)
    return JsonResponse({'user': user_payload(user)})


@require_POST
def sign_out(request):
    logout(request)
    return JsonResponse({'user': None})


@require_POST
def profile(request):
    if not request.user.is_authenticated:
        return error('auth_required', status=401)
    data = read_json(request)
    if data is None:
        return error('invalid_json')
    fields, code = clean_profile(data)
    if code:
        return error(code)
    BuyerProfile.objects.update_or_create(user=request.user, defaults={
        'company': fields['company'], 'bin': fields['bin'], 'contact_person': fields['contactPerson'], 'phone': fields['phone'],
    })
    return JsonResponse({'user': user_payload(request.user)})

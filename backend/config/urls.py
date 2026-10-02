from django.contrib import admin
from django.urls import path

from marketplace import api, auth_api, business_api

# The site itself (frontend/index.html and its assets) is served at "/" by WhiteNoise, see settings.py.
urlpatterns = [
    path('api/business/', business_api.dashboard),
    path('api/business/<str:action>/', business_api.action),
    path('admin/', admin.site.urls),
    path('api/catalog/', api.catalog, name='api-catalog'),
    path('api/orders/', api.orders, name='api-orders'),
    path('api/auth/me/', auth_api.me, name='api-me'),
    path('api/auth/register/', auth_api.register, name='api-register'),
    path('api/auth/login/', auth_api.sign_in, name='api-login'),
    path('api/auth/logout/', auth_api.sign_out, name='api-logout'),
    path('api/auth/profile/', auth_api.profile, name='api-profile'),
]

#!/bin/sh
# Prepares the database and static files, then starts the web server.
set -e

python backend/manage.py migrate --noinput
python backend/manage.py collectstatic --noinput --verbosity 0
python backend/manage.py seed_demo --if-empty

if [ -n "$DJANGO_SUPERUSER_PASSWORD" ]; then
    if python backend/manage.py shell -c "from django.contrib.auth import get_user_model; import os, sys; sys.exit(get_user_model().objects.filter(username=os.environ.get('DJANGO_SUPERUSER_USERNAME', 'admin')).exists())"; then
        python backend/manage.py createsuperuser --noinput
    fi
else
    echo "DJANGO_SUPERUSER_PASSWORD is not set: no admin user created. Set it in .env or run:"
    echo "  docker compose exec web python backend/manage.py createsuperuser"
fi

exec "$@"

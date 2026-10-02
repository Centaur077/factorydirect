FROM python:3.14-slim

COPY --from=ghcr.io/astral-sh/uv:0.8.5 /uv /usr/local/bin/uv

ENV PYTHONUNBUFFERED=1 \
    UV_COMPILE_BYTECODE=1 \
    UV_LINK_MODE=copy \
    UV_PROJECT_ENVIRONMENT=/opt/venv \
    PATH=/opt/venv/bin:$PATH

WORKDIR /app

# Dependencies first, so code changes do not reinstall them.
COPY pyproject.toml uv.lock ./
RUN uv sync --frozen --no-install-project

COPY backend backend
COPY frontend frontend
COPY docker/entrypoint.sh /entrypoint.sh

RUN useradd --create-home app && mkdir -p backend/staticfiles && chown -R app /app
USER app

EXPOSE 8000
ENTRYPOINT ["/entrypoint.sh"]
CMD ["gunicorn", "--chdir", "backend", "config.wsgi:application", "--bind", "0.0.0.0:8000", "--workers", "3", "--access-logfile", "-"]

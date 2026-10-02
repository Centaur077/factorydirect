# FactoryDirect — Hackathon MVP

B2B marketplace prototype for connecting buyers directly with manufacturers in Kazakhstan: a Django backend with an admin panel and PostgreSQL, and a vanilla JS single-page frontend.

## Закупки для покупателей и компаний

Откройте `/business.html` (кнопка «Закупки») после входа через `/#/login`. Покупатель создаёт запрос, компания предлагает цену и доставку, покупатель сравнивает ответы и выбирает предложение. Есть роли сотрудников, избранные компании, повтор закупки и внутренние уведомления. Платежи не подключены. Подробности и ограничения: [BUSINESS_UPDATE.md](BUSINESS_UPDATE.md).

Графитовый дизайн с янтарными акцентами: [DESIGN_UPDATE.md](DESIGN_UPDATE.md).

## Pages

The frontend is a single-page app with hash routes (no build step). It loads all catalog data from the backend API:

| Route | Page |
|---|---|
| `#/` | Landing: hero, best offer, popular products, top manufacturers |
| `#/catalog?q=&cat=&sort=` | Catalog with search, category filter and sorting (filters are kept in the URL) |
| `#/product/<id>` | Product: price tiers, supplier comparison and order calculator |
| `#/manufacturers` | All manufacturers and the 2GIS map |
| `#/manufacturer/<id>` | Manufacturer profile and products |
| `#/smart-match?product=&qty=&city=&priority=` | Smart Match supplier ranking |
| `#/cart` | Cart → company details → request summary |

Old one-page links (`#catalog`, `#product=coffee`, `#maker=alatau`) redirect to the new routes.

## What is included

- RU / KZ / EN interface
- Light / dark theme with saved preference
- Responsive catalog with categories, search, sorting and wholesale price tiers
- Manufacturer profiles with MOQ, rating, dispatch time and product categories
- Interactive 2GIS map (MapGL) with manufacturer markers; falls back to a self-contained schematic map when no key is set
- **Smart Match** demo engine that ranks suppliers by landed price, delivery speed, rating or a balanced score
- Plain-language helper that tries to parse product, quantity, city and priority from a purchase request
- Supplier comparison table
- B2B quote / logistics calculator with volume discounts, delivery modes and estimated ETA
- Persistent cart stored in `localStorage`, with goods / delivery breakdown per line
- Checkout step with company details (name, optional 12-digit BIN, contact) and a request summary grouped by manufacturer
- Buyer delivery city selected once in the hero and reused across Smart Match, comparison, calculator and quick add
- Minimum-order transparency: suppliers below MOQ are shown with a one-click "quote for MOQ" action
- Shareable links for every page, product and manufacturer (`#/product/coffee`, `#/manufacturer/alatau`)
- Mobile navigation and accessibility improvements (focus moves to the page heading on navigation, skip link)

## Important demo note

All supplier names, prices, ratings, quantities and logistics values in this repository are illustrative hackathon data. They are not live market offers and are not a public offer.

## Run with Docker (recommended)

Only [Docker](https://www.docker.com/products/docker-desktop/) is needed.

```bash
cp .env.example .env        # set DJANGO_SECRET_KEY and DJANGO_SUPERUSER_PASSWORD
docker compose up --build
```

- Site: http://localhost:8000
- Admin: http://localhost:8000/admin/ (login `admin`, password from `.env`)

On the first start the container applies migrations, loads the demo catalog and creates the admin user. Data lives in the `pgdata` Docker volume, so admin edits and orders survive restarts; `docker compose down -v` deletes them. Use `WEB_PORT=8080 docker compose up` if port 8000 is busy.

## Run locally without Docker

Requirements: [uv](https://docs.astral.sh/uv/) and PostgreSQL 14+.

```bash
cp .env.example .env            # then set DJANGO_SECRET_KEY and DJANGO_SUPERUSER_PASSWORD
createdb factorydirect
uv sync
uv run python backend/manage.py migrate
uv run python backend/manage.py seed_demo                  # demo cities, manufacturers, products, prices
uv run python backend/manage.py createsuperuser --noinput  # admin user from .env
uv run python backend/manage.py runserver
```

- Site: http://localhost:8000
- Admin: http://localhost:8000/admin/ (login and password are in `.env`)
- Tests: `uv run python backend/manage.py test marketplace`

`seed_demo` can be re-run at any time; it resets the demo catalog to its original values but keeps orders.

## Admin

Everything shown on the site is edited in the admin and appears on the site after a page reload:

- **Товары** — names (RU/KZ/EN), description, retail price, category, icon, visibility; supplier offers are listed inside each product.
- **Предложения (цены)** — which manufacturer sells which product, base price and volume price tiers.
- **Производители** — city, rating, minimum order, dispatch time, categories, description, visibility.
- **Города** — names and coordinates for the 2GIS map, plus distances used for delivery.
- **Категории** and **Тарифы доставки** (city delivery, per-km rate, express multiplier, ETA).
- **Заявки** — requests created from the site cart with company details, items and totals; the status is editable in the list.

Orders are priced on the server from the database, never from numbers sent by the browser.

## API

| Endpoint | Purpose |
|---|---|
| `GET /api/catalog/` | Cities, distances, categories, manufacturers, products with offers and tiers, delivery tariffs |
| `GET /api/orders/` | The signed-in buyer's orders with items and status |
| `POST /api/orders/` | Creates an order from the cart (sign-in required) and returns its number and totals |
| `GET /api/auth/me/` | Current buyer (or `null`); also sets the CSRF cookie |
| `POST /api/auth/register/`, `/login/`, `/logout/`, `/profile/` | Buyer registration, sign-in, sign-out, company details |

## Buyer accounts

- Buyers sign up with e-mail and password (`#/login`) and see their company details and requests with status in `#/account`.
- Placing a request requires signing in; the checkout form is prefilled from the company profile.
- Sessions use Django's HttpOnly session cookie; every changing request carries the CSRF token.
- After 5 wrong passwords, sign-in for that e-mail is locked for 15 minutes.
- In the admin, **Пользователи** shows each buyer's company and requests; request status changes are visible to the buyer.

## 2GIS map key

1. Get a free key at https://platform.2gis.ru (MapGL JS API).
2. Paste it into `GIS_KEY` in `frontend/script.js`.
3. In the 2GIS platform, restrict the key to your domains (`localhost` and your GitHub Pages domain) — the key is visible in client-side code by design.

Without a key the site shows the built-in schematic map.

## Deployment

GitHub Pages can only host static files, and the site now needs the Django backend for its data, so it has to run on a server with Python and PostgreSQL (for example Render, Railway or a VPS). For production set `DJANGO_DEBUG=0`, a real `DJANGO_SECRET_KEY`, `DJANGO_ALLOWED_HOSTS` and `DATABASE_URL`, and run `uv run python backend/manage.py collectstatic`.

## Project structure

```text
factorydirect/
├── frontend/              # index.html, script.js, style.css, favicon.svg (served at / by Django + WhiteNoise)
├── backend/
│   ├── manage.py
│   ├── config/            # settings, urls
│   └── marketplace/       # models, admin, api.py, pricing.py, tests, seed_demo command, demo fixture
├── pyproject.toml         # Python dependencies (uv)
└── .env.example
```

## Demo flow for judges

1. Switch RU → KZ → EN and toggle dark mode.
2. Search for **Coffee** on the landing page — you land on the catalog with the query in the URL.
3. Open the product page: show price tiers, the supplier comparison and the calculator (Standard → Express changes delivery / ETA).
4. Open **Smart Match** and use: `нужно 30 кг кофе в Алматы, важнее цена`.
5. Open **Manufacturers**, click a city on the 2GIS map and open a manufacturer profile.
6. Add the quote to the cart, fill in company details and create the demo purchase request.

## Technical note

The Smart Match module is intentionally transparent: it is a local rule/scoring prototype, not a claim of a production ML model or external AI service. A future version can replace the local parser and scoring layer with a real recommendation model or LLM-backed procurement agent.

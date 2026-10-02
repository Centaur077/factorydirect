# FactoryDirect — improvements from the original MVP

## Product / UX
- Added RU / KZ / EN interface and persisted language choice.
- Added light / dark mode and persisted theme choice.
- Rebuilt the catalog with categories, search, sorting, wholesale tiers and product details.
- Added 12 demo manufacturer profiles with MOQ, rating, dispatch time, city and categories.
- Added a self-contained schematic Kazakhstan map with clickable cities and manufacturer drill-down.
- Added Smart Match supplier ranking by landed price, speed, rating or balanced priority.
- Added plain-language purchase parsing for product, quantity, city and priority.
- Added a supplier comparison table with landed-cost calculation.
- Added a B2B purchase calculator with Standard / Express / Pickup delivery.
- Rebuilt the cart so quantities, supplier, destination and delivery mode are preserved.
- Added persistent cart storage with `localStorage`.
- Added product and manufacturer modals, mobile navigation and keyboard-friendly modal closing.

## Data / pricing
- Replaced single random-looking prices with B2B price tiers by quantity.
- Added retail reference values only as an illustrative comparison.
- Added delivery cost and ETA logic based on demo inter-city distance values.
- Added clear disclaimers: supplier names, prices, ratings and logistics are demo data.

## GitHub Pages readiness
- No framework or build step.
- No npm install required.
- Relative links only.
- `.nojekyll` included.
- README includes exact GitHub Pages deployment steps and a short judge demo flow.

## Frontend polish
- Hero offer card is now calculated by the same pricing engine as the calculator, so its numbers always match.
- Checkout flow: cart → company details form with validation → success screen with request summary per manufacturer.
- Smart Match summary uses the product unit (kg, pcs…) instead of generic "units".
- Suppliers below the minimum order are shown (not hidden) in Smart Match and the comparison table, with a "quote for MOQ" button; the calculator explains when it raises the quantity to the minimum.
- Global buyer delivery city, persisted and applied to all calculators and quick add.
- Cart counter shows line items; cart lines show delivery mode, cost and ETA plus goods / delivery subtotals.
- Catalog "from" price is the lowest volume tier.
- Deep links for product and manufacturer modals, plus "Copy link".
- Modal focus trap and focus return.
- Favicon and Open Graph meta tags.
- Category-coloured product visuals.

## Multi-page structure
- Landing page split into routed pages: landing, catalog, product, manufacturers, manufacturer, Smart Match, cart, 404.
- Product and manufacturer modals became pages; supplier comparison and the calculator moved to the product page.
- Catalog filters, Smart Match parameters, products and manufacturers all have shareable URLs; browser Back works.
- Old one-page anchors and `#product=` / `#maker=` links redirect to the new routes.
- 2GIS map (MapGL) on the manufacturers page, with a schematic fallback when the key is missing or invalid.

## Django backend and admin
- Django 5.2 backend with PostgreSQL; the site is served by Django (WhiteNoise) from `frontend/`.
- Admin panel for products, offers and price tiers, manufacturers, cities and distances, categories, delivery tariffs and orders.
- `GET /api/catalog/` replaces the data that used to be hardcoded in `script.js`; `seed_demo` loads the original demo data.
- Checkout sends orders to `POST /api/orders/`; the server validates and prices them and stores a price snapshot per item.
- Home metrics and map coverage are calculated from the database.

## Docker
- `docker compose up --build` starts PostgreSQL 16 and the site (gunicorn + WhiteNoise); migrations, demo data and the admin user are set up automatically.
- `seed_demo --if-empty` keeps admin edits on restarts.

## Buyer accounts
- Registration and sign-in with e-mail and password, account page with company details and request history with statuses.
- Requests can only be placed after sign-in and are linked to the buyer; CSRF protection enabled for all API writes.
- Sign-in lockout after 5 failed attempts for 15 minutes.

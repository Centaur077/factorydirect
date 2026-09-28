# Обновление дизайна и функций — 28 сентября 2026

- Новый зелёно-молочный интерфейс и восемь локальных иллюстраций.
- Избранное с сохранением, категории и счётчик результатов.
- Паспорт источника с явным статусом отсутствия подтверждения.
- Экспорт корзины в CSV.
- Исправлен учёт минимальной партии в карточках, сравнении и калькуляторе.
- Добавлено удержание фокуса в диалогах и возврат к исходной кнопке.
- Обновлены README и инструкции для запуска.

Проверено в браузере: поиск, категории, сохранение избранного, паспорт, корзина, CSV, RU/KZ/EN, минимальная партия, самовывоз. Визуально проверены ширины 1440 и 390 px; на 390 px горизонтального переполнения нет. Ошибок JavaScript в консоли при проверке не обнаружено.

---

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

'use strict';

const I18N = {
  ru: {
    pageTitle:'FactoryDirect — напрямую от производителя', skip:'Перейти к содержимому', languageLabel:'Язык', cart:'Корзина',
    navCatalog:'Каталог', navManufacturers:'Производители', navMap:'Карта', navSmart:'Smart Match', navDelivery:'Расчёт',
    heroBadge:'B2B marketplace для Казахстана', heroTitle1:'Покупай напрямую.', heroTitle2:'Сравнивай честно.', heroText:'FactoryDirect помогает бизнесу находить локальных производителей, сравнивать оптовые условия и считать доставку в одном месте.',
    heroSearchPlaceholder:'Например: кофе, футболки, вода…', find:'Найти', trySmart:'Попробовать Smart Match', seeManufacturers:'Смотреть производителей',
    trust1:'Проверенные профили в демо', trust2:'Оптовые уровни цены', trust3:'Расчёт логистики', bestOffer:'ЛУЧШЕЕ ПРЕДЛОЖЕНИЕ', heroOfferProduct:'Кофе в зернах · 30 кг', verified:'проверен', wholesalePrice:'Оптовая цена', deliveryTo:'Доставка в Алматы', estimatedSaving:'Ориентировочная экономия', buyer:'Покупатель', findBest:'Найти лучшее предложение', demoDataNote:'Данные и цены в прототипе демонстрационные.',
    metricManufacturers:'производителей в демо', metricRegions:'городов и регионов', metricLanguages:'языка интерфейса', metricFlow:'единый B2B-процесс',
    catalogEyebrow:'КАТАЛОГ', catalogTitle:'Товары напрямую от производителей', catalogSubtitle:'Цена автоматически меняется в зависимости от объёма заказа — как в настоящем B2B.', catalogSearchPlaceholder:'Поиск товара или производителя', nothingFound:'Ничего не найдено', nothingFoundText:'Измени запрос или выбери другую категорию.',
    manufacturersEyebrow:'ПРОИЗВОДИТЕЛИ', manufacturersTitle:'Знай, у кого покупаешь', manufacturersSubtitle:'Профиль поставщика показывает город, категории, минимальный заказ, рейтинг и скорость отгрузки.', showAll:'Показать всех', showLess:'Показать меньше',
    mapEyebrow:'ГЕОГРАФИЯ', mapTitle:'Производители на карте Казахстана', mapSubtitle:'Нажми на точку, чтобы увидеть поставщика и его категорию. Координаты в демо привязаны к городам, а не к точным адресам.', mapLegend:'демо-производитель', coverage:'ПОКРЫТИЕ', coverageTitle:'8 ключевых городов', coverageText:'Алматы, Астана, Караганда, Шымкент, Атырау, Павлодар, Костанай и Усть-Каменогорск.',
    smartEyebrow:'SMART MATCH', smartTitle:'Подбери поставщика под задачу, а не просто по цене', smartSubtitle:'Демо-алгоритм учитывает оптовую цену, минимальный заказ, расстояние, рейтинг и скорость отгрузки. Это локальный прототип без внешнего AI API.', smartFeature1:'мгновенный скоринг', smartFeature2:'учёт доставки', smartFeature3:'оптовые скидки', smartQueryLabel:'Опиши закупку обычным текстом', smartPlaceholder:'Например: нужно 30 кг кофе в Алматы, важнее цена', smartHint:'Можно написать товар, количество, город и приоритет — мы попробуем заполнить поля автоматически.', product:'Товар', quantity:'Количество', destination:'Город доставки', priority:'Приоритет', runSmart:'Подобрать лучшие предложения',
    compareEyebrow:'СРАВНЕНИЕ', compareTitle:'Сравни поставщиков в одной таблице', compareSubtitle:'Выбери товар и город — таблица пересчитает итоговую стоимость закупки с доставкой.',
    calculatorEyebrow:'КАЛЬКУЛЯТОР', calculatorTitle:'Посчитай закупку до оформления заказа', calculatorSubtitle:'Увидишь цену товара, объёмную скидку, доставку, ориентировочный срок и сравнение с розницей.', supplier:'Поставщик', deliveryMode:'Способ доставки', estimate:'ПРЕДВАРИТЕЛЬНЫЙ РАСЧЁТ', totalOrder:'Итог заказа', goodsSubtotal:'Товар', volumeDiscount:'Оптовая скидка', delivery:'Доставка', eta:'Срок', vsRetail:'Экономия против ориентировочной розницы', addCalculated:'Добавить расчёт в корзину', calcDisclaimer:'Расчёт демонстрационный и не является публичной офертой.',
    workflowEyebrow:'СЦЕНАРИЙ', workflowTitle:'Один понятный путь от поиска до заказа', step1Title:'Найди товар', step1Text:'Каталог и фильтры помогают быстро сузить выбор.', step2Title:'Получи Smart Match', step2Text:'Система ранжирует поставщиков по твоему приоритету.', step3Title:'Сравни итог', step3Text:'Цена товара и логистика видны до оформления.', step4Title:'Отправь запрос', step4Text:'Корзина собирает закупку и формирует демо-заявку.',
    finalTitle:'Локальные производители ближе, чем кажется.', finalText:'Следующий этап — реальные кабинеты поставщиков, остатки, документы, безопасная сделка и интеграция с логистическими сервисами.', footerPitch:'B2B marketplace prototype · Kazakhstan · 2026', demoProject:'Демонстрационный проект', demoProjectText:'Названия поставщиков, цены и рейтинги используются для демонстрации интерфейса.',
    yourOrder:'ВАША ЗАКУПКА', total:'Итого', sendRequest:'Отправить демо-заявку', checkoutNote:'Оплата не проводится — это прототип для демонстрации.',
    allCategories:'Все категории', food:'Еда и напитки', clothing:'Одежда', home:'Для дома', tech:'Электроника', packaging:'Упаковка', construction:'Стройматериалы', sortRecommended:'По рекомендации', sortPriceLow:'Сначала дешевле', sortSaving:'По экономии',
    directPrice:'ПРЯМАЯ ЦЕНА', from:'от', retail:'розница', moq:'MOQ', details:'Подробнее', add:'Добавить', perUnit:'за ед.', priceFromQty:'Цена от объёма', city:'Город', rating:'Рейтинг', dispatch:'Отгрузка', minOrder:'Мин. заказ', viewProfile:'Профиль',
    priorityPrice:'Минимальная цена', prioritySpeed:'Быстрая доставка', priorityRating:'Высокий рейтинг', priorityBalanced:'Баланс', standardDelivery:'Стандарт', expressDelivery:'Экспресс', pickupDelivery:'Самовывоз',
    smartFound:'Подобрали {count} предложения для «{product}» · {qty} ед. · {city}.', match:'совпадение', goods:'товар', deliveryShort:'доставка', totalCost:'итого', reasonPrice:'лучший итог по цене', reasonSpeed:'быстрее доставка', reasonRating:'высокий рейтинг', reasonBalanced:'сбалансированное предложение', addOffer:'В корзину', supplierProfile:'Поставщик',
    tableSupplier:'Поставщик', tableUnit:'Цена/ед.', tableMOQ:'MOQ', tableDelivery:'Доставка', tableETA:'Срок', tableRating:'Рейтинг', tableTotal:'Итого', tableBest:'Лучшее', noSupplier:'Нет поставщиков под выбранное количество.',
    days:'дн.', day:'день', items:'поз.', remove:'Удалить', emptyCart:'Корзина пока пуста.', requestSent:'Демо-заявка {id} сформирована. В реальном продукте она уйдёт выбранным производителям.', addedToCart:'Добавлено в корзину', invalidQty:'Укажи количество не меньше минимального заказа.',
    lightMode:'Включить светлую тему', darkMode:'Включить тёмную тему',
    tierFrom:'От количества', tierPrice:'Цена за ед.', tierSaving:'Скидка', description:'Описание', productOffers:'Товары производителя', demoManufacturer:'Демо-производитель', verifiedProfile:'Профиль проверен в демо',
    parsed:'Поля заполнены по тексту. Проверь значения и запусти подбор.', parseFailed:'Не всё удалось распознать — заполни недостающие поля вручную.'
  },
  kk: {
    pageTitle:'FactoryDirect — өндірушіден тікелей', skip:'Мазмұнға өту', languageLabel:'Тіл', cart:'Себет',
    navCatalog:'Каталог', navManufacturers:'Өндірушілер', navMap:'Карта', navSmart:'Smart Match', navDelivery:'Есептеу',
    heroBadge:'Қазақстанға арналған B2B marketplace', heroTitle1:'Тікелей сатып ал.', heroTitle2:'Әділ салыстыр.', heroText:'FactoryDirect бизнеске жергілікті өндірушілерді табуға, көтерме шарттарды салыстыруға және жеткізуді бір жерде есептеуге көмектеседі.',
    heroSearchPlaceholder:'Мысалы: кофе, футболка, су…', find:'Табу', trySmart:'Smart Match қолданып көру', seeManufacturers:'Өндірушілерді көру',
    trust1:'Демода тексерілген профильдер', trust2:'Көтерме баға деңгейлері', trust3:'Логистика есебі', bestOffer:'ЕҢ ТИІМДІ ҰСЫНЫС', heroOfferProduct:'Кофе дәндері · 30 кг', verified:'тексерілген', wholesalePrice:'Көтерме баға', deliveryTo:'Алматыға жеткізу', estimatedSaving:'Болжамды үнем', buyer:'Сатып алушы', findBest:'Ең тиімді ұсынысты табу', demoDataNote:'Прототиптегі деректер мен бағалар демонстрациялық.',
    metricManufacturers:'демо өндіруші', metricRegions:'қала мен өңір', metricLanguages:'интерфейс тілі', metricFlow:'бір B2B процесс',
    catalogEyebrow:'КАТАЛОГ', catalogTitle:'Өндірушілерден тікелей тауарлар', catalogSubtitle:'Баға тапсырыс көлеміне қарай өзгереді — нағыз B2B сияқты.', catalogSearchPlaceholder:'Тауар немесе өндіруші іздеу', nothingFound:'Ештеңе табылмады', nothingFoundText:'Сұрауды өзгертіңіз немесе басқа санатты таңдаңыз.',
    manufacturersEyebrow:'ӨНДІРУШІЛЕР', manufacturersTitle:'Кімнен сатып алатыныңды біл', manufacturersSubtitle:'Жеткізуші профилінде қала, санаттар, ең аз тапсырыс, рейтинг және жөнелту жылдамдығы көрсетіледі.', showAll:'Барлығын көрсету', showLess:'Аз көрсету',
    mapEyebrow:'ГЕОГРАФИЯ', mapTitle:'Қазақстан картасындағы өндірушілер', mapSubtitle:'Жеткізуші мен санатын көру үшін нүктені басыңыз. Демода координаттар нақты мекенжайға емес, қалаға байланған.', mapLegend:'демо өндіруші', coverage:'ҚАМТУ', coverageTitle:'8 негізгі қала', coverageText:'Алматы, Астана, Қарағанды, Шымкент, Атырау, Павлодар, Қостанай және Өскемен.',
    smartEyebrow:'SMART MATCH', smartTitle:'Жеткізушіні тек бағаға емес, міндетке сай таңда', smartSubtitle:'Демо-алгоритм көтерме бағаны, ең аз тапсырысты, қашықтықты, рейтингті және жөнелту жылдамдығын ескереді. Бұл сыртқы AI API-сыз жергілікті прототип.', smartFeature1:'жылдам скоринг', smartFeature2:'жеткізуді есепке алу', smartFeature3:'көтерме жеңілдіктер', smartQueryLabel:'Сатып алуды қарапайым мәтінмен сипатта', smartPlaceholder:'Мысалы: Алматыға 30 кг кофе керек, баға маңызды', smartHint:'Тауарды, санын, қаланы және басымдықты жазыңыз — өрістерді автоматты толтыруға тырысамыз.', product:'Тауар', quantity:'Саны', destination:'Жеткізу қаласы', priority:'Басымдық', runSmart:'Ең жақсы ұсыныстарды таңдау',
    compareEyebrow:'САЛЫСТЫРУ', compareTitle:'Жеткізушілерді бір кестеде салыстыр', compareSubtitle:'Тауар мен қаланы таңдаңыз — кесте жеткізумен бірге жалпы құнын қайта есептейді.',
    calculatorEyebrow:'КАЛЬКУЛЯТОР', calculatorTitle:'Тапсырысқа дейін сатып алуды есепте', calculatorSubtitle:'Тауар бағасын, көлемдік жеңілдікті, жеткізуді, мерзімді және бөлшек бағамен салыстыруды көріңіз.', supplier:'Жеткізуші', deliveryMode:'Жеткізу тәсілі', estimate:'АЛДЫН АЛА ЕСЕП', totalOrder:'Тапсырыс сомасы', goodsSubtotal:'Тауар', volumeDiscount:'Көтерме жеңілдік', delivery:'Жеткізу', eta:'Мерзім', vsRetail:'Болжамды бөлшек бағамен салыстырғандағы үнем', addCalculated:'Есепті себетке қосу', calcDisclaimer:'Есеп демонстрациялық және жария оферта емес.',
    workflowEyebrow:'СЦЕНАРИЙ', workflowTitle:'Іздеуден тапсырысқа дейін бір түсінікті жол', step1Title:'Тауарды тап', step1Text:'Каталог пен сүзгілер таңдауды тез тарылтады.', step2Title:'Smart Match ал', step2Text:'Жүйе жеткізушілерді сіздің басымдығыңыз бойынша ранжирлейді.', step3Title:'Нәтижені салыстыр', step3Text:'Тауар мен логистика бағасы рәсімдеуге дейін көрінеді.', step4Title:'Сұраныс жібер', step4Text:'Себет сатып алуды жинап, демо-сұраныс жасайды.',
    finalTitle:'Жергілікті өндірушілер ойлағаннан да жақын.', finalText:'Келесі кезең — нақты жеткізуші кабинеттері, қалдықтар, құжаттар, қауіпсіз мәміле және логистика сервистерімен интеграция.', footerPitch:'B2B marketplace prototype · Kazakhstan · 2026', demoProject:'Демонстрациялық жоба', demoProjectText:'Жеткізушілер атауы, бағалар мен рейтингтер интерфейсті көрсету үшін қолданылады.',
    yourOrder:'САТЫП АЛУ', total:'Барлығы', sendRequest:'Демо-сұраныс жіберу', checkoutNote:'Төлем жүргізілмейді — бұл демонстрациялық прототип.',
    allCategories:'Барлық санаттар', food:'Азық-түлік және сусын', clothing:'Киім', home:'Үйге арналған', tech:'Электроника', packaging:'Қаптама', construction:'Құрылыс материалдары', sortRecommended:'Ұсыныс бойынша', sortPriceLow:'Арзаннан бастап', sortSaving:'Үнем бойынша',
    directPrice:'ТІКЕЛЕЙ БАҒА', from:'бастап', retail:'бөлшек', moq:'MOQ', details:'Толығырақ', add:'Қосу', perUnit:'бірлікке', priceFromQty:'Көлемге сай баға', city:'Қала', rating:'Рейтинг', dispatch:'Жөнелту', minOrder:'Мин. тапсырыс', viewProfile:'Профиль',
    priorityPrice:'Ең төмен баға', prioritySpeed:'Жылдам жеткізу', priorityRating:'Жоғары рейтинг', priorityBalanced:'Баланс', standardDelivery:'Стандарт', expressDelivery:'Экспресс', pickupDelivery:'Өзі алып кету',
    smartFound:'«{product}» үшін {count} ұсыныс табылды · {qty} бірлік · {city}.', match:'сәйкестік', goods:'тауар', deliveryShort:'жеткізу', totalCost:'барлығы', reasonPrice:'жалпы бағасы ең тиімді', reasonSpeed:'жеткізуі жылдамырақ', reasonRating:'рейтингі жоғары', reasonBalanced:'теңгерімді ұсыныс', addOffer:'Себетке', supplierProfile:'Жеткізуші',
    tableSupplier:'Жеткізуші', tableUnit:'Баға/бірлік', tableMOQ:'MOQ', tableDelivery:'Жеткізу', tableETA:'Мерзім', tableRating:'Рейтинг', tableTotal:'Барлығы', tableBest:'Үздік', noSupplier:'Таңдалған санға сай жеткізуші жоқ.',
    days:'күн', day:'күн', items:'поз.', remove:'Жою', emptyCart:'Себет әзірше бос.', requestSent:'{id} демо-сұранысы жасалды. Нақты өнімде ол таңдалған өндірушілерге жіберіледі.', addedToCart:'Себетке қосылды', invalidQty:'Саны ең аз тапсырыстан кем болмауы керек.',
    lightMode:'Жарық режимді қосу', darkMode:'Қараңғы режимді қосу', tierFrom:'Саны', tierPrice:'Бірлік бағасы', tierSaving:'Жеңілдік', description:'Сипаттама', productOffers:'Өндіруші тауарлары', demoManufacturer:'Демо өндіруші', verifiedProfile:'Демода профиль тексерілген',
    parsed:'Өрістер мәтін бойынша толтырылды. Мәндерді тексеріп, таңдауды іске қосыңыз.', parseFailed:'Барлығын тану мүмкін болмады — қалған өрістерді қолмен толтырыңыз.'
  },
  en: {
    pageTitle:'FactoryDirect — buy direct from manufacturers', skip:'Skip to content', languageLabel:'Language', cart:'Cart',
    navCatalog:'Catalog', navManufacturers:'Manufacturers', navMap:'Map', navSmart:'Smart Match', navDelivery:'Calculator',
    heroBadge:'B2B marketplace for Kazakhstan', heroTitle1:'Buy direct.', heroTitle2:'Compare fairly.', heroText:'FactoryDirect helps businesses discover local manufacturers, compare wholesale terms, and estimate delivery in one place.',
    heroSearchPlaceholder:'For example: coffee, T-shirts, water…', find:'Find', trySmart:'Try Smart Match', seeManufacturers:'View manufacturers',
    trust1:'Verified demo profiles', trust2:'Wholesale price tiers', trust3:'Logistics estimate', bestOffer:'BEST OFFER', heroOfferProduct:'Coffee beans · 30 kg', verified:'verified', wholesalePrice:'Wholesale price', deliveryTo:'Delivery to Almaty', estimatedSaving:'Estimated savings', buyer:'Buyer', findBest:'Find the best offer', demoDataNote:'Data and prices in this prototype are illustrative.',
    metricManufacturers:'demo manufacturers', metricRegions:'cities and regions', metricLanguages:'interface languages', metricFlow:'end-to-end B2B flow',
    catalogEyebrow:'CATALOG', catalogTitle:'Products directly from manufacturers', catalogSubtitle:'Price changes automatically with order volume — just like real B2B purchasing.', catalogSearchPlaceholder:'Search products or manufacturers', nothingFound:'Nothing found', nothingFoundText:'Change the query or choose another category.',
    manufacturersEyebrow:'MANUFACTURERS', manufacturersTitle:'Know who you buy from', manufacturersSubtitle:'Supplier profiles show city, categories, minimum order, rating, and dispatch speed.', showAll:'Show all', showLess:'Show less',
    mapEyebrow:'GEOGRAPHY', mapTitle:'Manufacturers across Kazakhstan', mapSubtitle:'Click a marker to see the supplier and category. Demo coordinates are pinned to cities, not exact addresses.', mapLegend:'demo manufacturer', coverage:'COVERAGE', coverageTitle:'8 key cities', coverageText:'Almaty, Astana, Karaganda, Shymkent, Atyrau, Pavlodar, Kostanay and Oskemen.',
    smartEyebrow:'SMART MATCH', smartTitle:'Match a supplier to the job, not just the sticker price', smartSubtitle:'The demo algorithm considers wholesale price, MOQ, distance, rating, and dispatch speed. It runs locally without an external AI API.', smartFeature1:'instant scoring', smartFeature2:'delivery-aware', smartFeature3:'volume discounts', smartQueryLabel:'Describe your purchase in plain language', smartPlaceholder:'Example: need 30 kg of coffee in Almaty, price matters most', smartHint:'Mention the product, quantity, city, and priority — we will try to prefill the fields.', product:'Product', quantity:'Quantity', destination:'Delivery city', priority:'Priority', runSmart:'Find the best offers',
    compareEyebrow:'COMPARE', compareTitle:'Compare suppliers in one table', compareSubtitle:'Choose a product and city — the table recalculates total landed cost.',
    calculatorEyebrow:'CALCULATOR', calculatorTitle:'Estimate your purchase before ordering', calculatorSubtitle:'See product price, volume discount, delivery, ETA, and an estimated retail comparison.', supplier:'Supplier', deliveryMode:'Delivery mode', estimate:'ESTIMATED QUOTE', totalOrder:'Order total', goodsSubtotal:'Goods', volumeDiscount:'Volume discount', delivery:'Delivery', eta:'ETA', vsRetail:'Estimated savings vs retail', addCalculated:'Add quote to cart', calcDisclaimer:'Illustrative quote only; not a public offer.',
    workflowEyebrow:'FLOW', workflowTitle:'One clear journey from search to purchase request', step1Title:'Find a product', step1Text:'Catalog and filters narrow the choice quickly.', step2Title:'Get Smart Match', step2Text:'The system ranks suppliers by your priority.', step3Title:'Compare landed cost', step3Text:'Product and logistics costs are visible before checkout.', step4Title:'Send a request', step4Text:'The cart builds a purchase and creates a demo RFQ.',
    finalTitle:'Local manufacturers are closer than they look.', finalText:'Next: real supplier dashboards, live inventory, documents, safe transactions, and logistics integrations.', footerPitch:'B2B marketplace prototype · Kazakhstan · 2026', demoProject:'Demo project', demoProjectText:'Supplier names, prices, and ratings are illustrative UI data.',
    yourOrder:'YOUR PURCHASE', total:'Total', sendRequest:'Send demo request', checkoutNote:'No payment is processed — this is a demonstration prototype.',
    allCategories:'All categories', food:'Food & drinks', clothing:'Clothing', home:'Home', tech:'Electronics', packaging:'Packaging', construction:'Construction', sortRecommended:'Recommended', sortPriceLow:'Lowest price', sortSaving:'Biggest saving',
    directPrice:'DIRECT PRICE', from:'from', retail:'retail', moq:'MOQ', details:'Details', add:'Add', perUnit:'per unit', priceFromQty:'Volume pricing', city:'City', rating:'Rating', dispatch:'Dispatch', minOrder:'Min. order', viewProfile:'Profile',
    priorityPrice:'Lowest total price', prioritySpeed:'Fast delivery', priorityRating:'High rating', priorityBalanced:'Balanced', standardDelivery:'Standard', expressDelivery:'Express', pickupDelivery:'Pickup',
    smartFound:'Found {count} offers for “{product}” · {qty} units · {city}.', match:'match', goods:'goods', deliveryShort:'delivery', totalCost:'total', reasonPrice:'best landed price', reasonSpeed:'faster delivery', reasonRating:'higher supplier rating', reasonBalanced:'balanced offer', addOffer:'Add to cart', supplierProfile:'Supplier',
    tableSupplier:'Supplier', tableUnit:'Unit price', tableMOQ:'MOQ', tableDelivery:'Delivery', tableETA:'ETA', tableRating:'Rating', tableTotal:'Total', tableBest:'Best', noSupplier:'No supplier fits the selected quantity.',
    days:'days', day:'day', items:'items', remove:'Remove', emptyCart:'Your cart is empty.', requestSent:'Demo request {id} has been created. In the real product it would be sent to selected manufacturers.', addedToCart:'Added to cart', invalidQty:'Quantity must meet the supplier minimum order.',
    lightMode:'Switch to light mode', darkMode:'Switch to dark mode', tierFrom:'From quantity', tierPrice:'Unit price', tierSaving:'Discount', description:'Description', productOffers:'Manufacturer products', demoManufacturer:'Demo manufacturer', verifiedProfile:'Profile verified in demo',
    parsed:'Fields were prefilled from your text. Review them and run the match.', parseFailed:'We could not detect everything — fill in the remaining fields manually.'
  }
};

const CITIES = {
  almaty:{ru:'Алматы',kk:'Алматы',en:'Almaty',lat:43.2389,lng:76.8897},
  astana:{ru:'Астана',kk:'Астана',en:'Astana',lat:51.1694,lng:71.4491},
  karaganda:{ru:'Караганда',kk:'Қарағанды',en:'Karaganda',lat:49.8064,lng:73.0855},
  shymkent:{ru:'Шымкент',kk:'Шымкент',en:'Shymkent',lat:42.3417,lng:69.5901},
  atyrau:{ru:'Атырау',kk:'Атырау',en:'Atyrau',lat:47.0945,lng:51.9238},
  pavlodar:{ru:'Павлодар',kk:'Павлодар',en:'Pavlodar',lat:52.2873,lng:76.9674},
  kostanay:{ru:'Костанай',kk:'Қостанай',en:'Kostanay',lat:53.2144,lng:63.6246},
  oskemen:{ru:'Усть-Каменогорск',kk:'Өскемен',en:'Oskemen',lat:49.9483,lng:82.6285}
};

const MANUFACTURERS = [
  {id:'aqua',name:'Aqua Factory',initials:'AF',city:'almaty',rating:4.8,dispatch:1,minOrder:24,categories:['food'],description:{ru:'Производитель питьевой воды и безалкогольных напитков для розницы и HoReCa.',kk:'Бөлшек сауда мен HoReCa үшін ауыз су және алкогольсіз сусын өндірушісі.',en:'Producer of drinking water and soft drinks for retail and HoReCa.'}},
  {id:'alatau',name:'Alatau Coffee',initials:'AC',city:'almaty',rating:4.9,dispatch:2,minOrder:10,categories:['food'],description:{ru:'Обжарка кофе небольшими партиями, B2B-поставки для кофеен и офисов.',kk:'Кофені шағын партиямен қуыру, кофеханалар мен кеңселерге B2B жеткізу.',en:'Small-batch coffee roasting with B2B supply for cafés and offices.'}},
  {id:'textile',name:'Textile KZ',initials:'TK',city:'shymkent',rating:4.7,dispatch:3,minOrder:50,categories:['clothing'],description:{ru:'Базовая одежда и корпоративный текстиль с возможностью брендирования.',kk:'Брендтеу мүмкіндігі бар базалық киім және корпоративтік тоқыма.',en:'Basic apparel and corporate textiles with branding options.'}},
  {id:'sweet',name:'Sweet Factory',initials:'SF',city:'karaganda',rating:4.6,dispatch:2,minOrder:40,categories:['food'],description:{ru:'Шоколад и кондитерские изделия для магазинов, кофеен и корпоративных наборов.',kk:'Дүкендерге, кофеханаларға және корпоративтік жиынтықтарға арналған шоколад пен кондитерлік өнімдер.',en:'Chocolate and confectionery for stores, cafés, and corporate gift sets.'}},
  {id:'clean',name:'CleanPro',initials:'CP',city:'astana',rating:4.8,dispatch:2,minOrder:20,categories:['home'],description:{ru:'Бытовая химия и профессиональные средства для клининга и HoReCa.',kk:'Клининг пен HoReCa үшін тұрмыстық химия және кәсіби құралдар.',en:'Household and professional cleaning products for cleaning companies and HoReCa.'}},
  {id:'tech',name:'TechFactory',initials:'TF',city:'astana',rating:4.5,dispatch:4,minOrder:10,categories:['tech'],description:{ru:'Потребительская электроника и аксессуары под локальные B2B-заказы.',kk:'Жергілікті B2B тапсырыстарға арналған электроника мен аксессуарлар.',en:'Consumer electronics and accessories for local B2B orders.'}},
  {id:'steppepack',name:'SteppePack',initials:'SP',city:'kostanay',rating:4.9,dispatch:2,minOrder:200,categories:['packaging'],description:{ru:'Картонная и бумажная упаковка для e-commerce, доставки еды и производства.',kk:'E-commerce, тағам жеткізу және өндіріс үшін картон және қағаз қаптама.',en:'Cardboard and paper packaging for e-commerce, food delivery, and manufacturing.'}},
  {id:'pavlodarmet',name:'Pavlodar Metal',initials:'PM',city:'pavlodar',rating:4.7,dispatch:4,minOrder:20,categories:['construction'],description:{ru:'Металлопрокат и базовые строительные профили для малого и среднего бизнеса.',kk:'Шағын және орта бизнеске арналған металл прокаты және құрылыс профильдері.',en:'Rolled metal and basic construction profiles for SMEs.'}},
  {id:'atyrauchem',name:'Atyrau Home Lab',initials:'AH',city:'atyrau',rating:4.6,dispatch:3,minOrder:30,categories:['home'],description:{ru:'Средства для ухода за домом, концентраты и private-label партии.',kk:'Үйге күтім жасау құралдары, концентраттар және private-label партиялары.',en:'Home-care products, concentrates, and private-label batches.'}},
  {id:'eastfoods',name:'East Foods',initials:'EF',city:'oskemen',rating:4.8,dispatch:3,minOrder:25,categories:['food'],description:{ru:'Снэки, крупы и сухие продукты для магазинов и корпоративного питания.',kk:'Дүкендер мен корпоративтік тамақтануға арналған снектер, жармалар және құрғақ өнімдер.',en:'Snacks, grains, and dry foods for stores and corporate catering.'}},
  {id:'nomadwear',name:'Nomad Wear',initials:'NW',city:'almaty',rating:4.9,dispatch:4,minOrder:30,categories:['clothing'],description:{ru:'Мерч и базовая одежда для брендов, мероприятий и корпоративных команд.',kk:'Брендтерге, іс-шараларға және корпоративтік командаларға арналған мерч пен базалық киім.',en:'Merch and basic apparel for brands, events, and corporate teams.'}},
  {id:'shymkentpack',name:'Ontustik Packaging',initials:'OP',city:'shymkent',rating:4.5,dispatch:2,minOrder:150,categories:['packaging'],description:{ru:'Пищевая и транспортная упаковка для локальных производителей.',kk:'Жергілікті өндірушілерге арналған тағамдық және тасымалдау қаптамасы.',en:'Food and transport packaging for local manufacturers.'}}
];

const PRODUCTS = [
  {id:'water',icon:'💧',category:'food',name:{ru:'Питьевая вода 1,5 л',kk:'Ауыз суы 1,5 л',en:'Drinking water 1.5 L'},unit:{ru:'бутылка',kk:'бөтелке',en:'bottle'},retail:320,offers:[
    {maker:'aqua',base:245,tiers:[[24,245],[120,228],[480,210]]},
    {maker:'eastfoods',base:258,tiers:[[25,258],[100,240],[400,220]]}
  ]},
  {id:'coffee',icon:'☕',category:'food',name:{ru:'Кофе в зернах 1 кг',kk:'Дәнді кофе 1 кг',en:'Coffee beans 1 kg'},unit:{ru:'кг',kk:'кг',en:'kg'},retail:7900,offers:[
    {maker:'alatau',base:6500,tiers:[[10,6500],[30,5850],[80,5450]]},
    {maker:'eastfoods',base:6800,tiers:[[25,6800],[50,6200],[100,5900]]}
  ]},
  {id:'tshirt',icon:'👕',category:'clothing',name:{ru:'Хлопковая футболка',kk:'Мақта футболкасы',en:'Cotton T-shirt'},unit:{ru:'шт.',kk:'дана',en:'pcs'},retail:6200,offers:[
    {maker:'textile',base:3900,tiers:[[50,3900],[100,3550],[300,3200]]},
    {maker:'nomadwear',base:4300,tiers:[[30,4300],[100,3800],[250,3450]]}
  ]},
  {id:'chocolate',icon:'🍫',category:'food',name:{ru:'Шоколад 90 г',kk:'Шоколад 90 г',en:'Chocolate 90 g'},unit:{ru:'плитка',kk:'плитка',en:'bar'},retail:720,offers:[
    {maker:'sweet',base:515,tiers:[[40,515],[120,470],[500,430]]},
    {maker:'eastfoods',base:540,tiers:[[50,540],[150,490],[500,448]]}
  ]},
  {id:'cleaner',icon:'🧴',category:'home',name:{ru:'Средство для уборки 1 л',kk:'Тазалау құралы 1 л',en:'Household cleaner 1 L'},unit:{ru:'бутылка',kk:'бөтелке',en:'bottle'},retail:2600,offers:[
    {maker:'clean',base:1850,tiers:[[20,1850],[60,1690],[180,1510]]},
    {maker:'atyrauchem',base:1780,tiers:[[30,1780],[90,1600],[240,1460]]}
  ]},
  {id:'headphones',icon:'🎧',category:'tech',name:{ru:'Bluetooth-наушники',kk:'Bluetooth құлаққаптары',en:'Bluetooth headphones'},unit:{ru:'комплект',kk:'жиынтық',en:'set'},retail:12900,offers:[
    {maker:'tech',base:8900,tiers:[[10,8900],[30,8250],[80,7600]]}
  ]},
  {id:'box',icon:'📦',category:'packaging',name:{ru:'Коробка для доставки M',kk:'Жеткізу қорабы M',en:'Delivery box M'},unit:{ru:'шт.',kk:'дана',en:'pcs'},retail:410,offers:[
    {maker:'steppepack',base:250,tiers:[[200,250],[500,220],[1500,185]]},
    {maker:'shymkentpack',base:265,tiers:[[150,265],[600,215],[1800,178]]}
  ]},
  {id:'profile',icon:'🧱',category:'construction',name:{ru:'Металлический профиль 3 м',kk:'Металл профиль 3 м',en:'Metal profile 3 m'},unit:{ru:'шт.',kk:'дана',en:'pcs'},retail:3900,offers:[
    {maker:'pavlodarmet',base:3050,tiers:[[20,3050],[80,2810],[250,2550]]}
  ]}
];

const DISTANCE = {
  almaty:{almaty:25,astana:1210,karaganda:1000,shymkent:690,atyrau:2740,pavlodar:1450,kostanay:1900,oskemen:1040},
  astana:{almaty:1210,astana:25,karaganda:215,shymkent:1500,atyrau:1840,pavlodar:440,kostanay:710,oskemen:970},
  karaganda:{almaty:1000,astana:215,karaganda:25,shymkent:1220,atyrau:2010,pavlodar:620,kostanay:920,oskemen:900},
  shymkent:{almaty:690,astana:1500,karaganda:1220,shymkent:25,atyrau:2050,pavlodar:1730,kostanay:2080,oskemen:1490},
  atyrau:{almaty:2740,astana:1840,karaganda:2010,shymkent:2050,atyrau:25,pavlodar:2230,kostanay:1360,oskemen:3050},
  pavlodar:{almaty:1450,astana:440,karaganda:620,shymkent:1730,atyrau:2230,pavlodar:25,kostanay:900,oskemen:780},
  kostanay:{almaty:1900,astana:710,karaganda:920,shymkent:2080,atyrau:1360,pavlodar:900,kostanay:25,oskemen:1580},
  oskemen:{almaty:1040,astana:970,karaganda:900,shymkent:1490,atyrau:3050,pavlodar:780,kostanay:1580,oskemen:25}
};

let lang = localStorage.getItem('fd-language') || 'ru';
if (!I18N[lang]) lang = 'ru';
let cart = [];
try { cart = JSON.parse(localStorage.getItem('fd-cart-v2') || '[]'); if (!Array.isArray(cart)) cart=[]; } catch { cart=[]; }
let activeMapCity='almaty';
let showAllMakers=false;
let lastSmartMatches=[];

const localeMap={ru:'ru-RU',kk:'kk-KZ',en:'en-US'};
const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>[...root.querySelectorAll(s)];
const t = key => I18N[lang][key] ?? I18N.ru[key] ?? key;
const cityName = key => CITIES[key]?.[lang] || CITIES[key]?.ru || key;
const formatPrice = value => `${Math.round(value).toLocaleString(localeMap[lang])} ₸`;
const makerById = id => MANUFACTURERS.find(m=>m.id===id);
const productById = id => PRODUCTS.find(p=>p.id===id);

function applyI18n(){
  document.documentElement.lang = lang === 'kk' ? 'kk' : lang;
  document.title=t('pageTitle');
  $('#languageSelect').value=lang;
  $$('[data-i18n]').forEach(el=>{ if (I18N[lang][el.dataset.i18n]!==undefined) el.textContent=t(el.dataset.i18n); });
  $$('[data-i18n-placeholder]').forEach(el=>{ el.placeholder=t(el.dataset.i18nPlaceholder); });
  fillControls();
  renderProducts();
  renderManufacturers();
  renderCityChips();
  renderCompare();
  updateCalculatorSuppliers();
  calculateQuote();
  renderCart();
  updateThemeButton();
  renderMap();
  if (lastSmartMatches.length) renderSmartMatches(lastSmartMatches);
}

function initTheme(){
  const stored=localStorage.getItem('fd-theme');
  const preferred=window.matchMedia?.('(prefers-color-scheme: dark)').matches?'dark':'light';
  document.documentElement.dataset.theme=stored || preferred;
  updateThemeButton();
}
function updateThemeButton(){
  const dark=document.documentElement.dataset.theme==='dark';
  $('#themeToggle').textContent=dark?'☀️':'🌙';
  $('#themeToggle').title=$('#themeToggle').ariaLabel=dark?t('lightMode'):t('darkMode');
}
function toggleTheme(){
  const next=document.documentElement.dataset.theme==='dark'?'light':'dark';
  document.documentElement.dataset.theme=next;localStorage.setItem('fd-theme',next);updateThemeButton();
}

function fillControls(){
  const categoryOptions=[['all',t('allCategories')],['food',t('food')],['clothing',t('clothing')],['home',t('home')],['tech',t('tech')],['packaging',t('packaging')],['construction',t('construction')]];
  setSelect('#categoryFilter',categoryOptions,$('#categoryFilter').value||'all');
  setSelect('#sortFilter',[['recommended',t('sortRecommended')],['price',t('sortPriceLow')],['saving',t('sortSaving')]],$('#sortFilter').value||'recommended');
  const productOptions=PRODUCTS.map(p=>[p.id,p.name[lang]]);
  ['#smartProduct','#compareProduct','#calcProduct'].forEach((id,i)=>setSelect(id,productOptions,$(id).value || (i===0?'coffee':'coffee')));
  const cityOptions=Object.keys(CITIES).map(k=>[k,cityName(k)]);
  ['#smartCity','#compareCity','#calcCity'].forEach(id=>setSelect(id,cityOptions,$(id).value||'almaty'));
  setSelect('#smartPriority',[['balanced',t('priorityBalanced')],['price',t('priorityPrice')],['speed',t('prioritySpeed')],['rating',t('priorityRating')]],$('#smartPriority').value||'balanced');
  setSelect('#deliveryMode',[['standard',t('standardDelivery')],['express',t('expressDelivery')],['pickup',t('pickupDelivery')]],$('#deliveryMode').value||'standard');
}
function setSelect(selector,options,value){ const el=$(selector); if(!el)return; el.innerHTML=options.map(([v,l])=>`<option value="${v}">${escapeHtml(l)}</option>`).join(''); if(options.some(([v])=>v===value))el.value=value; }

function bestOfferForProduct(product,qty=1){
  const valid=product.offers.map(o=>offerCalc(product,o,Math.max(qty,makerById(o.maker).minOrder,o.tiers[0][0]),'almaty','standard')).sort((a,b)=>a.unitPrice-b.unitPrice);
  return valid[0];
}
function tierPrice(offer,qty){ let price=offer.base; for(const [min,p] of offer.tiers){ if(qty>=min) price=p; } return price; }
function offerCalc(product,offer,qty,destination,mode='standard'){
  const maker=makerById(offer.maker); const unitPrice=tierPrice(offer,qty); const baseUnit=offer.base;
  const goods=unitPrice*qty; const baseGoods=baseUnit*qty; const discount=Math.max(0,baseGoods-goods);
  const distance=DISTANCE[maker.city][destination] ?? 1000;
  const weightFactor = ['water','coffee','cleaner','profile'].includes(product.id) ? 1.15 : ['box','tshirt','chocolate'].includes(product.id) ? .7 : .4;
  let delivery=destination===maker.city ? 2500 : 3500 + distance*2.2 + qty*weightFactor*7;
  let eta=Math.max(1,Math.ceil(distance/650))+maker.dispatch;
  if(mode==='express'){delivery*=1.75;eta=Math.max(1,Math.ceil(eta*.62));}
  if(mode==='pickup'){delivery=0;eta=maker.dispatch;}
  delivery=Math.round(delivery/100)*100;
  const total=goods+delivery; const retail=product.retail*qty; const saving=retail-total;
  return {product,offer,maker,qty,destination,mode,unitPrice,goods,discount,delivery,total,eta,saving,retail,distance};
}

function renderProducts(){
  const q=($('#catalogSearch')?.value||'').trim().toLocaleLowerCase(localeMap[lang]); const cat=$('#categoryFilter')?.value||'all'; const sort=$('#sortFilter')?.value||'recommended';
  let rows=PRODUCTS.filter(p=>{
    const makerNames=p.offers.map(o=>makerById(o.maker).name).join(' '); const hay=`${p.name[lang]} ${makerNames}`.toLocaleLowerCase(localeMap[lang]);
    return (cat==='all'||p.category===cat) && hay.includes(q);
  }).map(p=>({p,best:bestOfferForProduct(p,1)}));
  if(sort==='price') rows.sort((a,b)=>a.best.unitPrice-b.best.unitPrice);
  if(sort==='saving') rows.sort((a,b)=>(b.p.retail-b.best.unitPrice)-(a.p.retail-a.best.unitPrice));
  const grid=$('#productGrid');
  grid.innerHTML=rows.map(({p,best})=>{
    const maker=best.maker; const saving=Math.round((1-best.unitPrice/p.retail)*100);
    return `<article class="product-card">
      <div class="product-visual"><span class="product-badge">${t('directPrice')}</span><span class="city-badge">${escapeHtml(cityName(maker.city))}</span>${p.icon}</div>
      <div class="product-body"><h3>${escapeHtml(p.name[lang])}</h3><div class="product-meta"><span>🏭 ${escapeHtml(maker.name)}</span><span>★ ${maker.rating}</span></div>
      <div class="product-price"><strong>${t('from')} ${formatPrice(best.unitPrice)}</strong><del>${formatPrice(p.retail)}</del></div>
      <div class="product-tier">−${saving}% · ${t('priceFromQty')}</div>
      <div class="product-actions"><button class="primary" type="button" onclick="quickAdd('${p.id}')">${t('add')}</button><button class="details-btn" type="button" onclick="openProduct('${p.id}')" title="${t('details')}">→</button></div></div>
    </article>`;
  }).join('');
  $('#catalogEmpty').classList.toggle('hidden',rows.length>0);
}

function renderManufacturers(){
  const list=showAllMakers?MANUFACTURERS:MANUFACTURERS.slice(0,6);
  $('#manufacturerGrid').innerHTML=list.map(m=>`<article class="manufacturer-card">
    <div class="maker-top"><div class="maker-logo">${m.initials}</div><div class="maker-main"><h3>${escapeHtml(m.name)} <span class="verified-icon">●</span></h3><p>📍 ${escapeHtml(cityName(m.city))}</p></div><div class="maker-rating">★ ${m.rating}</div></div>
    <p class="maker-description">${escapeHtml(m.description[lang])}</p>
    <div class="maker-stats"><div><strong>${m.minOrder}</strong><span>${t('minOrder')}</span></div><div><strong>${m.dispatch} ${m.dispatch===1?t('day'):t('days')}</strong><span>${t('dispatch')}</span></div><div><strong>✓</strong><span>${t('verified')}</span></div></div>
    <div class="maker-footer"><div class="category-tags">${m.categories.map(c=>`<span>${escapeHtml(t(c))}</span>`).join('')}</div><button class="text-btn" type="button" onclick="openManufacturer('${m.id}')">${t('viewProfile')} →</button></div>
  </article>`).join('');
  $('#showAllManufacturers').textContent=showAllMakers?t('showLess'):t('showAll');
}

function renderCityChips(){
  $('#cityChips').innerHTML=Object.keys(CITIES).map(k=>`<button type="button" onclick="focusCity('${k}')">${escapeHtml(cityName(k))}</button>`).join('');
}

const MAP_POSITIONS={almaty:[75.5,78],astana:[54,26],karaganda:[55,47],shymkent:[53,83],atyrau:[17,50],pavlodar:[71,25],kostanay:[41,17],oskemen:[86,40]};
function initMap(){ renderMap(); }
function renderMap(){
  const host=$('#map'); if(!host)return;
  const cityButtons=Object.keys(CITIES).map(key=>{
    const [x,y]=MAP_POSITIONS[key]; const makers=MANUFACTURERS.filter(m=>m.city===key); const active=key===activeMapCity?' active':'';
    return `<button class="city-marker${active}" style="left:${x}%;top:${y}%" type="button" onclick="focusCity('${key}')" title="${escapeHtml(cityName(key))}"><span>${makers.length}</span><b>${escapeHtml(cityName(key))}</b></button>`;
  }).join('');
  const makers=MANUFACTURERS.filter(m=>m.city===activeMapCity);
  const popup=`<div class="map-popover"><div class="map-popover-head"><div><span class="mini-label">${escapeHtml(cityName(activeMapCity))}</span><strong>${makers.length} ${t('metricManufacturers')}</strong></div><span>📍</span></div>${makers.map(m=>`<button type="button" onclick="openManufacturer('${m.id}')"><span class="map-maker-logo">${m.initials}</span><span><b>${escapeHtml(m.name)}</b><small>★ ${m.rating} · ${escapeHtml(m.categories.map(c=>t(c)).join(', '))}</small></span><i>→</i></button>`).join('')}</div>`;
  host.innerHTML=`<svg class="map-svg" viewBox="0 0 1000 520" role="img" aria-label="Kazakhstan schematic map"><path class="country-shadow" d="M90 236 L132 162 L246 142 L332 91 L443 70 L536 91 L632 72 L733 105 L840 128 L920 191 L884 260 L930 316 L848 351 L806 421 L704 442 L644 411 L558 462 L471 432 L398 451 L328 411 L247 422 L177 370 L119 330 Z"/><path class="country-shape" d="M90 230 L130 158 L245 138 L330 88 L445 67 L540 88 L635 68 L735 102 L842 124 L925 188 L888 258 L934 315 L850 355 L808 425 L705 447 L643 414 L558 467 L468 437 L397 456 L325 416 L244 427 L174 374 L115 332 Z"/><path class="country-river" d="M570 115 C610 170 598 215 640 260 C675 297 694 332 685 393"/></svg>${cityButtons}${popup}<div class="map-caption">${escapeHtml(t('mapSubtitle'))}</div>`;
}
function focusCity(key){ activeMapCity=key; renderMap(); }

function parseSmartText(){
  const text=$('#smartText').value.toLocaleLowerCase(localeMap[lang]); let hits=0;
  const productAliases={water:['вода','water','су '],coffee:['кофе','coffee'],tshirt:['футбол','t-shirt','tshirt','майка'],chocolate:['шокол','chocol'],cleaner:['уборк','clean','тазалау'],headphones:['науш','headphone','құлақ'],box:['короб','box','қорап'],profile:['профил','metal','металл']};
  for(const [id,aliases] of Object.entries(productAliases)){ if(aliases.some(a=>text.includes(a))){ $('#smartProduct').value=id;hits++;break; } }
  for(const key of Object.keys(CITIES)){ const aliases=[CITIES[key].ru.toLowerCase(),CITIES[key].kk.toLowerCase(),CITIES[key].en.toLowerCase()]; if(aliases.some(a=>text.includes(a))){$('#smartCity').value=key;hits++;break;} }
  const num=text.match(/\b(\d{1,5})\b/); if(num){$('#smartQty').value=Number(num[1]);hits++;}
  if(/цена|дешев|price|cheap|баға|арзан/.test(text)){$('#smartPriority').value='price';hits++;}
  else if(/быстр|сроч|fast|speed|жылдам/.test(text)){$('#smartPriority').value='speed';hits++;}
  else if(/рейтинг|надеж|rating|сенімді/.test(text)){$('#smartPriority').value='rating';hits++;}
  showToast(hits>=2?t('parsed'):t('parseFailed'));
}
function runSmartMatch(){
  const p=productById($('#smartProduct').value); const qty=Math.max(1,Number($('#smartQty').value)||1); const city=$('#smartCity').value; const priority=$('#smartPriority').value;
  const valid=p.offers.map(o=>offerCalc(p,o,qty,city,'standard')).filter(x=>qty>=x.maker.minOrder && qty>=x.offer.tiers[0][0]);
  const maxTotal=Math.max(...valid.map(x=>x.total),1), maxEta=Math.max(...valid.map(x=>x.eta),1);
  const ranked=valid.map(x=>{
    const priceScore=100-(x.total/maxTotal*45); const speedScore=100-(x.eta/maxEta*35); const ratingScore=x.maker.rating/5*100;
    let score; if(priority==='price') score=priceScore*.68+speedScore*.12+ratingScore*.2; else if(priority==='speed') score=priceScore*.25+speedScore*.55+ratingScore*.2; else if(priority==='rating') score=priceScore*.25+speedScore*.15+ratingScore*.6; else score=priceScore*.46+speedScore*.24+ratingScore*.30;
    return {...x,score:Math.max(50,Math.min(99,Math.round(score)))};
  }).sort((a,b)=>b.score-a.score);
  lastSmartMatches=ranked; renderSmartMatches(ranked,priority);
}
function renderSmartMatches(matches,priority=$('#smartPriority')?.value||'balanced'){
  const p=productById($('#smartProduct')?.value||matches[0]?.product?.id||'coffee'); const qty=Math.max(1,Number($('#smartQty')?.value)||matches[0]?.qty||1); const city=$('#smartCity')?.value||matches[0]?.destination||'almaty';
  if(!matches.length){$('#smartResult').innerHTML=`<div class="result-summary">${t('noSupplier')}</div>`;return;}
  const reasonKey={price:'reasonPrice',speed:'reasonSpeed',rating:'reasonRating',balanced:'reasonBalanced'}[priority]||'reasonBalanced';
  const summary=t('smartFound').replace('{count}',matches.length).replace('{product}',p.name[lang]).replace('{qty}',qty).replace('{city}',cityName(city));
  $('#smartResult').innerHTML=`<div class="result-summary">✨ ${escapeHtml(summary)}</div>`+matches.slice(0,3).map((x,i)=>`<div class="match-card ${i===0?'highlight-match':''}">
    <div class="match-rank">${i+1}</div><div class="match-main"><h4>${escapeHtml(x.maker.name)} · ${escapeHtml(cityName(x.maker.city))}</h4><p>${formatPrice(x.unitPrice)} / ${escapeHtml(p.unit[lang])} · ${t('deliveryShort')} ${formatPrice(x.delivery)} · ${x.eta} ${t('days')}</p></div><div class="match-score"><strong>${x.score}%</strong><span>${t('match')}</span></div>
    <div class="match-reason">✓ ${t(reasonKey)} · ★ ${x.maker.rating} · ${t('totalCost')}: <strong>${formatPrice(x.total)}</strong></div>
    <div class="match-actions"><button class="primary" type="button" onclick="addOfferToCart('${p.id}','${x.maker.id}',${qty},'${city}')">${t('addOffer')}</button><button class="secondary" type="button" onclick="openManufacturer('${x.maker.id}')">${t('supplierProfile')}</button></div>
  </div>`).join('');
}

function renderCompare(){
  const p=productById($('#compareProduct')?.value||'coffee'); const city=$('#compareCity')?.value||'almaty'; const qty=Math.max(1,Number($('#compareQty')?.value)||1);
  const rows=p.offers.map(o=>offerCalc(p,o,qty,city,'standard')).filter(x=>qty>=x.maker.minOrder && qty>=x.offer.tiers[0][0]).sort((a,b)=>a.total-b.total);
  $('#compareHead').innerHTML=`<tr><th>${t('tableSupplier')}</th><th>${t('tableUnit')}</th><th>${t('tableMOQ')}</th><th>${t('tableDelivery')}</th><th>${t('tableETA')}</th><th>${t('tableRating')}</th><th>${t('tableTotal')}</th></tr>`;
  $('#compareBody').innerHTML=rows.length?rows.map((x,i)=>`<tr class="${i===0?'best-row':''}"><td><div class="supplier-cell"><div class="mini-logo">${x.maker.initials}</div><div><strong>${escapeHtml(x.maker.name)}</strong><div class="muted">${escapeHtml(cityName(x.maker.city))}${i===0?` · <span class="green">${t('tableBest')}</span>`:''}</div></div></div></td><td>${formatPrice(x.unitPrice)}</td><td>${Math.max(x.maker.minOrder,x.offer.tiers[0][0])}</td><td>${formatPrice(x.delivery)}</td><td>${x.eta} ${t('days')}</td><td>★ ${x.maker.rating}</td><td><strong>${formatPrice(x.total)}</strong></td></tr>`).join(''):`<tr><td colspan="7" class="muted">${t('noSupplier')}</td></tr>`;
}

function updateCalculatorSuppliers(){
  const p=productById($('#calcProduct')?.value||'coffee'); const current=$('#calcSupplier')?.value;
  setSelect('#calcSupplier',p.offers.map(o=>[o.maker,makerById(o.maker).name]),p.offers.some(o=>o.maker===current)?current:p.offers[0].maker);
}
function calculateQuote(){
  const p=productById($('#calcProduct')?.value||'coffee'); const makerId=$('#calcSupplier')?.value||p.offers[0].maker; const offer=p.offers.find(o=>o.maker===makerId)||p.offers[0]; const maker=makerById(offer.maker); let qty=Math.max(1,Number($('#calcQty')?.value)||1); const city=$('#calcCity')?.value||'almaty'; const mode=$('#deliveryMode')?.value||'standard';
  const min=Math.max(maker.minOrder,offer.tiers[0][0]); if(qty<min) qty=min; $('#calcQty').min=min; $('#calcQty').value=qty;
  const x=offerCalc(p,offer,qty,city,mode);
  $('#calcTotal').textContent=formatPrice(x.total); $('#calcUnitPrice').textContent=`${formatPrice(x.unitPrice)} / ${p.unit[lang]}`; $('#calcGoods').textContent=formatPrice(x.goods); $('#calcDiscount').textContent=x.discount?`−${formatPrice(x.discount)}`:'0 ₸'; $('#calcDelivery').textContent=formatPrice(x.delivery); $('#calcEta').textContent=`${x.eta} ${x.eta===1?t('day'):t('days')}`; $('#calcSaving').textContent=x.saving>0?formatPrice(x.saving):'—'; $('#quoteBadge').textContent=mode==='express'?'EXPRESS':mode==='pickup'?'PICKUP':'B2B';
  $('#addCalculatedToCart').dataset.product=p.id; $('#addCalculatedToCart').dataset.maker=maker.id; $('#addCalculatedToCart').dataset.qty=qty; $('#addCalculatedToCart').dataset.city=city; $('#addCalculatedToCart').dataset.mode=mode;
}

function quickAdd(productId){
  const p=productById(productId); const best=p.offers.map(o=>({o,m:makerById(o.maker)})).sort((a,b)=>a.o.tiers[0][1]-b.o.tiers[0][1])[0]; const qty=Math.max(best.m.minOrder,best.o.tiers[0][0]); addOfferToCart(productId,best.m.id,qty,'almaty','standard');
}
function addOfferToCart(productId,makerId,qty,destination,mode='standard'){
  const p=productById(productId); const offer=p.offers.find(o=>o.maker===makerId); const maker=makerById(makerId); const min=Math.max(maker.minOrder,offer?.tiers?.[0]?.[0]||1); qty=Math.max(Number(qty)||1,min); if(!offer)return;
  const key=`${productId}|${makerId}|${destination}|${mode}`; const existing=cart.find(x=>x.key===key); if(existing) existing.qty+=qty; else cart.push({key,productId,makerId,qty,destination,mode}); saveCart(); renderCart(); showToast(`${t('addedToCart')}: ${p.name[lang]} × ${qty}`);
}
function saveCart(){localStorage.setItem('fd-cart-v2',JSON.stringify(cart));updateCartCount();}
function updateCartCount(){const qty=cart.reduce((s,x)=>s+x.qty,0);$('#cartCount').textContent=qty;}
function changeCartQty(key,delta){ const item=cart.find(x=>x.key===key); if(!item)return; const p=productById(item.productId); const offer=p.offers.find(o=>o.maker===item.makerId); const min=Math.max(makerById(item.makerId).minOrder,offer.tiers[0][0]); item.qty+=delta; if(item.qty<min){ if(delta<0)item.qty=min; } saveCart();renderCart(); }
function removeCartItem(key){cart=cart.filter(x=>x.key!==key);saveCart();renderCart();}
function renderCart(){
  updateCartCount(); const box=$('#cartItems'); if(!box)return; let total=0;
  if(!cart.length){box.innerHTML=`<div class="empty-state"><div>🛒</div><p>${t('emptyCart')}</p></div>`;$('#cartItemsCount').textContent=`0 ${t('items')}`;$('#cartTotal').textContent='0 ₸';return;}
  box.innerHTML=cart.map(item=>{ const p=productById(item.productId); const offer=p?.offers.find(o=>o.maker===item.makerId); if(!p||!offer)return''; const x=offerCalc(p,offer,item.qty,item.destination,item.mode); total+=x.total; return `<div class="cart-row"><div class="cart-item-main"><strong>${p.icon} ${escapeHtml(p.name[lang])}</strong><span>${escapeHtml(x.maker.name)} · ${escapeHtml(cityName(item.destination))} · ${formatPrice(x.unitPrice)}/${escapeHtml(p.unit[lang])}</span></div><div class="qty-stepper"><button type="button" onclick="changeCartQty('${escapeAttr(item.key)}',-1)">−</button><span>${item.qty}</span><button type="button" onclick="changeCartQty('${escapeAttr(item.key)}',1)">+</button></div><div class="cart-row-price">${formatPrice(x.total)}</div><button class="remove-btn" type="button" onclick="removeCartItem('${escapeAttr(item.key)}')" title="${t('remove')}">×</button></div>`; }).join('');
  $('#cartItemsCount').textContent=`${cart.length} ${t('items')}`;$('#cartTotal').textContent=formatPrice(total);
}

function openProduct(id){
  const p=productById(id); if(!p)return; const best=bestOfferForProduct(p,1);
  $('#productModalContent').innerHTML=`<div class="product-modal-hero"><div class="product-modal-icon">${p.icon}</div><div class="product-modal-info"><span class="mini-label">${t(p.category)}</span><h2 id="productModalTitle">${escapeHtml(p.name[lang])}</h2><p>${t('retail')}: ${formatPrice(p.retail)} · ${t('from')} ${formatPrice(best.unitPrice)} / ${escapeHtml(p.unit[lang])}</p><p>${t('description')}: ${productDescription(p.id)}</p></div></div><div class="tier-table"><div class="tier-row header"><span>${t('supplier')}</span><span>${t('tierFrom')}</span><span>${t('tierPrice')}</span></div>${p.offers.flatMap(o=>{const m=makerById(o.maker);return o.tiers.map(([q,price])=>`<div class="tier-row"><span>${escapeHtml(m.name)}</span><span>${q}+</span><strong>${formatPrice(price)}</strong></div>`)}).join('')}</div><div class="product-modal-actions"><button class="primary" type="button" onclick="quickAdd('${p.id}');closeModal('productModal')">${t('add')}</button><button class="secondary" type="button" onclick="document.getElementById('smartProduct').value='${p.id}';closeModal('productModal');document.getElementById('smartMatch').scrollIntoView({behavior:'smooth'})">✨ Smart Match</button></div>`;
  openModal('productModal');
}
function productDescription(id){
  const d={water:{ru:'B2B-поставка питьевой воды для офисов, магазинов и HoReCa.',kk:'Кеңселерге, дүкендерге және HoReCa үшін ауыз суды B2B жеткізу.',en:'B2B drinking-water supply for offices, stores, and HoReCa.'},coffee:{ru:'Зерновой кофе для кофеен, офисов и корпоративных закупок.',kk:'Кофеханаларға, кеңселерге және корпоративтік сатып алуға арналған дәнді кофе.',en:'Coffee beans for cafés, offices, and corporate purchasing.'},tshirt:{ru:'Базовая футболка для мерча, униформы и корпоративных заказов.',kk:'Мерч, форма және корпоративтік тапсырыстарға арналған базалық футболка.',en:'Basic T-shirt for merch, uniforms, and corporate orders.'},chocolate:{ru:'Классический шоколад для розницы, HoReCa и подарочных наборов.',kk:'Бөлшек саудаға, HoReCa және сыйлық жиынтықтарына арналған шоколад.',en:'Classic chocolate for retail, HoReCa, and gift sets.'},cleaner:{ru:'Концентрированное средство для офисов, клининга и HoReCa.',kk:'Кеңсе, клининг және HoReCa үшін концентратталған тазалау құралы.',en:'Concentrated cleaner for offices, cleaning services, and HoReCa.'},headphones:{ru:'Беспроводные наушники для корпоративных наборов и ресейла.',kk:'Корпоративтік жиынтықтар мен қайта сатуға арналған сымсыз құлаққап.',en:'Wireless headphones for corporate kits and resale.'},box:{ru:'Гофрокороб для e-commerce, доставки и складской упаковки.',kk:'E-commerce, жеткізу және қоймаға арналған гофроқорап.',en:'Corrugated box for e-commerce, delivery, and warehouse packing.'},profile:{ru:'Металлический профиль для базовых строительных и монтажных задач.',kk:'Құрылыс және монтаж жұмыстарына арналған металл профиль.',en:'Metal profile for basic construction and installation work.'}};return d[id]?.[lang]||'';
}
function openManufacturer(id){
  const m=makerById(id); if(!m)return; const ps=PRODUCTS.filter(p=>p.offers.some(o=>o.maker===id));
  $('#manufacturerModalContent').innerHTML=`<div class="manufacturer-profile-head"><div class="maker-logo">${m.initials}</div><div><span class="mini-label">${t('demoManufacturer')}</span><h2 id="manufacturerModalTitle">${escapeHtml(m.name)} <span class="verified-icon">●</span></h2><p class="muted">📍 ${escapeHtml(cityName(m.city))} · ${t('verifiedProfile')}</p></div></div><div class="profile-grid"><div><strong>★ ${m.rating}</strong><span>${t('rating')}</span></div><div><strong>${m.minOrder}</strong><span>${t('minOrder')}</span></div><div><strong>${m.dispatch} ${m.dispatch===1?t('day'):t('days')}</strong><span>${t('dispatch')}</span></div></div><p class="profile-description">${escapeHtml(m.description[lang])}</p><span class="mini-label">${t('productOffers')}</span><div class="profile-products">${ps.map(p=>`<button type="button" onclick="closeModal('manufacturerModal');openProduct('${p.id}')">${p.icon} ${escapeHtml(p.name[lang])}</button>`).join('')}</div>`;
  openModal('manufacturerModal');
}

function openModal(id){$('#'+id).classList.remove('hidden');document.body.style.overflow='hidden';setTimeout(()=>$('#'+id+' .modal-close')?.focus(),0);}
function closeModal(id){$('#'+id).classList.add('hidden');if($$('.modal:not(.hidden)').length===0)document.body.style.overflow='';}
function showToast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>el.classList.remove('show'),2500);}
function escapeHtml(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function escapeAttr(v){return String(v??'').replace(/'/g,'&#39;');}

function initReveal(){const nodes=$$('.reveal');if(!('IntersectionObserver'in window)){nodes.forEach(n=>n.classList.add('visible'));return;}const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}}),{threshold:.08});nodes.forEach(n=>io.observe(n));}

function bindEvents(){
  $('#languageSelect').addEventListener('change',e=>{lang=e.target.value;localStorage.setItem('fd-language',lang);applyI18n();});
  $('#themeToggle').addEventListener('click',toggleTheme);
  $('#mobileMenuButton').addEventListener('click',()=>{const n=$('#mainNav');const open=n.classList.toggle('open');$('#mobileMenuButton').setAttribute('aria-expanded',String(open));});
  $$('#mainNav a').forEach(a=>a.addEventListener('click',()=>$('#mainNav').classList.remove('open')));
  $('#heroSearchForm').addEventListener('submit',e=>{e.preventDefault();$('#catalogSearch').value=$('#heroSearch').value;renderProducts();$('#catalog').scrollIntoView({behavior:'smooth'});});
  $('#catalogSearch').addEventListener('input',renderProducts);$('#categoryFilter').addEventListener('change',renderProducts);$('#sortFilter').addEventListener('change',renderProducts);
  $('#showAllManufacturers').addEventListener('click',()=>{showAllMakers=!showAllMakers;renderManufacturers();});
  $('[data-jump-smart]').addEventListener('click',()=>$('#smartMatch').scrollIntoView({behavior:'smooth'}));
  $('#parseSmartText').addEventListener('click',parseSmartText);$('#runSmartMatch').addEventListener('click',runSmartMatch);
  ['#compareProduct','#compareCity','#compareQty'].forEach(id=>$(id).addEventListener('input',renderCompare));
  $('#calcProduct').addEventListener('change',()=>{updateCalculatorSuppliers();calculateQuote();});
  ['#calcSupplier','#calcQty','#calcCity','#deliveryMode'].forEach(id=>$(id).addEventListener('input',calculateQuote));
  $('#addCalculatedToCart').addEventListener('click',e=>{const d=e.currentTarget.dataset;addOfferToCart(d.product,d.maker,Number(d.qty),d.city,d.mode);});
  $$('[data-open-cart]').forEach(b=>b.addEventListener('click',()=>openModal('cartModal')));
  $('[data-close-cart]').addEventListener('click',()=>closeModal('cartModal'));$('[data-close-product]').addEventListener('click',()=>closeModal('productModal'));$('[data-close-manufacturer]').addEventListener('click',()=>closeModal('manufacturerModal'));
  ['cartModal','productModal','manufacturerModal'].forEach(id=>$('#'+id).addEventListener('click',e=>{if(e.target.id===id)closeModal(id);}));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')$$('.modal:not(.hidden)').forEach(m=>closeModal(m.id));});
  $('#checkoutButton').addEventListener('click',()=>{if(!cart.length){showToast(t('emptyCart'));return;}const id=`#FD-${Math.floor(1000+Math.random()*9000)}`;showToast(t('requestSent').replace('{id}',id));cart=[];saveCart();renderCart();setTimeout(()=>closeModal('cartModal'),700);});
}

function init(){initTheme();fillControls();bindEvents();applyI18n();updateCartCount();initReveal();setTimeout(initMap,100);setTimeout(runSmartMatch,180);}
document.addEventListener('DOMContentLoaded',init);

window.quickAdd=quickAdd;window.openProduct=openProduct;window.openManufacturer=openManufacturer;window.focusCity=focusCity;window.addOfferToCart=addOfferToCart;window.changeCartQty=changeCartQty;window.removeCartItem=removeCartItem;window.closeModal=closeModal;

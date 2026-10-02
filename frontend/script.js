'use strict';

const I18N = {
  ru: {
    pageTitle:'FactoryDirect — напрямую от производителя', skip:'Перейти к содержимому', languageLabel:'Язык', cart:'Корзина',
    navCatalog:'Каталог', navManufacturers:'Производители', navMap:'Карта', navSmart:'Smart Match', navDelivery:'Расчёт',
    heroBadge:'B2B marketplace для Казахстана', heroTitle1:'Ближе к источнику.', heroTitle2:'Больше возможностей.', heroText:'FactoryDirect помогает бизнесу находить локальных производителей, сравнивать оптовые условия и считать доставку в одном месте.',
    heroSearchPlaceholder:'Например: кофе, футболки, вода…', find:'Найти', trySmart:'Попробовать Smart Match', seeManufacturers:'Смотреть производителей',
    trust1:'Проверенные профили в демо', trust2:'Оптовые уровни цены', trust3:'Расчёт логистики', bestOffer:'ЛУЧШЕЕ ПРЕДЛОЖЕНИЕ', heroOfferProduct:'Кофе в зернах · 30 кг', verified:'проверен', wholesalePrice:'Оптовая цена', deliveryTo:'Доставка · {city}', estimatedSaving:'Ориентировочная экономия', buyer:'Покупатель', findBest:'Найти лучшее предложение', demoDataNote:'Данные и цены в прототипе демонстрационные.',
    metricManufacturers:'производителей в демо', metricRegions:'городов и регионов', metricLanguages:'языка интерфейса', metricFlow:'единый B2B-процесс',
    catalogEyebrow:'КАТАЛОГ', catalogTitle:'Товары напрямую от производителей', catalogSubtitle:'Цена автоматически меняется в зависимости от объёма заказа — как в настоящем B2B.', catalogSearchPlaceholder:'Поиск товара или производителя', nothingFound:'Ничего не найдено', nothingFoundText:'Измени запрос или выбери другую категорию.',
    manufacturersEyebrow:'ПРОИЗВОДИТЕЛИ', manufacturersTitle:'Знай, у кого покупаешь', manufacturersSubtitle:'Профиль поставщика показывает город, категории, минимальный заказ, рейтинг и скорость отгрузки.', showAll:'Показать всех', showLess:'Показать меньше',
    mapEyebrow:'ГЕОГРАФИЯ', mapTitle:'Производители на карте Казахстана', mapSubtitle:'Нажми на точку, чтобы увидеть поставщика и его категорию. Координаты в демо привязаны к городам, а не к точным адресам.', mapLegend:'демо-производитель', coverage:'ПОКРЫТИЕ', coverageTitle:'Городов с производителями: {n}', coverageText:'Алматы, Астана, Караганда, Шымкент, Атырау, Павлодар, Костанай и Усть-Каменогорск.',
    smartEyebrow:'SMART MATCH', smartTitle:'Подбери поставщика под задачу, а не просто по цене', smartSubtitle:'Демо-алгоритм учитывает оптовую цену, минимальный заказ, расстояние, рейтинг и скорость отгрузки. Это локальный прототип без внешнего AI API.', smartFeature1:'мгновенный скоринг', smartFeature2:'учёт доставки', smartFeature3:'оптовые скидки', smartQueryLabel:'Опиши закупку обычным текстом', smartPlaceholder:'Например: нужно 30 кг кофе в Алматы, важнее цена', smartHint:'Можно написать товар, количество, город и приоритет — мы попробуем заполнить поля автоматически.', product:'Товар', quantity:'Количество', destination:'Город доставки', priority:'Приоритет', runSmart:'Подобрать лучшие предложения',
    compareEyebrow:'СРАВНЕНИЕ', compareTitle:'Сравни поставщиков в одной таблице', compareSubtitle:'Выбери город и количество — таблица пересчитает итоговую стоимость закупки с доставкой.',
    calculatorEyebrow:'КАЛЬКУЛЯТОР', calculatorTitle:'Посчитай закупку до оформления заказа', calculatorSubtitle:'Увидишь цену товара, объёмную скидку, доставку, ориентировочный срок и сравнение с розницей.', supplier:'Поставщик', deliveryMode:'Способ доставки', estimate:'ПРЕДВАРИТЕЛЬНЫЙ РАСЧЁТ', totalOrder:'Итог заказа', goodsSubtotal:'Товар', volumeDiscount:'Оптовая скидка', delivery:'Доставка', eta:'Срок', vsRetail:'Экономия против ориентировочной розницы', addCalculated:'Добавить расчёт в корзину', calcDisclaimer:'Расчёт демонстрационный и не является публичной офертой.',
    workflowEyebrow:'СЦЕНАРИЙ', workflowTitle:'Один понятный путь от поиска до заказа', step1Title:'Найди товар', step1Text:'Каталог и фильтры помогают быстро сузить выбор.', step2Title:'Получи Smart Match', step2Text:'Система ранжирует поставщиков по твоему приоритету.', step3Title:'Сравни итог', step3Text:'Цена товара и логистика видны до оформления.', step4Title:'Отправь запрос', step4Text:'Корзина собирает закупку и формирует демо-заявку.',
    finalTitle:'Локальные производители ближе, чем кажется.', finalText:'Следующий этап — реальные кабинеты поставщиков, остатки, документы, безопасная сделка и интеграция с логистическими сервисами.', footerPitch:'B2B-маркетплейс: закупки напрямую у производителей Казахстана — с честным сравнением цен и доставки.', footerBuyers:'Покупателям', footerSuppliers:'Поставщики', footerCategories:'Категории', footerMap:'Карта производителей', footerMade:'Сделано в Казахстане 🇰🇿', demoProject:'Демонстрационный проект', demoProjectText:'Названия поставщиков, цены и рейтинги используются для демонстрации интерфейса.',
    yourOrder:'ВАША ЗАКУПКА', total:'Итого', sendRequest:'Отправить демо-заявку', checkoutNote:'Оплата не проводится — это прототип для демонстрации.',
    allCategories:'Все категории', food:'Еда и напитки', clothing:'Одежда', home:'Для дома', tech:'Электроника', packaging:'Упаковка', construction:'Стройматериалы', sortRecommended:'По рекомендации', sortPriceLow:'Сначала дешевле', sortSaving:'По экономии',
    directPrice:'ПРЯМАЯ ЦЕНА', from:'от', retail:'розница', moq:'MOQ', details:'Подробнее', add:'Добавить', perUnit:'за ед.', priceFromQty:'Цена от объёма', city:'Город', rating:'Рейтинг', dispatch:'Отгрузка', minOrder:'Мин. заказ', viewProfile:'Профиль',
    priorityPrice:'Минимальная цена', prioritySpeed:'Быстрая доставка', priorityRating:'Высокий рейтинг', priorityBalanced:'Баланс', standardDelivery:'Стандарт', expressDelivery:'Экспресс', pickupDelivery:'Самовывоз',
    smartFound:'Подобрано предложений: {count} — «{product}» · {qty} {unit} · {city}', match:'совпадение', goods:'товар', deliveryShort:'доставка', totalCost:'итого', reasonPrice:'лучший итог по цене', reasonSpeed:'быстрее доставка', reasonRating:'высокий рейтинг', reasonBalanced:'сбалансированное предложение', addOffer:'В корзину', supplierProfile:'Поставщик',
    tableSupplier:'Поставщик', tableUnit:'Цена/ед.', tableMOQ:'MOQ', tableDelivery:'Доставка', tableETA:'Срок', tableRating:'Рейтинг', tableTotal:'Итого', tableBest:'Лучшее', noSupplier:'Нет поставщиков под выбранное количество.',
    days:'дн.', day:'день', items:'поз.', remove:'Удалить', emptyCart:'Корзина пока пуста.', requestSent:'Демо-заявка {id} сформирована. В реальном продукте она уйдёт выбранным производителям.', addedToCart:'Добавлено в корзину', invalidQty:'Укажи количество не меньше минимального заказа.',
    lightMode:'Включить светлую тему', darkMode:'Включить тёмную тему',
    tierFrom:'От количества', tierPrice:'Цена за ед.', tierSaving:'Скидка', description:'Описание', productOffers:'Товары производителя', demoManufacturer:'Демо-производитель', verifiedProfile:'Профиль проверен в демо',
    parsed:'Поля заполнены по тексту. Проверь значения и запусти подбор.', parseFailed:'Не всё удалось распознать — заполни недостающие поля вручную.',
    buyerCityLabel:'Ваш город доставки', minOrderNote:'Минимальный заказ у {maker}: {min} {unit} — расчёт сделан на это количество', setMin:'Установить {min}', belowMoq:'Мин. заказ {min} {unit}', belowMoqTitle:'Не проходят по минимальному заказу', recalcFor:'Посчитать для {min}',
    checkout:'Оформить заявку', checkoutTitle:'Данные компании', company:'Компания', bin:'БИН', binHint:'12 цифр, необязательно', contactName:'Контактное лицо', contact:'Телефон или e-mail', comment:'Комментарий', commentPlaceholder:'Сроки, условия оплаты, упаковка…', back:'← Назад',
    fillRequired:'Заполни компанию, контактное лицо и телефон или e-mail.', binInvalid:'БИН должен состоять ровно из 12 цифр.', contactInvalid:'Укажи телефон (от 10 цифр) или корректный e-mail.', successTitle:'Заявка {id} создана', successText:'Заявка сохранена. Её получат производители:', done:'Готово', positions:'поз.', copyLink:'Скопировать ссылку', linkCopied:'Ссылка скопирована', mapReset:'Весь Казахстан', mapAttribution:'Карта: 2ГИС',
    popularProducts:'Популярные товары', allProducts:'Весь каталог', topManufacturers:'Производители с лучшим рейтингом', allManufacturers:'Все производители', backToCatalog:'Каталог', backToManufacturers:'Все производители',
    orderFailed:'Не удалось отправить заявку. Проверьте соединение и попробуйте ещё раз.', orderBelowMin:'Количество в одной из позиций меньше минимального заказа — обновите корзину.', orderUnavailable:'Один из товаров больше недоступен — удалите его из корзины.', catalogFailed:'Не удалось загрузить каталог с сервера. Запустите бэкенд: uv run python backend/manage.py runserver', sending:'Отправляем…',
    login:'Войти', register:'Регистрация', createAccount:'Создать аккаунт', logout:'Выйти', authTitle:'Вход для покупателей', authNote:'Войдите, чтобы оформлять заявки и следить за их статусом.', email:'E-mail', password:'Пароль', passwordHint:'не короче 8 символов, не только цифры', phone:'Телефон', account:'Личный кабинет', save:'Сохранить', profileSaved:'Данные сохранены', myOrders:'Мои заявки', noOrders:'Заявок пока нет — соберите корзину и оформите первую.', loginToCheckout:'Войти и оформить заявку', invalidCredentials:'Неверный e-mail или пароль.', tooManyAttempts:'Слишком много попыток. Попробуйте через 15 минут.', emailTaken:'Этот e-mail уже зарегистрирован — войдите.', invalidEmail:'Проверьте e-mail.', weakPassword:'Пароль слишком простой', invalidPhone:'Укажите телефон (от 10 цифр).', requestFailed:'Не удалось выполнить запрос. Попробуйте ещё раз.', status_new:'Новая', status_in_progress:'В работе', status_done:'Выполнена', status_cancelled:'Отменена', notFoundTitle:'Страница не найдена', notFoundText:'Такой страницы нет — возможно, ссылка устарела.', backHome:'На главную'
  },
  kk: {
    pageTitle:'FactoryDirect — өндірушіден тікелей', skip:'Мазмұнға өту', languageLabel:'Тіл', cart:'Себет',
    navCatalog:'Каталог', navManufacturers:'Өндірушілер', navMap:'Карта', navSmart:'Smart Match', navDelivery:'Есептеу',
    heroBadge:'Қазақстанға арналған B2B marketplace', heroTitle1:'Тікелей сатып ал.', heroTitle2:'Әділ салыстыр.', heroText:'FactoryDirect бизнеске жергілікті өндірушілерді табуға, көтерме шарттарды салыстыруға және жеткізуді бір жерде есептеуге көмектеседі.',
    heroSearchPlaceholder:'Мысалы: кофе, футболка, су…', find:'Табу', trySmart:'Smart Match қолданып көру', seeManufacturers:'Өндірушілерді көру',
    trust1:'Демода тексерілген профильдер', trust2:'Көтерме баға деңгейлері', trust3:'Логистика есебі', bestOffer:'ЕҢ ТИІМДІ ҰСЫНЫС', heroOfferProduct:'Кофе дәндері · 30 кг', verified:'тексерілген', wholesalePrice:'Көтерме баға', deliveryTo:'Жеткізу · {city}', estimatedSaving:'Болжамды үнем', buyer:'Сатып алушы', findBest:'Ең тиімді ұсынысты табу', demoDataNote:'Прототиптегі деректер мен бағалар демонстрациялық.',
    metricManufacturers:'демо өндіруші', metricRegions:'қала мен өңір', metricLanguages:'интерфейс тілі', metricFlow:'бір B2B процесс',
    catalogEyebrow:'КАТАЛОГ', catalogTitle:'Өндірушілерден тікелей тауарлар', catalogSubtitle:'Баға тапсырыс көлеміне қарай өзгереді — нағыз B2B сияқты.', catalogSearchPlaceholder:'Тауар немесе өндіруші іздеу', nothingFound:'Ештеңе табылмады', nothingFoundText:'Сұрауды өзгертіңіз немесе басқа санатты таңдаңыз.',
    manufacturersEyebrow:'ӨНДІРУШІЛЕР', manufacturersTitle:'Кімнен сатып алатыныңды біл', manufacturersSubtitle:'Жеткізуші профилінде қала, санаттар, ең аз тапсырыс, рейтинг және жөнелту жылдамдығы көрсетіледі.', showAll:'Барлығын көрсету', showLess:'Аз көрсету',
    mapEyebrow:'ГЕОГРАФИЯ', mapTitle:'Қазақстан картасындағы өндірушілер', mapSubtitle:'Жеткізуші мен санатын көру үшін нүктені басыңыз. Демода координаттар нақты мекенжайға емес, қалаға байланған.', mapLegend:'демо өндіруші', coverage:'ҚАМТУ', coverageTitle:'Өндірушілері бар қалалар: {n}', coverageText:'Алматы, Астана, Қарағанды, Шымкент, Атырау, Павлодар, Қостанай және Өскемен.',
    smartEyebrow:'SMART MATCH', smartTitle:'Жеткізушіні тек бағаға емес, міндетке сай таңда', smartSubtitle:'Демо-алгоритм көтерме бағаны, ең аз тапсырысты, қашықтықты, рейтингті және жөнелту жылдамдығын ескереді. Бұл сыртқы AI API-сыз жергілікті прототип.', smartFeature1:'жылдам скоринг', smartFeature2:'жеткізуді есепке алу', smartFeature3:'көтерме жеңілдіктер', smartQueryLabel:'Сатып алуды қарапайым мәтінмен сипатта', smartPlaceholder:'Мысалы: Алматыға 30 кг кофе керек, баға маңызды', smartHint:'Тауарды, санын, қаланы және басымдықты жазыңыз — өрістерді автоматты толтыруға тырысамыз.', product:'Тауар', quantity:'Саны', destination:'Жеткізу қаласы', priority:'Басымдық', runSmart:'Ең жақсы ұсыныстарды таңдау',
    compareEyebrow:'САЛЫСТЫРУ', compareTitle:'Жеткізушілерді бір кестеде салыстыр', compareSubtitle:'Қала мен көлемді таңдаңыз — кесте жеткізумен бірге жалпы құнын қайта есептейді.',
    calculatorEyebrow:'КАЛЬКУЛЯТОР', calculatorTitle:'Тапсырысқа дейін сатып алуды есепте', calculatorSubtitle:'Тауар бағасын, көлемдік жеңілдікті, жеткізуді, мерзімді және бөлшек бағамен салыстыруды көріңіз.', supplier:'Жеткізуші', deliveryMode:'Жеткізу тәсілі', estimate:'АЛДЫН АЛА ЕСЕП', totalOrder:'Тапсырыс сомасы', goodsSubtotal:'Тауар', volumeDiscount:'Көтерме жеңілдік', delivery:'Жеткізу', eta:'Мерзім', vsRetail:'Болжамды бөлшек бағамен салыстырғандағы үнем', addCalculated:'Есепті себетке қосу', calcDisclaimer:'Есеп демонстрациялық және жария оферта емес.',
    workflowEyebrow:'СЦЕНАРИЙ', workflowTitle:'Іздеуден тапсырысқа дейін бір түсінікті жол', step1Title:'Тауарды тап', step1Text:'Каталог пен сүзгілер таңдауды тез тарылтады.', step2Title:'Smart Match ал', step2Text:'Жүйе жеткізушілерді сіздің басымдығыңыз бойынша ранжирлейді.', step3Title:'Нәтижені салыстыр', step3Text:'Тауар мен логистика бағасы рәсімдеуге дейін көрінеді.', step4Title:'Сұраныс жібер', step4Text:'Себет сатып алуды жинап, демо-сұраныс жасайды.',
    finalTitle:'Жергілікті өндірушілер ойлағаннан да жақын.', finalText:'Келесі кезең — нақты жеткізуші кабинеттері, қалдықтар, құжаттар, қауіпсіз мәміле және логистика сервистерімен интеграция.', footerPitch:'B2B-маркетплейс: Қазақстан өндірушілерінен тікелей сатып алу — баға мен жеткізуді адал салыстырумен.', footerBuyers:'Сатып алушыларға', footerSuppliers:'Жеткізушілер', footerCategories:'Санаттар', footerMap:'Өндірушілер картасы', footerMade:'Қазақстанда жасалған 🇰🇿', demoProject:'Демонстрациялық жоба', demoProjectText:'Жеткізушілер атауы, бағалар мен рейтингтер интерфейсті көрсету үшін қолданылады.',
    yourOrder:'САТЫП АЛУ', total:'Барлығы', sendRequest:'Демо-сұраныс жіберу', checkoutNote:'Төлем жүргізілмейді — бұл демонстрациялық прототип.',
    allCategories:'Барлық санаттар', food:'Азық-түлік және сусын', clothing:'Киім', home:'Үйге арналған', tech:'Электроника', packaging:'Қаптама', construction:'Құрылыс материалдары', sortRecommended:'Ұсыныс бойынша', sortPriceLow:'Арзаннан бастап', sortSaving:'Үнем бойынша',
    directPrice:'ТІКЕЛЕЙ БАҒА', from:'бастап', retail:'бөлшек', moq:'MOQ', details:'Толығырақ', add:'Қосу', perUnit:'бірлікке', priceFromQty:'Көлемге сай баға', city:'Қала', rating:'Рейтинг', dispatch:'Жөнелту', minOrder:'Мин. тапсырыс', viewProfile:'Профиль',
    priorityPrice:'Ең төмен баға', prioritySpeed:'Жылдам жеткізу', priorityRating:'Жоғары рейтинг', priorityBalanced:'Баланс', standardDelivery:'Стандарт', expressDelivery:'Экспресс', pickupDelivery:'Өзі алып кету',
    smartFound:'«{product}» үшін {count} ұсыныс табылды · {qty} {unit} · {city}', match:'сәйкестік', goods:'тауар', deliveryShort:'жеткізу', totalCost:'барлығы', reasonPrice:'жалпы бағасы ең тиімді', reasonSpeed:'жеткізуі жылдамырақ', reasonRating:'рейтингі жоғары', reasonBalanced:'теңгерімді ұсыныс', addOffer:'Себетке', supplierProfile:'Жеткізуші',
    tableSupplier:'Жеткізуші', tableUnit:'Баға/бірлік', tableMOQ:'MOQ', tableDelivery:'Жеткізу', tableETA:'Мерзім', tableRating:'Рейтинг', tableTotal:'Барлығы', tableBest:'Үздік', noSupplier:'Таңдалған санға сай жеткізуші жоқ.',
    days:'күн', day:'күн', items:'поз.', remove:'Жою', emptyCart:'Себет әзірше бос.', requestSent:'{id} демо-сұранысы жасалды. Нақты өнімде ол таңдалған өндірушілерге жіберіледі.', addedToCart:'Себетке қосылды', invalidQty:'Саны ең аз тапсырыстан кем болмауы керек.',
    lightMode:'Жарық режимді қосу', darkMode:'Қараңғы режимді қосу', tierFrom:'Саны', tierPrice:'Бірлік бағасы', tierSaving:'Жеңілдік', description:'Сипаттама', productOffers:'Өндіруші тауарлары', demoManufacturer:'Демо өндіруші', verifiedProfile:'Демода профиль тексерілген',
    parsed:'Өрістер мәтін бойынша толтырылды. Мәндерді тексеріп, таңдауды іске қосыңыз.', parseFailed:'Барлығын тану мүмкін болмады — қалған өрістерді қолмен толтырыңыз.',
    buyerCityLabel:'Жеткізу қалаңыз', minOrderNote:'{maker} үшін ең аз тапсырыс: {min} {unit} — есеп осы көлемге жасалды', setMin:'{min} орнату', belowMoq:'Мин. тапсырыс {min} {unit}', belowMoqTitle:'Ең аз тапсырыс бойынша өтпейді', recalcFor:'{min} үшін есептеу',
    checkout:'Өтінім рәсімдеу', checkoutTitle:'Компания деректері', company:'Компания', bin:'БСН', binHint:'12 сан, міндетті емес', contactName:'Байланыс тұлғасы', contact:'Телефон немесе e-mail', comment:'Түсініктеме', commentPlaceholder:'Мерзім, төлем шарттары, қаптама…', back:'← Артқа',
    fillRequired:'Компанияны, байланыс тұлғасын және телефон не e-mail толтырыңыз.', binInvalid:'БСН дәл 12 саннан тұруы керек.', contactInvalid:'Телефон (кемінде 10 сан) немесе дұрыс e-mail көрсетіңіз.', successTitle:'{id} өтінімі жасалды', successText:'Өтінім сақталды. Оны мына өндірушілер алады:', done:'Дайын', positions:'поз.', copyLink:'Сілтемені көшіру', linkCopied:'Сілтеме көшірілді', mapReset:'Бүкіл Қазақстан', mapAttribution:'Карта: 2ГИС',
    popularProducts:'Танымал тауарлар', allProducts:'Бүкіл каталог', topManufacturers:'Рейтингі ең жоғары өндірушілер', allManufacturers:'Барлық өндірушілер', backToCatalog:'Каталог', backToManufacturers:'Барлық өндірушілер',
    orderFailed:'Өтінімді жіберу мүмкін болмады. Байланысты тексеріп, қайта көріңіз.', orderBelowMin:'Бір позицияның көлемі ең аз тапсырыстан аз — себетті жаңартыңыз.', orderUnavailable:'Тауарлардың бірі енді қолжетімсіз — оны себеттен алып тастаңыз.', catalogFailed:'Каталогты серверден жүктеу мүмкін болмады. Бэкендті іске қосыңыз: uv run python backend/manage.py runserver', sending:'Жіберілуде…',
    login:'Кіру', register:'Тіркелу', createAccount:'Аккаунт ашу', logout:'Шығу', authTitle:'Сатып алушыларға кіру', authNote:'Өтінім беру және олардың мәртебесін қадағалау үшін кіріңіз.', email:'E-mail', password:'Құпиясөз', passwordHint:'кемінде 8 таңба, тек сандар емес', phone:'Телефон', account:'Жеке кабинет', save:'Сақтау', profileSaved:'Деректер сақталды', myOrders:'Менің өтінімдерім', noOrders:'Әзірге өтінім жоқ — себет жинап, алғашқысын рәсімдеңіз.', loginToCheckout:'Кіріп, өтінім рәсімдеу', invalidCredentials:'E-mail немесе құпиясөз қате.', tooManyAttempts:'Тым көп әрекет. 15 минуттан кейін қайталаңыз.', emailTaken:'Бұл e-mail тіркелген — кіріңіз.', invalidEmail:'E-mail-ді тексеріңіз.', weakPassword:'Құпиясөз тым оңай', invalidPhone:'Телефонды көрсетіңіз (кемінде 10 сан).', requestFailed:'Сұранысты орындау мүмкін болмады. Қайта көріңіз.', status_new:'Жаңа', status_in_progress:'Жұмыста', status_done:'Орындалды', status_cancelled:'Бас тартылды', notFoundTitle:'Бет табылмады', notFoundText:'Мұндай бет жоқ — сілтеме ескірген болуы мүмкін.', backHome:'Басты бетке'
  },
  en: {
    pageTitle:'FactoryDirect — buy direct from manufacturers', skip:'Skip to content', languageLabel:'Language', cart:'Cart',
    navCatalog:'Catalog', navManufacturers:'Manufacturers', navMap:'Map', navSmart:'Smart Match', navDelivery:'Calculator',
    heroBadge:'B2B marketplace for Kazakhstan', heroTitle1:'Closer to the source.', heroTitle2:'More possibilities.', heroText:'FactoryDirect helps businesses discover local manufacturers, compare wholesale terms, and estimate delivery in one place.',
    heroSearchPlaceholder:'For example: coffee, T-shirts, water…', find:'Find', trySmart:'Try Smart Match', seeManufacturers:'View manufacturers',
    trust1:'Verified demo profiles', trust2:'Wholesale price tiers', trust3:'Logistics estimate', bestOffer:'BEST OFFER', heroOfferProduct:'Coffee beans · 30 kg', verified:'verified', wholesalePrice:'Wholesale price', deliveryTo:'Delivery · {city}', estimatedSaving:'Estimated savings', buyer:'Buyer', findBest:'Find the best offer', demoDataNote:'Data and prices in this prototype are illustrative.',
    metricManufacturers:'demo manufacturers', metricRegions:'cities and regions', metricLanguages:'interface languages', metricFlow:'end-to-end B2B flow',
    catalogEyebrow:'CATALOG', catalogTitle:'Products directly from manufacturers', catalogSubtitle:'Price changes automatically with order volume — just like real B2B purchasing.', catalogSearchPlaceholder:'Search products or manufacturers', nothingFound:'Nothing found', nothingFoundText:'Change the query or choose another category.',
    manufacturersEyebrow:'MANUFACTURERS', manufacturersTitle:'Know who you buy from', manufacturersSubtitle:'Supplier profiles show city, categories, minimum order, rating, and dispatch speed.', showAll:'Show all', showLess:'Show less',
    mapEyebrow:'GEOGRAPHY', mapTitle:'Manufacturers across Kazakhstan', mapSubtitle:'Click a marker to see the supplier and category. Demo coordinates are pinned to cities, not exact addresses.', mapLegend:'demo manufacturer', coverage:'COVERAGE', coverageTitle:'Cities with manufacturers: {n}', coverageText:'Almaty, Astana, Karaganda, Shymkent, Atyrau, Pavlodar, Kostanay and Oskemen.',
    smartEyebrow:'SMART MATCH', smartTitle:'Match a supplier to the job, not just the sticker price', smartSubtitle:'The demo algorithm considers wholesale price, MOQ, distance, rating, and dispatch speed. It runs locally without an external AI API.', smartFeature1:'instant scoring', smartFeature2:'delivery-aware', smartFeature3:'volume discounts', smartQueryLabel:'Describe your purchase in plain language', smartPlaceholder:'Example: need 30 kg of coffee in Almaty, price matters most', smartHint:'Mention the product, quantity, city, and priority — we will try to prefill the fields.', product:'Product', quantity:'Quantity', destination:'Delivery city', priority:'Priority', runSmart:'Find the best offers',
    compareEyebrow:'COMPARE', compareTitle:'Compare suppliers in one table', compareSubtitle:'Choose a city and quantity — the table recalculates total landed cost.',
    calculatorEyebrow:'CALCULATOR', calculatorTitle:'Estimate your purchase before ordering', calculatorSubtitle:'See product price, volume discount, delivery, ETA, and an estimated retail comparison.', supplier:'Supplier', deliveryMode:'Delivery mode', estimate:'ESTIMATED QUOTE', totalOrder:'Order total', goodsSubtotal:'Goods', volumeDiscount:'Volume discount', delivery:'Delivery', eta:'ETA', vsRetail:'Estimated savings vs retail', addCalculated:'Add quote to cart', calcDisclaimer:'Illustrative quote only; not a public offer.',
    workflowEyebrow:'FLOW', workflowTitle:'One clear journey from search to purchase request', step1Title:'Find a product', step1Text:'Catalog and filters narrow the choice quickly.', step2Title:'Get Smart Match', step2Text:'The system ranks suppliers by your priority.', step3Title:'Compare landed cost', step3Text:'Product and logistics costs are visible before checkout.', step4Title:'Send a request', step4Text:'The cart builds a purchase and creates a demo RFQ.',
    finalTitle:'Local manufacturers are closer than they look.', finalText:'Next: real supplier dashboards, live inventory, documents, safe transactions, and logistics integrations.', footerPitch:'B2B marketplace: buy directly from manufacturers in Kazakhstan, with honest price and delivery comparison.', footerBuyers:'For buyers', footerSuppliers:'Suppliers', footerCategories:'Categories', footerMap:'Manufacturer map', footerMade:'Made in Kazakhstan 🇰🇿', demoProject:'Demo project', demoProjectText:'Supplier names, prices, and ratings are illustrative UI data.',
    yourOrder:'YOUR PURCHASE', total:'Total', sendRequest:'Send demo request', checkoutNote:'No payment is processed — this is a demonstration prototype.',
    allCategories:'All categories', food:'Food & drinks', clothing:'Clothing', home:'Home', tech:'Electronics', packaging:'Packaging', construction:'Construction', sortRecommended:'Recommended', sortPriceLow:'Lowest price', sortSaving:'Biggest saving',
    directPrice:'DIRECT PRICE', from:'from', retail:'retail', moq:'MOQ', details:'Details', add:'Add', perUnit:'per unit', priceFromQty:'Volume pricing', city:'City', rating:'Rating', dispatch:'Dispatch', minOrder:'Min. order', viewProfile:'Profile',
    priorityPrice:'Lowest total price', prioritySpeed:'Fast delivery', priorityRating:'High rating', priorityBalanced:'Balanced', standardDelivery:'Standard', expressDelivery:'Express', pickupDelivery:'Pickup',
    smartFound:'Offers found: {count} — “{product}” · {qty} {unit} · {city}', match:'match', goods:'goods', deliveryShort:'delivery', totalCost:'total', reasonPrice:'best landed price', reasonSpeed:'faster delivery', reasonRating:'higher supplier rating', reasonBalanced:'balanced offer', addOffer:'Add to cart', supplierProfile:'Supplier',
    tableSupplier:'Supplier', tableUnit:'Unit price', tableMOQ:'MOQ', tableDelivery:'Delivery', tableETA:'ETA', tableRating:'Rating', tableTotal:'Total', tableBest:'Best', noSupplier:'No supplier fits the selected quantity.',
    days:'days', day:'day', items:'items', remove:'Remove', emptyCart:'Your cart is empty.', requestSent:'Demo request {id} has been created. In the real product it would be sent to selected manufacturers.', addedToCart:'Added to cart', invalidQty:'Quantity must meet the supplier minimum order.',
    lightMode:'Switch to light mode', darkMode:'Switch to dark mode', tierFrom:'From quantity', tierPrice:'Unit price', tierSaving:'Discount', description:'Description', productOffers:'Manufacturer products', demoManufacturer:'Demo manufacturer', verifiedProfile:'Profile verified in demo',
    parsed:'Fields were prefilled from your text. Review them and run the match.', parseFailed:'We could not detect everything — fill in the remaining fields manually.',
    buyerCityLabel:'Your delivery city', minOrderNote:'{maker} minimum order: {min} {unit} — the quote uses this quantity', setMin:'Set {min}', belowMoq:'Min. order {min} {unit}', belowMoqTitle:'Below the minimum order', recalcFor:'Quote for {min}',
    checkout:'Checkout', checkoutTitle:'Company details', company:'Company', bin:'BIN', binHint:'12 digits, optional', contactName:'Contact person', contact:'Phone or e-mail', comment:'Comment', commentPlaceholder:'Timing, payment terms, packaging…', back:'← Back',
    fillRequired:'Fill in company, contact person and phone or e-mail.', binInvalid:'BIN must be exactly 12 digits.', contactInvalid:'Enter a phone number (10+ digits) or a valid e-mail.', successTitle:'Request {id} created', successText:'Request saved. It goes to these manufacturers:', done:'Done', positions:'items', copyLink:'Copy link', linkCopied:'Link copied', mapReset:'All Kazakhstan', mapAttribution:'Map: 2GIS',
    popularProducts:'Popular products', allProducts:'Full catalog', topManufacturers:'Top-rated manufacturers', allManufacturers:'All manufacturers', backToCatalog:'Catalog', backToManufacturers:'All manufacturers',
    orderFailed:'Could not send the request. Check your connection and try again.', orderBelowMin:'One of the items is below the minimum order — update your cart.', orderUnavailable:'One of the products is no longer available — remove it from the cart.', catalogFailed:'Could not load the catalog from the server. Start the backend: uv run python backend/manage.py runserver', sending:'Sending…',
    login:'Sign in', register:'Sign up', createAccount:'Create account', logout:'Sign out', authTitle:'Buyer sign-in', authNote:'Sign in to place requests and track their status.', email:'E-mail', password:'Password', passwordHint:'at least 8 characters, not only digits', phone:'Phone', account:'My account', save:'Save', profileSaved:'Saved', myOrders:'My requests', noOrders:'No requests yet — fill the cart and place your first one.', loginToCheckout:'Sign in to place the request', invalidCredentials:'Wrong e-mail or password.', tooManyAttempts:'Too many attempts. Try again in 15 minutes.', emailTaken:'This e-mail is already registered — sign in.', invalidEmail:'Check the e-mail address.', weakPassword:'Password is too weak', invalidPhone:'Enter a phone number (10+ digits).', requestFailed:'Request failed. Please try again.', status_new:'New', status_in_progress:'In progress', status_done:'Done', status_cancelled:'Cancelled', notFoundTitle:'Page not found', notFoundText:'This page does not exist — the link may be outdated.', backHome:'Go home'
  }
};

// Catalog data is edited in the Django admin and loaded from /api/catalog/ on start.
let CITIES={}, DISTANCE={}, CATEGORIES=[], MANUFACTURERS=[], PRODUCTS=[], DELIVERY={};
async function loadCatalog(){
  const response=await fetch('/api/catalog/',{headers:{Accept:'application/json'}});
  if(!response.ok) throw new Error(`catalog request failed: ${response.status}`);
  ({cities:CITIES,distances:DISTANCE,categories:CATEGORIES,manufacturers:MANUFACTURERS,products:PRODUCTS,delivery:DELIVERY}=await response.json());
}
// JSON request to the Django API; changing requests carry the CSRF token from the csrftoken cookie.
async function api(url,{method='GET',body}={}){
  const headers={Accept:'application/json'};
  if(method!=='GET'){ headers['Content-Type']='application/json'; headers['X-CSRFToken']=document.cookie.match(/(?:^|; )csrftoken=([^;]*)/)?.[1]||''; }
  const response=await fetch(url,{method,headers,body:body===undefined?undefined:JSON.stringify(body)});
  return {ok:response.ok,status:response.status,data:await response.json().catch(()=>({}))};
}

const store = {
  get(key){ try { return localStorage.getItem(key); } catch { return null; } },
  set(key,value){ try { localStorage.setItem(key,value); } catch {} }
};

let lang = store.get('fd-language') || 'ru';
if (!I18N[lang]) lang = 'ru';
let buyerCity = store.get('fd-city') || 'almaty';
let cart = [];
try { cart = JSON.parse(store.get('fd-cart-v2') || '[]'); if (!Array.isArray(cart)) cart=[]; } catch { cart=[]; }
let activeMapCity='almaty';
let smartMatchRan=false;
let mapStarted=false;
let currentUser=null;
let currentProductId='coffee';

const localeMap={ru:'ru-RU',kk:'kk-KZ',en:'en-US'};
const $ = (s,root=document)=>root.querySelector(s);
const $$ = (s,root=document)=>[...root.querySelectorAll(s)];
const t = key => I18N[lang][key] ?? I18N.ru[key] ?? key;
const fill = (text,values) => text.replace(/\{(\w+)\}/g,(m,k)=>values[k] ?? m);
const cityName = key => CITIES[key]?.[lang] || CITIES[key]?.ru || key;
const categoryName = code => CATEGORIES.find(c=>c.id===code)?.name[lang] || code;
const formatPrice = value => `${Math.round(value).toLocaleString(localeMap[lang])} ₸`;
const makerById = id => MANUFACTURERS.find(m=>m.id===id);
const productById = id => PRODUCTS.find(p=>p.id===id);
const minQty = offer => Math.max(makerById(offer.maker).minOrder, offer.tiers[0][0]);
const lowestPrice = product => Math.min(...product.offers.flatMap(o=>o.tiers.map(([,price])=>price)));

function applyStaticTexts(){
  document.documentElement.lang = lang === 'kk' ? 'kk' : lang;
  document.title=t('pageTitle');
  $('#languageSelect').value=lang;
  $$('[data-i18n]').forEach(el=>{ if (I18N[lang][el.dataset.i18n]!==undefined) el.textContent=t(el.dataset.i18n); });
  $$('[data-i18n-placeholder]').forEach(el=>{ el.placeholder=t(el.dataset.i18nPlaceholder); });
}
function applyI18n(){
  applyStaticTexts();
  setUser(currentUser);
  if(!PRODUCTS.length)return;
  fillControls();
  renderHeroOffer();
  renderCityChips();
  renderMap();
  updateThemeButton();
  updateCartCount();
  renderRoute({focus:false,scroll:false,reset:false});
}

function initTheme(){
  const stored=store.get('fd-theme');
  const preferred='dark';
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
  document.documentElement.dataset.theme=next;store.set('fd-theme',next);updateThemeButton();
  if(gisMap) next==='dark'?applyMapTheme():gisMap.setStyleById(GIS_LIGHT_STYLE).catch(()=>{});
}

function fillControls(){
  const categoryOptions=[['all',t('allCategories')],...CATEGORIES.map(c=>[c.id,c.name[lang]])];
  setSelect('#categoryFilter',categoryOptions,$('#categoryFilter').value||'all');
  setSelect('#sortFilter',[['recommended',t('sortRecommended')],['price',t('sortPriceLow')],['saving',t('sortSaving')]],$('#sortFilter').value||'recommended');
  const productOptions=PRODUCTS.map(p=>[p.id,p.name[lang]]);
  setSelect('#smartProduct',productOptions,$('#smartProduct').value||'coffee');
  const cityOptions=Object.keys(CITIES).map(k=>[k,cityName(k)]);
  setSelect('#buyerCity',cityOptions,buyerCity);
  ['#smartCity','#compareCity','#calcCity'].forEach(id=>setSelect(id,cityOptions,$(id).value||buyerCity));
  setSelect('#smartPriority',[['balanced',t('priorityBalanced')],['price',t('priorityPrice')],['speed',t('prioritySpeed')],['rating',t('priorityRating')]],$('#smartPriority').value||'balanced');
  setSelect('#deliveryMode',[['standard',t('standardDelivery')],['express',t('expressDelivery')],['pickup',t('pickupDelivery')]],$('#deliveryMode').value||'standard');
}
function setSelect(selector,options,value){ const el=$(selector); if(!el)return; el.innerHTML=options.map(([v,l])=>`<option value="${v}">${escapeHtml(l)}</option>`).join(''); if(options.some(([v])=>v===value))el.value=value; }

function setBuyerCity(key){
  if(!CITIES[key])return; buyerCity=key; store.set('fd-city',key);
  ['#smartCity','#compareCity','#calcCity'].forEach(id=>{$(id).value=key;});
  renderHeroOffer(); renderCompare(); calculateQuote(); if(smartMatchRan) runSmartMatch();
}

function tierPrice(offer,qty){ let price=offer.base; for(const [min,p] of offer.tiers){ if(qty>=min) price=p; } return price; }
function offerCalc(product,offer,qty,destination,mode='standard'){
  const maker=makerById(offer.maker); const unitPrice=tierPrice(offer,qty); const baseUnit=offer.base;
  const goods=unitPrice*qty; const baseGoods=baseUnit*qty; const discount=Math.max(0,baseGoods-goods);
  // Same formula as backend/marketplace/pricing.py; tariffs come from the admin.
  const d=DELIVERY; const distance=DISTANCE[maker.city]?.[destination] ?? d.unknownDistanceKm;
  let delivery=destination===maker.city ? d.localPrice : d.basePrice + distance*d.perKm + qty*product.weight*d.perWeightUnit;
  let eta=Math.max(1,Math.ceil(distance/d.kmPerDay))+maker.dispatch;
  if(mode==='express'){delivery*=d.expressMultiplier;eta=Math.max(1,Math.ceil(eta*d.expressEtaFactor));}
  if(mode==='pickup'){delivery=0;eta=maker.dispatch;}
  delivery=Math.round(delivery/100)*100;
  const total=goods+delivery; const retail=product.retail*qty; const saving=retail-total;
  return {product,offer,maker,qty,destination,mode,unitPrice,goods,discount,delivery,total,eta,saving,retail,distance};
}
// Offers that accept the quantity, and the ones that fall below their minimum order.
function splitOffers(product,qty,destination,mode='standard'){
  const valid=[],below=[];
  product.offers.forEach(o=>{ const x=offerCalc(product,o,qty,destination,mode); (qty>=minQty(o)?valid:below).push({...x,min:minQty(o)}); });
  return {valid,below};
}

const HERO_OFFER={product:'coffee',qty:30};
// Falls back to the first product if the hero product is hidden in the admin.
const heroProduct = () => productById(HERO_OFFER.product) || PRODUCTS[0];
function renderHeroOffer(){
  const p=heroProduct(); if(!p)return; const {valid}=splitOffers(p,HERO_OFFER.qty,buyerCity);
  const x=valid.sort((a,b)=>a.total-b.total)[0]; if(!x)return;
  $('#heroAvatar').textContent=x.maker.initials; $('#heroMaker').textContent=x.maker.name; $('#heroMakerCity').textContent=cityName(x.maker.city); $('#heroRating').textContent=`★ ${x.maker.rating}`;
  $('#heroPrice').textContent=`${formatPrice(x.unitPrice)}/${p.unit[lang]}`;
  $('#heroDeliveryLabel').textContent=fill(t('deliveryTo'),{city:cityName(buyerCity)}); $('#heroDelivery').textContent=formatPrice(x.delivery);
  $('#heroSaving').textContent=formatPrice(Math.max(0,x.saving)); $('#heroSavingPct').textContent=`−${Math.max(0,Math.round(x.saving/x.retail*100))}%`;
  $('#heroRouteFrom').textContent=cityName(x.maker.city); $('#heroRouteTo').textContent=cityName(buyerCity);
}
function jumpToHeroMatch(){
  navigate(`#/smart-match?${new URLSearchParams({product:heroProduct()?.id||'',qty:HERO_OFFER.qty,city:buyerCity,priority:'price'})}`);
}

function renderProducts(){
  const q=($('#catalogSearch')?.value||'').trim().toLocaleLowerCase(localeMap[lang]); const cat=$('#categoryFilter')?.value||'all'; const sort=$('#sortFilter')?.value||'recommended';
  let rows=PRODUCTS.filter(p=>{
    const makerNames=p.offers.map(o=>makerById(o.maker).name).join(' '); const hay=`${p.name[lang]} ${makerNames}`.toLocaleLowerCase(localeMap[lang]);
    return (cat==='all'||p.category===cat) && hay.includes(q);
  }).map(p=>{
    const low=lowestPrice(p); const cheapest=p.offers.find(o=>o.tiers.some(([,price])=>price===low));
    return {p,low,maker:makerById(cheapest.maker)};
  });
  if(sort==='price') rows.sort((a,b)=>a.low-b.low);
  if(sort==='saving') rows.sort((a,b)=>(b.p.retail-b.low)/b.p.retail-(a.p.retail-a.low)/a.p.retail);
  $('#productGrid').innerHTML=rows.map(({p})=>productCard(p)).join('');
  $('#catalogEmpty').classList.toggle('hidden',rows.length>0);
}
function productCard(p){
  const low=lowestPrice(p); const maker=makerById(p.offers.find(o=>o.tiers.some(([,price])=>price===low)).maker); const saving=Math.round((1-low/p.retail)*100); const href=`#/product/${p.id}`;
  return `<article class="product-card">
    <a class="product-visual cat-${p.category}" href="${href}" tabindex="-1" aria-hidden="true"><span class="product-badge">${t('directPrice')}</span><span class="city-badge">${escapeHtml(cityName(maker.city))}</span>${productArt(p)}</a>
    <div class="product-body"><h3><a href="${href}">${escapeHtml(p.name[lang])}</a></h3><div class="product-meta"><span>🏭 ${escapeHtml(maker.name)}</span><span>★ ${maker.rating}</span></div>
    <div class="product-price"><strong>${t('from')} ${formatPrice(low)}</strong><del>${formatPrice(p.retail)}</del></div>
    <div class="product-tier">−${saving}% · ${t('priceFromQty')}</div>
    <div class="product-actions"><button class="primary" type="button" onclick="quickAdd('${p.id}')">${t('add')}</button><a class="details-btn" href="${href}" title="${t('details')}" aria-label="${t('details')}">→</a></div></div>
  </article>`;
}
function makerCard(m){
  return `<article class="manufacturer-card">
    <div class="maker-top"><div class="maker-logo">${m.initials}</div><div class="maker-main"><h3><a href="#/manufacturer/${m.id}">${escapeHtml(m.name)}</a> <span class="verified-icon">●</span></h3><p>📍 ${escapeHtml(cityName(m.city))}</p></div><div class="maker-rating">★ ${m.rating}</div></div>
    <p class="maker-description">${escapeHtml(m.description[lang])}</p>
    <div class="maker-stats"><div><strong>${m.minOrder}</strong><span>${t('minOrder')}</span></div><div><strong>${m.dispatch} ${m.dispatch===1?t('day'):t('days')}</strong><span>${t('dispatch')}</span></div><div><strong>✓</strong><span>${t('verified')}</span></div></div>
    <div class="maker-footer"><div class="category-tags">${m.categories.map(c=>`<span>${escapeHtml(categoryName(c))}</span>`).join('')}</div><a class="text-btn" href="#/manufacturer/${m.id}">${t('viewProfile')} →</a></div>
  </article>`;
}
function renderHome(){
  $('#metricMakers').textContent=MANUFACTURERS.length; $('#metricCities').textContent=Object.keys(CITIES).length;
  $('#homeProducts').innerHTML=PRODUCTS.slice(0,4).map(productCard).join('');
  $('#homeMakers').innerHTML=[...MANUFACTURERS].sort((a,b)=>b.rating-a.rating).slice(0,3).map(makerCard).join('');
}

function renderManufacturers(){
  $('#manufacturerGrid').innerHTML=MANUFACTURERS.map(makerCard).join('');
  const cities=Object.keys(CITIES).filter(key=>MANUFACTURERS.some(m=>m.city===key));
  $('#coverageTitle').textContent=fill(t('coverageTitle'),{n:cities.length});
  $('#coverageText').textContent=cities.map(cityName).join(', ');
}

function renderCityChips(){
  $('#cityChips').innerHTML=Object.keys(CITIES).map(k=>`<button type="button" onclick="focusCity('${k}')">${escapeHtml(cityName(k))}</button>`).join('');
}

// 2GIS MapGL. Get a key at https://platform.2gis.ru and paste it here; without a key the schematic map is shown.
const GIS_KEY='fce59a52-5bd8-4f88-9b96-5052119b12ab';
const GIS_SCRIPT='https://mapgl.2gis.com/api/js/v1';
const GIS_LIGHT_STYLE='c080bb6a-8134-4993-93a1-5b4d8c36a59b';
const GIS_DARK_STYLE='e05ac437-fcc2-4845-ad74-b1de9ce07555';
const KZ_BOUNDS={southWest:[46.5,40.5],northEast:[87.5,55.5]};
let gisMap=null; const gisMarkers={};
const MAP_POSITIONS={almaty:[75.5,78],astana:[54,26],karaganda:[55,47],shymkent:[53,83],atyrau:[17,50],pavlodar:[71,25],kostanay:[41,17],oskemen:[86,40]};
function initMap(){
  renderMap();
  if(!GIS_KEY){ renderSchematicMap(); return; }
  const script=document.createElement('script'); script.src=GIS_SCRIPT; script.async=true;
  script.onerror=renderSchematicMap;
  script.onload=()=>{ try { createGisMap(); } catch { renderSchematicMap(); } };
  document.head.appendChild(script);
}
function createGisMap(){
  const canvas=$('#mapCanvas'); canvas.innerHTML=''; delete canvas.dataset.schematic; canvas.classList.add('gis');
  gisMap=new mapgl.Map(canvas,{key:GIS_KEY,center:[67,48],zoom:4,minZoom:3,lang,zoomControl:'bottomLeft',disableZoomOnScroll:true,disableRotationByUserInteraction:true,disablePitchByUserInteraction:true});
  applyMapTheme(); fitKazakhstan(false);
  Object.keys(CITIES).forEach(key=>{
    const el=document.createElement('button'); el.type='button'; el.addEventListener('click',()=>focusCity(key));
    gisMarkers[key]={el,marker:new mapgl.HtmlMarker(gisMap,{coordinates:[CITIES[key].lng,CITIES[key].lat],html:el,anchor:[15,39]})};
  });
  gisMap.on('zoomend',()=>$('#mapReset').classList.toggle('hidden',gisMap.getZoom()<=6));
  watchGisKeyError(canvas);
  renderMap();
}
// MapGL shows its "key is invalid" notice in the DOM without a public event; switch to the schematic map instead.
function watchGisKeyError(canvas){
  const observer=new MutationObserver(()=>{
    if(!canvas.textContent.includes('key is invalid'))return;
    observer.disconnect(); gisMap.destroy(); gisMap=null; Object.keys(gisMarkers).forEach(k=>delete gisMarkers[k]);
    canvas.classList.remove('gis'); $('#mapReset').classList.add('hidden'); renderSchematicMap(); renderMapPopover();
  });
  observer.observe(canvas,{childList:true,subtree:true});
}
function applyMapTheme(){
  if(document.documentElement.dataset.theme==='dark') gisMap?.setStyleById(GIS_DARK_STYLE).catch(()=>{});
}
function fitKazakhstan(animate=true){
  const overlay=getComputedStyle($('#mapPopover')).position==='absolute';
  gisMap?.fitBounds(KZ_BOUNDS,{padding:{top:20,left:20,bottom:20,right:overlay?300:20},animation:animate?{duration:600}:undefined});
}
function renderGisMarker(key){
  const {el,marker}=gisMarkers[key]; const count=MANUFACTURERS.filter(m=>m.city===key).length; const active=key===activeMapCity;
  el.className=`gis-marker${active?' active':''}`; el.title=cityName(key); el.setAttribute('aria-label',`${cityName(key)}: ${count}`); el.innerHTML=`<span>${count}</span><i></i>`;
  marker.setZIndex(active?10:1);
}
function renderMapPopover(){
  const makers=MANUFACTURERS.filter(m=>m.city===activeMapCity);
  $('#mapPopover').innerHTML=`<div class="map-popover-head"><div><span class="mini-label">${escapeHtml(cityName(activeMapCity))}</span><strong>${makers.length} ${t('metricManufacturers')}</strong></div><span>📍</span></div>${makers.map(m=>`<a href="#/manufacturer/${m.id}"><span class="map-maker-logo">${m.initials}</span><span><b>${escapeHtml(m.name)}</b><small>★ ${m.rating} · ${escapeHtml(m.categories.map(categoryName).join(', '))}</small></span><i>→</i></a>`).join('')}`;
  $('#mapCaption').textContent=gisMap?`${t('mapAttribution')} · ${t('mapSubtitle')}`:t('mapSubtitle');
}
function renderMap(){
  if(!$('#map'))return;
  renderMapPopover();
  if(gisMap){ Object.keys(gisMarkers).forEach(renderGisMarker); gisMap.setLanguage(lang); }
  else if($('#mapCanvas').dataset.schematic) renderSchematicMap();
}
function renderSchematicMap(){
  const canvas=$('#mapCanvas'); canvas.dataset.schematic='1';
  const cityButtons=Object.keys(CITIES).map(key=>{
    const [x,y]=MAP_POSITIONS[key]; const makers=MANUFACTURERS.filter(m=>m.city===key); const active=key===activeMapCity?' active':'';
    return `<button class="city-marker${active}" style="left:${x}%;top:${y}%" type="button" onclick="focusCity('${key}')" title="${escapeHtml(cityName(key))}"><span>${makers.length}</span><b>${escapeHtml(cityName(key))}</b></button>`;
  }).join('');
  canvas.innerHTML=`<svg class="map-svg" viewBox="0 0 1000 520" role="img" aria-label="Kazakhstan schematic map"><path class="country-shadow" d="M90 236 L132 162 L246 142 L332 91 L443 70 L536 91 L632 72 L733 105 L840 128 L920 191 L884 260 L930 316 L848 351 L806 421 L704 442 L644 411 L558 462 L471 432 L398 451 L328 411 L247 422 L177 370 L119 330 Z"/><path class="country-shape" d="M90 230 L130 158 L245 138 L330 88 L445 67 L540 88 L635 68 L735 102 L842 124 L925 188 L888 258 L934 315 L850 355 L808 425 L705 447 L643 414 L558 467 L468 437 L397 456 L325 416 L244 427 L174 374 L115 332 Z"/><path class="country-river" d="M570 115 C610 170 598 215 640 260 C675 297 694 332 685 393"/></svg>${cityButtons}`;
}
function focusCity(key,zoom=true){
  activeMapCity=key; renderMap();
  if(gisMap&&zoom){ gisMap.setCenter([CITIES[key].lng,CITIES[key].lat],{duration:800}); gisMap.setZoom(11,{duration:800}); }
}

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
  smartMatchRan=true;
  const p=productById($('#smartProduct').value); const qty=Math.max(1,Number($('#smartQty').value)||1); const city=$('#smartCity').value; const priority=$('#smartPriority').value;
  const {valid,below}=splitOffers(p,qty,city);
  const maxTotal=Math.max(...valid.map(x=>x.total),1), maxEta=Math.max(...valid.map(x=>x.eta),1);
  const ranked=valid.map(x=>{
    const priceScore=100-(x.total/maxTotal*45); const speedScore=100-(x.eta/maxEta*35); const ratingScore=x.maker.rating/5*100;
    let score; if(priority==='price') score=priceScore*.68+speedScore*.12+ratingScore*.2; else if(priority==='speed') score=priceScore*.25+speedScore*.55+ratingScore*.2; else if(priority==='rating') score=priceScore*.25+speedScore*.15+ratingScore*.6; else score=priceScore*.46+speedScore*.24+ratingScore*.30;
    return {...x,score:Math.max(50,Math.min(99,Math.round(score)))};
  }).sort((a,b)=>b.score-a.score);
  renderSmartMatches(ranked,below.sort((a,b)=>a.min-b.min),{p,qty,city,priority});
}
function renderSmartMatches(matches,below,{p,qty,city,priority}){
  const unit=p.unit[lang]; const reasonKey={price:'reasonPrice',speed:'reasonSpeed',rating:'reasonRating',balanced:'reasonBalanced'}[priority]||'reasonBalanced';
  const summary=matches.length?`<div class="result-summary">✨ ${escapeHtml(fill(t('smartFound'),{count:matches.length,product:p.name[lang],qty,unit,city:cityName(city)}))}</div>`:`<div class="result-summary">${t('noSupplier')}</div>`;
  const cards=matches.slice(0,3).map((x,i)=>`<div class="match-card ${i===0?'highlight-match':''}">
    <div class="match-rank">${i+1}</div><div class="match-main"><h4>${escapeHtml(x.maker.name)} · ${escapeHtml(cityName(x.maker.city))}</h4><p>${formatPrice(x.unitPrice)} / ${escapeHtml(unit)} · ${t('deliveryShort')} ${formatPrice(x.delivery)} · ${x.eta} ${t('days')}</p></div><div class="match-score"><strong>${x.score}%</strong><span>${t('match')}</span></div>
    <div class="match-reason">✓ ${t(reasonKey)} · ★ ${x.maker.rating} · ${t('totalCost')}: <strong>${formatPrice(x.total)}</strong></div>
    <div class="match-actions"><button class="primary" type="button" onclick="addOfferToCart('${p.id}','${x.maker.id}',${qty},'${city}')">${t('addOffer')}</button><a class="secondary" href="#/manufacturer/${x.maker.id}">${t('supplierProfile')}</a></div>
  </div>`).join('');
  const belowCards=below.length?`<p class="below-title">${t('belowMoqTitle')}</p>`+below.map(x=>`<div class="match-card below-moq">
    <div class="match-rank">–</div><div class="match-main"><h4>${escapeHtml(x.maker.name)} · ${escapeHtml(cityName(x.maker.city))}</h4><p>${escapeHtml(fill(t('belowMoq'),{min:x.min,unit}))}</p></div>
    <div class="match-actions"><button class="secondary" type="button" onclick="setSmartQty(${x.min})">${escapeHtml(fill(t('recalcFor'),{min:x.min}))}</button></div>
  </div>`).join(''):'';
  $('#smartResult').innerHTML=summary+cards+belowCards;
}
function setSmartQty(qty){ $('#smartQty').value=qty; runSmartMatch(); }

function renderCompare(){
  const p=productById(currentProductId); const city=$('#compareCity')?.value||buyerCity; const qty=Math.max(1,Number($('#compareQty')?.value)||1); const unit=p.unit[lang];
  const {valid,below}=splitOffers(p,qty,city); const rows=valid.sort((a,b)=>a.total-b.total); below.sort((a,b)=>a.min-b.min);
  $('#compareHead').innerHTML=`<tr><th>${t('tableSupplier')}</th><th>${t('tableUnit')}</th><th>${t('tableMOQ')}</th><th>${t('tableDelivery')}</th><th>${t('tableETA')}</th><th>${t('tableRating')}</th><th>${t('tableTotal')}</th></tr>`;
  const supplierCell=(x,extra='')=>`<td class="supplier-td"><div class="supplier-cell"><div class="mini-logo">${x.maker.initials}</div><div><strong>${escapeHtml(x.maker.name)}</strong><div class="muted">${escapeHtml(cityName(x.maker.city))}${extra}</div></div></div></td>`;
  // data-label lets the phone layout show each row as a labelled card.
  const cell=(key,value,cls='')=>`<td data-label="${escapeHtml(t(key))}"${cls?` class="${cls}"`:''}>${value}</td>`;
  const validRows=rows.map((x,i)=>`<tr class="${i===0?'best-row':''}">${supplierCell(x,i===0?` · <span class="green">${t('tableBest')}</span>`:'')}${cell('tableUnit',formatPrice(x.unitPrice))}${cell('tableMOQ',x.min)}${cell('tableDelivery',formatPrice(x.delivery))}${cell('tableETA',`${x.eta} ${t('days')}`)}${cell('tableRating',`★ ${x.maker.rating}`)}${cell('tableTotal',`<strong>${formatPrice(x.total)}</strong>`,'total-cell')}</tr>`).join('');
  const belowRows=below.map(x=>`<tr class="below-row">${supplierCell(x)}<td colspan="5" class="muted">${escapeHtml(fill(t('belowMoq'),{min:x.min,unit}))}</td><td><button class="text-btn" type="button" onclick="setCompareQty(${x.min})">${escapeHtml(fill(t('recalcFor'),{min:x.min}))}</button></td></tr>`).join('');
  $('#compareBody').innerHTML=(validRows||`<tr><td colspan="7" class="muted">${t('noSupplier')}</td></tr>`)+belowRows;
}
function setCompareQty(qty){ $('#compareQty').value=qty; renderCompare(); }

function updateCalculatorSuppliers(){
  const p=productById(currentProductId); const current=$('#calcSupplier')?.value;
  setSelect('#calcSupplier',p.offers.map(o=>[o.maker,makerById(o.maker).name]),p.offers.some(o=>o.maker===current)?current:p.offers[0].maker);
}
function calculateQuote(){
  const p=productById(currentProductId); const makerId=$('#calcSupplier')?.value||p.offers[0].maker; const offer=p.offers.find(o=>o.maker===makerId)||p.offers[0]; const maker=makerById(offer.maker); let qty=Math.max(1,Number($('#calcQty')?.value)||1); const city=$('#calcCity')?.value||buyerCity; const mode=$('#deliveryMode')?.value||'standard';
  const min=minQty(offer); const raised=qty<min; if(raised) qty=min;
  const note=$('#calcMinNote'); note.classList.toggle('hidden',!raised);
  note.innerHTML=raised?`<span>${escapeHtml(fill(t('minOrderNote'),{maker:maker.name,min,unit:p.unit[lang]}))}</span><button class="text-btn" type="button" onclick="setCalcQty(${min})">${escapeHtml(fill(t('setMin'),{min}))}</button>`:'';
  const x=offerCalc(p,offer,qty,city,mode);
  $('#calcTotal').textContent=formatPrice(x.total); $('#calcUnitPrice').textContent=`${formatPrice(x.unitPrice)} / ${p.unit[lang]}`; $('#calcGoods').textContent=formatPrice(x.goods); $('#calcDiscount').textContent=x.discount?`−${formatPrice(x.discount)}`:'0 ₸'; $('#calcDelivery').textContent=formatPrice(x.delivery); $('#calcEta').textContent=`${x.eta} ${x.eta===1?t('day'):t('days')}`; $('#calcSaving').textContent=x.saving>0?formatPrice(x.saving):'—'; $('#quoteBadge').textContent=mode==='express'?'EXPRESS':mode==='pickup'?'PICKUP':'B2B';
  $('#addCalculatedToCart').dataset.product=p.id; $('#addCalculatedToCart').dataset.maker=maker.id; $('#addCalculatedToCart').dataset.qty=qty; $('#addCalculatedToCart').dataset.city=city; $('#addCalculatedToCart').dataset.mode=mode;
}
function setCalcQty(qty){ $('#calcQty').value=qty; calculateQuote(); }

function quickAdd(productId){
  const p=productById(productId); const best=p.offers.map(o=>({o,m:makerById(o.maker)})).sort((a,b)=>a.o.tiers[0][1]-b.o.tiers[0][1])[0]; addOfferToCart(productId,best.m.id,minQty(best.o),buyerCity,'standard');
}
function addOfferToCart(productId,makerId,qty,destination,mode='standard'){
  const p=productById(productId); const offer=p.offers.find(o=>o.maker===makerId); if(!offer)return; qty=Math.max(Number(qty)||1,minQty(offer));
  const key=`${productId}|${makerId}|${destination}|${mode}`; const existing=cart.find(x=>x.key===key); if(existing) existing.qty+=qty; else cart.push({key,productId,makerId,qty,destination,mode}); saveCart(); renderCart(); showToast(`${t('addedToCart')}: ${p.name[lang]} × ${qty}`);
}
function saveCart(){store.set('fd-cart-v2',JSON.stringify(cart));updateCartCount();}
function updateCartCount(){$('#cartCount').textContent=cart.length;}
function changeCartQty(key,delta){ const item=cart.find(x=>x.key===key); if(!item)return; const offer=productById(item.productId).offers.find(o=>o.maker===item.makerId); item.qty=Math.max(minQty(offer),item.qty+delta); saveCart();renderCart(); }
function removeCartItem(key){cart=cart.filter(x=>x.key!==key);saveCart();renderCart();}
function cartLines(){
  return cart.map(item=>{ const p=productById(item.productId); const offer=p?.offers.find(o=>o.maker===item.makerId); return p&&offer?{item,x:offerCalc(p,offer,item.qty,item.destination,item.mode)}:null; }).filter(Boolean);
}
function renderCart(){
  updateCartCount(); const box=$('#cartItems'); if(!box)return; const lines=cartLines();
  $('#checkoutButton').disabled=!lines.length; $('#checkoutButton').textContent=currentUser?t('checkout'):t('loginToCheckout');
  if(!lines.length){box.innerHTML=`<div class="empty-state"><div>🛒</div><p>${t('emptyCart')}</p></div>`;$('#cartItemsCount').textContent=`0 ${t('items')}`;['#cartGoods','#cartDelivery','#cartTotal'].forEach(id=>{$(id).textContent='0 ₸';});return;}
  box.innerHTML=lines.map(({item,x})=>{ const p=x.product; return `<div class="cart-row"><div class="cart-item-main"><strong>${p.icon} ${escapeHtml(p.name[lang])}</strong><span>${escapeHtml(x.maker.name)} · ${formatPrice(x.unitPrice)}/${escapeHtml(p.unit[lang])}</span><span>🚚 ${escapeHtml(cityName(item.destination))} · ${t(item.mode+'Delivery')} · ${formatPrice(x.delivery)} · ${x.eta} ${x.eta===1?t('day'):t('days')}</span></div><div class="qty-stepper"><button type="button" onclick="changeCartQty('${escapeAttr(item.key)}',-1)" aria-label="−1">−</button><span>${item.qty}</span><button type="button" onclick="changeCartQty('${escapeAttr(item.key)}',1)" aria-label="+1">+</button></div><div class="cart-row-price">${formatPrice(x.total)}</div><button class="remove-btn" type="button" onclick="removeCartItem('${escapeAttr(item.key)}')" title="${t('remove')}" aria-label="${t('remove')}">×</button></div>`; }).join('');
  const goods=lines.reduce((s,{x})=>s+x.goods,0), delivery=lines.reduce((s,{x})=>s+x.delivery,0);
  $('#cartItemsCount').textContent=`${lines.length} ${t('items')}`;$('#cartGoods').textContent=formatPrice(goods);$('#cartDelivery').textContent=formatPrice(delivery);$('#cartTotal').textContent=formatPrice(goods+delivery);
}

function showCartStep(step,focus=true){
  $('#cartStep').classList.toggle('hidden',step!=='cart'); $('#checkoutForm').classList.toggle('hidden',step!=='form'); $('#checkoutSuccess').classList.toggle('hidden',step!=='done');
  if(focus&&step==='form') $('#coName').focus();
  if(focus&&step==='done') $('#checkoutSuccess').focus();
}
const ORDER_ERRORS={missing_fields:'fillRequired',invalid_bin:'binInvalid',invalid_contact:'contactInvalid',below_min_order:'orderBelowMin',unknown_offer:'orderUnavailable',empty_cart:'emptyCart'};
async function submitCheckout(e){
  e.preventDefault(); const err=$('#checkoutError'); const v=id=>$(id).value.trim();
  const showError=message=>{err.textContent=message; err.classList.toggle('hidden',!message);};
  const bin=v('#coBin'), contact=v('#coContact'); let message='';
  if(!v('#coName')||!v('#coPerson')||!contact) message=t('fillRequired');
  else if(bin && !/^\d{12}$/.test(bin)) message=t('binInvalid');
  else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact) && contact.replace(/\D/g,'').length<10) message=t('contactInvalid');
  showError(message); if(message)return;
  const submit=$('#checkoutForm [type="submit"]'); const label=submit.textContent; submit.disabled=true; submit.textContent=t('sending');
  try{
    const {ok,status,data}=await api('/api/orders/',{method:'POST',body:{
      company:v('#coName'),bin,contactPerson:v('#coPerson'),contact,comment:v('#coComment'),lang,
      items:cartLines().map(({item})=>({product:item.productId,maker:item.makerId,qty:item.qty,destination:item.destination,mode:item.mode})),
    }});
    if(status===401){ setUser(null); navigate('#/login?next=/cart'); return; }
    if(!ok){ showError(t(ORDER_ERRORS[data.error]||'orderFailed')); return; }
    // Totals and supplier list come from the server, which priced the order from the database.
    $('#checkoutSuccess').innerHTML=`<div class="success-icon">✓</div><h3>${escapeHtml(fill(t('successTitle'),{id:data.number}))}</h3><p class="muted">${escapeHtml(v('#coName'))}${bin?` · ${t('bin')} ${escapeHtml(bin)}`:''} · ${escapeHtml(contact)}</p><p>${t('successText')}</p><ul class="success-list">${data.suppliers.map(s=>`<li><span class="mini-logo">${escapeHtml(s.initials)}</span><span><b>${escapeHtml(s.name)}</b><small>${escapeHtml(cityName(s.city))} · ${s.count} ${t('positions')}</small></span><strong>${formatPrice(s.total)}</strong></li>`).join('')}</ul><div class="cart-total"><span>${t('total')}</span><strong>${formatPrice(data.total)}</strong></div><div class="success-actions"><a class="secondary" href="#/account">${t('myOrders')}</a><a class="primary" href="#/">${t('done')}</a></div>`;
    cart=[]; saveCart(); renderCart(); $('#checkoutForm').reset(); showError(''); showCartStep('done');
  } catch {
    showError(t('orderFailed'));
  } finally {
    submit.disabled=false; submit.textContent=label;
  }
}

function renderProductPage(p){
  $('#productPage').innerHTML=`<div class="product-modal-hero"><div class="product-modal-icon cat-${p.category}">${productArt(p)}</div><div class="product-modal-info"><span class="mini-label">${escapeHtml(categoryName(p.category))}</span><h1 class="page-title" tabindex="-1">${escapeHtml(p.name[lang])}</h1><p>${t('retail')}: ${formatPrice(p.retail)} · ${t('from')} ${formatPrice(lowestPrice(p))} / ${escapeHtml(p.unit[lang])}</p><p>${t('description')}: ${escapeHtml(p.description[lang]||'')}</p></div></div><div class="tier-table"><div class="tier-row header"><span>${t('supplier')}</span><span>${t('tierFrom')}</span><span>${t('tierPrice')}</span></div>${p.offers.flatMap(o=>{const m=makerById(o.maker);return o.tiers.map(([q,price])=>`<div class="tier-row"><span>${escapeHtml(m.name)}</span><span>${Math.max(q,m.minOrder)}+</span><strong>${formatPrice(price)}</strong></div>`)}).join('')}</div><div class="product-modal-actions"><button class="primary" type="button" onclick="quickAdd('${p.id}')">${t('add')}</button><a class="secondary" href="#/smart-match?product=${p.id}"><span aria-hidden="true">✨</span>Smart Match</a><button class="secondary" type="button" onclick="copyLink()"><span aria-hidden="true">🔗</span>${t('copyLink')}</button></div>`;
  updateCalculatorSuppliers(); renderCompare(); calculateQuote();
}
function renderMakerPage(m){
  const ps=PRODUCTS.filter(p=>p.offers.some(o=>o.maker===m.id));
  $('#makerPage').innerHTML=`<div class="manufacturer-profile-head"><div class="maker-logo">${m.initials}</div><div><span class="mini-label">${t('demoManufacturer')}</span><h1 class="page-title" tabindex="-1">${escapeHtml(m.name)} <span class="verified-icon">●</span></h1><p class="muted">📍 ${escapeHtml(cityName(m.city))} · ${t('verifiedProfile')}</p></div></div><div class="profile-grid"><div><strong>★ ${m.rating}</strong><span>${t('rating')}</span></div><div><strong>${m.minOrder}</strong><span>${t('minOrder')}</span></div><div><strong>${m.dispatch} ${m.dispatch===1?t('day'):t('days')}</strong><span>${t('dispatch')}</span></div></div><p class="profile-description">${escapeHtml(m.description[lang])}</p><span class="mini-label">${t('productOffers')}</span><div class="profile-products">${ps.map(p=>`<a href="#/product/${p.id}">${p.icon} ${escapeHtml(p.name[lang])}</a>`).join('')}</div><button class="secondary copy-link" type="button" onclick="copyLink()"><span aria-hidden="true">🔗</span>${t('copyLink')}</button>`;
}

// Buyer accounts: sign-in state, login/registration forms, account page.
async function loadUser(){ const {data}=await api('/api/auth/me/'); setUser(data.user||null); }
function setUser(user){
  // A different account must not inherit the previous buyer's details in the checkout form.
  if(user?.email!==currentUser?.email) $('#checkoutForm')?.reset();
  currentUser=user;
  $('#accountLabel').textContent=user?(user.company||user.email):t('login');
  $('#accountLink').href=user?'#/account':'#/login';
  if($('#cartItems')) renderCart();
}
// Only same-site paths like "/cart" are accepted as a return address.
function nextHash(params){ const next=params.get('next')||''; return /^\/[\w\-/]*$/.test(next)?`#${next}`:'#/account'; }
function showAuthTab(tab,focus=true){
  $$('[data-auth-tab]').forEach(el=>el.setAttribute('aria-selected',String(el.dataset.authTab===tab)));
  $('#loginForm').classList.toggle('hidden',tab!=='login'); $('#registerForm').classList.toggle('hidden',tab!=='register');
  $$('.auth-form .form-error').forEach(el=>el.classList.add('hidden'));
  if(focus) $(tab==='login'?'#loginEmail':'#regEmail').focus();
}
const AUTH_ERRORS={invalid_credentials:'invalidCredentials',too_many_attempts:'tooManyAttempts',email_taken:'emailTaken',invalid_email:'invalidEmail',missing_fields:'fillRequired',invalid_bin:'binInvalid',invalid_phone:'invalidPhone'};
function formError(form,data){
  const el=$('.form-error',form); const text=data?(data.error==='weak_password'?`${t('weakPassword')}: ${(data.messages||[]).join(' ')}`:t(AUTH_ERRORS[data.error]||'requestFailed')):'';
  el.textContent=text; el.classList.toggle('hidden',!text);
}
async function submitAuthForm(form,url,body){
  const submit=$('[type="submit"]',form); submit.disabled=true; formError(form,null);
  try{
    const {ok,data}=await api(url,{method:'POST',body});
    if(!ok){ formError(form,data); return; }
    setUser(data.user); form.reset(); navigate(nextHash(parseRoute().params));
  } catch { formError(form,{}); }
  finally { submit.disabled=false; }
}
function submitLogin(e){
  e.preventDefault(); submitAuthForm(e.target,'/api/auth/login/',{email:$('#loginEmail').value.trim(),password:$('#loginPassword').value});
}
function submitRegister(e){
  e.preventDefault();
  submitAuthForm(e.target,'/api/auth/register/',{email:$('#regEmail').value.trim(),password:$('#regPassword').value,company:$('#regCompany').value.trim(),
    bin:$('#regBin').value.trim(),contactPerson:$('#regPerson').value.trim(),phone:$('#regPhone').value.trim()});
}
async function submitProfile(e){
  e.preventDefault(); const form=e.target; const saved=$('.form-success',form); saved.classList.add('hidden'); formError(form,null);
  const {ok,status,data}=await api('/api/auth/profile/',{method:'POST',body:{company:$('#profCompany').value.trim(),bin:$('#profBin').value.trim(),
    contactPerson:$('#profPerson').value.trim(),phone:$('#profPhone').value.trim()}}).catch(()=>({ok:false,data:{}}));
  if(status===401){ setUser(null); navigate('#/login?next=/account'); return; }
  if(!ok){ formError(form,data); return; }
  setUser(data.user); renderAccountHead(); saved.classList.remove('hidden');
}
async function signOut(){ await api('/api/auth/logout/',{method:'POST'}).catch(()=>{}); setUser(null); navigate('#/'); }
function fillCheckoutFromProfile(){
  const fillIfEmpty=(id,value)=>{ if(!$(id).value) $(id).value=value||''; };
  fillIfEmpty('#coName',currentUser.company); fillIfEmpty('#coBin',currentUser.bin); fillIfEmpty('#coPerson',currentUser.contactPerson); fillIfEmpty('#coContact',currentUser.phone||currentUser.email);
}
function renderAccountHead(){
  $('#accountTitle').textContent=currentUser.company||currentUser.email; $('#accountEmail').textContent=currentUser.email;
}
async function renderAccount(reset){
  renderAccountHead();
  if(reset){ $('#profCompany').value=currentUser.company; $('#profBin').value=currentUser.bin; $('#profPerson').value=currentUser.contactPerson; $('#profPhone').value=currentUser.phone; $('#profileForm .form-success').classList.add('hidden'); }
  const box=$('#accountOrders'); const {ok,data}=await api('/api/orders/').catch(()=>({ok:false}));
  if(!ok){ box.innerHTML=`<p class="muted">${t('requestFailed')}</p>`; return; }
  box.innerHTML=data.orders.length?data.orders.map(o=>`<article class="account-order">
    <div class="account-order-head"><strong>${escapeHtml(o.number)}</strong><span class="status-pill status-${escapeHtml(o.status)}">${t('status_'+o.status)}</span></div>
    <p class="muted">${new Date(o.createdAt).toLocaleDateString(localeMap[lang],{day:'numeric',month:'long',year:'numeric'})}</p>
    <ul>${o.items.map(i=>`<li><span>${escapeHtml(productById(i.product)?.name[lang]||i.productName)} × ${i.qty}</span><small>${escapeHtml(i.makerName)} · ${escapeHtml(cityName(i.destination))}</small></li>`).join('')}</ul>
    <div class="account-order-total"><span>${t('total')}</span><strong>${formatPrice(o.total)}</strong></div>
  </article>`).join(''):`<p class="muted">${t('noOrders')}</p>`;
}

// Hash router: #/, #/catalog?q=&cat=&sort=, #/product/<id>, #/manufacturers, #/manufacturer/<id>, #/smart-match?product=&qty=&city=&priority=, #/cart.
const VIEWS={'':'home',catalog:'catalog',product:'product',manufacturers:'manufacturers',manufacturer:'manufacturer','smart-match':'smart',cart:'cart',login:'login',account:'account'};
const LEGACY={top:'#/',catalog:'#/catalog',manufacturers:'#/manufacturers',mapSection:'#/manufacturers',smartMatch:'#/smart-match',compare:'#/product/coffee',calculator:'#/product/coffee'};
function parseRoute(){
  const [path,query='']=location.hash.replace(/^#\/?/,'').split('?');
  const [name='',id='']=path.split('/').map(decodeURIComponent);
  return {name,id,params:new URLSearchParams(query)};
}
function navigate(hash){ if(location.hash===hash) renderRoute(); else location.hash=hash; }
// Old one-page links (#catalog, #product=coffee, #maker=alatau) keep working.
function redirectLegacyHash(){
  const hash=location.hash.slice(1); if(!hash||hash.startsWith('/'))return false;
  const [kind,id]=hash.split('=');
  const target=kind==='product'?`#/product/${id}`:kind==='maker'?`#/manufacturer/${id}`:LEGACY[hash]||'#/';
  history.replaceState(null,'',target); return true;
}
// reset=false re-renders the current page (e.g. after a language switch) without losing what the user entered.
function renderRoute({focus=true,scroll=true,reset=true}={}){
  redirectLegacyHash();
  const {name,id,params}=parseRoute(); let view=VIEWS[name]||'notfound'; let title='';
  if(view==='account'&&!currentUser){ history.replaceState(null,'','#/login?next=/account'); return renderRoute({focus,scroll,reset}); }
  if(view==='login'&&currentUser){ history.replaceState(null,'',nextHash(params)); return renderRoute({focus,scroll,reset}); }
  if(view==='product'){
    const p=productById(id);
    if(p){ if(reset){ currentProductId=p.id; const min=Math.min(...p.offers.map(minQty)); $('#compareQty').value=Math.max(min,30); $('#calcQty').value=Math.max(min,50); } renderProductPage(p); title=p.name[lang]; }
    else view='notfound';
  }
  if(view==='manufacturer'){ const m=makerById(id); if(m){ renderMakerPage(m); title=m.name; } else view='notfound'; }
  if(view==='home') renderHome();
  if(view==='catalog'){ $('#catalogSearch').value=params.get('q')||''; $('#categoryFilter').value=params.get('cat')||'all'; $('#sortFilter').value=params.get('sort')||'recommended'; renderProducts(); title=t('navCatalog'); }
  if(view==='manufacturers'){ renderManufacturers(); title=t('navManufacturers'); }
  if(view==='smart'){ if(reset) applySmartParams(params); else runSmartMatch(); title='Smart Match'; }
  if(view==='cart'){ renderCart(); if(reset) showCartStep('cart',false); title=t('cart'); }
  if(view==='login'){ if(reset) showAuthTab(params.get('tab')==='register'?'register':'login',false); title=t('login'); }
  if(view==='account'){ renderAccount(reset); title=t('account'); }
  if(view==='notfound') title=t('notFoundTitle');
  $$('.view').forEach(el=>{ el.hidden=el.dataset.view!==view; });
  $$('[data-route]').forEach(a=>{ if(a.dataset.route===view) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
  if(view==='login'||view==='account') $('#accountLink').setAttribute('aria-current','page'); else $('#accountLink').removeAttribute('aria-current');
  document.title=title?`${title} — FactoryDirect`:t('pageTitle');
  if(view==='manufacturers') showMap();
  if(scroll) window.scrollTo(0,0);
  if(focus) $(`.view[data-view="${view}"] .page-title`)?.focus({preventScroll:true});
}
function applySmartParams(params){
  if(productById(params.get('product'))) $('#smartProduct').value=params.get('product');
  if(Number(params.get('qty'))>0) $('#smartQty').value=Number(params.get('qty'));
  if(CITIES[params.get('city')]) $('#smartCity').value=params.get('city');
  if(['balanced','price','speed','rating'].includes(params.get('priority'))) $('#smartPriority').value=params.get('priority');
  runSmartMatch();
}
// Keeps catalog filters in the address without adding history entries.
function syncCatalogUrl(){
  const params=new URLSearchParams(); const q=$('#catalogSearch').value.trim(), cat=$('#categoryFilter').value, sort=$('#sortFilter').value;
  if(q)params.set('q',q); if(cat!=='all')params.set('cat',cat); if(sort!=='recommended')params.set('sort',sort);
  history.replaceState(null,'',`#/catalog${params.size?`?${params}`:''}`); renderProducts();
}
// The 2GIS map needs a visible container, so it starts on the first visit to the manufacturers page.
function showMap(){
  if(!mapStarted){ mapStarted=true; initMap(); } else gisMap?.invalidateSize();
}
async function copyLink(){
  try { await navigator.clipboard.writeText(location.href); showToast(t('linkCopied')); } catch { showToast(location.href); }
}

function showToast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>el.classList.remove('show'),2500);}
function escapeHtml(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function escapeAttr(v){return String(v??'').replace(/'/g,'&#39;');}

function initReveal(){const nodes=$$('.reveal');if(!('IntersectionObserver'in window)){nodes.forEach(n=>n.classList.add('visible'));return;}const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}}),{threshold:.08});nodes.forEach(n=>io.observe(n));}

function bindEvents(){
  $('#languageSelect').addEventListener('change',e=>{lang=e.target.value;store.set('fd-language',lang);applyI18n();});
  $('#buyerCity').addEventListener('change',e=>setBuyerCity(e.target.value));
  $('#themeToggle').addEventListener('click',toggleTheme);
  $('#mobileMenuButton').addEventListener('click',()=>{const n=$('#mainNav');const open=n.classList.toggle('open');$('#mobileMenuButton').setAttribute('aria-expanded',String(open));});
  $$('#mainNav a').forEach(a=>a.addEventListener('click',()=>$('#mainNav').classList.remove('open')));
  $('.skip-link').addEventListener('click',e=>{e.preventDefault();$('#main').focus();});
  $('#heroSearchForm').addEventListener('submit',e=>{e.preventDefault();const q=$('#heroSearch').value.trim();navigate(`#/catalog${q?`?${new URLSearchParams({q})}`:''}`);});
  $('#catalogSearch').addEventListener('input',syncCatalogUrl);$('#categoryFilter').addEventListener('change',syncCatalogUrl);$('#sortFilter').addEventListener('change',syncCatalogUrl);
  $('[data-jump-smart]').addEventListener('click',jumpToHeroMatch);
  $('#parseSmartText').addEventListener('click',parseSmartText);$('#runSmartMatch').addEventListener('click',runSmartMatch);
  ['#compareCity','#compareQty'].forEach(id=>$(id).addEventListener('input',renderCompare));
  ['#calcSupplier','#calcQty','#calcCity','#deliveryMode'].forEach(id=>$(id).addEventListener('input',calculateQuote));
  $('#addCalculatedToCart').addEventListener('click',e=>{const d=e.currentTarget.dataset;addOfferToCart(d.product,d.maker,Number(d.qty),d.city,d.mode);});
  $('#checkoutButton').addEventListener('click',()=>{
    if(!cart.length){showToast(t('emptyCart'));return;}
    if(!currentUser){navigate('#/login?next=/cart');return;}
    fillCheckoutFromProfile(); showCartStep('form');
  });
  $$('[data-auth-tab]').forEach(tab=>tab.addEventListener('click',()=>showAuthTab(tab.dataset.authTab)));
  $('#loginForm').addEventListener('submit',submitLogin);
  $('#registerForm').addEventListener('submit',submitRegister);
  $('#profileForm').addEventListener('submit',submitProfile);
  $('#logoutButton').addEventListener('click',signOut);
  $('#checkoutBack').addEventListener('click',()=>showCartStep('cart'));
  $('#checkoutForm').addEventListener('submit',submitCheckout);
  $$('#coBin,.bin-input').forEach(input=>input.addEventListener('input',e=>{e.target.value=e.target.value.replace(/\D/g,'').slice(0,12);}));
  $('#mapReset').addEventListener('click',()=>fitKazakhstan());
  window.addEventListener('hashchange',()=>renderRoute());
}

async function init(){
  initTheme(); bindEvents();
  try { await Promise.all([loadCatalog(),loadUser()]); }
  catch(error){
    console.error(error); applyStaticTexts();
    $('#main').insertAdjacentHTML('afterbegin',`<div class="load-error" role="alert">${escapeHtml(t('catalogFailed'))}</div>`);
    return;
  }
  if(!CITIES[buyerCity]) buyerCity=Object.keys(CITIES)[0];
  // Drop cart lines whose product or offer was removed in the admin.
  cart=cart.filter(item=>productById(item.productId)?.offers.some(o=>o.maker===item.makerId)); saveCart();
  fillControls(); applyI18n(); renderRoute({focus:false}); initReveal();
}
document.addEventListener('DOMContentLoaded',init);

window.quickAdd=quickAdd;window.focusCity=focusCity;window.addOfferToCart=addOfferToCart;window.changeCartQty=changeCartQty;window.removeCartItem=removeCartItem;
window.setSmartQty=setSmartQty;window.setCompareQty=setCompareQty;window.setCalcQty=setCalcQty;window.copyLink=copyLink;

function productArt(p){const known=['coffee','water','tshirt','chocolate','cleaner','headphones','box','profile'];const id=known.includes(p.id)?p.id:'box';return `<img class="product-art" src="assets/${id}.svg" alt="" loading="lazy">`;}

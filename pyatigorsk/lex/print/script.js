// Скрипт для современного сайта Lex-print
$(document).ready(function() {
    // Плавная прокрутка при клике на ссылки навигации
    $('a[href*="#"]').on('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Изменение стиля навигации при прокрутке
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
            $('.scroll-to-top').addClass('active');
        } else {
            $('.navbar').removeClass('scrolled');
            $('.scroll-to-top').removeClass('active');
        }
    });

    // Активация текущего пункта меню при прокрутке
    $(window).scroll(function() {
        const scrollDistance = $(window).scrollTop();
        $('section').each(function(i) {
            if ($(this).position().top <= scrollDistance + 100) {
                $('.navbar-nav a.active').removeClass('active');
                $('.navbar-nav a').eq(i).addClass('active');
            }
        });
    }).scroll();

    // Анимация элементов при прокрутке
    function animateOnScroll() {
        $('.animate-on-scroll').each(function() {
            const position = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll + windowHeight > position) {
                $(this).addClass('animated');
            }
        });
    }

    $(window).scroll(animateOnScroll);
    animateOnScroll();

    // Закрытие мобильного меню при клике на ссылку
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Инициализация всплывающих подсказок
    $('[data-toggle="tooltip"]').tooltip();

    // Обработка отправки формы
    $('form').submit(function(e) {
        e.preventDefault();
        // Здесь будет код для отправки формы
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
        this.reset();
    });

    // Карточки услуг отображаются без эффектов раскрытия/закрытия
    // Код для анимации карточек услуг удален по запросу пользователя

    // Загрузка данных из copy.json и создание элементов портфолио
    $.getJSON('copy.json', function(data) {
        // Очищаем существующие элементы портфолио
        $('#portfolio .row.g-4').empty();
        
        // Добавляем новые элементы из JSON файла
        $.each(data.photos, function(index, item) {
            const portfolioItem = `
                <div class="col-md-4">
                    <div class="portfolio-item">
                        <img src="${item.url}" alt="${item.title}" class="img-fluid">
                        <div class="portfolio-overlay">
                            <div class="portfolio-content">
                                <h4>${item.title}</h4>
                                <p>${item.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            $('#portfolio .row.g-4').append(portfolioItem);
        });
    }).fail(function(jqxhr, textStatus, error) {
        console.error("Ошибка загрузки JSON: " + textStatus + ", " + error);
    });
    
    // Инициализация галереи портфолио
    $(document).on('click', '.portfolio-item', function() {
        const imgSrc = $(this).find('img').attr('src');
        const title = $(this).find('h4').text();
        const description = $(this).find('p').text();
        
        // Здесь можно добавить код для открытия модального окна с изображением
        console.log('Открыть изображение:', imgSrc, title, description);
    });
    // Загрузка данных из copy.json и создание элементов услуг
    $.getJSON('copy.json', function(data) {
        // Очищаем существующие элементы услуг
        $('#services .row').empty();
        
        // Добавляем новые элементы из JSON файла
        $.each(data.services, function(index, item) {
            const serviceItem = `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="service-item">
                        <div class="service-content">
                            <h4>${item.title}</h4>
                            <div class="price">${item.price}</div>
                            <p>${item.description}</p>
                        </div>
                    </div>
                </div>
            `;
            $('#services .row').append(serviceItem);
        });
    }).fail(function(jqxhr, textStatus, error) {
        console.error("Ошибка загрузки JSON: " + textStatus + ", " + error);
    });
});

// Создание элементов услуг напрямую
$(document).ready(function() {
    const services = [
        {
            title: "Печать флагов",
            price: "от 350 ₽",
            description: "Качественная печать флагов любых размеров"
        },
        {
            title: "Переплет дипломов",
            price: "от 250 ₽",
            description: "Профессиональный переплет дипломных работ"
        },
        {
            title: "Брендирование",
            price: "от 150 ₽",
            description: "Брендирование различных поверхностей"
        },
        {
            title: "Печать студенческих планшетов",
            price: "от 500 ₽",
            description: "ПВХ пластик"
        },
        {
            title: "Изготовление календарей",
            price: "от 450 ₽",
            description: "Календари различных форматов"
        },
        {
            title: "Печать баннер, ролапп, самоклейка",
            price: "Цена по запросу",
            description: "Широкоформатная печать рекламных материалов"
        },
        {
            title: "Световые короба",
            price: "Цена по запросу",
            description: "Изготовление световых коробов"
        },
        {
            title: "Ксерокс, печать",
            price: "Цена по запросу",
            description: "Копировальные услуги"
        },
        {
            title: "Печать проектной документации",
            price: "Цена по запросу",
            description: "Печать чертежей и документации"
        },
        {
            title: "Широкоформатная печать",
            price: "Цена по запросу",
            description: "Печать строительных чертежей"
        }
    ];

    // Очищаем существующие элементы
    $('#services .row').empty();
    
    // Добавляем все услуги
    services.forEach(function(service) {
        const serviceHTML = `
            <div class="col-md-4 col-sm-6">
                <div class="service-item">
                    <div class="service-content">
                        <h4>${service.title}</h4>
                        <div class="price">${service.price}</div>
                        <p>${service.description}</p>
                    </div>
                </div>
            </div>
        `;
        $('#services .row').append(serviceHTML);
    });
});
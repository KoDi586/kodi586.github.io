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
    });}
);
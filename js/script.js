$(document).ready(function () {
    $('.stocks-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        infinite: true,
        speed: 1200,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                }
            },
        ]
    });
});

$(document).ready(function () {
    $('.solutions-slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        infinite: true,
        speed: 1200
    });
});

$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 1200,
        slidesToShow: 2,
        infinite: true,
        speed: 1200,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                }
            },
        ]
    });
});

function validateForms(form) {
    $(form).validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: "Пожалуйста, введите своё имя",
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введён адрес почты"
            }
        }
    });
}

validateForms('#order-form form');
validateForms('#partnering');
validateForms('#consultation');

$('input[name=phone]').mask("+7 (999) 999-99-99");

$('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function () {
        $(this).find("input").val("");


        $('form').trigger('reset');
    });
    return false;
});

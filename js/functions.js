$(document).on('click', 'a[href^="#"]', function (event) {
    if (event.currentTarget.className.includes("carousel-control")) { return }

    event.preventDefault();

    const offsetToScroll = possibleMobile() ? 0 : 20;

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - offsetToScroll
    }, 'slow');

    $('label.hamburguer-menu input').prop('checked', false);
});

const showNavbar = function() {
    const headerHeight = $('header').height() - 70;
    if($(window).scrollTop() > headerHeight) {
        $('nav').parent().removeClass('hidden-content');
        $('label.hamburguer-menu').removeClass('hidden-content');
        $('#header-text').hide()
    } else if($(window).scrollTop() < headerHeight) {
        $('nav').parent().addClass('hidden-content');
        $('label.hamburguer-menu').addClass('hidden-content');
        $('#header-text').show()
    }
};


$(document).ready(function() {
    $('#spinner-loading').addClass('hidden');
    $('#site-content').removeClass('hidden');

    AOS.init();

    $(window).scroll(function() {
        showNavbar();
    });
});

$('#go-to-top').on('click', function(_event) {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
})

$('#send-contact-form').on('click', function(event) {
    const $form = $(event.currentTarget).parents('.form-horizontal');
    const $name = $form.find('#inputName');
    const $email = $form.find('#inputEmail');
    const $body = $form.find('#inputBody');
    const $emptyFormAlert = $form.find('#empty-form-alert');

    if(!$name.val()) {
        event.preventDefault();
        $emptyFormAlert.text('Please add a name :)');
    } else if(!$email.val()) {
        event.preventDefault();
        $emptyFormAlert.text('Email address required!');
    } else if(!$body.val()) {
        event.preventDefault();
        $emptyFormAlert.text('Just a few words...');
    } else {
        $emptyFormAlert.text('Sent!');
    }
})

function possibleMobile() {
    return window.innerWidth <= 800;
}

$('#Projects #projects-all').on('click', function(e) {
    $('#Projects .projects-picker span').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('#Projects .project').removeClass('hidden');
})
$('#Projects #projects-fullstack').on('click', function(e) {
    $('#Projects .projects-picker span').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('#Projects .project').addClass('hidden');
    $('#Projects #p4').removeClass('hidden');
    $('#Projects #p3').removeClass('hidden');
})
$('#Projects #projects-frontend').on('click', function(e) {
    $('#Projects .projects-picker span').removeClass('active');
    $(e.currentTarget).addClass('active');

    $('#Projects .project').addClass('hidden');
    $('#Projects #p1').removeClass('hidden');
    $('#Projects #p2').removeClass('hidden');
})

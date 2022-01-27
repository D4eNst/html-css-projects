$(document).ready(function(){
    $('.menuToggle').click(function(e) {
        e.preventDefault();
        setTimeout(function() {
            $('.qwe').toggleClass('header__menu-nav-ul-li_active');
          }, 300);
        $('.qwert').toggleClass('header__menu-nav-ul-li_active');
        
    });


    $('.carusel__iner').slick({
        centerMode: true,
        slidesToShow: 3,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/Arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/Arrow_right.png"></button>'
    });

    $('.carusel__otziv').css("display", 'none');
    $('.slick-center .carusel__otziv').css("display", 'flex');

    $('.slick-prev').click(function() {
      $('.carusel__otziv').fadeOut('slow');
      $('.slick-center .carusel__otziv').fadeIn('fast');
    });

    $('.slick-next').click(function() {
      $('.carusel__otziv').fadeOut('slow');
      $('.slick-center .carusel__otziv').fadeIn('fast');
    });

    $('.plan__wrapper-descr-bln-item').click(function(e) {
      e.preventDefault();
      $('.plan__wrapper-descr-bln-item').removeClass('plan__wrapper-descr-bln-item_active');
      $(this).addClass('plan__wrapper-descr-bln-item_active');
      
  });
});
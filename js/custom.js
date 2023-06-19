$(document).ready(function(){
    $('#top-hd').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 900,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>'
    });
});

$(window).scroll(function(){
  var sticky = $('.header-content'),
      scroll = $(window).scrollTop();

  if (scroll >= 50) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

$(document).ready(function() {
    $('.account').hover(function() {
      $('.login-btn').toggleClass("active");
    });

    $('.account').hover(function() {
        $('.login-btn').addClass("active");
      },
      function() {
        $('.login-btn').removeClass("active");
      }
    );
});

$(document).ready(function() {
  $('.search').click(function() {
    $('.search-sub').toggleClass("active");
  });
});

$(document).click(function(event) {
  var target = $(event.target);
  if (!target.is('.search') && !target.closest('.search').length && !target.is('.search-sub') && !target.closest('.search-sub').length) {
    $('.search-sub').removeClass('active');
  }
});

$(document).ready(function() {
    var elements = $('#cate li');
    elements.each(function(i) {
        $(this).addClass('item-menu category'+i);
        $(this).find('.cate-child').addClass('cate-sub'+i);
      });
});

$(document).ready(function() {
    $('.item-menu').hover(function() {
        $(".item-menu").removeClass("active");
        $(this).addClass("active");
        let ind = $(this).index();
        $('.cate-child').hide();
        $('.cate-sub'+ind).show();
      },
      function() {
        $(".item-menu").removeClass("active");
        $(this).removeClass("active");
        let ind = $(this).index();
        $('.cate-sub'+ind).hide();
      }
    );
});
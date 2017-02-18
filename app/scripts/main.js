$(window).scroll(function(){
  var sticky = $('.nb-header'),
      scroll = $(window).scrollTop();
  if (sticky && sticky.length > 0 && scroll >= 50) {
    sticky.addClass('nb-header_fixed');
  } else {
    sticky.removeClass('nb-header_fixed');
  }
});

$('body').on('click', '.nb-menu__toggle', function () {
  $(this).toggleClass('nb-menu__toggle_active');
  $(this).closest('.nb-header').find('.nb-menu').toggle();
  $(this).closest('.nb-header').toggleClass('nb-header_opened');
});


$('body').on('click', '.nb-main-bottom__more', function () {
  var _self = $(this);
  if ($(this)[0].hasAttribute('disabled') === false) {
    $(this).addClass('nb-main-bottom__more_active');
    $(this).attr('disabled', 'disabled');
    setTimeout(function () {
      $(_self).removeClass('nb-main-bottom__more_active');
      $(_self).removeAttr('disabled', 'disabled');
    }, 2000);
  }
});

$('body').on('click', function () {
  if ($(this).hasClass('opened-mobile-filter')) {
    $(this).removeClass('opened-mobile-filter');
  }
});

$('body').on('click', '.nb-main-top__btn', function (e) {
  $(this).closest('body').toggleClass('opened-mobile-filter');
  return false;
});


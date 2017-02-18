console.log('\'Allo \'Allo!');

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

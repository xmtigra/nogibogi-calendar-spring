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
  return false;
});

$('body').on('click', function (e) {
  var filterItem = $('.nb-main-filter__item');
  if (filterItem && filterItem.length > 0 && $(filterItem).hasClass('nb-main-filter__item_opened')) {
    var myParent = $(e.target).closest('.nb-main-filter__item');
    if (myParent.length === 0) {
      $(filterItem).removeClass('nb-main-filter__item_opened');
    }
  }
  if ($(e.target).hasClass('opened-mobile-filter')) {
    $(e.target).removeClass('opened-mobile-filter');
    $(e.target).find('.nb-acardion').hide();
  }

});

$('body').on('click', '.nb-main-top', function (e) {
  $(this).closest('body').addClass('opened-mobile-filter');
  $(this).closest('body').find('.nb-acardion').show();
  // return false;
});

$('body').on('click', '.nb-main-filter__a', function (e) {
  $(e.target).closest('.nb-main-filter__item').toggleClass('nb-main-filter__item_opened');
  $(e.target).closest('.nb-main-filter__item').siblings('.nb-main-filter__item').removeClass('nb-main-filter__item_opened');

});

$('body').on('click', '.nb-main-menu__item', function (e) {
  if ($(this).hasClass('nb-main-menu__item_active') === false) {
    $(this).addClass('nb-main-menu__item_active').siblings('li').removeClass('nb-main-menu__item_active');
    var sort = $(this).attr('data-sort');
    $(this).closest('.nb-main-section').find('.nb-main-list__item').hide();

    if (sort && sort !== '' && sort !== 'all') {
      $(this).closest('.nb-main-section').find('.nb-main-list__item[data-sort="'+sort+'"]').show();
    } else {
      $(this).closest('.nb-main-section').find('.nb-main-list__item').show();
    }

  }
  return false;
});

$('body').on('click', 'input[name="distance[]"]', function clickInputDistance(e) {
  if(this.value === 'all') {
    $( 'input[name="distance[]"]').prop( "checked", false );
    $( 'input[name="distance[]"][value="all"]').prop( "checked", true );
  } else {
    $( 'input[name="distance[]"][value="all"]').prop( "checked", false );
  }
});

$('body').on('click', 'input[name="year[]"]', function clickInputDistance(e) {
  if(this.value === '2017') {
    $( 'input[name="year[]"]').prop( "checked", false );
    $( 'input[name="year[]"][value="2017"]').prop( "checked", true );
  } else {
    $( 'input[name="year[]"][value="2017"]').prop( "checked", false );
  }
});

$('body').on('click', 'input[name="year[]"]', function clickInputDistance(e) {
  if(this.value === 'y2018') {
    $( 'input[name="year[]"]').prop( "checked", false );
    $( 'input[name="year[]"][value="y2018"]').prop( "checked", true );
  } else {
    $( 'input[name="year[]"][value="y2018"]').prop( "checked", false );
  }
});

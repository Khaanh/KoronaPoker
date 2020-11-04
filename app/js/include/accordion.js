$('.js-toggleAcc').on('click', function(e) {
  e.preventDefault();
  let $this = $(this);

  if (!$this.hasClass('_is-active')) {
    $('.acc-body').slideUp(500);
    $('.js-toggleAcc').removeClass('_is-active');
    $('.acc-icon').removeClass('_is-rotated');
  }

  $this.toggleClass('_is-active');
  $this.next().slideToggle(300);
  $('.acc-icon',this).toggleClass('_is-rotated');
})
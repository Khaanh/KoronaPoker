$(window).on('scroll', function() {
  // Active btn to top
  if( $(this).scrollTop() > 300) {
    $('#js-linkGoTop').addClass('is-show')
  } else {
    $('#js-linkGoTop').removeClass('is-show')
  }
})

// Scroll next section
$('.js-scroll-next').click(function(e) {
  let next = $(this).closest('.hero').next('#next-section').offset().top;
  $('html, body').animate({scrollTop: next}, 'slow');
  e.preventDefault();
})

// Acttion btn to top
$('#js-linkGoTop').on('click', function() {
  $('html, body').animate({scrollTop:0}, 500)
  return false;
})

// Following Scroll
$('.nav > ul > li > a').on( 'click', function(){ 
  let link = $(this);
  let dest = link.attr('href');
  let body = document.querySelector('body');
  let mobMenu = document.querySelector('#js-mobMenu');
  let burgerBtn = document.querySelector('#js-burgerBtn');


  if(dest !== undefined && dest !== '') {
    $('html').animate({ 
      scrollTop: $(dest).offset().top - 86
    }, 1000);
  }

  if (dest !== undefined && dest !== '' && body.classList.contains('js-no-scroll') && 
      mobMenu.classList.contains('_is-open') && burgerBtn.classList.contains('_is-active')) {

    body.classList.remove('js-no-scroll');
    mobMenu.classList.remove('_is-open');
    burgerBtn.classList.remove('_is-active');

    $('html').animate({ 
      scrollTop: $(dest).offset().top - 86
    }, 1000);
    // alert('ads')
  }

  return false;
});
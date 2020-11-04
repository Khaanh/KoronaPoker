$(function() {
	//= include/markuplist
	//= include/default
	//= include/sliders
  //= include/accordion.js


  $('.js-reviewsCarousel').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    lazyLoad: 'ondemand',
    appendArrows: $('.js-reviewsNav')
  })


});



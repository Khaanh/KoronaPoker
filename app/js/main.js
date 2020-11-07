$(function() {
	//= include/markuplist
	//= include/default
	//= include/sliders
  //= include/accordion.js

  function initFunc() {
    slickReviews();   //Карусель блока отзывов
    maskPhone();      //Маски для телефона
  }
  initFunc();


  function slickReviews() {
    $('.js-reviewsCarousel').slick({
      infinite: true,
      autoplay: false,
      autoplaySpeed: 5000,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      lazyLoad: 'ondemand',
      appendArrows: $('.js-reviewsNav')
    })
  }

  function maskPhone() {
    $('.js-maskPhone').mask('+7 (999) 999-99-99', {autoclear: false})
  }



});



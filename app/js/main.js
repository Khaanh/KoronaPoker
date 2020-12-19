$(function() {
	//= include/markuplist
	//= include/default
	//= include/sliders
  //= include/accordion.js

  function initFunc() {
    slickReviews(); // CAROUSEL
    maskPhone(); // MASK FOR PHONE NUMBER
    playVideo(); // PLAY VIDEO YOUTUBE
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

  function playVideo() {
    let playVideo = document.querySelector('#js-playVideo');
    let videoContent = document.querySelector('#video-content');

    playVideo.addEventListener('click', function() {
      console.log('asd')
      videoContent.classList.add('_is-play')
      videoContent.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/u78k9NAkMf8?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    })
  }



  $('.js-tiltSmartphone').tilt({
    reset: false
  })

});



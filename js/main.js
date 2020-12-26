$(function() {
	//= include/markuplist
	//= include/default
	//= include/sliders
  //= include/accordion.js
  //= include/modals.js

  function initFunc() {
    slickReviews(); // CAROUSEL
    maskPhone(); // MASK FOR PHONE NUMBER
    playVideo(); // PLAY VIDEO YOUTUBE
    mobileMenu(); // TOGGLE MOBILE MENU
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
      appendArrows: $('.js-reviewsNav'),
      arrows: true,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          }
        }
      ]
    })
  };

  function maskPhone() {
    $('.js-maskPhone').mask('+7 (999) 999-99-99', {autoclear: false})
  };

  function playVideo() {
    let playVideo = document.querySelector('#js-playVideo');
    let videoContent = document.querySelector('#video-content');

    playVideo.addEventListener('click', function() {
      videoContent.classList.add('_is-play')
      videoContent.innerHTML = '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/u78k9NAkMf8?&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    })
  };

  function mobileMenu() {
    let burgerBtn = document.querySelector('#js-burgerBtn');
    let mobMenu = document.querySelector('#js-mobMenu');
    let body = document.querySelector('body');

    burgerBtn.addEventListener('click', (e) => {
      let _this = e.currentTarget;

      _this.classList.toggle('_is-active')
      body.classList.toggle('js-no-scroll')
      mobMenu.classList.toggle('_is-open')
    })
  };


});


//EVENT LISTENER LIST
document.addEventListener('DOMContentLoaded', appendBtnToHeader)
window.addEventListener('resize', appendBtnToHeader)
// window.addEventListener('scroll', scrollToTop)

// FUNCTIONAL APPEND BTN TO HEADER 
function appendBtnToHeader() {
  let headerContainer = document.querySelector('#js-headerContainer');
  let headerWidget = document.querySelector('#js-headerWidget');
  let btnCTA = document.querySelector('#js-btnCallToAct');

  if (window.innerWidth <= 1023) {
    headerContainer.append(btnCTA);
    } else {
      headerWidget.append(btnCTA);
    }
  };


// function scrollToTop() {
//   let offsetTop = window.pageYOffset;
//   let linkGoTop = document.querySelector('#js-linkGoTop');

//   if (offsetTop > 300 || undefined) {
//     linkGoTop.classList.add('is-active')
//   } else {
//     linkGoTop.classList.remove('is-active')
//   }


// }
// linkGoTop.addEventListener('click', () => {
//   $('html, body').animate({scrollTop:0}, 500)
//   return false;
// })

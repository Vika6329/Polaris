$(function () {

  $('.menu-btn, .header-menu__close').on('click', function () {
    $('.menu').toggleClass('menu--active');
    $('.menu-btn').toggleClass('menu-btn--active');
    $('body').toggleClass('lock');
    // $('body').toggleClass('overlay')
  });

  $('.brands__list').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,

    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 561,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });


  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    // autoplay: true,
    autoplaySpeed: 8000,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    // loopFillGroupWithBlank: true,
    // slidesPerGroup: 2,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    // infinite: false,

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    //   // clickable: true,
    // },

  });
});

const element = document.querySelector('.phone-input');
const maskOption = {
  mask: '+{380}(00)000-00-00',
};
const mask = IMask(element, maskOption);
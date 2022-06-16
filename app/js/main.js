$(function () {

  let header__top = $("#header__top");
  let header__content = $("#header__content");
  let header__contentH = header__content.innerHeight();
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function () {
    let header__contentH = header__content.innerHeight();
    scrollPos = $(this).scrollTop();

    if (scrollPos > 100) {
      header__top.addClass("fixed");
    } else {
      header__top.removeClass("fixed");
    }

    console.log(scrollPos);

  });

  $(".menu a, .header__content-link, .logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });



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
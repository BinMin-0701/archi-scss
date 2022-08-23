$(document).ready(function () {
  $('.slick-content').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          infinite: true,
        }
      },
    ],
    prevArrow: "<button type='button' class='slick-prev pull-left' id='btn-services'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right' id='btn-services'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});
$(".banner_wrapper").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
});

$("#slick_slider_about .slick_slider").slick({
  arrows: false,
  dots: true,
  appendDots: document.querySelector("#slick_slider_about .slick_dots"),
});

$("#slick_slider_blog .slick_slider").slick({
  arrows: false,
  dots: true,
  appendDots: document.querySelector("#slick_slider_blog .slick_dots"),
  slidesToShow: 3,
  slidesToScroll: 2,
  infinte: false,
  loop: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$("#slick_slider_team .slick_slider").slick({
  arrows: false,
  dots: true,
  appendDots: document.querySelector("#slick_slider_team .slick_dots"),
  slidesToShow: 3,
  slidesToScroll: 2,
  infinte: false,
  loop: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(document).on("click", ".hamburger", function () {
  $(this).toggleClass("is-active");
  $(".navbar_menu").toggleClass("active");
});

$(".lightbox_link").magnificPopup({
  type: "image",
  zoom: {
    enabled: true,
    duration: 300,
    easing: "ease-in-out",
    opener: function (openerElement) {
      return openerElement.parent().find(".lightbox_image");
    },
  },
});

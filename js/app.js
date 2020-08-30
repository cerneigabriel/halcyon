$(".banner_wrapper").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
});

$(".slick_slider").slick({
  dots: true,
  arrows: false,
});

$(document).ready(function () {
  $(".image_link").magnificPopup({ type: "image" });
});

$(document).on("click", ".hamburger", function () {
  $(this).toggleClass("is-active");
  $(".navbar_menu").toggleClass("active");
});

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

$("#header_slick_slider").slick({
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

$(document).on("click", ".navbar_open", function () {
  $(".navbar_nav").addClass("active");
  document.querySelector("#search_form input[name='search']").focus();
});

$(document).on("click", ".navbar_close", function () {
  $(".navbar_nav").removeClass("active");
});

$(document).on("click", ".navbar_menu > .item > a", function () {
  $(".navbar_nav").removeClass("active");
});

$(function () {
  $(window).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

$("#send_mail_form").submit(function (event) {
  event.preventDefault();

  var formData = new FormData(this);
  var action = $(this).attr("action");
  var method = $(this).attr("method");

  var errors = [];

  for (var pair of formData.entries()) {
    if (pair[1] === undefined || pair[1] === null || pair[1] === "") {
      errors.push(`Type something in ${pair[0]} field`);
    }
  }

  if (errors.length === 0) {
    Toast.fire({
      icon: "success",
      title: "Mail was sent",
      onDestroy: () => {
        for (var pair of formData.entries()) {
          $(`#send_mail_form [name="${pair[0]}"]`).val("").html("");
        }
      },
    });
  } else {
    Toast.fire({
      icon: "error",
      title: "Check for correctness",
    });
  }
});

$("#search_form").submit(function (event) {
  event.preventDefault();

  var search_text = $(this).find("[name='search']").val().toLowerCase();

  if (!window.find(search_text))
    Toast.fire({
      icon: "error",
      title: "No results found",
      timer: 2000,
    });

  $(".navbar_close").click();
});

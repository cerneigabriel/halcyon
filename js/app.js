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
});

$(document).on("click", ".navbar_close", function () {
  $(".navbar_nav").removeClass("active");
});

$(document).on("click", ".navbar_menu > .item > a", function () {
  $(".navbar_nav").removeClass("active");
});

document.querySelector("#send_mail_form").onsubmit = async (event) => {
  event.preventDefault();

  var formData = new FormData(document.querySelector("#send_mail_form"));
  var action = document.querySelector("#send_mail_form").getAttribute("action");
  var method = document.querySelector("#send_mail_form").getAttribute("method");

  var errors = [];

  for (var pair of formData.entries()) {
    console.log(pair[0] + ", " + pair[1]);
    if (pair[1] === undefined || pair[1] === null || pair[1] === "") {
      errors.push(`Type something in ${pair[0]} field`);
    }
  }

  if (errors.length === 0) {
    // let response = await fetch(action, {
    //   method: method,
    //   body: formData,
    // });

    // response
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     Toast.fire({
    //       icon: "error",
    //       title: "Something went wrong",
    //     });
    //   });

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
};

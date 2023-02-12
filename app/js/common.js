$(function () {
  // Custom JS
});
window.onload = function () {
  let menuBtn = document.querySelector(".menu_btn");
  let menu = document.querySelector(".navigation__menu");
  let link = document.querySelector(".navigation__menu_link");

  menuBtn.addEventListener("click", function () {
    document.body.classList.toggle("lock");
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
  });


  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });
};

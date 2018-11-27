$(document).ready(function(){
  var mainSwiper = new Swiper('.swiper-container-main', {
    pagination: {
      el: '.swiper-pagination-main',
      clickable: true
    },
  });
  var partnersSwiper = new Swiper('.swiper-container-partners', {
    navigation: {
        nextEl: '.swiper-button-next-partners',
        prevEl: '.swiper-button-prev-partners',
      },
      slidesPerView: 5,
      loop: true
  });
});

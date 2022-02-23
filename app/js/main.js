$(function () {

})

new Swiper('.slider__inner', {
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.slider__nav-arrow--right',
    prevEl: '.slider__nav-arrow--left',
  },
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
  },
})
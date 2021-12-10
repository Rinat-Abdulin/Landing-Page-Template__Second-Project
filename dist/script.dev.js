"use strict";

new Splide('.splide').mount();
new Splide('.splide1').mount();
var splide = new Splide('.splide1', {
  type: 'loop',
  perPage: 4,
  breakpoints: {
    768: {
      perPage: 1
    }
  }
});
var menu = document.querySelector('.main-info-block__menu');
var cross = document.querySelector('.main-info-block__cross');
var burger = document.querySelector('.menu__burger');
burger.addEventListener('click', function () {
  menu.style.display = 'block';
  setTimeout(function () {
    menu.style.left = '45%';
  }, 0);
});
cross.addEventListener('click', function () {
  menu.style.left = '170%';
  setTimeout(function () {
    menu.style.display = 'none';
  }, 500);
});
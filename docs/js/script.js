'use strict';

console.log('start');
$(".js-btn-nav").on("click", function () {
  $(".js-nav").addClass('header__menu-wrap-active');
});
$(".js-menu-close").on('click', function () {
  $(".js-nav").removeClass('header__menu-wrap-active');
});
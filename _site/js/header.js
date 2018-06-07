var $toggleMenu = $('#toggle-menu');

$(document).ready(function(){

  $toggleMenu.click(function () {
    $('.menu-container').slideToggle(550);
    $('.menu-item').toggleClass('js-menu-item-active');
    $('.hamburger').toggleClass('is-active');
    $('body, html').toggleClass('overflow-hidden');
  });

  $('.menu-link').click(function () {
    $('.menu-container').slideToggle(550);
    $('.menu-item').removeClass('js-menu-item-active');
    $('.hamburger').removeClass('is-active');
    $('body, html').removeClass('overflow-hidden');
  });

});


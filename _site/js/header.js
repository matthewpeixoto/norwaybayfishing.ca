var $toggleMenu = $('#toggle-menu');

$(document).ready(function(){

  $toggleMenu.click(function () {
    $('.menu-container').slideToggle(550);
    $('.menu-item').toggleClass('js-menu-item-active');
    $('.hamburger').toggleClass('is-active');
    $('body').toggleClass('overflow-hidden');
  });

});


(function() {
  var menuContainer = document.querySelector('.main-nav__list');
  var menuToggler = document.querySelector('.menu-toggler');

  function menuToggle() {
    menuContainer.classList.toggle('main-nav__list--visible');
    menuToggler.classList.toggle('menu-toggler--close');
  }

  menuContainer.classList.remove('main-nav__list--nojs');
  menuToggler.addEventListener('click', menuToggle);
}());

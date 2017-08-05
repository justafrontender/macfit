// dropdown menu
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

// popup windows
(function() {
  var popup = document.querySelector('.popup');
  var popupShade = document.querySelector('.popup-shade');
  var popupOpeners = document.querySelectorAll('.js__open-popup');
  var popupClosers = document.querySelectorAll('.popup-shade, .popup-button--close');

  function popupOpen(e) {
    e.preventDefault();
    popup.classList.add('popup--visible');
    popupShade.classList.add('popup-shade--visible');
    document.body.classList.add('body-fixed');
  }

  function popupClose(e) {
    e.preventDefault();
    popup.classList.remove('popup--visible');
    popupShade.classList.remove('popup-shade--visible');
    document.body.classList.remove('body-fixed');
  }

  if (popup) {
    for (var i = 0; i < popupOpeners.length; i++)
      popupOpeners[i].addEventListener('click', popupOpen);
    for (var i = 0; i < popupClosers.length; i++)
      popupClosers[i].addEventListener('click', popupClose);
  }
}());

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
  var popupClosers = document.querySelectorAll('.popup-shade, .js__close-popup');

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

// prevent page scrolling when popup opened on iOS
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi
(function () {
  var _overlay = document.querySelector('.popup');
  var _clientY = null; // remember Y position on touch start

  if (!_overlay)
    return false;

  _overlay.addEventListener('touchstart', function (event) {
      if (event.targetTouches.length === 1) {
          // detect single touch
          _clientY = event.targetTouches[0].clientY;
      }
  }, false);

  _overlay.addEventListener('touchmove', function (event) {
      if (event.targetTouches.length === 1) {
          // detect single touch
          disableRubberBand(event);
      }
  }, false);

  function disableRubberBand(event) {
      var clientY = event.targetTouches[0].clientY - _clientY;

      if (_overlay.scrollTop === 0 && clientY > 0) {
          // element is at the top of its scroll
          event.preventDefault();
      }

      if (isOverlayTotallyScrolled() && clientY < 0) {
          //element is at the top of its scroll
          event.preventDefault();
      }
  }

  function isOverlayTotallyScrolled() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
      return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
  }
}());

// quantity input
(function() {
  var buttons = document.querySelectorAll('.js__field-number--modify');

  if (!buttons) return false;

  for (var i = 0; i < buttons.length; i++)
    buttons[i].addEventListener('click', modifyFieldNumber);

  function modifyFieldNumber(e) {
    e.preventDefault();
    var action = e.target.attributes['data-action'].value,
    input = e.target.parentNode.querySelector('input.field-number__input'),
    step = parseFloat(input.getAttribute('data-step')) || 1,
    min = parseFloat(input.getAttribute('data-min')) || undefined,
    suffix = input.getAttribute('data-suffix') || '';

    if (action == 'increase')
      var newValue = parseFloat(input.getAttribute('data-value')) + step;
    else if (action == 'decrease') {
      var newValue = parseFloat(input.getAttribute('data-value')) - step;
    }

    if (newValue < min && min !== undefined)
      newValue = min;

    input.setAttribute('data-value', newValue);
    input.value = newValue + suffix;
  }
}());

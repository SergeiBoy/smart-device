'use strict';

(function () {
  var openButton = document.querySelector('.page-header__order-phone-call-link');
  var closeButton = document.querySelector('.popup__close-button');

  var popupWindow = document.querySelector('.popup');

  openButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupWindow.classList.add('popup--opened');
    closeButton.addEventListener('click', onCloseButtonClick);
    document.addEventListener('keydown', onPopupEscPress);
    document.addEventListener('click', onAroundPopupClick);
  });

  var onCloseButtonClick = function () {
    closePopup();
  };

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closePopup();
    }
  };

  var onAroundPopupClick = function (evt) {
    if (evt.target !== popupWindow) {
      evt.preventDefault();
      closePopup();
    }
  };

  var closePopup = function () {
    popupWindow.classList.remove('popup--opened');
    closeButton.removeEventListener('click', onCloseButtonClick);
    document.removeEventListener('keydown', onPopupEscPress);
    document.removeEventListener('click', onAroundPopupClick);
  };
})();

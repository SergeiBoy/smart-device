'use strict';

(function () {
  var websiteSectionsToogle = document.querySelector('.page-footer__website-sections .page-footer__toggle');
  var contactsToogle = document.querySelector('.page-footer__contacts .page-footer__toggle');
  var websiteSections = document.querySelector('.page-footer__website-sections');
  var contacts = document.querySelector('.page-footer__contacts');

  websiteSections.classList.add('page-footer__website-sections--closed');
  contacts.classList.add('page-footer__contacts--opened');

  websiteSectionsToogle.addEventListener('click', function () {
    if (websiteSections.classList.contains('page-footer__website-sections--closed')) {
      websiteSections.classList.remove('page-footer__website-sections--closed');
      websiteSections.classList.add('page-footer__website-sections--opened');
      contacts.classList.remove('page-footer__contacts--opened');
      contacts.classList.add('page-footer__contacts--closed');
    } else {
      websiteSections.classList.remove('page-footer__website-sections--opened');
      websiteSections.classList.add('page-footer__website-sections--closed');
    }
  });

  contactsToogle.addEventListener('click', function () {
    if (contacts.classList.contains('page-footer__contacts--closed')) {
      contacts.classList.remove('page-footer__contacts--closed');
      contacts.classList.add('page-footer__contacts--opened');
      websiteSections.classList.remove('page-footer__website-sections--opened');
      websiteSections.classList.add('page-footer__website-sections--closed');
    } else {
      contacts.classList.remove('page-footer__contacts--opened');
      contacts.classList.add('page-footer__contacts--closed');
    }
  });
})();

'use strict';
/* global IMask */
/* eslint no-undef: "error"*/
/* eslint new-cap: ["error", { "capIsNewExceptions": ["IMask"] }]*/
(function () {
  try {
    IMask(
        document.querySelector('.form__input--tel-bottom-js-mask input'), {
          mask: '{+7(}000)000-00-00'
        })();
  } catch (e) {
    if (e.name === 'TypeError') {
      // Пропускаем ошибку
    } else {
      throw e;
    }
  }
})();

'use strict';
/* global IMask */
/* eslint no-undef: "error"*/
/* eslint new-cap: ["error", { "capIsNewExceptions": ["IMask"] }]*/
(function () {
  try {
    IMask(
        document.querySelector('.form__input--tel-popup-js-mask input'), {
          mask: '{+7(}000)000-00-00'
        })();
  } catch (e) {
    if (e.name === 'TypeError') {
      // Пропускаем ошибку
    } else {
      throw e;
    }
  }
})();

'use strict';

(function () {
  var openButton = document.querySelector('.page-header__order-phone-call-link');
  var closeButton = document.querySelector('.modal-inquiry-form__close-button');

  var modalInquiryForm = document.querySelector('.modal-inquiry-form');

  var name = modalInquiryForm.querySelector('.form__input--user-name input');
  var tel = modalInquiryForm.querySelector('.form__input--tel input');
  var question = modalInquiryForm.querySelector('textarea');

  var submitButton = modalInquiryForm.querySelector('.form button');

  var isStorageSupport = true;
  var storageName = '';
  var storageTel = '';
  var storageQuestion = '';

  var writeInLocalStorage = function () {
    if (isStorageSupport) {
      localStorage.setItem('name', name.value);
      localStorage.setItem('tel', tel.value);
      localStorage.setItem('question', question.value);
    }
  };

  var onCloseButtonClick = function () {
    closePopup();
  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      closePopup();
    }
  };

  var onAroundPopupClick = function (evt) {
    if (!modalInquiryForm.contains(evt.target)) {
      evt.preventDefault();
      closePopup();
    }
  };

  var onSubmitButtonClick = function () {
    writeInLocalStorage();
  };

  var closePopup = function () {
    writeInLocalStorage();
    modalInquiryForm.classList.remove('modal-inquiry-form--opened');
    closeButton.removeEventListener('click', onCloseButtonClick);
    document.removeEventListener('keydown', onPopupEscPress);
    document.removeEventListener('click', onAroundPopupClick);
    submitButton.removeEventListener('click', onSubmitButtonClick);
  };

  openButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    modalInquiryForm.classList.add('modal-inquiry-form--opened');

    try {
      storageName = localStorage.getItem('name');
      storageTel = localStorage.getItem('tel');
      storageQuestion = localStorage.getItem('question');
    } catch (err) {
      isStorageSupport = false;
    }

    if (storageName) {
      name.value = storageName;
    }
    if (storageTel) {
      tel.value = storageTel;
    }
    if (storageQuestion) {
      question.value = storageQuestion;
    }

    name.focus();
    closeButton.addEventListener('click', onCloseButtonClick);
    document.addEventListener('keydown', onPopupEscPress);
    document.addEventListener('click', onAroundPopupClick);
    submitButton.addEventListener('click', onSubmitButtonClick);
  });
})();

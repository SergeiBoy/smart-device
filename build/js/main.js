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
        document.querySelector('.form__input--tel input'), {
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

'use strict';

(function () {
  var websiteSectionsToggle = document.querySelector('.page-footer__website-sections .page-footer__toggle');
  var contactsToggle = document.querySelector('.page-footer__contacts .page-footer__toggle');
  var websiteSections = document.querySelector('.page-footer__website-sections');
  var contacts = document.querySelector('.page-footer__contacts');

  websiteSections.classList.add('page-footer__website-sections--closed');
  contacts.classList.add('page-footer__contacts--opened');

  websiteSectionsToggle.addEventListener('click', function () {
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

  contactsToggle.addEventListener('click', function () {
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

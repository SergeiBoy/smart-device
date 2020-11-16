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

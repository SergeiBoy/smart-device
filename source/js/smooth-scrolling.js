'use strict';
/* global $ */
/* eslint no-undef: "error"*/
/* eslint no-invalid-this: "off" */
(function () {
  $(document).on('click', '.main-screen__anchor-link', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
  });
})();

"use strict";

jQuery(document).ready(function ($) {
  $('.title a').click(function (e) {
    var $el = $(e.currentTarget).parent().parent().find('.fa-arrow-right');
    $el.animate({
      borderSpacing: +90
    }, {
      step: function step(now) {
        $el.css('-webkit-transform', "rotate(".concat(now, "deg)")).css('-moz-transform', "rotate(".concat(now, "deg)")).css('transform', "rotate(".concat(now, "deg)"));
      },
      duration: 'slow'
    }, 'linear');
  });
}); // responsive table jQuery plugin

(function ($) {
  $.fn.responsiveTable = function responsiveTable() {
    var $table = $(this);
    $table.each(function responsiveTableEach() {
      var $el = $(this);
      var $cellTitle = $el.find('.productTable-name'); // place table head titles into each cell as labels

      $el.find('tbody tr td').each(function responsiveTableTdEach() {
        var $td = $(this);
        var $mobileTitle = $td.find('.productTable-mobileTitle');

        if ($mobileTitle.length < 1) {
          var $index = $td.index();
          $(this).prepend("<strong class=\"productTable-mobileTitle\">".concat($cellTitle.eq($index).html(), "</strong>"));
        }
      });
    }); // allow this plugin to be chainable via jQuery

    return this;
  };
})(jQuery); // to protect and scope the JQuery alias = $
// initialize filter bar


jQuery(document).ready(function ($) {
  if ($.fn.rsFilterBar) {
    $('.rsFilter-bar').rsFilterBar();
  }
}); // swatches copy button

(function () {
  function copy(e) {
    var t = e.target;
    var c = t.dataset.copytarget;
    var inp = c ? document.querySelector(c) : null; // is element selectable?

    if (inp && inp.select) {
      inp.select();
      document.execCommand('copy');
      inp.blur();
    }
  }

  document.body.addEventListener('click', copy, true);
})();

(function ($) {
  // initialize the responsive tables
  $('.productTable').responsiveTable(); // search

  var searchContainer = $('#navbar-search');
  var searchSubmit = searchContainer.find('.navbar-icon-search');
  var searchBox = searchContainer.find('.navbar-search-input');
  searchSubmit.on('click', function () {
    if (searchContainer.hasClass('navbar-searchExpanded')) {
      searchContainer.removeClass('navbar-searchExpanded');
      searchBox.trigger('blur');
    } else {
      searchContainer.addClass('navbar-searchExpanded');
      searchBox.trigger('focus');
    }
  });
})(jQuery);
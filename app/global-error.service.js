'use strict';

angular.module('propel-error')
.service('globalError', ['$state', function ($state) {
    // rely on closures instead of instance variables so that callback doesn't have scoping issues with 'this'
    var enabled = false,
      messageKey,
      params,
      cb;

    /**
     * Show the global error.
     * @param {string} m - translation key for the error message
     * @param {object} p - map of values to inject into translation message (optional)
     * @param {function} c - function to invoke on callback (optional)
     */
    this.show = function (m, p, c) {
      enabled = true;
      messageKey = m;
      params = p;
      cb = c;
    };

    this.hasError = function () {
      return enabled;
    };

    this.getMessageKey = function () {
      return messageKey;
    };

    this.getParams = function () {
      return params;
    };

    this.callback = function () {
      enabled = false;
      if (cb) {
        cb();
      }
    };

    // closure for 'this' scoping
    var that = this;

    /**
     * For convenience.
     */
    this.showUnknown = function () {
      that.show('unknown', $state.go($state.current, {}, {reload: true}));
    };

  }]);

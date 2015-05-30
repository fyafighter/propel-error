'use strict';

angular.module('propel-error')

  .directive('globalError', [function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/propel-error/global-error.html',
      controller: 'GlobalErrorCtrl',
      controllerAs: 'vm'
    };
  }])
  .controller('GlobalErrorCtrl', ['$scope', 'globalError', function ($scope, globalError) {
    var vm = this;

    $scope.$watch(function () {
      return globalError.hasError();
    }, function (newVal) {
      if (newVal) {
        vm.globalError = {
          enabled: true,
          messageKey: globalError.getMessageKey(),
          params: globalError.getParams(),
          callback: globalError.callback
        };
      } else {
        vm.globalError = undefined;
      }
    });

  }]);

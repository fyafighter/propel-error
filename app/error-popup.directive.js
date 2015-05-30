'use strict';

angular.module('propel-error')

  .directive('errorPopup', [function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/propel-error/error-popup.html',
      scope: {
        show: '=',
        params: '=',
        key: '@',
        callback: '&'
      },
      controller: 'ErrorCtrl'
    };
  }])
  .controller('ErrorCtrl', ['$scope', '$location', '$translate',
    function ($scope, $location, $translate) {

      function getSection(part, fallback) {
        var rbKey = ['error', $scope.key, part].join('.'),
          _params = Object.merge($scope.params || {}, {
            key: $scope.key
          });

        $translate(rbKey, _params).then(function (string) {
          if (string === rbKey) {
            if (fallback) {
              $translate('error.unknown.' + part, _params).then(function (fallback) {
                $scope[part] = fallback;
              });
            } else {
              $scope[part] = undefined;
            }
          } else {
            $scope[part] = string;
          }
        });
      }

      $scope.$watch('show', function(value) {
        if (value) {
          getSection('title', true);
          getSection('message', true);
          // TODO: need details?
          // getSection('detail');
        }
      });

      $scope.close = function () {
        $scope.show = false;
        $scope.callback();
      };
    }
  ]);

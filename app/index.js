'use strict';

angular.module('propel-error', [])

.config(function($stateProvider) {
    $stateProvider
      .state('error', {
        url: '/error',
        abstract: true,
        templateUrl: 'templates/propel-error/index.html',
        data: {
          title: 'error.UI.FallbackError.title'
        }
      })
      .state('404', {
        url: '/404',
        parent: 'error',
        templateUrl: 'templates/propel-error/404.html',
        controllerAs: 'vm',
        data: {
          title: 'error.404.title'
        }
      })
      .state('unavailable', {
        url: '/unavailable',
        parent: 'error',
        templateUrl: 'templates/propel-error/unavailable.html',
        controllerAs: 'vm',
        data: {
          title: 'error.serviceUnavailable.title'
        }
      })
      .state('denied', {
        url: '/denied',
        parent: 'error',
        templateUrl: 'templates/propel-error/access-denied.html',
        controllerAs: 'vm',
        data: {
          title: 'error.accessDenied.title'
        },
        resolve: {
          endpoints: ['$state', 'propelEndpoints', function ($state, endpoints) {
            return endpoints().catch(function (err) {
              $state.go('unavailable', {}, {reload: true});
            });
          }]
        },
        controller: function (endpoints) {
          var vm = this;
          if(Object.isArray(endpoints)){
            // Find Launchpad endpoint to allow user to redirect to launchpad
            var endpoint = endpoints.find(function (data) {
              return data.name === 'launchpad';
            });
            vm.endpoint = endpoint;
          }
        }
      });
  });


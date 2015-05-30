'use strict';

describe('PropelErrorMainCtrl', function() {

  var scope, createCtrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();

    createCtrl = function() {
      return $controller('PropelErrorMainCtrl', {
        $scope: scope
      });
    }
  }));

  it('should have content', function() {
    createCtrl();
    should.equal(scope.content, 'This is propel-error Main');
  });
});

'use strict';

describe('Controller: TeamCtrl', function () {

  // load the controller's module
  beforeEach(module('rLoop'));

  var TeamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeamCtrl = $controller('TeamCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of teamMembers to the scope', function () {
    expect(scope.teamMembers.toBeArray())
  });
});

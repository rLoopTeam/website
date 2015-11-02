'use strict';

describe('Controller: HeaderNavCtrl', function () {

  // load the controller's module
  beforeEach(module('rLoop'));

  var HeaderNavCtrl,
    scope;

  //a stupid mock of $location.path
  var location = {
    _path: "",
    path: function(){
      return this._path;
    }
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HeaderNavCtrl = $controller('HeaderNavCtrl', {
      $scope: scope,
      $location: location
    });
  }));

  it('should have a isActive function', function () {
    expect(typeof scope.isActive).toBe("function");
  });

  it('should return true when the location begins with a given string', function () {
    location._path = "/test";
    expect(scope.isActive("/test")).toBeTrue();
    location._path = "/test?some=params";
    expect(scope.isActive("/test")).toBeTrue();
    location._path = "/atest?some=params";
    expect(scope.isActive("/test")).toBeFalse();
    
    
  });
});

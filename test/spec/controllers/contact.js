'use strict';

describe('Controller: ContactCtrl', function () {

  // load the controller's module
  beforeEach(angular.mock.module('rLoop'));

  var ContactCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q, _vcRecaptchaService_, _myexternalip_) {
    scope = $rootScope.$new();
    ContactCtrl = $controller('ContactCtrl', {
      $scope: scope
      // place here mocked dependencies
    });

    scope.contactForm = {};
  }));

  it('should reject invalid form submissions', function () {
    scope.contactForm.$invalid = true;
    scope.captcha.response = false;
    
    scope.submit().then(function(){
      done(new Error('Form submit should not resolve'));
    }, function(response){
      done();
    });
  });

  /*  var d = $q.defer();
    spyOn(_myexternalip_, 'getIp').and.returnValue(d.promise);
    d.reject(); */
});

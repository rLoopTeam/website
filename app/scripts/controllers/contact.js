'use strict';

/**
 * @ngdoc function
 * @name rLoop.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the rLoop
 */
angular.module('rLoop')
  .controller('ContactCtrl', function ($scope, vcRecaptchaService, $http, $location) {
    
    //RECAPTCHA STUFF
    $scope.captcha = {
      response: null,
      widgetId: null,
      $error: null,
      invalid: null
    };

    $scope.setResponse = function (response) {
      $scope.captcha.response = response;
    };
    $scope.setWidgetId = function (widgetId) {
      $scope.captcha.widgetId = widgetId;
    };
    $scope.cbExpiration = function() {
      $scope.captcha.response = null;
    };
    //--END RECAPTCHA

    // Required - set to 'success' or 'error' on success/failure
    $scope.result = null;
    $scope.isSubmitting = null;
    $scope.options = {
      buttonSizeClass: 'btn-lg',
      buttonSuccessClass: 'btn-success'
    };

    $scope.submit = function () {
      if($scope.contactForm.$invalid || !$scope.captcha.response){
        return;
      }
      $scope.isSubmitting = true;
      $scope.captcha.invalid = null;
      $scope.captcha.error = null;

      var req_get_ip = 'http://ipv4.myexternalip.com/json';
      $http.get(req_get_ip).then(function(req_get_ip_result) {
        var ip = req_get_ip_result.data.ip;
        Parse.initialize("pwJsGYPUihWxSmbqPe4V5ye6UpwGY8seMvHgp7Rz", "GSXWyRTCGRZasFHd6ZaRI2bzZGhhxGuj7OZFdchW");
        
        var ContactRequest = Parse.Object.extend("ContactRequest");
        var contactRequest = new ContactRequest();

        contactRequest.set("mail", $scope.contact.mail);
        contactRequest.set("name", $scope.contact.name);
        contactRequest.set("message", $scope.contact.message);
        contactRequest.set("ip", ip);
        contactRequest.set("recaptchaData", $scope.captcha.response);

        return contactRequest.save();
      }, function() {
        //fail to get IP
        $scope.result = "error";
      })

      .then(function() {
        $scope.isSubmitting = false;
        $scope.result = "success";
        $scope.contact.mail = "";
        $scope.contact.name = "";
        $scope.contact.message = "";
        vcRecaptchaService.reload($scope.captcha.widgetId);
        $location.path("/contact-thankyou");
      }, function(newobj, error) {
        $scope.result = "error";
        //fail to persist
        if (error.message === "captcha_fail"){
          $scope.captcha.invalid = true;
          $scope.captcha.error = "invalid";
        }
      })

      .finally(function(){
        $scope.isSubmitting = false;
      });
    };

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

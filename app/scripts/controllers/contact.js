'use strict';

/**
 * @ngdoc function
 * @name rLoop.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the rLoop
 */
angular.module('rLoop')
  .controller('ContactCtrl', function ($scope, vcRecaptchaService, Parse, $location, $q, myexternalip, config) {
    //RECAPTCHA STUFF
    $scope.captcha = {
      key: config.reCaptcha.key,
      response: null,
      widgetId: null,
      $error: null,
      invalid: null,
      setResponse: function (response) {
        $scope.captcha.response = response;
      },
      setWidgetId: function (widgetId) {
        $scope.captcha.widgetId = widgetId;
      },
      cbExpiration: function() {
        $scope.captcha.response = null;
      }
    };
    
    //SUBMIT BUTTON STUFF
    $scope.submitBtn = {
      result: null, // Required - set to 'success' or 'error' on success/failure
      isSubmitting: null,
      options: {
        buttonSizeClass: 'btn-lg',
        buttonSuccessClass: 'btn-success'
      }
    };

    $scope.submit = function () {
      var submitDeferred = $q.defer();

      if($scope.contactForm.$invalid || !$scope.captcha.response){
        submitDeferred.reject('invalid_form');
        return submitDeferred.promise;
      }

      $scope.isSubmitting = true;
      $scope.captcha.invalid = null;
      $scope.captcha.error = null;

      myexternalip.getIp().then(function(ip) {
        var ContactRequest = Parse.Object.extend('ContactRequest');
        var contactRequest = new ContactRequest();

        contactRequest.set('mail', $scope.contact.mail);
        contactRequest.set('name', $scope.contact.name);
        contactRequest.set('message', $scope.contact.message);
        contactRequest.set('ip', ip);
        contactRequest.set('recaptchaData', $scope.captcha.response);

        return contactRequest.save();
      }, function() {
        //fail to get IP
        $scope.result = 'error';
      })

      .then(function(newobj) {
        $scope.isSubmitting = false;
        $scope.result = 'success';
        $scope.contact.mail = '';
        $scope.contact.name = '';
        $scope.contact.message = '';
        vcRecaptchaService.reload($scope.captcha.widgetId);
        submitDeferred.resolve(newobj);

        $location.path('/contact-thankyou');
      }, function(newobj, error) {
        $scope.result = 'error';
        //fail to persist
        if (error.message === 'captcha_fail'){
          $scope.captcha.invalid = true;
          $scope.captcha.error = 'invalid';
        }
      });

      return submitDeferred.promise;
    };

  });

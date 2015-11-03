'use strict';

/**
 * @ngdoc overview
 * @name rLoop
 * @description
 * # rLoop
 *
 * Main module of the application.
 */
angular
  .module('rLoop', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'vcRecaptcha',
    'jp.ng-bs-animated-button'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/media', {
        templateUrl: 'views/media.html',
        controller: 'MediaCtrl',
        controllerAs: 'media'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/contact-thankyou', {
        templateUrl: 'views/contact-thankyou.html',
        controller: 'ContactThankyouCtrl',
        controllerAs: 'contact-thankyou'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

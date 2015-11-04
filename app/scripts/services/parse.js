/* global Parse */
'use strict';

/**
 * @ngdoc service
 * @name rloop.Parse
 * @description
 * # Parse
 * Factory in the rloop.
 */
angular.module('rLoop')
  .factory('Parse', ['$window', 'config', function ($window, config) {
    //this function can be called as many times as necessary
    Parse.initialize(config.parse.applicationId, config.parse.javascriptKey);
    
    return $window.Parse;
  }]);

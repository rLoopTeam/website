'use strict';

/**
 * @ngdoc service
 * @name rLoop.underscore
 * @description
 * # underscore
 * Factory in the rLoop.
 */
angular.module('rLoop')
  .factory('underscore', ['$window', function ($window) {
    return $window._;
  }]);
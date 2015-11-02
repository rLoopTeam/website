'use strict';

/**
 * @ngdoc function
 * @name rLoop.controller:HeaderNavCtrl
 * @description Controller of the Navigation Menu
 * # HeaderNavCtrl
 * Controller of the rLoop
 */
angular.module('rLoop')
  .controller('HeaderNavCtrl', function ($scope, $location) {
  	$scope.isActive = function (viewLocation) { 
        return $location.path().indexOf(viewLocation) === 0;
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name rLoop.controller:BodyCtrl
 * @description Controller of the Navigation Menu
 * # BodyCtrl
 * Controller of the rLoop
 */
angular.module('rLoop')
  .controller('BodyCtrl', function ($scope, $location) {
  	$scope.isHome = function () { 
        return $location.path() === "/";
    };
  });

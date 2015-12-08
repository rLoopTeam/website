'use strict';

/**
 * @ngdoc function
 * @name rLoop.controller:MediaCtrl
 * @description
 * # MediaCtrl
 * Controller of the rLoop
 */
angular.module('rLoop')
  .controller('MediaCtrl', function ($scope) {
    $scope.noWrapSlides = false;
  	$scope.slides = [
  		{'image': 'images/media/v1.png', 'text': '1'},
  		{'image': 'images/media/v2.jpg', 'text': '2'},
  		{'image': 'images/media/v3.png', 'text': '3'},
  		{'image': 'images/media/v4.png', 'text': '4'},
  		{'image': 'images/media/v5.jpg', 'text': '5'}
  	];
  });

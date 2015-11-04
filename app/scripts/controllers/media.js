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
  		{'image': 'images/media/glass-angle.jpg', 'text': '1'},
  		{'image': 'images/media/pod-exiting-tube.jpg', 'text': '2'},
  		{'image': 'images/media/tiltshift.jpg', 'text': '3'}
  	];
  });

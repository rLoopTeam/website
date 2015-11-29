'use strict';

/**
 * @ngdoc function
 * @name rLoop.controller:TeamCtrl
 * @description
 * # TeamCtrl
 * Controller of the rLoop
 */
angular.module('rLoop')
  .controller('TeamCtrl', function ($scope, underscore) {
    $scope.teamMembers = [
      {
      	name: 'Andrew Ouimette',
      	nationality: 'USA',
      	role: 'R&D Lead',
      	picture: 'images/team/aou.png'
      },
      {
      	name: 'Andy Woerpel',
      	nationality: 'USA',
      	role: 'Electronics & Software Lead',
      	picture: 'images/team/awo.png'
      },
      {
      	name: 'Ari Porad',
      	nationality: 'USA',
      	role: 'IT Lead',
      	picture: 'images/team/apo.png'
      },
      {
      	name: 'Brent Lessard',
      	nationality: 'Canada',
      	role: 'Project Manager',
      	picture: 'images/team/ble.png'
      },
      {
      	name: 'Daniel Hunter',
      	nationality: 'USA',
      	role: 'Assistant Project Manager',
      	picture: 'images/team/dhu.png'
      },
      {
      	name: 'Kyle Zienin',
      	nationality: 'USA',
      	role: 'Syst. Lead',
      	picture: 'images/team/kzl.png'
      },
      {
      	name: 'Larry Joseph "Joey" Sharette Jr.',
      	nationality: 'USA',
      	role: 'Compressor Lead',
      	picture: 'images/team/lsh.png'
      },
      {
      	name: 'Mohd Amir Hasan Khan',
      	nationality: 'India',
      	role: 'Numerical Simulation Lead',
      	picture: 'images/team/mhk.png'
      },
      {
      	name: 'Richard P. Behiel',
      	nationality: 'USA',
      	role: 'PR Lead',
      	picture: 'images/team/rbe.png'
      },
      {
      	name: 'Scott Leonard',
      	nationality: 'USA',
      	role: 'Structures-Aero Lead',
      	picture: 'images/team/sle.png'
      },
      {
      	name: 'Thomas Lambot',
      	nationality: 'Belgium',
      	role: 'Engineering Lead',
      	picture: 'images/team/tla.png'
      },
      {
      	name: 'Michael Cook',
      	nationality: 'New Zeland',
      	role: 'Mechanical Lead',
      	picture: 'images/team/mco.png'
      }
    ];

    //sort by last name
    underscore.sortBy($scope.teamMembers, function(o){
    	return o.name;
    });
  });

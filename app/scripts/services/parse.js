'use strict';

/**
 * @ngdoc service
 * @name rloop.Parse
 * @description
 * # Parse
 * Service in the rloop.
 */
angular.module('rLoop')
  .service('Parse', function () {
    var app_id = "1234";
    var js_key = "5678";
    Parse.initialize(app_id, js_key);
  });

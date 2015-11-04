'use strict';

/**
 * @ngdoc service
 * @name rloop.myexternalip
 * @description
 * # myexternalip
 * Factory in the rloop.
 */
angular.module('rLoop')
  .factory('myexternalip', ['$http', function ($http) {
    var endpoint = 'http://ipv4.myexternalip.com/json';

    return {
      getIp: function () {
        return $http.get(endpoint).then(function(ipResult) {
          var ip = ipResult.data.ip;
          return ip;
        });
      }
    };
  }]);
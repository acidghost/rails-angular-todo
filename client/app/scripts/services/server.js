'use strict';

/**
 * @ngdoc service
 * @name todoApp.server
 * @description
 * # server
 * Constant in the todoApp.
 */
angular.module('todoApp')
  .constant('server', {
    baseUrl: 'http://localhost:3000/api/v1/'
  });

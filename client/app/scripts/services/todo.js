'use strict';

/**
 * @ngdoc service
 * @name todoApp.todo
 * @description
 * # todo
 * Factory in the todoApp.
 */
angular.module('todoApp')
  .service('TodoService', ['$resource', 'server', function ($resource, server) {
    // Public API here
    return $resource(server.baseUrl + 'tasks/:id.json', { id: '@id' }, {
      update: {
        method: 'PUT'
      }
    });
  }]);

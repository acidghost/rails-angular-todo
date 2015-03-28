'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('TodoCtrl', ['$scope', 'tasks', 'TodoService', function ($scope, tasks, TodoService) {
    $scope.tasks = tasks;

    $scope.update = function(task) {
      var q = TodoService.update(task.id, task).$promise;
      q.then(function(data) {
        console.log(data);
      }, function(err) {
        throw err;
      });
    };
  }]);

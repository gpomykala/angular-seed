'use strict';
angular.module('todoApp.controller', [])
.controller('todoController', ["$scope", function($scope){
  $scope.newTask = "";
  $scope.taskList = [
    {description: "buy airplane tickets", done:false},
    {description: "make hotel reservations", done:false},
    {description: "chill", done:false},
  ];

  $scope.addTodo = function(){
    $scope.taskList.push({description: $scope.newTask, done: false});
    $scope.newTask = null;
  }

  $scope.deleteTodo = function(index){
    $scope.taskList.splice(index, 1);
  }
}]);

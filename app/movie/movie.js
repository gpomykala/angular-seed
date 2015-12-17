'use strict';
angular.module("movieDB.movie", ['ui.bootstrap'])
  .controller('movieCtrl', ['$scope', '$filter', '$http', '$routeParams', function($scope, $filter, $http, $routeParams) {
    $scope.movieId = $routeParams.id;
    console.log('movie id '+$scope.movieId);
    $http.get('json/movies.json').success(function(data){
      console.log('data loaded');
      var id = parseInt($scope.movieId);
      $scope.movie = $filter('filter')(data, {id: id}, true)[0];
    });
  }]);

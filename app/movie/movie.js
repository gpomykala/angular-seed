'use strict';
angular.module("movieDB.movie", ['ui.bootstrap'])
  .controller('movieCtrl', ['$scope', '$filter', 'movieAPIservice', '$routeParams', function($scope, $filter, movieAPIservice, $routeParams) {
    $scope.movieId = $routeParams.id;
    console.log('movie id '+$scope.movieId);
    movieAPIservice.getMovies().success(function(data){
      console.log('data loaded');
      var id = parseInt($scope.movieId);
      $scope.movie = $filter('filter')(data, {id: id}, true)[0];
    });
  }]);

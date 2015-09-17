'use strict';

angular.module('moviesApp', [
  'ngRoute',
  'movie'
])

.config(['$routeProvider', function($stateProvider) {
  $stateProvider
    .when('movies', {
      url: "/movies",
      controller: "/scripts/movie/movie",
      templateUrl: "/scripts/movie/movieList.html"
    })
    .when('movieDetail', {
      url: "movie/:movieId",
      templateUrl: "scripts/movie/movieDetail.html",
      controller: "scripts/movie/MovieCtrl"
    })
    .otherwise({ redirectTo: '/movies' });
}]);


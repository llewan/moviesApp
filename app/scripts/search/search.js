'use strict';

// Declare app level module which depends on views, and components
angular.module('search', [
    'ngRoute',
    'movie'
])

.directive('searchInput', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/search/search.html',
    controller: 'searchInputCtrl'
  }
})

.controller('searchInputCtrl', function() {

});
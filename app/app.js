'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['dynamicInputTable']).
controller('AppController', ['$scope', function ($scope) {
    $scope.data = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        ['', null, '', 0]
    ];
}])/*.
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])*/;

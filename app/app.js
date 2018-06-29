'use strict';

angular.module('myApp', ['dynamicInputTable']).
controller('AppController', ['$scope', function ($scope) {
    $scope.data = [
        [null, 'Name', 'Hour', 'Rate'],
        ['January', 'Kazi', 160, 7],
        ['February', 'Taher', 180, 8],
        ['March', 'Uddin', 200, 9]
    ];
}]);

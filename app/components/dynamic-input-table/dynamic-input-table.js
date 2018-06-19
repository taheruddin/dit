angular.
module('dynamicInputTable', []).
directive('dynamicInputTable', function () {
    return {
        restrict: 'E',
        scope: {
            matrix: '=',
            caption: '='
        },
        controller: 'DITController',
        templateUrl: 'components/dynamic-input-table/dynamic-input-table.html',
        link: function (scope, elem, attr) {
            scope.valueChanged = function (rowIndex, columnIndex, cellValue) {
                //console.log(`${rowIndex},  ${columnIndex}, ${cellValue}`);
                scope.matrix[rowIndex][columnIndex] = cellValue;
                console.log(scope.matrix);
            };
            scope.addRow = function () {
                numRow = scope.matrix.length;
                numCol = scope.matrix[0].length;
                scope.matrix.push([]);
                for (i=0; i < numCol; i++) {
                    scope.matrix[numRow].push('');
                }
            };
            scope.addCol = function () {
                numRow = scope.matrix.length;
                for (i=0; i < numRow; i++) {
                    scope.matrix[i].push('');
                }
            }
        }
    };
}).
controller('DITController', ['$scope', function ($scope) {

}]);
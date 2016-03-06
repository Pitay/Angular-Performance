/// <reference path="../javascripts/typings/angularjs/angular.d.ts" />
/**
 * The one and only controller used in this app.
 */
var controller;
(function (controller) {
    var Father = (function () {
        /*@ngInject*/
        function Father($scope, $http, $rootScope) {
            $scope.location = "father";
            $scope.parameter = 0;
            $scope.test = function () {
                $scope.parameter++;
            };
        }
        return Father;
    })();
    controller.Father = Father;
    Father.$inject = ['$scope', '$http', '$rootScope'];
    var Son = (function () {
        /*@ngInject*/
        function Son($scope, $http, $rootScope) {
            $scope.location = "son";
            $scope.son_parameter = $scope.$parent.parameter;
            $scope.test = function () {
                $scope.$parent.parameter++;
            };
        }
        return Son;
    })();
    controller.Son = Son;
    Son.$inject = ['$scope', '$http', '$rootScope'];
})(controller || (controller = {}));
this.register('app').controller('Father', controller.Father);
this.register('app').controller('Son', controller.Son);
//# sourceMappingURL=hierarchyController.js.map
/// <reference path="../javascripts/typings/angularjs/angular.d.ts" />
/**
 * The one and only controller used in this app.
 */
var controller;
(function (controller) {
    var listController = (function () {
        /*@ngInject*/
        function listController($scope, $http, $rootScope) {
            this.filterValue = "";
            this.scope = $scope;
            $scope.persons = undefined;
            var data = { int: 10 };
            //var that = this.scope;
            $http.get("/fakers", data).success(function (data1) {
                $scope.persons = data1;
            });
        }
        return listController;
    })();
    controller.listController = listController;
    listController.$inject = ['$scope', '$http', '$rootScope'];
})(controller || (controller = {}));
this.register('app').controller('listController', controller.listController);
//# sourceMappingURL=listController.js.map
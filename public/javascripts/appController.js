/// <reference path="../javascripts/typings/angularjs/angular.d.ts" />
/**
 * The one and only controller used in this app.
 */
var controller;
(function (controller) {
    var AppController = (function () {
        /*@ngInject*/
        function AppController($scope, $http, $rootScope) {
            var _this = this;
            this.scope = $scope;
            $scope.persons = undefined;
            this.counter = 0;
            this.ok = "Please Click";
            this.show = false;
            this.showClick = true;
            this.test = function () {
                var that = _this;
                var a = 0;
                setInterval(function () {
                    a++;
                    if (a % 10 === 0) {
                        that.counter += 10;
                        $scope.$digest();
                    }
                }, 300);
            };
            var data = { int: 10 };
            $http.get("/fakers", data).success(function (data1) {
                $scope.persons = data1;
            });
        }
        return AppController;
    })();
    controller.AppController = AppController;
    AppController.$inject = ['$scope', '$http', '$rootScope'];
})(controller || (controller = {}));
this.register('app').controller('AppController', controller.AppController);
//# sourceMappingURL=appController.js.map
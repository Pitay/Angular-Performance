/// <reference path="../javascripts/typings/angularjs/angular.d.ts" />
/**
 * The one and only controller used in this app.
 */
var Controller;
(function (Controller) {
    var inputController = (function () {
        /*@ngInject*/
        function inputController($scope) {
            this.scope = $scope;
            $scope.$watch(function () {
                console.log("digest");
            });
        }
        return inputController;
    })();
    Controller.inputController = inputController;
    inputController.$inject = ['$scope'];
})(Controller || (Controller = {}));
this.register('app').controller('inputController', Controller.inputController);
//# sourceMappingURL=inputController.js.map
/// <reference path="../javascripts/typings/angularjs/angular.d.ts" />
/**
 * The one and only controller used in this app.
 */
var controller;
(function (controller) {
    var showController = (function () {
        /*@ngInject*/
        function showController($scope) {
            this.scope = $scope;
            $scope.$watch(function () {
                console.log("digest called");
            });
            this.$inject = ['$scope'];
        }
        return showController;
    })();
    controller.showController = showController;
    showController.$inject = ['$scope'];
})(controller || (controller = {}));
this.register('app').controller('showController', controller.showController);
//# sourceMappingURL=showController.js.map
/// <reference path="../javascripts/typings/angularjs/angular.d.ts" />
/**
 * The one and only controller used in this app.
 */
var Controller;
(function (Controller) {
    var filterController = (function () {
        /*@ngInject*/
        function filterController($scope, $filter) {
            var _this = this;
            this.another = 0;
            this.isClick = function () {
                _this.another++;
            };
            this.scope = $scope;
            this.number = 0;
            this.isEven = $filter('isEven')(this.number);
            $scope.$watch(function () {
                console.log("digest called");
            });
        }
        return filterController;
    })();
    Controller.filterController = filterController;
    filterController.$inject = ['$scope', '$filter'];
})(Controller || (Controller = {}));
this.register('app').controller('filterController', Controller.filterController);
//# sourceMappingURL=filterController.js.map
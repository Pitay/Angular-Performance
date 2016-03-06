/// <reference path="../javascripts/typings/angularjs/angular.d.ts" />
/**
 * The one and only controller used in this app.
 */
var Controller;
(function (Controller) {
    var intervalController = (function () {
        /*@ngInject*/
        function intervalController($scope, $interval) {
            var _this = this;
            this.scope = $scope;
            this.counter = 0;
            this.test = function () {
                var that = _this;
                setInterval(function () {
                    that.counter += 1;
                    if (that.counter % 10 === 0) {
                        that.scope.$digest();
                    }
                }, 300);
            };
            $scope.$watch(function () {
                console.log("digest called");
            });
        }
        return intervalController;
    })();
    Controller.intervalController = intervalController;
    intervalController.$inject = ['$scope', '$interval'];
})(Controller || (Controller = {}));
this.register('app').controller('intervalController', Controller.intervalController);
//$scope.digest();
//# sourceMappingURL=intervalController.js.map
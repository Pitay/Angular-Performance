/// <reference path="../javascripts/typings/angularjs/angular.d.ts" />
/**
 * The one and only controller used in this app.
 */
var Controller;
(function (Controller) {
    var fakerController = (function () {
        /*@ngInject*/
        function fakerController($scope) {
            var _this = this;
            this.scope = $scope;
            this.items = [];
            this.counter = 0;
            this.ok = "Please Click";
            this.show = true;
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
            $scope.$watch(function () {
                console.log("digest called");
            });
        }
        return fakerController;
    })();
    Controller.fakerController = fakerController;
    fakerController.$inject = ['$scope'];
})(Controller || (Controller = {}));
this.register('app').controller('fakerController', Controller.fakerController);
//# sourceMappingURL=fakerController.js.map
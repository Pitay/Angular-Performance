/// <reference path="../javascripts/typings/angularjs/angular.d.ts" />

/**
 * The one and only controller used in this app.
 */

module controller{
    export class showController {
        private scope;
        private $inject;

        /*@ngInject*/
        constructor($scope) {
            this.scope = $scope;

            $scope.$watch(function () {
                console.log("digest called");
            });

            this.$inject = ['$scope'];
        }
    }
    showController.$inject = ['$scope']
}

this.register('app').controller('showController', controller.showController);
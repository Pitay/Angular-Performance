/// <reference path="../javascripts/typings/angularjs/angular.d.ts" />
/**
 * The one and only controller used in this app.
 */
module Controller{
    export class inputController {
        private scope;

        /*@ngInject*/
        constructor($scope) {
            this.scope = $scope;


            $scope.$watch(function(){
                console.log("digest");
            })
        }



    }
    inputController.$inject = ['$scope'];
}

this.register('app').controller('inputController', Controller.inputController);
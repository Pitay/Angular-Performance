/// <reference path="../javascripts/typings/angularjs/angular.d.ts" />
/**
 * The one and only controller used in this app.
 */
module Controller{
    export class filterController {
        private scope;
        private number;
        private another = 0;
        private isEven;

        /*@ngInject*/
         constructor($scope,$filter) {
            this.scope = $scope;
            this.number = 0;


             this.isEven = $filter('isEven')(this.number);

             $scope.$watch(function() {
                console.log("digest called");
            });


        }


        isClick = () =>{
            this.another++;
        }
    }
    filterController.$inject = ['$scope','$filter'];
}
this.register('app').controller('filterController', Controller.filterController);


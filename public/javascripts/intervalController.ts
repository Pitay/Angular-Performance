/// <reference path="../javascripts/typings/angularjs/angular.d.ts" />
/**
 * The one and only controller used in this app.
 */
module Controller{
    export class intervalController {
        private scope;
        private counter;
        private test;

        /*@ngInject*/
         constructor($scope,$interval) {
            this.scope = $scope;
            this.counter = 0;

            this.test = () => {
                var that = this;
                    setInterval(function(){
                           that.counter+=1;
                        if(that.counter % 10 === 0) {
                            that.scope.$digest();
                        }
                    },300)

            };

             $scope.$watch(function() {
                console.log("digest called");
            });

        }


    }

    intervalController.$inject = ['$scope','$interval'];
}
this.register('app').controller('intervalController', Controller.intervalController);

//$scope.digest();


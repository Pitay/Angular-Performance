/// <reference path="../javascripts/typings/angularjs/angular.d.ts" />
/**
 * The one and only controller used in this app.
 */
module controller{
    export class Father {

        /*@ngInject*/
        constructor($scope,$http,$rootScope) {
           $scope.location = "father";
           $scope.parameter = 0;


            $scope.test = function(){
                $scope.parameter++;
            }
        }


    }
    Father.$inject = ['$scope','$http','$rootScope'];

    export class Son {
        /*@ngInject*/
        constructor($scope,$http,$rootScope) {
            $scope.location = "son";
            $scope.son_parameter = $scope.$parent.parameter;

            $scope.test = function(){
                $scope.$parent.parameter++;
            }
        }


    }

    Son.$inject = ['$scope','$http','$rootScope'];
}

this.register('app').controller('Father', controller.Father);
this.register('app').controller('Son', controller.Son);
/// <reference path="../javascripts/typings/angularjs/angular.d.ts" />

/**
 * The one and only controller used in this app.
 */

module controller{
    export class listController {
        private scope;
        private filterValue = "";

        /*@ngInject*/
        constructor($scope,$http,$rootScope) {
            this.scope = $scope;
            $scope.persons = undefined;


            var data = {int:10};
                //var that = this.scope;
                $http.get("/fakers",data).success(function(data1) {
                    $scope.persons = data1;
                });


        }
    }

    listController.$inject = ['$scope','$http','$rootScope'];

}
this.register('app').controller('listController', controller.listController)
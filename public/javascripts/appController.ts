/// <reference path="../javascripts/typings/angularjs/angular.d.ts" />
/**
 * The one and only controller used in this app.
 */
module controller{
    export class AppController {
        private scope;
        private counter;
        private ok;
        private show;
        private showClick;
        private test;

        /*@ngInject*/
        constructor($scope,$http,$rootScope) {
            this.scope = $scope;
            $scope.persons = undefined;
            this.counter = 0;
            this.ok = "Please Click";
            this.show = false;
            this.showClick = true;


            this.test = () => {
                var that = this;

                    var a = 0;
                setInterval(function(){
                    a++;
                    if(a%10 === 0){
                            that.counter+=10;
                            $scope.$digest();
                        }
                    }
                    ,300);
            };

            var data = {int:10};

                $http.get("/fakers",data).success(function(data1) {
                    $scope.persons = data1;
                });

        }

    }
    AppController.$inject = ['$scope','$http','$rootScope'];
}

this.register('app').controller('AppController', controller.AppController);
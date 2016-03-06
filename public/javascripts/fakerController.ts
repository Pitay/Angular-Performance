/// <reference path="../javascripts/typings/angularjs/angular.d.ts" />
/**
 * The one and only controller used in this app.
 */

module Controller{
    export class fakerController {
        private scope;
        private items;
        private counter;
        private ok;
        private show;
        private showClick;
        private test;

        /*@ngInject*/
        constructor($scope) {
            this.scope = $scope;
            this.items = [];
            this.counter = 0;
            this.ok = "Please Click";
            this.show = true;
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
            }

            $scope.$watch(function() {
                console.log("digest called");
            });
            }

        }

    fakerController.$inject = ['$scope'];
    }

this.register('app').controller('fakerController', Controller.fakerController);
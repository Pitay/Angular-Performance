/// <reference path="../../javascripts/typings/angularjs/angular.d.ts" />

/**
 * The one and only controller used in this app.
 */

module directives{
export class ItemDisplayDirective {
    private restrict;
    private replace;
    private scope;

        constructor() {
           this.restrict = 'A';
            this.replace = false;
            this.scope = {
                show:'='
            }
        }

        link(scope,element) {

             element.bind('click', function() {
                // do something with $rootScope here, as your question asks for that
                scope.show = !scope.show;

                if(scope.show){
                    this.querySelector("#show").style.display = "none";
                    this.querySelector("#hide").style.display = "block";
                }else{
                    this.querySelector("#show").style.display = "block";
                    this.querySelector("#hide").style.display = "none";
                }
              });
        }
    }
}

this.register('app').directive('itemDisplay', directives.ItemDisplayDirective);
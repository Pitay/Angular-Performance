/// <reference path="../../javascripts/typings/angularjs/angular.d.ts" />
/**
 * The one and only controller used in this app.
 */
var directives;
(function (directives) {
    var ItemDisplayDirective = (function () {
        function ItemDisplayDirective() {
            this.restrict = 'A';
            this.replace = false;
            this.scope = {
                show: '='
            };
        }
        ItemDisplayDirective.prototype.link = function (scope, element) {
            element.bind('click', function () {
                // do something with $rootScope here, as your question asks for that
                scope.show = !scope.show;
                if (scope.show) {
                    this.querySelector("#show").style.display = "none";
                    this.querySelector("#hide").style.display = "block";
                }
                else {
                    this.querySelector("#show").style.display = "block";
                    this.querySelector("#hide").style.display = "none";
                }
            });
        };
        return ItemDisplayDirective;
    })();
    directives.ItemDisplayDirective = ItemDisplayDirective;
})(directives || (directives = {}));
this.register('app').directive('itemDisplay', directives.ItemDisplayDirective);
//# sourceMappingURL=itemDisplay.js.map
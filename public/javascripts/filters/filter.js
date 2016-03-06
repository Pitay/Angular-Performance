/**
 * Created by itov on 3/3/2016.
 */
/// <reference path="../../javascripts/typings/angularjs/angular.d.ts" />
/**
 * The one and only controller used in this app.
 */
var Filters;
(function (Filters) {
    function isEven() {
        return function (input) {
            console.log("filter called");
            return input % 2 === 0;
        };
    }
    Filters.isEven = isEven;
})(Filters || (Filters = {}));
angular.module("app").filter("isEven", Filters.isEven);
//# sourceMappingURL=filter.js.map
/**
 * Created by itov on 3/3/2016.
 */
/// <reference path="../../javascripts/typings/angularjs/angular.d.ts" />
/**
 * The one and only controller used in this app.
 */

module Filters{
    export function isEven(){

            return function(input)
            {
                console.log("filter called");
                return input % 2 === 0;
            }
    }

}

angular.module("app").filter("isEven",Filters.isEven);
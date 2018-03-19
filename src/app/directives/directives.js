(function () {
    'use strict';

    var app = angular.module('myApp.directives', []);


    // Alternative of ng-include ..

    app.directive('myInclude', function () {
        return {
            replace: true,
            restrict: 'A',
            templateUrl: function (iElement, iAttrs) {
                if (!iAttrs.myInclude) throw new Error("my-include: template url must be provided");
                return iAttrs.myInclude;
            }
        };
    });


})();
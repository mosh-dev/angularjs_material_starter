(function () {
    'use strict';

    var app = angular.module('myApp.controller', []);


    // APPLICATION CONTROLLER FOR 'SIDE MENU' =======================================================

    app.controller('AppCtrl', ['$timeout', '$scope', '$mdSidenav', '$state', '$http', function($timeout, $scope, $mdSidenav, $state, $http){

        // Init Default Active Item...
        $scope.activeMenu = { };
        $scope.activeSubMenu = { };

        // Fetch Menu Data and Set Current Active menu Object . In Case User Reloads the page.
        $http.get('app/data/menu.json').then(function(response){
            $scope.menus = response.data;

            //Set The Current Active Menu By Checking State .
            $scope.menus.forEach(function(state, index){
                if ($scope.menus[index].state === $state.$current.name) {
                    $scope.activeMenu = $scope.menus[index];
                }
            });

        });


        $scope.toggle = function() { $mdSidenav('left').toggle() };

        // 200ms Delay To Change the State..
        $scope.goto = function(state) {
            setTimeout(function(){ $state.go(state) }, 200);
        };



        // MAIN MENU ACTION =============================================
        $scope.parentMenuAction = function(menu) {

            //Set as Active Menu or Remove as Active menu
            if (menu.items.length === 0) { $scope.activeMenu = menu }
            else { $scope.activeMenu = (menu === $scope.activeMenu) ? {} : menu }

            $scope.goto(menu.state);
        };


        // SUB MENU ACTION ..............................
        $scope.chieldMenuAction = function(item) { $scope.activeSubMenu = item }


    }]);




})();
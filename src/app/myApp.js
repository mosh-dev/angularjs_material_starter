(function () {
    'use strict';


    var app = angular.module("myApp", [
        'ui.router',
        'ngMaterial',
        'ngMessages',
        'chart.js',
        'md.data.table',
        'myApp.configs',
        'myApp.iconConfig',
        'myApp.themeConfig',
        'myApp.filters',
        'myApp.services',
        'myApp.loginController',
        'myApp.controller'

    ]);


    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        var states = [
            {
                abstract : true,
                name: 'home',
                url: '/',
                templateUrl: 'views/app/app.htm',
                controller: 'AppCtrl'
            },
            {
                name: 'home.dash',
                url: 'dash',
                templateUrl: 'views/templates/dashboard/dash.htm'
            }


        ];


        // Registering all the states
        states.forEach(function(state){ $stateProvider.state(state) });
        $urlRouterProvider.otherwise('dash');

    }]);


})();






(function () {
    'use strict';

    var app = angular.module('myApp.themeConfig', []);

    // COLOR PALETTE CONFIGURATION FOR THE APP
    app.config(['$mdThemingProvider', function($mdThemingProvider) {

        var custom_palette = {
            '50': '#f1f8e9',
            '100': '#dcedc8',
            '200': '#c5e1a5',
            '300': '#e57373',
            '400': '#c5e1a5',
            '500': '#6ab344',
            '600': '#689f38',
            '700': '#558b2f',
            '800': '#558b2f',
            '900': '#33691e',
            'A100': '#ccff90',
            'A200': '#b2ff59',
            'A400': '#76ff03',
            'A700': '#64dd17',
            'contrastDefaultColor': 'light',                                      // whether, by default, text (contrast) on this palette should be dark or light
            'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],     //hues which contrast should be 'dark' by default
            'contrastLightColors': 'light'                                        // could also specify this if default was 'dark'
        };

        $mdThemingProvider.definePalette('custom', custom_palette);

        //Setting Up Default Palette Co custom_palette Defined Above...
        $mdThemingProvider.theme('default')
            .primaryPalette('custom')
            .accentPalette('custom');

    }]);


})();




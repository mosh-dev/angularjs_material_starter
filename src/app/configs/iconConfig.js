(function () {
    'use strict';

    var app = angular.module('myApp.iconConfig', []);

    app.config(['$mdIconProvider', function($mdIconProvider) {
        $mdIconProvider

            // DEFAULT ICON SET
            .defaultIconSet('assets/icons/sets/core/core-icons.svg', 24)
            // CUSTOM ICON SETS
            .iconSet('action', 'assets/icons/sets/action-icons.svg', 24)
            .iconSet('alert', 'assets/icons/sets/alert-icons.svg', 24)
            .iconSet('av', 'assets/icons/sets/av-icons.svg', 24)
            .iconSet('avatar', 'assets/icons/sets/avatar-icons.svg', 24)
            .iconSet("avatars", 'assets/icons/sets/avatar-icons.svg',128)
            .iconSet('communication', 'res/icons/sets/communication-icons.svg', 24)
            .iconSet('content', 'assets/icons/sets/content-icons.svg', 24)
            .iconSet('device', 'assets/icons/sets/device-icons.svg', 24)
            .iconSet('editor', 'assets/icons/sets/editor-icons.svg', 24)
            .iconSet('file', 'assets/icons/sets/file-icons.svg', 24)
            .iconSet('hardware', 'assets/icons/sets/hardware-icons.svg', 24)
            .iconSet('icons', 'assets/icons/sets/icons-icons.svg', 24)
            .iconSet('image', 'assets/icons/sets/image-icons.svg', 24)
            .iconSet('maps', 'assets/icons/sets/maps-icons.svg', 24)
            .iconSet('navigation', 'assets/icons/sets/navigation-icons.svg', 24)
            .iconSet('notification', 'assets/icons/sets/notification-icons.svg', 24)
            .iconSet("social", 'assets/icons/sets/social-icons.svg', 24)
            .iconSet('toggle', 'assets/icons/sets/toggle-icons.svg', 24)
            .iconSet('call', 'assets/icons/sets/communication-icons.svg', 24)

            // CUSTOM ICONS
            .icon('share-arrow', 'assets/icons/ic_add_to_photos_24px.svg', 24)
            .icon('upload', 'assets/icons/ic_add_to_photos_24px.svg', 24)
            .icon('copy', 'assets/icons/ic_add_to_photos_24px.svg', 24)
            .icon('print', 'assets/icons/ic_add_to_photos_24px.svg', 24)
            .icon('hangout', 'assets/icons/ic_add_to_photos_24px.svg', 24)
            .icon('mail', 'assets/icons/ic_add_to_photos_24px.svg', 24)
            .icon('message', 'assets/icons/ic_add_to_photos_24px.svg', 24)
            .icon('copy2', 'assets/icons/ic_add_to_photos_24px.svg', 24)
            .icon('facebook', 'assets/icons/ic_add_to_photos_24px.svg', 24)
            .icon('twitter', 'assets/icons/ic_add_to_photos_24px.svg', 24)
            .icon('md-close', 'assets/icons/ic_close_24px.svg', 24)
            .icon('md-lock', 'assets/icons/ic_lock_48px.svg', 128);
    }]);

})();


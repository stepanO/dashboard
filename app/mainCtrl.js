'use strict';

angular.module('myApp')
    .controller('mainCtrl', function ($scope) {

        var self = this;
        self.tabs = [
            {
                name: 'My Profile',
                active: true,
                icon: 'fa-home'
            }, {
                name: 'Dashboard',
                active: false,
                icon: 'fa-home'
            }, {
                name: 'Active Signals',
                active: false,
                icon: 'fa-home'
            }, {
                name: 'Visual Charts',
                active: false,
                icon: 'fa-home'
            }, {
                name: 'Earnings',
                active: false,
                icon: 'fa-money'
            }, {
                name: 'Events',
                active: false,
                icon: 'fa-calendar'
            }, {
                name: 'Cloud Systems',
                active: false,
                icon: 'fa-cloud'
            }, {
                name: 'System Settings',
                active: false,
                icon: 'fa-sliders'
            }, {
                name: 'Logout',
                active: false,
                icon: 'fa-power-off'
            }
        ];

        self.toggleTab = function (tab) {
            var active = tab.active;
            _.forEach(self.tabs, function (t) {
                t.active = false;
            });
            tab.active = !active;
        }
    });

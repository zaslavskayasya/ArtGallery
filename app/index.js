const angular = require('angular');

const boot = require('bootstrap');
const uibs = require('angular-ui-bootstrap');

const ngModule = angular.module('Gallery', ['ui.bootstrap']);

require('./directives')(ngModule);

ngModule.controller('AlertDemoCtrl', function ($scope) {
    debugger;
    $scope.alerts = [

        { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];

    $scope.addAlert = function() {
        $scope.alerts.push({msg: 'Another alert!'});
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
});
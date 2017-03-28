module.exports = function (ngModule) {
    ngModule.directive('headerDir', headerFn);
    function headerFn() {

        return {

            restrict: 'E',
            scope: {},
            templateUrl: 'directives/header/header.html',
            controllerAs: 'vm',
            controller: function () {
                var vm = this;

                vm.greeting = 'Hello hhh  World';

            }
        }
    }

};
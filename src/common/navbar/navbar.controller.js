class NavbarController {
    constructor($rootScope, $location, $scope) {
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.$location = $location;
    }

    $onInit() {

        var vm = this;

        vm.currentNavItem = '/home';

        this.$rootScope.$on('$locationChangeSuccess', (event, current) => {
            vm.currentNavItem = this.$location.path();
        });
    }
}

NavbarController.$injects = ['$rootScope', '$location', '$scope']

export default NavbarController;

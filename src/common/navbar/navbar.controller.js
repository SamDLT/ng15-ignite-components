class NavbarController {
    constructor($rootScope, $location, $scope) {
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.$location = $location;
    }

    $onInit() {

        this.$scope.currentNavItem = '/home';

        this.$rootScope.$on('$locationChangeSuccess', (event, current) => {
            this.$scope.currentNavItem = this.$location.path();
        });
    }
}

NavbarController.$injects = ['$rootScope', '$location', '$scope']

export default NavbarController;

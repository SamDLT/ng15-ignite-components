import angular from "angular"
import uiRouter from 'angular-ui-router'
import Components from './components/components'
import AppComponent from './app.component';
import Common from './common/common';

let appModule = angular.module('App', [uiRouter, Components.name, Common.name])
    .config(($locationProvider) => {
        "ngInject";
        // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
        // #how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .component('app', AppComponent);

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';

import navbarComponent from './navbar.component';

let navbarModule = angular.module('navbar', [
  uiRouter,
  angularAnimate,
  angularMaterial
])

.component('navbar', navbarComponent);

export default navbarModule;

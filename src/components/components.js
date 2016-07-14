import angular from 'angular';
import ngChart from "./ngChart/ngChart"

let componentModule = angular.module('app.components', [
    ngChart
]).name;

export default componentModule;

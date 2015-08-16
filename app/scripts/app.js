'use strict';

/**
 * @ngdoc overview
 * @name hockeyFightsApp
 * @description
 * # hockeyFightsApp
 *
 * Main module of the application.
 */
angular
  .module('hockeyFightsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngStorage',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/gametime', {
        templateUrl: 'views/gametime.html',
        controller: 'GametimeCtrl',
        controllerAs: 'gametime'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

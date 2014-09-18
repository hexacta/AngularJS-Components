'use strict';

/**
 * @ngdoc overview
 * @name swipeApp
 * @description
 * # swipeApp
 *
 * Main module of the application.
 */
angular
  .module('swipeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

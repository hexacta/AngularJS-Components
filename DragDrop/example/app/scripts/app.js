'use strict';

/**
 * @ngdoc overview
 * @name angularDragAndDropApp
 * @description
 * # angularDragAndDropApp
 *
 * Main module of the application.
 */
angular
  .module('angularDragAndDropApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngDraggable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

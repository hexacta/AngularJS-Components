'use strict';

/**
 * @ngdoc overview
 * @name aplicacionEjemploAngularApp
 * @description
 * # aplicacionEjemploAngularApp
 *
 * Main module of the application.
 */
angular
  .module('aplicacionEjemploAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ui.bootstrap',
	'angucomplete',
	'ngTable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/page1', {
        templateUrl: 'views/page1.html',
        controller: 'Page1Ctrl'
      })
      .when('/page2', {
        templateUrl: 'views/page2.html',
        controller: 'Page2Ctrl'
      })
      .when('/page3', {
        templateUrl: 'views/page3.html',
        controller: 'Page3Ctrl'
      })	 
      .when('/page4', {
        templateUrl: 'views/page4.html',
        controller: 'Page4Ctrl'
      })	  
      .otherwise({
        redirectTo: '/'
      });
  });
  


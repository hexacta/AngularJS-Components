'use strict';

/**
 * @ngdoc function
 * @name angularDragAndDropApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularDragAndDropApp
 */
angular.module('angularDragAndDropApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

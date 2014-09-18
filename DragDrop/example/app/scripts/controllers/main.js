'use strict';

/**
 * @ngdoc function
 * @name angularDragAndDropApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDragAndDropApp
 */
angular.module('angularDragAndDropApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.draggableItems = [
      {name:'item1'},
      {name:'item2'},
      {name:'item3'}
    ];
    $scope.dragAreaItems = [];
    $scope.assignIndex = function(item,anIndex) {
      item.index = anIndex;
      return true;
    }
    $scope.onDragComplete=function(data,evt) {
    };
    $scope.onDropComplete=function(data,evt) {
      $scope.dragAreaItems.push(data);
      $scope.draggableItems.splice(data.index,1);
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name swipeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swipeApp
 */
var MAX_INDEX = 5;
 
angular.module('swipeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	$scope.images = [
		'images/img1.jpg',
		'images/img2.jpg',
		'images/img3.jpg',
		'images/img4.jpg',
		'images/img5.jpg'
	];
	
	
	$scope.isSelected = function(){
		return $scope.selected != -1;
	}
	
	$scope.select = function(menu){
		$scope.selected = $scope.menus.indexOf(menu);
	}
	
	$scope.unselect = function(){
		$scope.selected = -1;
	}
	
	$scope.menus = [
		{name: 'Menu Item 1', 
		submenus: ['Submenu 1-1', 'Submenu 1-2', 'Submenu 1-3']},
		{name: 'Menu Item 2', 
		submenus: ['Submenu 2-1', 'Submenu 2-2']},
		{name: 'Menu Item 3', 
		submenus: ['Submenu 3-1', 'Submenu 3-2', 'Submenu 3-3', 'Submenu 3-4']},
		{name: 'Menu Item 4', 
		submenus: ['Submenu 4-1', 'Submenu 4-2']},
		{name: 'Menu Item 5', 
		submenus: ['Submenu 5-1']},
		
	];
	
	$scope.unselect();
	
	$scope.actualIndex = 0;
	$scope.swipe = function(move){
		var nextIndex = $scope.actualIndex + move;
		if (nextIndex < 0 || nextIndex >= MAX_INDEX){
			return;
		}
		
		$scope.actualIndex = nextIndex;
	}
	
	
  });

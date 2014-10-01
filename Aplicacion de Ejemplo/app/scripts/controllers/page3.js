angular.module('aplicacionEjemploAngularApp')
  .controller('Page3Ctrl', function ($scope) {
	$scope.openedFrom = false;
	
	$scope.openFrom = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.openedFrom = true;
	};
	
	
	$scope.fromDate = new Date();
	
	$scope.tabNum = 1;
	$scope.changeTab = function(value){
		$scope.tabNum += value;
	};
  });

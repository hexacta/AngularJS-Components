angular.module('aplicacionEjemploAngularApp')
  .controller('Page2Ctrl', function ($scope, $rootScope) {
	$scope.openedFrom = false;
	$scope.products = $rootScope.options;
	
	$scope.openFrom = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.openedFrom = true;
	};
	
	
	$scope.fromDate = new Date();
	
	
  });

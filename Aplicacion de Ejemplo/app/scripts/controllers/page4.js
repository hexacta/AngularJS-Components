angular.module('aplicacionEjemploAngularApp')
  .controller('Page4Ctrl', function ($scope, $rootScope, $filter, ngTableParams) {
	
	$scope.tramites = $rootScope.tramites;
	$scope.tramitesFiltrados = $scope.tramites;
	
	$scope.filters = [
		{text: 'Pendientes de emisión muy urgentes',
			urgencia:'Muy Urgente'},
		{text: 'Tipo en Emision',
			tipo:'Emision'},
		{text:'Tipo en Modificacion',
			tipo:'Modificacion'	}
	];
	
	$scope.activeFilters = [];
	
	selectedFilter = {};
	
	$scope.query = {};
	$scope.result = {};
	$scope.founded = false;
	$scope.filtrando = true;
	
	$scope.search = function(){
		$scope.filtrando = false;
		$scope.result = {};
		for (var i = 0; i < $rootScope.tramites.length; i++){
			if ($rootScope.tramites[i].numero == $scope.query.text){
				$scope.result = $rootScope.tramites[i];
				$scope.founded = true;
				return;
			}
		}
	};
	
	$scope.addFilter = function(filter){
		var index = $scope.filters.indexOf(filter);
		if (index == -1) return;
		if ($scope.activeFilters.indexOf(filter) != -1)return;
		
		$scope.activeFilters.push(filter);
		$scope.filters.splice(index, 1);
		$scope.filtrar();
	};	
	
	$scope.removeFilter = function(filter){
		var index = $scope.activeFilters.indexOf(filter);
		if (index == -1)return;
		
		$scope.activeFilters.splice(index, 1);
		$scope.filters.push(filter);
		$scope.filtrar();
	};
	
	
	
	
	$scope.filtrar = function(){
		$scope.filtrando = true;
		$scope.founded = false;
		$scope.tramitesFiltrados = $rootScope.tramites;
		for (var i = 0; i < $scope.activeFilters.length; i++){
			$scope.tramitesFiltrados = $scope.tramitesFiltrados.filter(function(obj) {
				return Object.keys(obj).every(function(c) {
					if ($scope.activeFilters[i][c] == null) return true;
					//bug de la funcion filter, le agrega a los filters el hashkey y 
					//entonces se termina comparando por esto tambien
					if ( c == '$$hashKey') return true; 
					
					return obj[c] == $scope.activeFilters[i][c];
				});
			});
		}
		data = $scope.tramitesFiltrados;
		$scope.tableParams.reload();
	};	
	
	var data = $scope.tramitesFiltrados;
	$scope.tableParams = new ngTableParams({
		page: 1,            // show first page
		count: 10,           // count per page
		sorting: {
			numero: 'asc'
		}
	}, {
		total: data.length, 
		getData: function($defer, params) {
			var orderedData = params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
			console.log(orderedData);
			$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
		}
	});
	
});

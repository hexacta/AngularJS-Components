angular.module('aplicacionEjemploAngularApp').controller('Page1Ctrl', function ($rootScope, $scope, $filter, ngTableParams) {
		
	var data = $rootScope.tramites;
	
	$scope.valorPorUrgencia = function(urgencia){
		if (urgencia == 'Sin Urgencia') return 0;
		if (urgencia == 'Poco Urgente') return 1;
		if (urgencia == 'Urgencia Media') return 2;
		if (urgencia == 'Urgente') return 3;
		if (urgencia == 'Muy Urgente') return 4;
		return -1;
	}
	
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
			if (params.sorting()){
				var queryParam = params.orderBy()[0].substring(1);
				var sign = params.orderBy()[0].substring(0,1) == '+' ? 1 : -1;
				if (queryParam == 'fecha'){
					orderedData.sort( function(a, b){
						date1 = a.fecha.split('/');
						date2 = b.fecha.split('/');
						if (parseInt(date1[2]) > parseInt(date2[2]))
							return sign;
						if (parseInt(date2[2]) > parseInt(date1[2]))
							return -sign;
						if (parseInt(date1[1]) > parseInt(date2[1]))
							return sign;
						if (parseInt(date2[1]) > parseInt(date1[1]))
							return -sign;
						if (parseInt(date1[0]) > parseInt(date2[0]))
							return sign;
						if (parseInt(date2[0]) > parseInt(date1[0]))
							return -sign;
						return 0;	
					});
				}
				else if(queryParam == 'urgencia'){
					orderedData.sort( function(a, b){
						urg1 = $scope.valorPorUrgencia(a.urgencia);
						urg2 = $scope.valorPorUrgencia(b.urgencia);
						return (urg1 - urg2) * sign;
					});
				}
			}
			$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
});

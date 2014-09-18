var app = angular.module('main', ['ngTable']).

controller('DemoCtrl', function($scope, $filter, ngTableParams) {
    var data = [{name: "Moroni", age: 50},
               {name: "Tiancum", age: 43},
               {name: "Jacob", age: 27},
               {name: "Nephi", age: 29},
               {name: "Enos", age: 34},
               {name: "Tiancum", age: 43},
               {name: "Jacob", age: 27},
               {name: "Nephi", age: 29},
               {name: "Enos", age: 34},
               {name: "Tiancum", age: 43},
               {name: "Jacob", age: 27},
               {name: "Nephi", age: 29},
               {name: "Enos", age: 34},
               {name: "Tiancum", age: 43},
               {name: "Jacob", age: 27},
               {name: "Nephi", age: 29},
               {name: "Enos", age: 34}];

    //FILTRADO
    $scope.tableParams = new ngTableParams({
        page: 1,            // pagina que se mostrara
        count: 10,          // entradas por pagina
        filter: {
            name: 'M'       // filtrado inicial
        }
    }, {
        total: data.length, // cantidad total de entradas
        getData: function($defer, params) {
            // build-in angular filter
            var orderedData = params.filter() ?
            	$filter('filter')(data, params.filter()) :
                data;

            $scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.users);
        }
    });

    //ORDENAMIENTO
    $scope.tableParams2 = new ngTableParams({
        page: 1,            // pagina que se mostrara
        count: 10,          // entradas por pagina
        sorting: {
            name: 'asc'     // orden inicial
        }
    }, {
        total: data.length, // cantidad total de entradas
        getData: function($defer, params) {
            // build-in angular filter
            var orderedData = params.sorting() ?
            	$filter('orderBy')(data, params.orderBy()) :
                data;

            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });

    //EDICION IN-LINE
	//Esto no tiene ninguna configuración especial
    $scope.tableParams3 = new ngTableParams({
        page: 1,            // pagina que se mostrara
        count: 10           // entradas por pagina
    }, {
        total: data.length, // cantidad total de entradas
        getData: function($defer, params) {
            $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
});



var app = angular.module('main', ['ngTable', 'ui.bootstrap']).

controller('DemoCtrl', function($scope, $filter, ngTableParams, $modal) {
    var data = [{name: "Moroni", age: 50}, {name: "Tiancum", age: 43}, {name: "Jacob", age: 27},
               {name: "Nephi", age: 29}, {name: "Enos", age: 34}, {name: "Tiancum", age: 43},
               {name: "Jacob", age: 27}, {name: "Nephi", age: 29}, {name: "Enos", age: 34},
               {name: "Tiancum", age: 43}, {name: "Jacob", age: 27}, {name: "Nephi", age: 29},
               {name: "Enos", age: 34}, {name: "Tiancum", age: 43}, {name: "Jacob", age: 27},
               {name: "Nephi", age: 29}, {name: "Enos", age: 34}];

   var data2 = [{name: "Moroni", age: 50}, {name: "Tiancum", age: 43}, {name: "Jacob", age: 27},
               {name: "Nephi", age: 29}, {name: "Enos", age: 34}, {name: "Tiancum", age: 43},
               {name: "Jacob", age: 27}, {name: "Nephi", age: 29}, {name: "Enos", age: 34},
               {name: "Tiancum", age: 43}, {name: "Jacob", age: 27}, {name: "Nephi", age: 29},
               {name: "Enos", age: 34}, {name: "Tiancum", age: 43}, {name: "Jacob", age: 27},
               {name: "Nephi", age: 29}, {name: "Enos", age: 34}]; 

    //POP-UP
    $scope.modalNew = function(size) {
	console.log("ACAA");
	var modalInstance = $modal.open({
      		templateUrl: 'myModalContent.html',
      		size: size,
    		});
    };

    $scope.tableParams = new ngTableParams({
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

    //IN-LINE

    $scope.showNew = false;   

    $scope.toggleNew = function () {
	$scope.showNew = $scope.showNew === false ? true: false;
	$scope.myForm = {};
        $scope.myForm.name = "";
        $scope.myForm.age  = "";
    };
    
    $scope.addNew = function () {
	var newRecord = {
        	name: $scope.myForm.name,
        	age:  parseInt($scope.myForm.age, 10),
        };
	data2.push(newRecord);
	$scope.tableParams2.reload();
	$scope.showNew = $scope.showNew === false ? true: false;

    };

    $scope.tableParams2 = new ngTableParams({
        page: 1,            // pagina que se mostrara
        count: 10,          // entradas por pagina
        sorting: {
            name: 'asc'     // orden inicial
        }
    }, {
        total: data2.length, // cantidad total de entradas
        getData: function($defer, params) {
            // build-in angular filter
            var orderedData = params.sorting() ?
            	$filter('orderBy')(data2, params.orderBy()) :
                data2;

            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
});




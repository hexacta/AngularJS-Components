var app = angular.module('myApp', ['ngGrid']);

app.controller('MyCtrl', function($scope) {
	$scope.myData = [{name: "Moroni", age: 50},
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

	$scope.gridOptions1 = {
		data: 'myData',
 		enableRowSelection: false,
		enableSorting: false,
		filterOptions: { filterText: '', useExternalFilter: false },
		showFilter: true,
		columnDefs: [{field:'name', displayName:'Nombre'}, {field:'age', displayName:'Edad'}]
    	};
	
	$scope.gridOptions2 = { 
        	data: 'myData',
		enableRowSelection: false,
        	columnDefs: [{field:'name', displayName:'Nombre'}, {field:'age', displayName:'Edad'}]
    	};

	$scope.gridOptions3 = { 
        	data: 'myData',
		enableSorting: false,
        	enableCellSelection: true,
        	enableRowSelection: false,
        	enableCellEditOnFocus: true,
        	columnDefs: [{field: 'name', displayName: 'Nombre', enableCellEdit: true}, 
                     	     {field:'age', displayName:'Edad', enableCellEdit: true}]
    	};
});

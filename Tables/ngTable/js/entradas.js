var app = angular.module('main', ['ngTable', 'ui.bootstrap']);

app.controller('DemoCtrl', function($scope, $filter, ngTableParams, $modal) {
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
    $scope.showModal = false;

    $scope.toggleModal = function(){
    	$scope.showModal = !$scope.showModal;
	$scope.myForm = {};
        $scope.myForm.name = "";
        $scope.myForm.age  = "";
    };
    
    $scope.addNewModal = function () {
	var newRecord = {
        	name: $scope.myForm.name,
        	age:  parseInt($scope.myForm.age, 10),
        };
	data.push(newRecord);
	$scope.tableParams.reload();
	$scope.showModal = !$scope.showModal;

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
	$scope.showNew = !$scope.showNew;
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
	$scope.showNew = !$scope.showNew;

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

app.directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
});




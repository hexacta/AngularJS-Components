var AngularResearchApp = angular.module('AngularResearchApp', ['ngRoute', 'autocomplete', 'angucomplete', 'ui.bootstrap', 'ngAutocomplete']);

AngularResearchApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.
		when('/' , {	
			templateUrl: 'app/views/AutocompletePage.html'
		}).
		when('/auto2' , {	
			templateUrl: 'app/views/advanced.html'
		}).
		when('/auto3' , {	
			templateUrl: 'app/views/angucomplete.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	
}]);

function HeaderController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}

// the service that retrieves some movie title from an url
AngularResearchApp.factory('TeamRetriever', function($http, $q, $timeout){
  var TeamRetriever = {};

  TeamRetriever.getteam = function(i) {
	  var teamdata = $q.defer();

	 /* var teams = ["Independiente", "Racing", "Boca Jrs.", "River Plate", "San Lorenzo", "Velez", "Quilmes", 
	                 "Banfield", "Lanus", "Tigre", "Rafaela", "Rosario Central", "Newell's Old Boys",
	                 "Huracan", "Olimpo", "Estudiantes", "Gimnasia L.P.", "Defensa y Justicia", 
	                 "Temperley", "Instituto", "Belgrano", "Talleres", "Colon S.F.", "Arsenal",
	                 "Godoy Cruz", "All Boys", "Argentinos Jrs.", "Nueva Chicago"]
	  */
	  var teams = [];
		$http({
			method : 'GET',
			url: 'http://localhost:3000/movies/',
			headers : {'Content-type' : 'application/json', 'Accept' : 'application/json'}
			}).success(function(data, status, headers, config){
				if (status == 200 ){
					for (j = 0 ; j < data.length ; j++) {
						teams.push(data[j].title);
					}
				}
			}).error(function(data, status, headers, config){
	    		console.log("An Error occurred while trying to get the teams ");
	    		teams = "";
	    	});
	  
    $timeout(function(){
    	teamdata.resolve(teams);
    },1000);

    return teamdata.promise
  }

  return TeamRetriever;
});


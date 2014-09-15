AngularResearchApp.controller('AutocompleteCtrl', function ($scope, $location, $rootScope, TeamRetriever) {	
	
	  $scope.teams = TeamRetriever.getteam("");
 
	  $scope.teams.then(function(data){
		  $scope.teams = data;
	  });

	  $scope.getteam = function(){
		  return $scope.teams;
	  }

	  $scope.updateSomething = function(typedthings){
		 //Do something like reload data with this, could be some service returning a promise
		  $scope.newteams = TeamRetriever.getteam(typedthings);
		  $scope.newteams.then(function(data){
			  $scope.teams = data;
		  });
	  }

	  $scope.doSomethingElse = function(suggestion){
		  console.log("Suggestion selected: " + suggestion );
		  $scope.salida = suggestion;
		 /* $http({
				method : 'GET',
				url: 'http://localhost:3000/movies/',
				headers : {'Content-type' : 'application/json', 'Accept' : 'application/json'}
				}).success(function(data, status, headers, config){
					if (status == 200 ){
						
					}
				}).error(function(data, status, headers, config){
		    		console.log("An Error occurred while trying to get the teams ");
		    		teams = "";
		    	});*/
	  }
	
});
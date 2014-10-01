angular.module('aplicacionEjemploAngularApp')
  .controller('Page2Ctrl', function ($scope) {
	$scope.openedFrom = false;
	
	$scope.openFrom = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		$scope.openedFrom = true;
	};
	
	
	$scope.fromDate = new Date();
	
	$scope.options = [
		{op: "Audi"},
		{op: "Acura"},
		{op: "Aixam"},
		{op: "Alfa Romeo"},
		{op: "Arash"},
		{op: "Aro"},
		{op: "Aston Martin"},
		{op: "BMW"},
		{op: "Bajaj"},
		{op: "Baoujun"},
		{op: "Bentley"},
		{op: "Chevrolet"},
		{op: "Cadillac"},
		{op: "Chrysler"},
		{op: "Citroen"},
		{op: "Daewoo"},
		{op: "Dacia"},
		{op: "Daihatsu"},
		{op: "Dodge"},
		{op: "Ferrari"},
		{op: "Fiat"},
		{op: "Ford"},
		{op: "GMC"},
		{op: "Honda"},
		{op: "Hummer"},
		{op: "Hyundai"},
		{op: "Izuzu"},
		{op: "Infinity"},
		{op: "Iveco"},
		{op: "Jaguar"},
		{op: "Jac Motors"},
		{op: "Jeep"},
		{op: "Kia"},
		{op: "Lamborghini"},
		{op: "Lada"},
		{op: "Lancia"},
		{op: "Land Rover"},
		{op: "Lexus"},
		{op: "Mercedez Benz"},
		{op: "Maserati"},
		{op: "Mini"},
		{op: "Mitsubishi"},
		{op: "Nissan"},
		{op: "Opel"},
		{op: "Peugeot"},
		{op: "Porsche"},
		{op: "Pagani"},
		{op: "Renault"},
		{op: "Rolls Royce"},
		{op: "Rover"},
		{op: "Suzuki"},
		{op: "Scion"},
		{op: "Smart"},
		{op: "Subaru"},
		{op: "Toyota"},
		{op: "Volkswagen"},
		{op: "Volvo"},
		{op: "Suzuki"},
		{op: "Wiesmann"}
	];
  });

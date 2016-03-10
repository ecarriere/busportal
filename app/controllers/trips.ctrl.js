myApp.controller('TripsController', ['$scope', '$http', '$location', '$routeParams', 'cartService', function($scope, $http, $location, $routeParams, cartService){
	
	var ctrl = $scope;
	ctrl.origin;
	ctrl.destination;
	ctrl.date;
	cartService;


	$scope.getTrips = function(){
		$http.get('/api/trips')
		.success(function(response){
				$scope.trips = response;

		});
	}

	$scope.getTrip = function(){
		var id = $routeParams.id;
		$http.get('/api/trips/'+ id)
		.success(function(response){

				$scope.trip = response;
				$scope.date = new Date($scope.trip.date);
				console.log($scope.trip);
				console.log($scope.date);
		});
	}

	$scope.addTrip = function(){
		
		$http.post('/api/trips/', $scope.trip)
		.success(function(response){
				window.location.href='#/trips/add';
		});
	}

	$scope.updateTrip = function(){
		var id = $routeParams.id;
		$http.put('/api/trips/'+id, $scope.trip)
		.success(function(response){
				window.location.href='#/trips';
		});
	}

	$scope.removeTrip = function(id){
		$http.delete('/api/trips/'+id)
		.success(function(response){
				window.location.href='#/trips';
		});
	}

	$scope.booking = function(trip, seats){
		
		var seatNum = Number(seats);
		var a = [];
		delete trip.$$hashKey;
		var __trip = angular.copy(trip);
		__trip.seatsbought = seatNum;
		//a.push(trip);
		cartService.cartitems.push(__trip);
		console.log(cartService.cartitems)
	}


}]);
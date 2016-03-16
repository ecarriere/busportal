myApp.controller('TripsController', ['$scope', '$http', '$location', '$routeParams', 'cartService', '$filter', '$route', function($scope, $http, $location, $routeParams, cartService, $filter, $route){
	
	var ctrl = $scope;
	ctrl.origin;
	ctrl.destination;
	ctrl.date;

	cartService;


	$scope.getTrips = function(){
		$http.get('/api/trips')
		.success(function(response){
				
				$scope.trips = response;

				for(var i=0;i<$scope.trips.length;i++){
					var datestamp = $scope.trips[i].date;
					$scope.trips[i].date = datestamp.substr(0,10);
				}

				

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
		console.log($scope.trip);
		$http.post('/api/trips/', $scope.trip)
		.success(function(response){
				window.location.href='#/admin/trips';
		});
	}

	$scope.updateTrip = function(){
		var id = $routeParams.id;
		$http.put('/api/trips/'+id, $scope.trip)
		.success(function(response){
				window.location.href='#/admin/trips';
		});
	}

	$scope.removeTrip = function(id){
		$http.delete('/api/trips/'+id)
		.success(function(response){
				window.location.href='#/admin/trips';
		});
	}

	$scope.booking = function(trip, seats){
		
		var seatNum = Number(seats);
		var a = [];
		delete trip.$$hashKey;
		var __trip = angular.copy(trip);
		__trip.seatsbought = seatNum;
		
		cartService.cartitems.push(__trip);
		console.log(cartService.cartitems)
	}

	$scope.dateChange = function(date){
		var mydate = $filter('date')(date, 'yyyy-MM-dd HH:mm:ss Z');
		$scope.newdate = (mydate.substr(0,10)).toString();
		
	}

	$scope.reload = function($route){
		$scope.$route.reload();
	}

}]);
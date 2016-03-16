myApp.controller('OrdersController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){



	$scope.getOrders = function(){
		$http.get('/api/orders')
		.success(function(response){
				
				var temp = response
				for(var i=0; i< temp.length;i++){
					console.log(i);
					temp[i].order = JSON.parse(temp[i].order);
				}
				$scope.orders = temp;
				console.log($scope.orders);
		});
	}

	$scope.getOrder = function(){
		var id = $routeParams.id;
		$http.get('/api/orders/'+ id)
		.success(function(response){
			console.log(response);
			var temp = response;
			temp.order = JSON.parse(temp.order);

			$scope.order = temp;

				
		});
	}

	$scope.addOrder = function(){
		
		$http.post('/api/orders/', $scope.order)
		.success(function(response){
				window.location.href='#/admin/orders/add';
		});
	}

	$scope.updateOrder = function(){
		var id = $routeParams.id;
		$http.put('/api/orders/'+id, $scope.order)
		.success(function(response){
				window.location.href='#/admin/orders';
		});
	}

	$scope.removeOrder = function(id){
		$http.delete('/api/orders/'+id)
		.success(function(response){
				window.location.href='#/admin/orders';
		});
	}



}]);
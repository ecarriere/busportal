myApp.controller('UsersController', ['$scope', '$http', '$location', '$routeParams', 'cartService', function($scope, $http, $location, $routeParams, cartService){

	//put user in localstorage:
	// try{
	// 	$scope.user = JSON.parse(localStorage.user);
	// 	console.log('user');
	// 	console.log($scope.user);
	// }
	// catch(err){
	// 	$scope.user = {};
	// }

	$scope.getUsers = function(){
		$http.get('/api/users')
		.success(function(response){
				$scope.users = response;

		});
	}

	$scope.getUser = function(){
		var id = $routeParams.id;
		$http.get('/api/users/'+ id)
		.success(function(response){

				$scope.user = response;
				
		});
	}

	$scope.login = function(){
		//r@r.com
		$http.post('/api/auth/authenticate/', $scope.user)
			.then(function(response){
				console.log(response);
					//window.location.href='#/users/add';
			});
	}
	$scope.addUser = function(){
		console.log($scope.user);
		if($scope.user.password == $scope.repassword){
			$http.post('/api/auth/register/', $scope.user)
			.then(function(response){
				console.log(response);
					$location.path('/');
			});

		}
		else{

		}
	}

	$scope.updateUser = function(){
		var id = $routeParams.id;
		$http.put('/api/users/'+id, $scope.user)
		.success(function(response){
				window.location.href='#/users';
		});
	}

	$scope.removeUser = function(id){
		$http.delete('/api/users/'+id)
		.success(function(response){
				window.location.href='#/users';
		});
	}



}]);
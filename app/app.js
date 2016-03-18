var myApp = angular
    .module('myApp',['ngRoute', 'angular-jwt'])  
    .config(function($routeProvider, $httpProvider){

	// if (localStorage.authToken === undefined) {$state.go('login')};

	$routeProvider

	.when('/', {
		controller: 'TripsController as ctrl',
		templateUrl: '/views/frontend/trips.html'
	})

	
	.when('/checkout', {
		controller:'CartController as ctrl',
		templateUrl: 'views/frontend/checkout.html'
	})
	.when('/login', {
		controller: 'AuthController as authVm',
		templateUrl: 'views/frontend/userlogin.html'
	})
	.when('/user', {
		controller: 'UsersController as ctrl',
		templateUrl: 'views/frontend/userdashboard.html',
		resolve: { 
			auth:function($location,jwtHelper){
                   try{
                       var token = jwtHelper.decodeToken(localStorage.authToken);
                       if(token.permission != 'admin' || token.permission != 'user'){
                   	   		$location.path('/login');
                   	   }
                   }
                   catch(err){
                   	   	$location.path('/login');
                   }

               }
           }
	})
	.when('/user/account', {
		controller: 'UsersController as ctrl',
		templateUrl: 'views/frontend/useraccount.html',
		resolve: { 
			auth:function($location,jwtHelper){
                   try{
                       var token = jwtHelper.decodeToken(localStorage.authToken);
                       if(token.permission != 'admin' || token.permission != 'user'){
                   	   		$location.path('/login');
                   	   }
                   }
                   catch(err){
                   	   	$location.path('/login');
                   }

               }
           }
	})
	.when('/user/bookings', {
		controller: 'UsersController as ctrl',
		templateUrl: 'views/frontend/userbookings.html',
		resolve: { 
			auth:function($location,jwtHelper){
                   try{
                       var token = jwtHelper.decodeToken(localStorage.authToken);
                       if(token.permission != 'admin' || token.permission != 'user'){
                   	   		$location.path('/login');
                   	   }
                   }
                   catch(err){
                   	   	$location.path('/login');
                   }

               }
           }
	})
	.when('/signup', {
		controller: 'UsersController as ctrl',
		templateUrl: 'views/frontend/signup.html'
	})
	.when('/thankyou', {
		controller: 'CartController as ctrl',
		templateUrl: 'views/frontend/thankyou.html'
	})

	// Backoffice::

	.when('/admin', {
		controller:'LoginController as ctrl',
		templateUrl: 'views/backend/dashboard.html',
		resolve: { 
			auth:function($location,jwtHelper){
                   try{
                       var token = jwtHelper.decodeToken(localStorage.authToken);
                       if(token.permission != 'admin'){
                   	   		$location.path('/login');
                   	   }
                   }
                   catch(err){
                   	   	$location.path('/login');
                   }

               }
           }
	})

	.when('/admin/trips', {
		controller:'TripsController as ctrl',
		templateUrl: 'views/backend/trips.backend.html',
		resolve: { 
			auth:function($location,jwtHelper){
                   try{
                       var token = jwtHelper.decodeToken(localStorage.authToken);
                       if(token.permission != 'admin'){
                   	   		$location.path('/login');
                   	   }
                   }
                   catch(err){
                   	   	$location.path('/login');
                   }

               }
           }
	})
	.when('/admin/orders', {
		controller:'OrdersController as ctrl',
		templateUrl: 'views/backend/orders.html',
		resolve: { 
			auth:function($location,jwtHelper){
                   try{
                       var token = jwtHelper.decodeToken(localStorage.authToken);
                       if(token.permission != 'admin'){
                   	   		$location.path('/login');
                   	   }
                   }
                   catch(err){
                   	   	$location.path('/login');
                   }

               }
           }
	})
	.when('/admin/orders/edit/:id', {
		controller:'OrdersController as ctrl',
		templateUrl: 'views/backend/editOrder.html',
		resolve: { 
			auth:function($location,jwtHelper){
                   try{
                       var token = jwtHelper.decodeToken(localStorage.authToken);
                       if(token.permission != 'admin'){
                   	   		$location.path('/login');
                   	   }
                   }
                   catch(err){
                   	   	$location.path('/login');
                   }

               }
           }
	})
	.when('/admin/trips/add', {
		controller:'TripsController as ctrl',
		templateUrl: 'views/backend/addTrip.html',
		resolve: { 
			auth:function($location,jwtHelper){
                   try{
                       var token = jwtHelper.decodeToken(localStorage.authToken);
                       if(token.permission != 'admin'){
                   	   		$location.path('/login');
                   	   }
                   }
                   catch(err){
                   	   	$location.path('/login');
                   }

               }
           }
	})
	.when('/admin/trips/edit/:id', {
		controller:'TripsController as ctrl',
		templateUrl: 'views/backend/editTrip.html',
		resolve: { 
			auth:function($location,jwtHelper){
                   try{
                       var token = jwtHelper.decodeToken(localStorage.authToken);
                       if(token.permission != 'admin'){
                   	   		$location.path('/login');
                   	   }
                   }
                   catch(err){
                   	   	$location.path('/login');
                   }

               }
           }
	})
	.when('/admin/users', {
		controller:'UsersController as ctrl',
		templateUrl: 'views/backend/users.html',
		resolve: { 
			auth:function($location,jwtHelper){
                   try{
                       var token = jwtHelper.decodeToken(localStorage.authToken);
                       if(token.permission != 'admin'){
                   	   		$location.path('/login');
                   	   }
                   }
                   catch(err){
                   	   	$location.path('/login');
                   }

               }
           }
	})
	.when('/admin/users/edit/:id', {
		controller:'UsersController as ctrl',
		templateUrl: 'views/backend/editUser.html',
		resolve: { 
			auth:function($location,jwtHelper){
                   try{
                       var token = jwtHelper.decodeToken(localStorage.authToken);
                       if(token.permission != 'admin'){
                   	   		$location.path('/login');
                   	   }
                   }
                   catch(err){
                   	   	$location.path('/login');
                   }

               }
           }
	})
	.when('/admin/financials', {
		controller:'UsersController as ctrl',
		templateUrl: 'views/backend/financials.html',
		resolve: { 
			auth:function($location,jwtHelper){
                   try{
                       var token = jwtHelper.decodeToken(localStorage.authToken);
                       if(token.permission != 'admin'){
                   	   		$location.path('/login');
                   	   }
                   }
                   catch(err){
                   	   	$location.path('/login');
                   }

               }
           }
	})
	.otherwise({
		redirectTo: '/'
	})

	$httpProvider.interceptors.push(function(jwtHelper){
		return {
			request:function(config){
				config.headers.authentication = localStorage.authToken;
				return config;
			},
			response:function(response){
				var auth_token = response.headers('authentication');
				if(auth_token){
					var decrypt_token = jwtHelper.decodeToken(auth_token);
					console.log(decrypt_token);
					if(decrypt_token.email){
						console.log('Token set');
						localStorage.authToken = auth_token;
					}
					
				}
				return response;
			}
		}
	})

});


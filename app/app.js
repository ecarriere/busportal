var myApp = angular
    .module('myApp',['ngRoute'])  
    .config(function($routeProvider, $httpProvider){

	// if (localStorage.authToken === undefined) {$state.go('login')};

	$routeProvider

	.when('/', {
		controller: 'TripsController as ctrl',
		templateUrl: '/views/frontend/trips.html'
	})

	.when('/cart', {
		controller:'CartController as ctrl',
		templateUrl: 'views/frontend/cart.html'
	})
	.when('/checkout', {
		controller:'CartController as ctrl',
		templateUrl: 'views/frontend/checkout.html'
	})
	.when('/login', {
		controller: 'AuthController as ctrl',
		templateUrl: 'views/frontend/userlogin.html'
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
		templateUrl: 'views/backend/dashboard.html'
		//resolve: { 
			// auth:function($state,jwtHelper){
   //                         try{
   //                             jwtHelper.decodeToken(localStorage.authToken);
   //                         }
   //                         catch(err){
   //                             var ctrl = this;
   //                             ctrl.$state.go('/login');
   //                         }

   //                     }
   //                 }
	})

	.when('/admin/trips', {
		controller:'TripsController as ctrl',
		templateUrl: 'views/backend/trips.backend.html'
	})
	.when('/admin/orders', {
		controller:'OrdersController as ctrl',
		templateUrl: 'views/backend/orders.html'
	})
	.when('/admin/orders/edit/:id', {
		controller:'OrdersController as ctrl',
		templateUrl: 'views/backend/editOrder.html'
	})
	.when('/admin/trips/add', {
		controller:'TripsController as ctrl',
		templateUrl: 'views/backend/addTrip.html'
	})
	.when('/admin/trips/edit/:id', {
		controller:'TripsController as ctrl',
		templateUrl: 'views/backend/editTrip.html'
	})
	.when('/admin/users', {
		controller:'UsersController as ctrl',
		templateUrl: 'views/backend/users.html'
	})
	.when('/users/edit/:id', {
		controller:'UsersController as ctrl',
		templateUrl: 'views/backend/editUser.html'
	})
	.when('/admin/financials', {
		controller:'UsersController as ctrl',
		templateUrl: 'views/backend/financials.html'
	})
	.otherwise({
		redirectTo: '/'
	})

	// $httpProvider.interceptors.push(function(jwtHelper){
	// 		return {
	// 			request:function(config){
	// 				console.log(config);
	// 				config.headers.authentication = localStorage.authToken;
	// 				return config;
	// 			},
	// 			response:function(response){
	// 				var auth_token = response.headers('authentication');
	// 				if(auth_token){
	// 					var decrypt_token = jwtHelper.decodeToken(auth_token);
	// 					console.log(decrypt_token);
	// 					if(decrypt_token.email){
	// 						localStorage.authToken = auth_token;
	// 					}
						
	// 				}
	// 				return response;
	// 			}
	// 		}
	// 	})
	// }

});

// , 'angular-jwt'
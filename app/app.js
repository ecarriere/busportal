var myApp = angular
    .module('myApp',['ngRoute'])
    .config(function($routeProvider){
   
	$routeProvider

	.when('/', {
		controller: 'TripsController as ctrl',
		templateUrl: '/views/trips.html'
	})
	.when('/trips/add', {
		controller:'TripsController as ctrl',
		templateUrl: 'views/addTrip.html'
	})
	.when('/trips/edit/:id', {
		controller:'TripsController as ctrl',
		templateUrl: 'views/editTrip.html'
	})
	.when('/cart', {
		controller:'CartController as ctrl',
		templateUrl: 'views/cart.html'
	})
	.when('/checkout', {
		controller:'CartController as ctrl',
		templateUrl: 'views/checkout.html'
	})
	.when('/userlogin', {
		controller: 'LoginController as ctrl',
		templateUrl: 'views/userlogin.html'
	})
	.when('/signup', {
		controller: 'UsersController as ctrl',
		templateUrl: 'views/signup.html'
	})
	.when('/users/edit/:id', {
		controller:'UsersController as ctrl',
		templateUrl: 'views/editUser.html'
	})
	.when('/admin', {
		controller:'LoginController as ctrl',
		templateUrl: 'views/login_admin.html'
	})
	.otherwise({
		redirectTo: '/'
	})
});


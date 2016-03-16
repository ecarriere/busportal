var myApp = angular
    .module('myApp',['ngRoute'])
    .config(function($routeProvider){
   
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
	.when('/userlogin', {
		controller: 'LoginController as ctrl',
		templateUrl: 'views/frontend/userlogin.html'
	})
	.when('/signup', {
		controller: 'UsersController as ctrl',
		templateUrl: 'views/frontend/signup.html'
	})

	// Backoffice::

	.when('/admin', {
		controller:'LoginController as ctrl',
		templateUrl: 'views/backend/dashboard.html'
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
});


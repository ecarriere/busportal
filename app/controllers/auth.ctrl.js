(function(){
	'use-strict';

	angular
		.module('myApp')
		.controller('AuthController',AuthController);

	AuthController.$inject = ['$http'];

	function AuthController($http){
		var authVm = this;

		//buttons
		authVm.register_btn = 'Sign Up';
		authVm.auth_btn = "Log In";

		//Functions
		//authVm.register = register;
		authVm.authenticate = authenticate;

		// function register(){
		// 	//check passwords
		// 	if(authVm.password == authVm.repassword){
		// 		var user = {
		// 			email:authVm.email,
		// 			password:authVm.password
		// 		}
		// 		user = JSON.stringify(user);
		// 		$http.post('/api/auth/register',user)
		// 		.then(function(res){
		// 			console.log(res);
		// 			authVm.register_btn = res.data.msg;
		// 		})
		// 	}
		// 	else{
		// 		authVm.register_btn = "Passwords Don't Match";
		// 	}
		// }

		function authenticate(){
			var user = {
				email:authVm.email,
				password:authVm.password
			}

			user = JSON.stringify(user);
			$http.post('/api/auth/authenticate',user)
			.then(function(res){
				console.log(res);
				localStorage.user = JSON.stringify(res.data.user);
				authVm.auth_btn = res.data.msg;
			})
		}
		
	}
})();
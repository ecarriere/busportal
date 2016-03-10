(function(){

    angular
        .module('myApp')
        .service('loginService', loginService);

    function loginService(){


	  var srv 		= this;
	  srv.$https 	= $http;
	  srv.$location = $location

	  var BASE_URL 				= 'location.origin';
	  var LOGIN_URL 			= BASE_URL + 'login';
	  var LOGOUT_URL 			= BASE_URL + 'logout';
	  var PROFILE_URL 			= BASE_URL + 'user';
	  var CREATE_ACCOUNT_URL 	= BASE_URL + 'createAccount';
	 

	/*TODO #1:
	  add a createAccount() function that sends POST to
	  https://mock-login-server.herokuapp.com/api/createAccount
	*/

	  srv.createAccount = function(username, password) {
	    console.log(username, password);
	    var data = {"username": username,"password": password};
	    srv.$http.post(CREATE_ACCOUNT_URL, data)

	    .then(function(response) {
	      console.log(response);
	    }, function(error){
	      console.log(error)
	    });
	  }
	  
	  srv.login = function(username, password) {
	    var srv = this;
	    return srv.$http.post(LOGIN_URL, {username: username, password: password})
	    
	    .then(function(response) {
	      console.log(response)
	      localStorage.authToken = response.data.authToken;
	      srv.$location.url('/dashboard');
	    },function(error){
	      console.log(error)
	    });
	  }

	  srv.logOut = function(){
	    var srv = this;
	    return srv.$http.post(LOGOUT_URL, {})     
	    
	    .then(function(response) {
	      console.log(response)
	      // localStorage.authToken = response.data.authToken;
	      srv.$location.url('/login');
	   
	    },function(error){
	      console.log(error)
	    });

	  }
	  

	  // TODO #3: 
	  // add a getProfile() function that sends a GET to
	  // https://mock-login-server.herokuapp.com/api/user
	  //This function should a return a promise that 
	  //resolves the user data

	  srv.getProfile = function(){
	    return srv.$http.get(PROFILE_URL);
	  }
	}


	/*TODO #5: 
	  add a logout() function that sends a POST to
	  https://mock-login-server.herokuapp.com/api/logout*/



    };


})();
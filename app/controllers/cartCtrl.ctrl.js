myApp.controller('CartController', CartController);



function CartController(cartService, $http, $location){
	var cartVm = this;
	cartVm.items = cartService.cartitems;
	cartVm.removeItem = removeItem;
	cartVm.addOrder = addOrder;

	// if(localStorage.authToken){
	// 	cartVm.firstname = "l";
	// }

	console.log(cartService.cartitems);
	cartVm.total = 0;
	Total();
	cartVm.subtotal = cartVm.total * 0.81
	cartVm.taxes = cartVm.total * 0.19
	cartService.cartitems.from;
	
	cartVm.firstname;
	cartVm.lastname;
	cartVm.email;
	cartVm.phone;
	cartVm.country;

	try{
		cartVm.user = JSON.parse(localStorage.user);
		
		cartVm.firstname = cartVm.user.firstname;
		cartVm.lastname = cartVm.user.lastname;
		cartVm.email = cartVm.user.email;
		cartVm.phone = cartVm.user.phone;
		

	}
	catch(err){
		cartVm.user = {};
	}



// Remove Function
	function removeItem(index){

	cartVm.items.splice(index,1)
		console.log(index)
	}

// Total calculation
	function Total(){
		for(var index in cartVm.items){
			console.log(cartVm.items[index]);
			cartVm.total+=cartVm.items[index].price*cartVm.items[index].seatsbought
		}
		console.log(cartVm.total);
	}

// Checkout Section
	
	function addOrder(){
		console.log("works");
		var trip_order = angular.copy(cartVm.items[0]);
		delete trip_order.$$hashKey; 
		delete trip_order.seats;
		cartVm.order.order = trip_order;
		console.log(cartVm.order);

		$http.post('/api/orders/', cartVm.order)
		.then(function(response){
			console.log(response);
			$location.path('/thankyou');
		});
	}



};
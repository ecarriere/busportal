myApp.controller('CartController', CartController);

	

	

	


function CartController(cartService){
	var cartVm = this;
	cartVm.items = cartService.cartitems;
	cartVm.removeItem = removeItem;
	console.log(cartService.cartitems);
	cartVm.total = 0;
	Total();

	cartVm.subtotal = cartVm.total * 0.81
	cartVm.taxes = cartVm.total * 0.19


	function removeItem(index){

	cartVm.items.splice(index,1)
		console.log(index)
	}

	function Total(){
		for(var index in cartVm.items){
			console.log(cartVm.items[index]);
			cartVm.total+=cartVm.items[index].price*cartVm.items[index].seatsbought
		}
		console.log(cartVm.total);
	}

};
(function(){

    angular
        .module('myApp')
        .service('cartService', cartService);

    


    function cartService() {

    	// Cart items in array
        this.cartitems = [];  
       
        


        };

})();
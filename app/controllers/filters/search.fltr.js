myApp.filter('searchFilter', searchFilter);


// Search filter

	function searchFilter(){
		
		return function(trips, data) {

	    	var output = [];

			for(i in trips){
				if((trips[i].from === data.origin)&&(trips[i].to === data.destination)){
					output.push(trips[i]);
				} 				
				
			} 

			return output;
    	}

    

  	};

  	//add data in filter: &&(trips[i].date === data.date)
  	//also add seats!!!!
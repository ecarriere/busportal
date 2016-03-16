myApp.filter('seatsFilter', seatsFilter);

function seatsFilter(){
   

   return function(n) {
   	var seats = n;

     var res = [];
     for (var i = 1; i <= seats; i++) {
       res.push(i);
     }
     return res;
   };
 };




// After that, on the view is possible to use like this:

// <ul>
//  <li ng-repeat="i in 5 | range">
//    {{i+1}}
//  <li>
// </ul>
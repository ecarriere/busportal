var express = require('express');
var router = express.Router();
var Trip = require('./../models/trips.js');



router.get('/', function(req, res){
	Trip.getTrips(function(err, trips){
	if(err){	
		throw err;
	}
	res.json(trips);
	  });
});

router.get('/:_id', function(req, res){
	Trip.getTripById(req.params._id,function(err, trip){
		if(err){
			throw err;
		}
		res.json(trip);
	});
});

router.post('/', function(req, res){

	var trip = req.body;
	console.log(req);
	Trip.addTrip(trip, function(err, trip){
		if(err){
			throw err;
		}
		res.json(trip);
	});
});

router.put('/:_id', function(req, res){
	var  id = req.params._id;
	var trip = req.body;
	console.log(trip);
	Trip.updateTrip(id, trip, {}, function(err, trip){
		if(err){
			throw err;
		}
		res.json(trip);
	});
});

router.delete('/:_id', function(req, res){
	var  id = req.params._id;
	Trip.removeTrip(id, function(err, trip){
		if(err){
			throw err;
		}
		res.json(trip);
	});
});


module.exports = router;

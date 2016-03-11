var express = require('express');
var router = express.Router();
var Trip = require('./../models/trips.js');
var User = require('./../models/users.js');


//Routes TRIPS

router.get('/api/trips', function(req, res){
	Trip.getTrips(function(err, trips){
	if(err){	
		throw err;
	}
	res.json(trips);
	  });
});

router.get('/api/trips/:_id', function(req, res){
	Trip.getTripById(req.params._id,function(err, trip){
		if(err){
			throw err;
		}
		res.json(trip);
	});
});

router.post('/api/trips', function(req, res){

	var trip = req.body;
	console.log(req);
	Trip.addTrip(trip, function(err, trip){
		if(err){
			throw err;
		}
		res.json(trip);
	});
});

router.put('/api/trips/:_id', function(req, res){
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

router.delete('/api/trips/:_id', function(req, res){
	var  id = req.params._id;
	Trip.removeTrip(id, function(err, trip){
		if(err){
			throw err;
		}
		res.json(trip);
	});
});

// Routes USERS

router.get('/api/users', function(req, res){
	User.getUsers(function(err, users){
	if(err){	
		throw err;
	}
	res.json(users);
	  });
});

router.get('/api/users/:_id', function(req, res){
	User.getUserById(req.params._id,function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

router.post('/api/users', function(req, res){

	var user = req.body;
	console.log(req);
	User.addUser(user, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

router.put('/api/users/:_id', function(req, res){
	var  id = req.params._id;
	var user = req.body;
	console.log(user);
	User.updateUser(id, user, {}, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

router.delete('/api/users/:_id', function(req, res){
	var  id = req.params._id;
	User.removeUser(id, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

module.exports = router;
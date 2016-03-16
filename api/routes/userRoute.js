var express = require('express');
var router = express.Router();
var User = require('./../models/users.js');

router.get('/', function(req, res){
	User.getUsers(function(err, users){
	if(err){	
		throw err;
	}
	res.json(users);
	  });
});

router.get('/:_id', function(req, res){
	User.getUserById(req.params._id,function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

router.post('/', function(req, res){

	var user = req.body;
	console.log(req);
	User.addUser(user, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

router.put('/:_id', function(req, res){
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

router.delete('/:_id', function(req, res){
	var  id = req.params._id;
	User.removeUser(id, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

module.exports = router
//var models 	= require('./../models');
var bcrypt	= require('bcrypt');
var jwt		= require('jsonwebtoken');
var router 	= require('express').Router();


//register a new user
router.post('/register',function(req,res){
	console.log('Registration Endpoint');
	var __user = req.body;
	
	//check if user is already registered
	var where = {email:__user.email};
	Users.findOne(where)
	.then(function(user){
		if(!user){
			//user does not exist
			//encrypt password
			bcrypt.genSalt(10, function(err, salt) {
		    	bcrypt.hash(__user.password, salt, function(err, hash) {
		       		// Store hash in your password DB. 
		        	__user.password = hash;
		        	var newUser = User({
		        		email: __user.email,
		        		password: __user.password});
		        	newUser.save(function(err){
		        		if(err){
		        			console.log(err);
		        			res.json({user:null,msg:'Cant create user'});
		        		} else{
		        			//remove password from response
		        			delete newUser.password;
		        			res.json({user:newUser, msg:'Account Created'});
		        		}
		        	})
		    	});
			});
		}else{
			res.json({user:null,msg:'Email is already registered'})
		}
		
	});
});

router.post('/authenticate',function(req,res){
	console.log('Authentication Endpoint');
	var __user = req.body;

	var where = {email:__user.email};
	Users.findOne(where, function(user){
		if(err){
			console.log(err);
			res.json({status:400, err:err});
		} else if(user){
			//check incoming password against encrypted version
			bcrypt.compare(__user.password, user.password, function(err, valid) {
			    if(valid){
			    	//remove password from response
			    	delete user.password;
			    	//set web token
			    	var user_obj = {email:user.email};
			    	var token = jwt.sign(user_obj,'randomsalt');
					res.set('authentication',token);
			    	res.json({user:user,msg:'Authenticated'});
			    }
			    else{
			    	res.json({user:null,msg:'Email/Password is incorrect'})
			    }}
			)}
		})
	});

module.exports = router;
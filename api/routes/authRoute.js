var bcrypt	= require('bcrypt');
var jwt		= require('jsonwebtoken');
var router 	= require('express').Router();
var Users 	= require('./../models/users.js');


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
		        	var newUser = Users({
		        		username: 	__user.username,
						password: 	__user.password,
						firstname: 	__user.firstname,
						lastname: 	__user.lastname,
						phone: 	__user.phone,
						email: 	__user.email,
						country: __user.country,
						permission:'user'
		        	});

		        	// console.log(newUser);

		        	newUser.save(function(err){
		        		if(err){
		        			console.log(err);
		        			res.json({user:null,msg:'Cant create user'});
		        		} else{
		        			//remove password from response
		        			newUser.passsword = null;
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
	console.log(__user);
	var where = {email:__user.email};
	Users.findOne(where, function(err,user){
		if(err){
			console.log(err);
			res.json({status:400, err:err});
		} else if(user){
			//check incoming password against encrypted version
			console.log('hi');
			bcrypt.compare(__user.password, user.password, function(err, valid) {
			    if(valid){
			    	//remove password from response
			    	//set web token
			    	var user_obj = {email:user.email,permission:user.permission}; //user.permission
			    	user.password = null;
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
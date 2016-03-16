var mongoose = require('mongoose');

// Schema for Books
var userSchema = mongoose.Schema({
	
	username:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	firstname: {
		type: String,
		required: true
	},
	lastname:{
		type: String,
		required: true
	},
	phone:{
		type: String,
		required: true
	},
	email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        //validate: [validateEmail, 'Please fill a valid email address'],
        //match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
	country:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var User = module.exports = mongoose.model('User', userSchema);

// Get Users
module.exports.getUsers = function(callback, limit){
	 User.find(callback).limit(limit);
	 console.log(callback)
};


// Get Users by ID
module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
};

// Add User
module.exports.addUser = function(user, callback){
	console.log(user);
	User.create(user, function(err, success){
		if(err){
			console.log(err)
		}
		User.create(user, callback);
	});
};

// Update User
module.exports.updateUser = function(id, user, options, callback){
	var query = {_id: id};
	var update = {
		username: 	user.username,
		password: 	user.password,
		firstname: 	user.firstname,
		lastname: 	user.lastname,
		phone: 	user.phone,
		email: 	user.email,
		country: user.country
	}
	User.findOneAndUpdate(query, update, options, callback);
};

// Delete User
module.exports.removeUser = function(id, callback){
	var query = {_id: id};
	User.remove(query, callback);
};




















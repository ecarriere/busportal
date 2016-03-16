var mongoose = require('mongoose');
var User = require('./../models/users.js');
var Trip = require('./../models/trips.js');



// Schema for Books
var orderSchema = mongoose.Schema({
	
	// userId: {
	// 	type: String, 
	// 	required: true
	// },
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
	order:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Order = module.exports = mongoose.model('Order', orderSchema);

// Get Orders
module.exports.getOrders = function(callback, limit){
	 Order.find(callback).limit(limit);
	 console.log(callback)
};


// Get Orders by ID
module.exports.getOrderById = function(id, callback){
	Order.findById(id, callback);
};

// Add order
module.exports.addOrder = function(order, callback){
	console.log(order);
	Order.create(order, function(err, success){
		if(err){
			console.log(err)
		}
		
	});
};

// Update order
module.exports.updateOrder = function(id, order, options, callback){
	var query = {_id: id};
	var update = {
		firstname: order.firstname,
		lastname: order.lastname,
		email: order.email,
		phone: order.phone,
		country: order.country
	}
	Order.findOneAndUpdate(query, update, options, callback);
};

// Delete order
module.exports.removeOrder = function(id, callback){
	var query = {_id: id};
	Order.remove(query, callback);
};

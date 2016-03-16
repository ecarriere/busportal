var mongoose = require('mongoose');

// Schema for Books
var tripSchema = mongoose.Schema({
	from: {
		type: String,
		required: true
	},
	to:{
		type: String,
		required: true
	},
	price:{
		type: Number,
		required: true
	},
	date:{
		type: String,
		required: true
	},
	time:{
		type: String,
		required: true
	},
	seats:{
		type: Number,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Trip = module.exports = mongoose.model('Trip', tripSchema);


// Get Trips
module.exports.getTrips = function(callback, limit){
	 Trip.find(callback).limit(limit);
	 console.log(callback)
};


// Get Trips by ID
module.exports.getTripById = function(id, callback){
	Trip.findById(id, callback);
};

// Add Trip
module.exports.addTrip = function(trip, callback){
	console.log(trip);
	Trip.create(trip, function(err, success){
		if(err){
			console.log(err)
		}
		//Trip.create(trip, callback);
	});
};

// Update Trip
module.exports.updateTrip = function(id, trip, options, callback){
	var query = {_id: id};
	var update = {
		from: 	trip.from,
		to: 	trip.to,
		price: 	trip.price,
		date: 	trip.date,
		time: 	trip.time,
		seats: 	trip.seats
	}
	Trip.findOneAndUpdate(query, update, options, callback);
};

// Delete Trip
module.exports.removeTrip = function(id, callback){
	var query = {_id: id};
	Trip.remove(query, callback);
};
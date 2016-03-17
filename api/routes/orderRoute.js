var express = require('express');
var router = express.Router();
var Order = require('./../models/orders.js');
var Trip = require('./../models/trips.js');
var bodyParser = require('body-parser');

// Routes Orders

router.get('/', function(req, res){
	Order.getOrders(function(err, orders, order){
	if(err){	
		throw err;
	}
		res.json(orders);
	  });
});

router.get('/:_id', function(req, res){
	Order.getOrderById(req.params._id,function(err, order){
		if(err){
			throw err;
		}
			res.json(order);
		});
	});

router.post('/', function(req, res){
	var order = req.body;
	console.log(order);
	var parsedOrder = order.order;
	

	var tripId  = parsedOrder._id;

	var orderedTrip;
	Trip.findById(tripId, function(err, trip){
		orderedTrip = trip;
		orderedTrip.seats = orderedTrip.seats - parsedOrder.seatsbought;
		console.log('trip find by id: ' + orderedTrip.seats);
		Trip.findOneAndUpdate({_id: tripId}, orderedTrip, {}, function(err) {
			console.log('find one and update: ' + order.order);
			order.order = JSON.stringify(order.order);
			Order.create(order, function(err, order){
				if(err){
					throw err;
				}

				res.json(order);
			});
		});
	})
});

router.put('/:_id', function(req, res){
	var  id = req.params._id;
	var order = req.body;
	console.log(order);
	Order.updateOrder(id, order, {}, function(err, order){
		if(err){
			throw err;
		}
		res.json(order);
	});
});

router.delete('/:_id', function(req, res){
	var  id = req.params._id;
	Order.removeOrder(id, function(err, order){
		if(err){
			throw err;
		}
		res.json(order);
	});
});

module.exports = router;
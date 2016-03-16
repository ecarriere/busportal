var express = require('express');
var router = express.Router();
var Order = require('./../models/orders.js');
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
	console.log(req);
	order.order = JSON.stringify(order.order);
	console.log('order: ' + order);
	Order.addOrder(order, function(err, order){
		if(err){
			throw err;
		}

		res.json(order);
	});
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
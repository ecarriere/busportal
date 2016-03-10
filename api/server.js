var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(__dirname +'./../app'));

try{
	var env = require('./config/env_dev');
}
catch(err){
	var env = require('./config/env_prod');
}


var Trip = require('./models/trips.js')


//Connect to mongoose
mongoose.connect('mongodb://localhost/data/db');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
	console.log("Connected to db at /api/data/db");
});

var apiRoutes = require('./routes/apiroutes.js');
app.use('/', apiRoutes);


// Listen on port..

app.listen(env.port,function(){
	console.log('Listenting on '+env.host+':'+env.port);
	console.log('Stop server with CTRL + C');
});
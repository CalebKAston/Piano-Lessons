var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
//var mongoose   = require('mongoose');
var path       = require('path');
var comments   = require('./comments.js')

//mongoose.connect('mongodb://heroku_qd33ttl5:kr0f7vgeal05unbj8ls2mmare4@ds019826.mlab.com:19826/heroku_qd33ttl5');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('../client'))

var port = process.env.PORT || 8080;


var router = express.Router();

// http://localhost:8080/

app.listen(port);
console.log('Setting sail for ' + port);
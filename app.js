/**
 * @author James Daniel
 */
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var appPort = 8080;

require('./database')();


var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

require('./routes')(app);

app.listen(appPort);
console.log('server running');
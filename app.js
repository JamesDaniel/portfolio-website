/**
 * @author James Daniel
 */
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var appPort = process.env.PORT || 8080;
var appIp = process.env.IP || null;

//require('./database')();


var app = express();

app.use("/", express.static(__dirname + "/public"));
app.use(bodyParser());

require('./routes')(app);

app.listen(appPort, appIp);
console.log('server running');

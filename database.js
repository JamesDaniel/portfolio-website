/**
 * @author James Daniel
 */
var mongoose = require('mongoose');
var config = require('./config.js');
var sayingMod = require('./models/Saying');

require('./models/Saying');


var connStr = config.getDbStr();
mongoose.connect(connStr);

var con = mongoose.connection;
con.once('open', function () {
    console.log('connected to mongodb successfully!');
    sayingMod.seedSayings();
});

con.on('error', function () {
    console.log('database error');
    throw new Error('Unable to connect to database at ' + connStr);
});
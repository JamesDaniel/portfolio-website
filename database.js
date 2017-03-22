/**
 * @author James Daniel
 */
var mongoose = require('mongoose');
var config = require('./config.js');
/*
var mongoUri = 'mongodb://' + db.host + ':' + db.port + '/' + db.name;

module.exports = function () {
    mongoose.connect(mongoUri);
    var db = mongoose.connection;
    db.on('error', function () {
        console.log('database error');
        throw new Error('Unable to connect to database at ' + mongoUri);
    });
};
*/
var sayingMod = require('./models/saying');

//mongoose.connect('mongodb://localhost/sayings');
var connStr = config.dev.db.connStr;
mongoose.connect(connStr);

var con = mongoose.connection;
con.once('open', function () {
    console.log('connected to mongodb successfully!');
    sayingMod.seedSayings();
});
/**
 * @author James Daniel
 */
var mongoose = require('mongoose');
var db = {
    host: 'localhost',
    port: '27017',
    name: 'portfolio'
};
var mongoUri = 'mongodb://' + db.host + ':' + db.port + '/' + db.name;

module.exports = function () {
    mongoose.connect(mongoUri);
    var db = mongoose.connection;
    db.on('error', function () {
        console.log('database error');
        throw new Error('Unable to connect to database at ' + mongoUri);
    });
};

require('./models/project');
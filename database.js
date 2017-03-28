/**
 * @author James Daniel
 */
var config = require('./config.js');
require('./models/Saying');
var sayingData = require('./sayings-data');
require('./models/Saying');


var connStr = config.getDbStr();

sayingData.connectDB(connStr)
.then( () => {
    console.log('connected to mongodb successfully!');
    sayingData.seedSayings();
});
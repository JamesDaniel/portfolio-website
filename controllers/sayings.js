/**
 * @author James Daniel
 */
var mongoose = require('mongoose');
var sayingsData = require("../sayings-data");
 
exports.all = function (req, res) {
    console.log('called: ---------------------------------');
    sayingsData.findSayings().then(function(collection) {
        res.send(collection);
    });
};
exports.first = function (req, res) {
    mongoose.model('Saying').find({}).exec(function(error,collection) {
        res.send(['"' + collection[0].content + '" ~' + collection[0].author]);
    });
};
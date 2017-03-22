/**
 * @author James Daniel
 */
 var mongoose = require('mongoose');
exports.all = function (req, res) {
    mongoose.model('Saying').find({}).exec(function(error,collection) {
        res.send(collection);
    })
}
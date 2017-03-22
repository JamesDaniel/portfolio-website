/**
 * @author James Daniel
 */
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var SayingSchema = new Schema({
    author: {type:String},
    content:{type:String}
});

var Saying = Mongoose.model('Saying', SayingSchema);

exports.seedSayings = function () {
    Saying.find({}).exec(function(error, collection) {
        if (collection.length === 0) {
            Saying.create({author:'Alan Kay', content:"Lisp isn't a language, it's a building material."});
            Saying.create({author:'Edward V Berard', content:"Walking on water and developing software from a specification are easy if both are frozen."});
            Saying.create({author:'Olav Mjelde', content:"They don't make bugs like Bunny anymore."});
            Saying.create({author:'Alan J. Perlis', content:"A programming language is low level when its programs require attention to the irrelevant."});
            Saying.create({author:'Waldi Ravens', content:"A C program is like a fast dance on a newly waxed dance floor by people carrying razors."});
        }
    })
}
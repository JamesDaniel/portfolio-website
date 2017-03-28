var mongoose = require('mongoose');
var Promise = require('bluebird');

var Saying = mongoose.model('Saying');

var findSayings = (query) => {
    return Promise.cast(Saying.find(query).exec());
};

exports.findSayings = findSayings;

exports.connectDB = Promise.promisify(mongoose.connect, {context: mongoose});

var createSaying = Promise.promisify(Saying.create, {context: Saying});

exports.seedSayings = () => {
    return findSayings({}).then( (collection) => {
        if (collection.length === 0) {
            return Promise.map(sayings, (job) => {
                return createSaying(job);
            });
        }
    });
};

var sayings = [
        {author:'Alan Kay', content:"Lisp isn't a language, it's a building material."},
        {author:'Edward V Berard', content:"Walking on water and developing software from a specification are easy if both are frozen."},
        {author:'Olav Mjelde', content:"They don't make bugs like Bunny anymore."},
        {author:'Alan J. Perlis', content:"A programming language is low level when its programs require attention to the irrelevant."},
        {author:'Waldi Ravens', content:"A C program is like a fast dance on a newly waxed dance floor by people carrying razors."}
    ];
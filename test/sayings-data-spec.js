var expect = require("chai").expect;
var config = require('../config.js');
var mongoose = require('mongoose');
require('../models/Saying');
var Promise = require("bluebird");
var sayingsData = require("../sayings-data");

var connStr = config.getDbStr();

function resetSayings() {
    return new Promise( function(resolve, reject) {
        mongoose.connection.collections['sayings'].drop(resolve, reject);
    });
}

describe("get sayings", function () {
    
    var sayings;
    
    before(function(done) {
        sayingsData.connectDB(connStr)
        .then(resetSayings)
        .then(sayingsData.seedSayings)
        .then(sayingsData.findSayings)
        .then( function(collection) {
            sayings = collection;
            done();
        });
    });
    
    it("should never be empty since sayings are seeded", function() {
        expect(sayings.length).to.be.at.least(1);
    });
    
    it("should have a saying with an author", function() {
        expect(sayings[0].author).to.not.be.empty;
    });
    
    it("should have a saying with content", function() {
        expect(sayings[0].content).to.not.be.empty;
    });
});
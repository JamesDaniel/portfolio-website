var expect = require("chai").expect;
var config = require('../config.js');
var mongoose = require('mongoose');
var sayingMod = require('../models/Saying');
var Promise = require("bluebird");
var sayingsData = require("../sayings-data");

var connStr = config.getDbStr();

function resetSayings() {
    return new Promise( (resolve, reject) => {
        mongoose.connection.collections['sayings'].drop(resolve, reject);
    });
}

describe("get sayings", function () {
    
    var sayings;
    
    before((done) => {
        sayingsData.connectDB(connStr)
        .then(resetSayings)
        .then(sayingMod.seedSayings)
        .then(sayingsData.findSayings)
        .then( (collection) => {
            sayings = collection;
            done();
        });
    });
    
    it("should never be empty since sayings are seeded", () => {
        expect(sayings.length).to.be.at.least(1);
    });
    
    it("should have a saying with an author", () => {
        expect(sayings[0].author).to.not.be.empty;
    });
    
    it("should have a saying with content", () => {
        expect(sayings[0].content).to.not.be.empty;
    });
});
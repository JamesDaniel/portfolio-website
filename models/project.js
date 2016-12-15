/**
 * @author James Daniel
 */
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var ProjectSchema = new Schema({
    project: {
        id: Number,
        title: String,
        tags: [String],
        description: String
    }
});

Mongoose.model('Project', ProjectSchema);
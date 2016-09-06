// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called

var Schema =   mongoose.Schema;
// create schema
var levelSchema   = new Schema({
    name: String,
    courseName: String,
    numberOfTopics: Number
    
});
// create model if not exists.
module.exports = mongoose.model('Level', levelSchema);
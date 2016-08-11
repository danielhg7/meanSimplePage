// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called

var Schema =   mongoose.Schema;
// create schema
var courseSchema   = new Schema({
    name: String,
    numberOfModules: Number
    
});
// create model if not exists.
module.exports = mongoose.model('Course', courseSchema);
// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called

var Schema =   mongoose.Schema;
// create schema
var userSchema   = new Schema({
    name: String,
    lastname: String,
    email: String,
    username: String,
    password: String
});
// create model if not exists.
module.exports = mongoose.model('User', userSchema);
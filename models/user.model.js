const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// defining parameters for schema
const userSchema = new Schema({
    username: String,
    googleId: String
});

// creating user model
const User = mongoose.model('user', userSchema);

module.exports = User;
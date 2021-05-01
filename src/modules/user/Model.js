const mongoose = require('mongoose');

const { Schema } = mongoose; //Schems = mongoose.schema;

const userSchema = new Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;

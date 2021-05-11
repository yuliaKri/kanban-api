const mongoose = require('mongoose');
const { Types } = mongoose;
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  links: [{ type: Types.ObjectID, ref: 'Link' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;

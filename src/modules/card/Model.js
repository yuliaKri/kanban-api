const mongoose = require('mongoose');
const date = require('date-and-time');

const { Schema } = mongoose; //Schems = mongoose.schema;

const cardSchema = new Schema({
  name: String,
  description: String,
  status: String,
  priority: Number,
  markedToDelete: Boolean,
  createdAt: date,
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;

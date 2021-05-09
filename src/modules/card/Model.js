const mongoose = require('mongoose');

const { Schema } = mongoose; //Schems = mongoose.schema;

const cardSchema = new Schema({
  name: String,
  description: String,
  status: String,
  priority: String,
  markedToDelete: Boolean,
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;

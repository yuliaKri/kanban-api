const mongoose = require('mongoose');
//const date = require('date-and-time');

const { Schema } = mongoose; //Schems = mongoose.schema;

const cardSchema = new Schema({
  name: String,
  description: String,
  status: String,
  priority: Number,
  markedToDelete: Boolean,
  user: { type: String, required: false },
  imageURL: { type: String, required: false },
  createdAt: { type: String, required: false },//timestamps: {}, versionKey: false, required: false },
  // todo req exp, timestamps см. учебные реппозитории { timestamps: {}, versionKey: false },
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;

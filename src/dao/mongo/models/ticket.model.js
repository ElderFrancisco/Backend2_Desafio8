const mongoose = require('mongoose');

const ticketCollection = 'tickets';

const ticketCollectionSchema = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
    required: true,
  },
  purchase_datetime: {
    type: Date,
    default: Date.now,
  },
  amount: {
    type: Number,
    required: true,
  },
  purchaser: {
    type: String,
    required: true,
  },
});

const ticketModel = mongoose.model(ticketCollection, ticketCollectionSchema);

module.exports = ticketModel;

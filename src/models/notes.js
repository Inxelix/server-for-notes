const mongoose = require('mongoose');
const uuid = require('uuid');


const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
  dateOfCreation: {
    type: Number,
    default: Date.now(),
  },
  dateOfUpdate: {
    type: Number,
    default: Date.now(),
  },
  _id: {
    type: String,
    default: uuid,
  },
});

module.exports = mongoose.model('Notes', noteSchema);

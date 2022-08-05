const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatLog = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model('Message', chatLog);

module.exports = Message;

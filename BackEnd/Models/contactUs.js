const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
  time: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Message", ContactSchema);

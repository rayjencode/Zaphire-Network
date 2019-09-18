const mongoose = require("mongoose");

const SecuritySchema = new mongoose.Schema({
  securityCode: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Security = mongoose.model("security", SecuritySchema);

const mongoose = require("mongoose");

const GenerateSchema = new mongoose.Schema({
  activationCode: {
    type: String,
    required: true
  },
  securityCode: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  },
  investment: {
    type: Number,
    required: true
  },
  returnInvestment: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Generate = mongoose.model("generate", GenerateSchema);

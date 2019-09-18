const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  name: {
    type: String
  },
  activationCode: {
    type: String,
    required: true,
    unique: true
  },
  investment: {
    type: Number,
    required: true
  },
  datePayout: {
    type: Date,
    default: () => Date.now() + 38 * 24 * 60 * 60 * 1000
  },
  claim: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Account = mongoose.model("account", AccountSchema);

const mongoose = require("mongoose");

const DownlineSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  downlineName: {
    type: String,
    required: true
  },
  downlineEmail: {
    type: String,
    required: true
  },
  referralFee: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Downline = mongoose.model("downline", DownlineSchema);

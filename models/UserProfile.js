const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  avatar: {
    type: String
  },
  contact: {
    type: String
  },
  sponsorId: {
    type: String
  },
  balance: {
    type: Number,
    default: 0
  },
  encashment: {
    type: Number,
    default: 0
  },
  referralFee: {
    type: Number,
    default: 0
  },

  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = UserProfile = mongoose.model("userprofile", UserProfileSchema);

// downlines: [
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "users"
//     },
//     name: {
//       type: String
//     },
//     avatar: {
//       type: String
//     },
//     investment: {
//       type: Number
//     },
//     date: {
//       type: Date,
//       default: Date.now
//     }
//   }
// ],

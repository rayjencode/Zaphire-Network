const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

// Import Mode
const UserProfile = require("../../models/UserProfile");
const User = require("../../models/User");

// @route   GET api/userProfile/me
// @desc    Get current userProfile
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await UserProfile.findOne({ user: req.user.id }).populate(
      "user",
      ["name"]
    );

    if (!profile)
      return res.status(400).json({ msg: "There is no profile for this user" });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/userProfile/
// @desc    Create user profile
// @access  Private

router.post("/", auth, async (req, res) => {
  const { contact, sponsorId, email } = req.body;

  // build userProfile object
  const profileFields = {};
  profileFields.user = req.user.id;

  if (contact) profileFields.contact = contact;
  if (sponsorId) profileFields.sponsorId = sponsorId;

  try {
    // const sponsor = await User.findOne({ email });
    // if (!sponsor) return res.status(400).json({ msg: "Sponsors didn't exist" });

    let profile = await UserProfile.findOne({ user: req.user.id });
    if (profile) {
      // Update
      profile = await UserProfile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json("updated");
    }

    //   Create
    profile = new UserProfile(profileFields);
    await profile.save();
    res.json("save");
  } catch (err) {
    console.error(err.message);
    res.send("Server Error");
  }
});

// @route   GET api/userProfiles
// @desc    Get all user Profiles
// @access  Private
router.get("/user", auth, async (req, res) => {
  try {
    const profiles = await UserProfile.find().populate("user", ["name"]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/userProfile/:user_id
// @desc    Get user profile by ID
// @access  Private
router.get("/user/:user_id", auth, async (req, res) => {
  try {
    const profile = await UserProfile.findOne({
      user: req.params.user_id
    }).populate("user", ["name"]);
    if (!profile) return res.status(400).json({ msg: "Profile Not Found" });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == "ObjectId") {
      return res.status(400).json({ msg: "Profile not Found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/profile/referral
// @desc    update referral fee & Balance
// @access  Private
router.put("/referral", auth, async (req, res) => {
  try {
    let profile = await UserProfile.findOne({ user: req.user.id });
    if (profile) {
      profile = await UserProfile.findOneAndUpdate({
        referralFee: profile.referralFee + 500,
        balance: profile.balance + 500
      });
    }
    await res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/profile/balance
// @desc    update balance from widthdraw
// @access  Private
router.put("/balance", auth, async (req, res) => {
  try {
    let profile = await UserProfile.findOne({ user: req.user.id });
    if (profile) {
      profile = await UserProfile.findOneAndUpdate({
        balance: profile.balance - req.body.amount
      });
      return res.json("Update balance");
    }
    await res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/profile/sponsor/:id
// @desc    add a sponsor
// @access  Private
// router.put("/sponsor/:id", auth, async (req, res) => {
//   try {
//     const sponsor = await UserProfile.findById(req.params.id).populate("user", [
//       "name"
//     ]);
//     sponsor.downlines.unshift({ user: req.user.id, name: req.user.name });

//     await sponsor.save();
//     res.json(sponsor.downlines);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

// @route   GET api/profile/downlines/:userid
// @desc    Get all downlines base on my user id
// @access  Private
// router.get("/downlines", auth, async (req, res) => {
//   try {
//     const downlines = await UserProfile.find({ sponsorId: req.id });

//     res.json(downlines);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

module.exports = router;

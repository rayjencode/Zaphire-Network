const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

// Import Model
const Downline = require("../../models/Downline");
const User = require("../../models/User");

// @route   POST api/downline
// @desc    Add Downline
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("downlineName", "Name is required")
        .not()
        .isEmpty(),
      check("downlineEmail", "Please enter a valid email").isEmail()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { downlineName, downlineEmail, referralFee } = req.body;

      const user = await User.findOne({ email: downlineEmail });
      if (user)
        return res
          .status(400)
          .json({ errors: [{ msg: "Email already exists" }] });

      const downline = new Downline({
        user: req.user.id,
        downlineName,
        downlineEmail,
        referralFee: 500
      });

      await downline.save();
      res.json(downline);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   GET api/downline
// @desc    get my downlines
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const downlines = await Downline.findOne({ user: req.user.id }).sort({
      date: -1
    });
    res.json(downlines);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

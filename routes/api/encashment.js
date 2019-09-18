const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

// Import Model
const Encashment = require("../../models/Encashment");
const User = require("../../models/User");

// @route   POST api/encashment
// @desc    Create encashment
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("amount", "Amount is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      const profile = await UserProfile.findOne({ user: req.user.id });

      if (profile.balance < req.body.amount)
        return res.status(401).json({ msg: "Please enter a valid amount" });

      const encash = new Encashment({
        user: req.user.id,
        name: user.name,
        amount: req.body.amount
      });
      await encash.save();
      res.json(encash);
    } catch (err) {
      console.error(err.message);
    }
  }
);

module.exports = router;

const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

// Import Model
const Account = require("../../models/Accounts");
const User = require("../../models/User");
const UserProfile = require("../../models/UserProfile");
const Activation = require("../../models/Generate");

// @route   POST api/account
// @desc    Add Account
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("activationCode", "Please enter a valid activation code")
        .not()
        .isEmpty(),
      check("investment", "Please select Investment Type")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const { activationCode, investment } = req.body;
    try {
      let activation = await Generate.findOne({ activationCode });
      if (!activation)
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Activation Code" }] });

      const user = await User.findById(req.user.id).select("-password");

      let isActivated = await Account.findOne({ activationCode });
      if (isActivated)
        return res
          .status(400)
          .json({ errors: [{ msg: "Activation already used" }] });

      isActivated = new Account({
        user: req.user.id,
        name: user.name,
        activationCode,
        investment // get fetch from front end (router.get(investment/:id))
      });

      await isActivated.save();

      res.json(isActivated);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;

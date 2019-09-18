const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

// Import Models
const User = require("../../models/User");
const Generate = require("../../models/Generate");

// @route   POST api/user
// @desc    Register user
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is Required")
      .not()
      .isEmpty(),
    check("email", "Please include valid email").isEmail(),
    check(
      "password",
      "Please enter password with 6 or more characters"
    ).isLength({ min: 6 }),
    check("securityCode", "Security Code is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, sponsorId, securityCode } = req.body;

    try {
      // See if user exist
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      const security = await Generate.findOne({ securityCode });
      if (!security)
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Security Code" }] });

      const isActivated = await User.findOne({ securityCode });
      if (isActivated)
        return res
          .status(400)
          .json({ errors: [{ msg: "Security Code already used" }] });

      user = new User({
        name,
        email,
        password,
        sponsorId,
        securityCode
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return JsonWebToken
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;

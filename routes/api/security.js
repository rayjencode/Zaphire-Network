const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

// Import Model
const Security = require("../../models/Security");

// @route   GET api/security
// @desc    Test Route
// @access  Public
router.get("/", (req, res) => res.send("Security Code route"));

// @route   POST api/security
// @desc    Create Security Code
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("securityCode", "Please enter Security Code")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const { securityCode } = req.body;

    try {
      let security = await Security.findOne({ securityCode });
      if (security)
        return res
          .status(400)
          .json({ errors: [{ msg: "Security Code Already exist" }] });

      security = new Security({
        securityCode
      });
      await security.save();
      res.json(security);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;

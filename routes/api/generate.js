const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const uuid = require("uuid/v4");

// Import Model
const Generate = require("../../models/Generate");

// @route   GET api/activation
// @desc    Test Route
// @access  Public
router.get("/", auth, async (req, res) => {
  try {
    const activation = await Generate.find().sort({ date: -1 });
    res.json(activation);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/activation
// @desc    Create Activation Code
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      // check("activationCode", "Please enter unique Activation Code")
      //   .not()
      //   .isEmpty(),
      // check("SecurityCode", "Please enter Security Code")
      //   .not()
      //   .isEmpty(),
      check("investment", "Please enter Amount")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    const { activationCode, investment, securityCode } = req.body;
    try {
      let activation = await Generate.findOne({ activationCode });
      if (activation)
        return res
          .status(400)
          .json({ errors: [{ msg: "Activation Code Already exist" }] });

      let security = await Generate.findOne({ securityCode });
      if (security)
        return res
          .status(400)
          .json({ errors: [{ msg: "Security Code ALread exist" }] });

      const generate = new Generate({
        activationCode: `act-${uuid()}`,
        securityCode: `sec-${uuid()}`,
        investment,
        returnInvestment: investment * 1.5
      });
      // const new = {
      //   activation: req.body.activationCode,
      //   investment: req.body.investment
      // };

      // const activation = await newActivation.save();
      await generate.save();
      res.json(generate);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;

const express = require("express");
const router = express.Router();

// @route   GET api/adminProfile
// @desc    Test Route
// @access  Public
router.get("/", (req, res) => res.send("adminProfile Route"));

module.exports = router;

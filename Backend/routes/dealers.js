const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET all dealers
router.get("/", async (req, res) => {
  try {
    const dealers = await User.find({ role: "dealer" });
    res.json({ success: true, dealers });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const User = require("../models/User");

// GET all buyers
router.get("/", async (req, res) => {
  try {
    const buyers = await User.find({ role: "buyer" });
    res.json(buyers);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;

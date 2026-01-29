const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { name, email, phone, password, role } = req.body;

    // Check if user exists
    const already = await User.findOne({ email });
    if (already) return res.status(400).json({ message: "User already exists" });

    // Hash Password
    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      phone,
      password: hashed,
      role,
    });

    res.json({ message: "Signup successful", user });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid password" });

    // Create Token
    const token = jwt.sign(
  {
    id: user._id,
    role: user.role      // ✅ ADD THIS
  },
  process.env.JWT_SECRET,
  { expiresIn: "7d" }
);

    res.json({
      message: "Login successful",
      token,
      user,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

// GET LOGGED-IN USER
router.get("/profile", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
});

module.exports = router;

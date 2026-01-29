const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { name, email, mobile, password, role, company, gst, city } = req.body;

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      name,
      email,
      mobile,
      password: hashedPassword,
      role,
      company,
      gst,
      city,
    });

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Signup Error:", error);   // 👈 add this line
    res.status(500).json({ message: "Server error", error: error.message });
}

};

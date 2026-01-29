const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,   // FIXED
  password: String,
  role: {
    type: String,
    enum: ["buyer", "dealer", "admin"],
    default: "buyer"
  },
  city: String,
  company: String,
  gst: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", userSchema);

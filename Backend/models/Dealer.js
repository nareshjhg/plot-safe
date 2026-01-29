const mongoose = require("mongoose");

const dealerSchema = new mongoose.Schema({
  name: String,
  license: String,
  status: {
    type: String,
    default: "Pending"
  },
  email: String,
  phone: String,
  city: String,
  address: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Dealer", dealerSchema);

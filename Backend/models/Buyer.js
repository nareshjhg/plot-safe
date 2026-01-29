const mongoose = require("mongoose");

const BuyerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  requests: { type: Number, default: 0 },
  status: { type: String, enum: ["Active", "Blocked"], default: "Active" },
});

module.exports = mongoose.model("Buyer", BuyerSchema);

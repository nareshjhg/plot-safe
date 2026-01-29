const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  property_id: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
  action: String,
  performed_by: String,
  remarks: String
}, { timestamps: true });

module.exports = mongoose.model("VerificationLog", logSchema);

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  property_id: { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
  assigned_to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  task_type: String,
  status: String,
  verified_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

module.exports = mongoose.model("VerificationTask", taskSchema);

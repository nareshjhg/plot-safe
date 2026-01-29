const mongoose = require("mongoose");

const propertyStatusSchema = new mongoose.Schema(
  {
    colonyName: String,
    propertyNumber: String,
    status: {
      type: String,
      enum: ["approved", "pending", "illegal"],
      required: true,
    },
    details: String,
    approvedBy: String,
    approvalDate: Date,
    licenseNumber: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("PropertyStatus", propertyStatusSchema);

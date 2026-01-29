const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    propertyName: String,
    propertyId: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "verified",
    },
    pdfPath: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", reportSchema);

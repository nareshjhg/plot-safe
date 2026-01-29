const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    invoiceNumber: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    propertyId: String,
    amount: Number,
    status: {
      type: String,
      enum: ["paid", "pending"],
      default: "pending",
    },
    pdfPath: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Invoice", invoiceSchema);

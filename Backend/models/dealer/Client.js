const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    dealer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dealer",
      required: true,
    },
    name: String,
    cnic: String,
    phone: String,
    address: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", clientSchema);

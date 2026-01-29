const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "userType",
    },

    userType: {
      type: String,
      enum: ["Dealer", "Buyer"],
      required: true,
    },

    planName: {
      type: String,
      enum: ["Free", "Basic", "Pro"],
      default: "Free",
    },

    price: Number,

    startDate: {
      type: Date,
      default: Date.now,
    },

    endDate: Date,

    status: {
      type: String,
      enum: ["Active", "Expired", "Cancelled"],
      default: "Active",
    },

    paymentId: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subscription", subscriptionSchema);

const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  address: { type: String, required: true },
  price: Number,
  colonyName: String,
  cluStatus: String,
  sourceLink: String,

  dealer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dealer",
    required: true
  },

  registryDoc: String,
  cluDoc: String,
  otherDocs: [String],

}, { timestamps: true });

module.exports = mongoose.model("Property", propertySchema);

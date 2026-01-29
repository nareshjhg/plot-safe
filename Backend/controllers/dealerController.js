const Dealer = require("../models/Dealer");
const User = require("../models/User");

exports.getDealers = async (req, res) => {
  const dealers = await Dealer.find().populate("user");
  res.json(dealers);
};

exports.updateDealer = async (req, res) => {
  const dealer = await Dealer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(dealer);
};

exports.getDealer = async (req, res) => {
  const dealer = await Dealer.findById(req.params.id).populate("user");
  res.json(dealer);
};

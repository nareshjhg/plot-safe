const Subscription = require("../models/Subscription");

// CREATE
exports.createSubscription = async (req, res) => {
  try {
    const { planName, price, durationInDays } = req.body;

    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + durationInDays);

    const subscription = await Subscription.create({
      user: req.user.id,
      userType: req.user.role,
      planName,
      price,
      startDate,
      endDate,
      status: "Active",
    });

    res.status(201).json({
      success: true,
      message: "Subscription Activated",
      subscription,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET MY
exports.getMySubscription = async (req, res) => {
  const subscription = await Subscription.findOne({
    user: req.user.id,
    status: "Active",
  });

  if (!subscription) {
    return res.json({
      active: false,
      message: "No active subscription",
    });
  }

  if (new Date() > subscription.endDate) {
    subscription.status = "Expired";
    await subscription.save();
  }

  res.json({
    active: true,
    subscription,
  });
};

// ❗ ADD THIS
exports.cancelSubscription = async (req, res) => {
  const subscription = await Subscription.findOne({
    user: req.user.id,
    status: "Active",
  });

  if (!subscription) {
    return res.status(404).json({ message: "No active subscription" });
  }

  subscription.status = "Cancelled";
  await subscription.save();

  res.json({ success: true, message: "Subscription cancelled" });
};

// ❗ ADD THIS
exports.getAllSubscriptions = async (req, res) => {
  const subscriptions = await Subscription.find().sort({ createdAt: -1 });
  res.json(subscriptions);
};

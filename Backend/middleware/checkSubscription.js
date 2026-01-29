const Subscription = require("../models/Subscription");

module.exports = async (req, res, next) => {
  const subscription = await Subscription.findOne({
    user: req.user.id,
    status: "Active",
  });

  if (!subscription) {
    return res.status(403).json({
      message: "Subscription required to access this feature",
    });
  }

  if (new Date() > subscription.endDate) {
    subscription.status = "Expired";
    await subscription.save();

    return res.status(403).json({
      message: "Subscription expired",
    });
  }

  next();
};

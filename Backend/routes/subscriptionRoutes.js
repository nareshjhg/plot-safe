const express = require("express");
const router = express.Router();

// Controllers
const subscriptionController = require("../controllers/subscriptionController");

// Auth middleware (FACTORY)
const checkAuth = require("../middleware/auth");

// ================= USER =================

// Create subscription
router.post(
  "/create",
  checkAuth(["Dealer", "Buyer"]),
  subscriptionController.createSubscription
);

// Get my subscription
router.get(
  "/my",
  checkAuth(["Dealer", "Buyer"]),
  subscriptionController.getMySubscription
);

// Cancel subscription
router.put(
  "/cancel",
  checkAuth(["Dealer", "Buyer"]),
  subscriptionController.cancelSubscription
);

// ================= ADMIN =================

// Get all subscriptions
router.get(
  "/admin/all",
  checkAuth(["Admin"]),
  subscriptionController.getAllSubscriptions
);

module.exports = router;

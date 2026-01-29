const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const Property = require("../../models/dealer/Property");
const VerificationTask = require("../../models/admin/VerificationTask");
const Notification = require("../../models/admin/Notification");

/**
 * GET all properties for admin (by status)
 */
router.get("/properties", auth(["admin"]), async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { verification_status: status } : {};

    const properties = await Property.find(filter)
      .populate("owner_id", "name email")
      .populate("dealer_id", "company_name");

    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Assign verifier to property
 */
router.post("/assign-verifier", auth(["admin"]), async (req, res) => {
  try {
    const { propertyId, verifierId } = req.body;

    const task = await VerificationTask.create({
      property_id: propertyId,
      assigned_to: verifierId,
      status: "ASSIGNED",
      task_type: "MANUAL"
    });

    await Property.findByIdAndUpdate(propertyId, {
      verification_status: "ASSIGNED_VERIFIER"
    });

    res.json({ message: "Verifier assigned", task });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Approve / Reject property
 */
router.post("/decision", auth(["admin"]), async (req, res) => {
  try {
    const { propertyId, decision, remarks } = req.body;

    await Property.findByIdAndUpdate(propertyId, {
      verification_status: decision === "APPROVED" ? "VERIFIED" : "REJECTED"
    });

    await VerificationTask.updateMany(
      { property_id: propertyId },
      { status: decision }
    );

    res.json({
      message: `Property ${decision}`,
      remarks
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Request more information from buyer/dealer
 */
router.post("/request-info", auth(["admin"]), async (req, res) => {
  try {
    const { propertyId, message } = req.body;

    await Property.findByIdAndUpdate(propertyId, {
      verification_status: "PENDING_INFO"
    });

    await Notification.create({
      user_id: req.user.id,
      type: "INFO_REQUEST",
      message
    });

    res.json({ message: "Info requested successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

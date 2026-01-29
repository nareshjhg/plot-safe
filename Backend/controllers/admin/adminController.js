const Property = require("../models/Property");
const VerificationTask = require("../models/VerificationTask");
const Notification = require("../models/Notification");

exports.getProperties = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { verification_status: status } : {};

    const data = await Property.find(filter)
      .populate("owner_id", "name email")
      .populate("dealer_id", "company_name");

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.assignVerifier = async (req, res) => {
  try {
    const { propertyId, verifierId } = req.body;

    const task = await VerificationTask.create({
      property_id: propertyId,
      assigned_to: verifierId,
      task_type: "MANUAL",
      status: "ASSIGNED"
    });

    await Property.findByIdAndUpdate(propertyId, {
      verification_status: "ASSIGNED_VERIFIER"
    });

    res.json({ message: "Verifier assigned", task });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.decision = async (req, res) => {
  try {
    const { propertyId, decision, remarks } = req.body;

    const status =
      decision === "APPROVED" ? "VERIFIED" : "REJECTED";

    await Property.findByIdAndUpdate(propertyId, {
      verification_status: status
    });

    await VerificationTask.updateMany(
      { property_id: propertyId },
      { status }
    );

    res.json({ message: `Property ${status}`, remarks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.requestInfo = async (req, res) => {
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

    res.json({ message: "More info requested" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

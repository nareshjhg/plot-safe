const Property = require("../models/Property");
const VerificationLog = require("../models/VerificationLog");

exports.autoCheck = async (req, res) => {
  try {
    const { propertyId } = req.params;

    const property = await Property.findById(propertyId);
    if (!property) return res.status(404).json({ message: "Not found" });

    // 🔧 MOCK auto checks
    const documentsOk = true;
    const duplicateGeo = false;

    if (!documentsOk || duplicateGeo) {
      await Property.findByIdAndUpdate(propertyId, {
        verification_status: "PENDING_INFO"
      });

      return res.json({ status: "FAIL" });
    }

    await Property.findByIdAndUpdate(propertyId, {
      verification_status: "AUTO_CHECKED"
    });

    await VerificationLog.create({
      property_id: propertyId,
      action: "AUTO_CHECK_PASSED",
      performed_by: "SYSTEM"
    });

    res.json({ status: "PASS" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.finalizeVerification = async (req, res) => {
  try {
    const { propertyId } = req.params;

    await Property.findByIdAndUpdate(propertyId, {
      verification_status: "VERIFIED"
    });

    await VerificationLog.create({
      property_id: propertyId,
      action: "FINAL_VERIFIED",
      performed_by: "SYSTEM"
    });

    res.json({ message: "Verification completed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

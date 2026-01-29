const VerificationRequest = require("../../models/buyer/VerificationRequest");

// Create Verification Request
exports.createRequest = async (req, res) => {
  try {
    const data = req.body;

    // Add uploaded file paths
    if (req.files) {
      Object.keys(req.files).forEach((key) => {
        data[key] = `/uploads/${req.files[key][0].filename}`;
      });
    }

    const request = await VerificationRequest.create(data);

    res.json({
      success: true,
      message: "Verification request created successfully!",
      request,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


// ===============================
// GET All Requests (Frontend Data)
// ===============================
exports.getAllRequests = async (req, res) => {
  try {
    const requests = await VerificationRequest.find().sort({ createdAt: -1 });

    res.json(requests);

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

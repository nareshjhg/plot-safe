const express = require("express");
const router = express.Router();
const upload = require("../../middleware/upload");

const { 
  createRequest, 
  getAllRequests 
} = require("../../controllers/buyer/verificationController");

// Create verification request
router.post(
  "/create",
  upload.fields([
    { name: "registryCopy", maxCount: 1 },
    { name: "fardCopy", maxCount: 1 },
    { name: "allotmentLetter", maxCount: 1 },
    { name: "taxReceipt", maxCount: 1 },
    { name: "utilityBill", maxCount: 1 },
    { name: "ownerCnicFront", maxCount: 1 },
    { name: "ownerCnicBack", maxCount: 1 }
  ]),
  createRequest
);

// Get all requests
router.get("/", getAllRequests);

// routes/buyer/verificationRoutes.js
router.put("/:id", async (req, res) => {
  try {
    const { status, verifier } = req.body;
    const updated = await VerificationRequest.findByIdAndUpdate(
      req.params.id,
      { status, verifier },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});


module.exports = router;

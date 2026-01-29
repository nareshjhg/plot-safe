const express = require("express");
const router = express.Router();
const Verifier = require("../models/Verifier");

// ➤ ADD NEW VERIFIER
router.post("/", async (req, res) => {
  try {
    const verifier = await Verifier.create(req.body);
    res.json({ success: true, verifier });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// ➤ GET ALL VERIFIERS
router.get("/", async (req, res) => {
  try {
    const verifiers = await Verifier.find().sort({ createdAt: -1 });
    res.json({ success: true, verifiers });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// ➤ UPDATE VERIFIER
router.put("/:id", async (req, res) => {
  try {
    const updated = await Verifier.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ success: true, updated });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// ➤ DELETE VERIFIER
router.delete("/:id", async (req, res) => {
  try {
    await Verifier.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Verifier deleted" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

module.exports = router;

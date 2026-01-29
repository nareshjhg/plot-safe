const express = require("express");
const router = express.Router();

const { downloadReport } = require("../../controllers/buyer/reportController");
const authMiddleware = require("../../middleware/auth");

router.get("/download/:id", authMiddleware, downloadReport);

module.exports = router;

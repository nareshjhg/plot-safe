const express = require("express");
const router = express.Router();
const {
  getInvoices,
  downloadInvoice,
} = require("../../controllers/buyer/invoiceController");

const authMiddleware = require("../../middleware/auth");

router.get("/", authMiddleware, getInvoices);
router.get("/download/:id", authMiddleware, downloadInvoice);

module.exports = router;

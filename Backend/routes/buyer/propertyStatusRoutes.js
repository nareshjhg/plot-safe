const express = require("express");
const router = express.Router();
const { checkStatus } = require("../../controllers/buyer/propertyStatusController");

router.get("/check", checkStatus);

module.exports = router;

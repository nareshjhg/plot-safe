const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const upload = require("../../middleware/upload");

const {
  addProperty,
  getProperties,
  getPropertyById,
  deleteProperty
} = require("../../controllers/dealer/propertyController");

// Add Property (with PDF uploads)
router.post(
  "/add",
  auth(["dealer"]),
  upload.fields([
    { name: "registryDoc", maxCount: 1 },
    { name: "cluDoc", maxCount: 1 },
    { name: "otherDocs", maxCount: 10 }
  ]),
  addProperty
);

// Get All Properties (dealer wise)
router.get("/", auth(["dealer"]), getProperties);

// Get Single Property
router.get("/:id", auth(["dealer"]), getPropertyById);

// Delete Property
router.delete("/:id", auth(["dealer"]), deleteProperty);

module.exports = router;

const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");
const {
  addClient,
  getClients,
  getClientById,
  updateClient,
  deleteClient
} = require("../../controllers/dealer/clientController");

// POST: Add Client
router.post("/add", auth(["dealer"]), addClient);

// GET: All clients
router.get("/", auth(["dealer"]), getClients);

// GET: Single client
router.get("/:id", auth(["dealer"]), getClientById);

// PUT: Update client
router.put("/:id", auth(["dealer"]), updateClient);

// DELETE: Remove client
router.delete("/:id", auth(["dealer"]), deleteClient);

module.exports = router;

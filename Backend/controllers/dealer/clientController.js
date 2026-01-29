const Client = require("../../models/dealer/Client");

// Add Client
exports.addClient = async (req, res) => {
  try {
    const client = new Client({
      dealer: req.user.id,     // important
      name: req.body.name,
      cnic: req.body.cnic,
      phone: req.body.phone,
      address: req.body.address
    });

    await client.save();

    res.status(201).json({
      success: true,
      message: "Client added successfully",
      client
    });

  } catch (error) {
    console.error("❌ ADD CLIENT ERROR:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get All Clients (by dealer)
exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find({ dealer: req.user.id });
    res.json({ success: true, clients });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get Single Client
exports.getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) return res.status(404).json({ success: false, message: "Client not found" });
    res.json({ success: true, client });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update Client
exports.updateClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!client) return res.status(404).json({ success: false, message: "Client not found" });

    res.json({ success: true, client });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete Client
exports.deleteClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);

    if (!client) return res.status(404).json({ success: false, message: "Client not found" });

    res.json({ success: true, message: "Client deleted" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get Client Count
const getClientCount = async (req, res) => {
  try {
    const count = await Client.countDocuments({
      dealer: req.user.id,
    });

    res.json({
      success: true,
      count,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
 
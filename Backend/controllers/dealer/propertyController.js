const Property = require("../../models/dealer/Property");

exports.addProperty = async (req, res) => {
  try {
    const property = await Property.create({
      dealer: req.user.id,
      title: req.body.title,
      address: req.body.address,
      price: req.body.price,
      colonyName: req.body.colonyName,
      cluStatus: req.body.cluStatus,
      sourceLink: req.body.sourceLink,
    });

    res.json({ success: true, property });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.find({ dealer: req.user.id });

    res.json({ success: true, properties });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (!property)
      return res.status(404).json({ success: false, message: "Not found" });

    res.json({ success: true, property });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Deleted" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

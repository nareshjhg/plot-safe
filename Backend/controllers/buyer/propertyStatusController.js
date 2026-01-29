const PropertyStatus = require("../../models/buyer/PropertyStatus");

exports.checkStatus = async (req, res) => {
  const { query } = req.query;

  const result = await PropertyStatus.findOne({
    $or: [
      { colonyName: { $regex: query, $options: "i" } },
      { propertyNumber: { $regex: query, $options: "i" } },
    ],
  });

  if (!result) {
    return res.status(404).json({ message: "No record found" });
  }

  res.json(result);
};

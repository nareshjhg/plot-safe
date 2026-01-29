const Invoice = require("../../models/buyer/Invoice");
const generateInvoicePDF = require("../../utils/generateInvoicePDF");

exports.getInvoices = async (req, res) => {
  const invoices = await Invoice.find({ userId: req.user.id });
  res.json(invoices);
};

exports.downloadInvoice = async (req, res) => {
  const invoice = await Invoice.findById(req.params.id);

  if (!invoice) return res.status(404).json({ message: "Invoice not found" });

  if (!invoice.pdfPath) {
    invoice.pdfPath = await generateInvoicePDF(invoice);
    await invoice.save();
  }

  res.download(invoice.pdfPath);
};

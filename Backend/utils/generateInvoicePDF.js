const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const generateInvoicePDF = async (invoice) => {
  const dir = path.join(__dirname, "../invoices");

  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  const filePath = path.join(dir, `${invoice.invoiceNumber}.pdf`);

  const doc = new PDFDocument({ margin: 50 });
  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(20).text("INVOICE", { align: "center" });
  doc.moveDown(2);

  doc.fontSize(12);
  doc.text(`Invoice No: ${invoice.invoiceNumber}`);
  doc.text(`Date: ${new Date(invoice.createdAt).toDateString()}`);
  doc.text(`Property ID: ${invoice.propertyId}`);

  doc.moveDown();
  doc.text(`Amount: ₹${invoice.amount}`);
  doc.text(`Status: ${invoice.status.toUpperCase()}`);

  doc.moveDown(3);
  doc.fontSize(10).text("Thank you for using Plot-Safe.", {
    align: "center",
  });

  doc.end();

  return filePath;
};

module.exports = generateInvoicePDF;

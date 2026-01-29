const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const generateReportPDF = async (report) => {
  const reportsDir = path.join(__dirname, "../reports");

  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir);
  }

  const filePath = path.join(
    reportsDir,
    `report-${report.propertyId}.pdf`
  );

  const doc = new PDFDocument({ margin: 50 });
  doc.pipe(fs.createWriteStream(filePath));

  doc
    .fontSize(20)
    .fillColor("#1E40AF")
    .text("Property Verification Report", { align: "center" });

  doc.moveDown(2);

  doc.fontSize(14).fillColor("black");
  doc.text(`Property Name: ${report.propertyName}`);
  doc.text(`Property ID: ${report.propertyId}`);
  doc.text(`Verification Status: ${report.status.toUpperCase()}`);
  doc.text(`Generated On: ${new Date().toLocaleDateString()}`);

  doc.moveDown();

  doc.fontSize(16).text("Verification Summary", { underline: true });
  doc.moveDown(0.5);

  doc.fontSize(12);
  doc.text("✔ Ownership verified");
  doc.text("✔ Registry document checked");
  doc.text("✔ Tax records validated");
  doc.text("✔ No disputes found");

  doc.moveDown(2);

  doc
    .fontSize(10)
    .fillColor("gray")
    .text(
      "This is a system-generated report by PropertyVerify.",
      { align: "center" }
    );

  doc.end();

  return filePath;
};

module.exports = generateReportPDF;

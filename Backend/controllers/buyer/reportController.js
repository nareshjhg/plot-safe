const Report = require("../../models/buyer/Report");
const generateReportPDF = require("../../utils/generateReportPDF");


exports.downloadReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);

    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    if (!report.pdfPath) {
      const pdfPath = await generateReportPDF(report);
      report.pdfPath = pdfPath;
      await report.save();
    }

    res.download(report.pdfPath);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "PDF generation failed" });
  }
};

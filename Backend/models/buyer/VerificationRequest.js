const mongoose = require("mongoose");

const VerificationRequestSchema = new mongoose.Schema({
  // Applicant Info
  applicantName: String,
  applicantCNIC: String,
  applicantPhone: String,
  applicantEmail: String,

  // Owner Info
  ownerName: String,
  ownerCNIC: String,
  ownerPhone: String,
  ownerEmail: String,
  relationToOwner: String,

  // Property Details
  propertyType: String,
  colony: String,
  block: String,
  propertyNumber: String,
  streetWidth: String,
  size: String,
  facing: String,
  registryNo: String,
  mapApprovalNo: String,
  propertyStatus: String,

  // Purpose
  verificationPurpose: String,

  // Visit Requirement
  physicalVisitRequired: String,
  preferredVisitDate: String,
  preferredVisitTime: String,

  // Location
  googleMapLink: String,
  latitude: String,
  longitude: String,

  // Document Uploads (stored as file paths)
  registryCopy: String,
  fardCopy: String,
  allotmentLetter: String,
  taxReceipt: String,
  utilityBill: String,
  ownerCnicFront: String,
  ownerCnicBack: String,

  notes: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },

  status: {
  type: String,
  default: "pending"
},

});

module.exports = mongoose.model(
  "VerificationRequest",
  VerificationRequestSchema
);

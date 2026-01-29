// pages/public/NewRequest.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar";

const NewRequest = () => {
  const [formData, setFormData] = useState({
    applicantName: "",
    applicantCNIC: "",
    applicantPhone: "",
    applicantEmail: "",
    ownerName: "",
    ownerCNIC: "",
    ownerPhone: "",
    ownerEmail: "",
    relationToOwner: "",
    propertyType: "",
    colony: "",
    block: "",
    propertyNumber: "",
    streetWidth: "",
    size: "",
    facing: "",
    registryNo: "",
    mapApprovalNo: "",
    propertyStatus: "",
    verificationPurpose: "",
    physicalVisitRequired: "No",
    preferredVisitDate: "",
    preferredVisitTime: "",
    googleMapLink: "",
    latitude: "",
    longitude: "",
    notes: "",
  });

  const [documents, setDocuments] = useState({
    registryCopy: null,
    fardCopy: null,
    allotmentLetter: null,
    taxReceipt: null,
    utilityBill: null,
    ownerCnicFront: null,
    ownerCnicBack: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setDocuments({ ...documents, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = new FormData();

  Object.keys(formData).forEach(key => form.append(key, formData[key]));
  Object.keys(documents).forEach(key => {
    if (documents[key]) form.append(key, documents[key]);
  });

  const res = await fetch("http://localhost:5000/api/verification/create", {
    method: "POST",
    body: form,
  });

  const data = await res.json();

  if (data.success) {
    alert("Request submitted successfully!");
  }
};


  return (
    <div className="flex">
      <Sidebar />

      {/* MAIN LAYOUT */}
      <div className="flex-1 p-10 bg-gray-100 min-h-screen">

        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">
            📝 New Verification Request
          </h1>
          <p className="text-gray-600 mb-8">
            Submit detailed property verification request below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-10">

            {/* SECTION CARDS */}
            <Card title="Applicant Information">
              <Grid>
                <Input label="Full Name" name="applicantName" value={formData.applicantName} onChange={handleChange} />
                <Input label="CNIC Number" name="applicantCNIC" value={formData.applicantCNIC} onChange={handleChange} />
                <Input label="Phone Number" name="applicantPhone" value={formData.applicantPhone} onChange={handleChange} />
                <Input label="Email Address" name="applicantEmail" value={formData.applicantEmail} onChange={handleChange} />
              </Grid>
            </Card>

            <Card title="Property Owner Information">
              <Grid>
                <Input label="Owner Full Name" name="ownerName" value={formData.ownerName} onChange={handleChange} />
                <Input label="Owner CNIC" name="ownerCNIC" value={formData.ownerCNIC} onChange={handleChange} />
                <Input label="Owner Phone" name="ownerPhone" value={formData.ownerPhone} onChange={handleChange} />
                <Input label="Owner Email" name="ownerEmail" value={formData.ownerEmail} onChange={handleChange} />
                <Input label="Relationship to Owner" name="relationToOwner" value={formData.relationToOwner} onChange={handleChange} />
              </Grid>
            </Card>

            <Card title="Property Details">
              <Grid>
                <Select label="Property Type" name="propertyType" value={formData.propertyType} onChange={handleChange}
                  options={["Plot", "House", "Commercial", "Apartment"]} />

                <Input label="Colony / Society" name="colony" value={formData.colony} onChange={handleChange} />
                <Input label="Block / Phase" name="block" value={formData.block} onChange={handleChange} />
                <Input label="Plot / Property Number" name="propertyNumber" value={formData.propertyNumber} onChange={handleChange} />
                <Input label="Street Width (ft)" name="streetWidth" value={formData.streetWidth} onChange={handleChange} />
                <Input label="Plot Size" name="size" value={formData.size} onChange={handleChange} />

                <Select label="Facing" name="facing" value={formData.facing} onChange={handleChange}
                  options={["North", "South", "East", "West"]} />

                <Input label="Registry Number" name="registryNo" value={formData.registryNo} onChange={handleChange} />
                <Input label="Map Approval No" name="mapApprovalNo" value={formData.mapApprovalNo} onChange={handleChange} />

                <Select label="Property Status" name="propertyStatus" value={formData.propertyStatus} onChange={handleChange}
                  options={["Developed", "Under Development", "Not Started"]} />
              </Grid>
            </Card>

            <Card title="Verification Purpose">
              <Select
                label="Purpose"
                name="verificationPurpose"
                value={formData.verificationPurpose}
                onChange={handleChange}
                options={[
                  "Sale/Purchase Verification",
                  "Ownership Verification",
                  "Bank Loan Verification",
                  "Location Verification",
                  "Legal Verification",
                ]}
              />
            </Card>

            <Card title="Physical Visit Requirement">
              <Grid>
                <Select label="Need Visit?" name="physicalVisitRequired" value={formData.physicalVisitRequired} onChange={handleChange}
                  options={["Yes", "No"]} />

                <Input type="date" label="Preferred Visit Date" name="preferredVisitDate" value={formData.preferredVisitDate} onChange={handleChange} />
                <Input type="time" label="Preferred Visit Time" name="preferredVisitTime" value={formData.preferredVisitTime} onChange={handleChange} />
              </Grid>
            </Card>

            <Card title="Location Information">
              <Grid>
                <Input label="Google Map Link" name="googleMapLink" value={formData.googleMapLink} onChange={handleChange} />
                <Input label="Latitude" name="latitude" value={formData.latitude} onChange={handleChange} />
                <Input label="Longitude" name="longitude" value={formData.longitude} onChange={handleChange} />
              </Grid>
            </Card>

            <Card title="Required Documents Upload">
              <Grid>
                <FileInput label="Registry Copy" name="registryCopy" onChange={handleFileChange} />
                <FileInput label="Fard Copy" name="fardCopy" onChange={handleFileChange} />
                <FileInput label="Allotment Letter" name="allotmentLetter" onChange={handleFileChange} />
                <FileInput label="Tax Receipt" name="taxReceipt" onChange={handleFileChange} />
                <FileInput label="Utility Bill" name="utilityBill" onChange={handleFileChange} />
                <FileInput label="Owner CNIC (Front)" name="ownerCnicFront" onChange={handleFileChange} />
                <FileInput label="Owner CNIC (Back)" name="ownerCnicBack" onChange={handleFileChange} />
              </Grid>
            </Card>

            <Card title="Additional Notes">
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-xl border-gray-300 p-3 shadow focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </Card>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl shadow-lg font-semibold text-lg hover:bg-blue-700 transition"
            >
              Submit Request
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/public/dashboard" className="text-blue-600 hover:underline">
              ← Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------------- Helper Components ---------------------- */

const Card = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
    {children}
  </div>
);

const Grid = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
);

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      {...props}
      className="w-full rounded-xl border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-3"
    />
  </div>
);

const Select = ({ label, options, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select
      {...props}
      className="w-full rounded-xl border-gray-300 shadow-sm p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    >
      <option value="">Select...</option>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  </div>
);

const FileInput = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type="file"
      {...props}
      className="w-full text-sm border rounded-xl p-2 bg-gray-50 shadow-sm"
    />
  </div>
);

export default NewRequest;

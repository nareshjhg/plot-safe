import React, { useState } from "react";

const ReportFraud = () => {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔐 Mock login check
    const isLoggedIn = true; // Replace with real auth logic
    if (!isLoggedIn) {
      alert("Please login to submit a fraud report.");
      return;
    }

    // 📦 Create fake payload (can send to backend later)
    const reportData = {
      type,
      description,
      image,
    };

    console.log("Fraud Report Submitted:", reportData);
    setSubmitted(true);
    setType("");
    setDescription("");
    setImage(null);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-red-600 mb-6">🚨 Report Fraud</h2>

      {submitted && (
        <div className="bg-green-100 text-green-700 px-4 py-3 rounded mb-4">
          ✅ Your report has been submitted. Thank you!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Fraud Type</label>
          <select
            required
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          >
            <option value="">-- Select Type --</option>
            <option value="fraud_dealer">❌ Fraud Dealer</option>
            <option value="fake_clu">🧱 Fake CLU Document</option>
            <option value="illegal_property">🏚️ Illegal Construction / Demolished</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            required
            rows="4"
            placeholder="Write details about the issue..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Upload Evidence (Optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default ReportFraud;

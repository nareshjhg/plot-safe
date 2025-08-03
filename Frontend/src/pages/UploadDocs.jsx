// src/pages/UploadDocs.jsx
import React, { useState } from "react";

const UploadDocs = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setUploadStatus("Please select a file before uploading.");
      return;
    }

    // Simulated upload process
    setTimeout(() => {
      setUploadStatus("✅ Document uploaded successfully. We will analyze and notify you soon.");
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Upload Legal Documents</h1>
      <p className="text-gray-700 mb-6">
        Upload your sale deed, registry, or property map for verification. PDF only.
      </p>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="mb-4 border border-gray-300 p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
        >
          Upload Now
        </button>
        {uploadStatus && <p className="mt-4 text-green-600 font-semibold">{uploadStatus}</p>}
      </form>
    </div>
  );
};

export default UploadDocs;

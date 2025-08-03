import React, { useState } from 'react';
import DealerSidebar from '../../components/DealerSidebar';

const UploadDocuments = () => {
  const [formData, setFormData] = useState({
    documentType: '',
    description: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual API call or logic
    console.log('Submitted Data:', formData);
    alert("Document submitted for verification.");
  };

  return (
    <div className="flex">
      <DealerSidebar />
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-4 text-green-700">Upload Legal Documents</h1>
        <p className="text-gray-600 mb-6">Upload your registry, CLU, or any other legal documents for approval and verification.</p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md max-w-xl space-y-4"
        >
          <div>
            <label className="block font-medium mb-1">Document Type</label>
            <select
              name="documentType"
              value={formData.documentType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Select Document</option>
              <option value="Registry">Registry</option>
              <option value="CLU">CLU</option>
              <option value="RERA">RERA</option>
              <option value="DTCP">DTCP</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Short description of the document..."
              rows={3}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Upload File (PDF only)</label>
            <input
              type="file"
              name="file"
              accept=".pdf"
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Submit Document
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadDocuments;

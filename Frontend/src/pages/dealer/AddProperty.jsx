import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';
import axios from "axios";


const AddProperty = () => {
  const [form, setForm] = useState({
    title: '',
    address: '',
    price: '',
    colonyName: '',
    cluStatus: '',
    sourceLink: '',
  });

  const [files, setFiles] = useState({
    registryDoc: null,
    cluDoc: null,
    otherDocs: [],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, field) => {
    setFiles({ ...files, [field]: e.target.files[0] });
  };

  const handleOtherDocsChange = (e) => {
    setFiles({ ...files, otherDocs: Array.from(e.target.files) });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");

  const formData = new FormData();
  formData.append("title", form.title);
  formData.append("address", form.address);
  formData.append("price", form.price);
  formData.append("colonyName", form.colonyName);
  formData.append("cluStatus", form.cluStatus);
  formData.append("sourceLink", form.sourceLink);

  try {
    const res = await axios.post(
      "http://localhost:5000/api/dealer/properties/add",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,  // 🔥 Token required
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("Property added:", res.data);
  } catch (err) {
    console.log("Error:", err.response?.data);
  }
};



  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-semibold text-green-700 mb-6">Add Property Listing</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-md space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Property Title"
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Property Address"
              className="border p-2 rounded"
              required
            />
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price (in ₹)"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="colonyName"
              value={form.colonyName}
              onChange={handleChange}
              placeholder="Colony Name"
              className="border p-2 rounded"
            />
            <select
              name="cluStatus"
              value={form.cluStatus}
              onChange={handleChange}
              className="border p-2 rounded"
              required
            >
              <option value="">Select CLU Status</option>
              <option value="Approved">Approved</option>
              <option value="Pending">Pending</option>
              <option value="Not Available">Not Available</option>
            </select>
            <input
              type="url"
              name="sourceLink"
              value={form.sourceLink}
              onChange={handleChange}
              placeholder="Source Document Link"
              className="border p-2 rounded"
            />
          </div>

          <div className="space-y-4">
            <div>
              <label className="block font-semibold">Upload Registry Document (PDF):</label>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => handleFileChange(e, 'registryDoc')}
              />
            </div>

            <div>
              <label className="block font-semibold">Upload CLU Document (PDF):</label>
              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => handleFileChange(e, 'cluDoc')}
              />
            </div>

            <div>
              <label className="block font-semibold">Other Supporting Documents:</label>
              <input
                type="file"
                multiple
                onChange={handleOtherDocsChange}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Submit Listing
            </button>
            <button
              type="reset"
              onClick={() => {
                setForm({
                  title: '',
                  address: '',
                  price: '',
                  colonyName: '',
                  cluStatus: '',
                  sourceLink: '',
                });
                setFiles({ registryDoc: null, cluDoc: null, otherDocs: [] });
              }}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;

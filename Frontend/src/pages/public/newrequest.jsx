// pages/public/NewRequest.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar";

const NewRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    colony: "",
    propertyNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your verification request has been submitted ✅");
    setFormData({
      name: "",
      email: "",
      colony: "",
      propertyNumber: "",
      message: "",
    });
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-blue-700">
            📝 New Verification Request
          </h1>
          <p className="text-gray-600 mt-2">
            Fill out the form below to submit a new property verification request.
          </p>
        </header>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded-2xl p-6 space-y-5 max-w-2xl"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Colony Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Colony Name
            </label>
            <input
              type="text"
              name="colony"
              value={formData.colony}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Property Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Property Number
            </label>
            <input
              type="text"
              name="propertyNumber"
              value={formData.propertyNumber}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Additional Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Submit Request
          </button>
        </form>

        {/* Back link */}
        <div className="mt-6">
          <Link to="/public/dashboard" className="text-blue-600 hover:underline">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewRequest;

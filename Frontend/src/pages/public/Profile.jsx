import React, { useState } from "react";
import PublicSidebar from "../../components/PublicSidebar";

const Profile = () => {
  const [form, setForm] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated ✅");
  };

  return (
    <div className="flex">
      <PublicSidebar />
      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">⚙️ Profile & Settings</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow rounded-xl p-6 space-y-5 max-w-lg"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

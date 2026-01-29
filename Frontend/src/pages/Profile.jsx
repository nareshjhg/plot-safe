import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";

const Profile = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    fetch("http://localhost:5000/api/auth/profile", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => setForm(data));
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated ✔ (display only)");
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">
          ⚙️ Profile & Settings
        </h1>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow max-w-lg space-y-4">
          <div>
            <label className="block">Full Name</label>
            <input
              name="name"
              onChange={handleChange}
              value={form.name}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label>Email</label>
            <input
              name="email"
              value={form.email}
              disabled
              className="w-full border p-2 rounded bg-gray-100"
            />
          </div>

          <div>
            <label>Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label>Role</label>
            <input
              name="role"
              value={form.role}
              disabled
              className="w-full border p-2 rounded bg-gray-100"
            />
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

// pages/dealer/MyClients.jsx
import React, { useState } from "react";
import Sidebar from "../../components/sidebar"; // adjust path if needed

const MyClients = () => {
  const [clients, setClients] = useState([
    { id: 1, name: "Rahul Sharma", email: "rahul@example.com", phone: "9876543210" },
    { id: 2, name: "Priya Verma", email: "priya@example.com", phone: "9876501234" },
  ]);

  const [newClient, setNewClient] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setNewClient({ ...newClient, [e.target.name]: e.target.value });
  };

  const handleAddClient = () => {
    if (!newClient.name || !newClient.email || !newClient.phone) return;
    setClients([...clients, { ...newClient, id: Date.now() }]);
    setNewClient({ name: "", email: "", phone: "" });
  };

  const handleDelete = (id) => {
    setClients(clients.filter((c) => c.id !== id));
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-green-700 mb-6">👥 My Clients</h1>

        {/* Add Client Form */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-3">Add New Client</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              type="text"
              name="name"
              value={newClient.name}
              onChange={handleChange}
              placeholder="Client Name"
              className="border rounded p-2"
            />
            <input
              type="email"
              name="email"
              value={newClient.email}
              onChange={handleChange}
              placeholder="Client Email"
              className="border rounded p-2"
            />
            <input
              type="tel"
              name="phone"
              value={newClient.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border rounded p-2"
            />
          </div>
          <button
            onClick={handleAddClient}
            className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            ➕ Add Client
          </button>
        </div>

        {/* Clients Table */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Client List</h2>
          <table className="w-full border">
            <thead className="bg-green-100">
              <tr>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{client.name}</td>
                  <td className="p-2 border">{client.email}</td>
                  <td className="p-2 border">{client.phone}</td>
                  <td className="p-2 border text-center">
                    <button
                      onClick={() => handleDelete(client.id)}
                      className="text-red-600 hover:underline"
                    >
                      ❌ Delete
                    </button>
                  </td>
                </tr>
              ))}
              {clients.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-3 text-center text-gray-500">
                    No clients added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClients;

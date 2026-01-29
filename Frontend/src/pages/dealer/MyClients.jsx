// pages/dealer/MyClients.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";

const MyClients = () => {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({ name: "", cnic: "", phone: "", address: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  // Fetch clients from backend
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/dealer/clients", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.status === 403) {
          setError("❌ Forbidden: You are not authorized");
          setClients([]);
          setLoading(false);
          return;
        }

        if (!data.success) {
          setError(data.error || "Failed to fetch clients");
          setClients([]);
          setLoading(false);
          return;
        }

        setClients(data.clients || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch clients");
        setLoading(false);
      }
    };

    fetchClients();
  }, [token]);

  // Handle input change
  const handleChange = (e) => {
    setNewClient({ ...newClient, [e.target.name]: e.target.value });
  };

  // Add client
  const handleAddClient = async () => {
    if (!newClient.name || !newClient.phone) {
      setError("Name and Phone are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/dealer/clients/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newClient),
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.error || "Failed to add client");
        return;
      }

      setClients([...clients, data.client]);
      setNewClient({ name: "", cnic: "", phone: "", address: "" });
      setError("");
    } catch (err) {
      console.error(err);
      setError("Error adding client");
    }
  };

  // Delete client
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/dealer/clients/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!data.success) {
        setError(data.error || "Failed to delete client");
        return;
      }

      setClients(clients.filter((c) => c._id !== id));
      setError("");
    } catch (err) {
      console.error(err);
      setError("Error deleting client");
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-green-700 mb-6">👥 My Clients</h1>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        {/* Add Client Form */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-3">Add New Client</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <input
              type="text"
              name="name"
              value={newClient.name}
              onChange={handleChange}
              placeholder="Client Name"
              className="border rounded p-2"
            />
            <input
              type="text"
              name="cnic"
              value={newClient.cnic}
              onChange={handleChange}
              placeholder="CNIC"
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
            <input
              type="text"
              name="address"
              value={newClient.address}
              onChange={handleChange}
              placeholder="Address"
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
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="w-full border">
              <thead className="bg-green-100">
                <tr>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">CNIC</th>
                  <th className="p-2 border">Phone</th>
                  <th className="p-2 border">Address</th>
                  <th className="p-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {clients.length === 0 && (
                  <tr>
                    <td colSpan="5" className="p-3 text-center text-gray-500">
                      No clients added yet.
                    </td>
                  </tr>
                )}
                {clients.map((client) => (
                  <tr key={client._id} className="hover:bg-gray-50">
                    <td className="p-2 border">{client.name}</td>
                    <td className="p-2 border">{client.cnic || "-"}</td>
                    <td className="p-2 border">{client.phone}</td>
                    <td className="p-2 border">{client.address || "-"}</td>
                    <td className="p-2 border text-center">
                      <button
                        onClick={() => handleDelete(client._id)}
                        className="text-red-600 hover:underline"
                      >
                        ❌ Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyClients;

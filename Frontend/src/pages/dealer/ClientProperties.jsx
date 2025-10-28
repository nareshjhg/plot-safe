// pages/dealer/ClientProperties.jsx
import React, { useState } from "react";
import Sidebar from "../../components/sidebar"; // adjust path if needed

const ClientProperties = () => {
  const [properties] = useState([
    {
      id: 1,
      propertyName: "Plot A-12",
      client: "Rahul Sharma",
      location: "Gurugram, Haryana",
      status: "Verified",
    },
    {
      id: 2,
      propertyName: "Shop No. 45",
      client: "Priya Verma",
      location: "Faridabad, Haryana",
      status: "Pending",
    },
    {
      id: 3,
      propertyName: "Flat 101",
      client: "Amit Singh",
      location: "Sonipat, Haryana",
      status: "Rejected",
    },
  ]);

  const getStatusBadge = (status) => {
    switch (status) {
      case "Verified":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-green-700 mb-6">
          📂 Client Properties
        </h1>

        {/* Properties Table */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">Submitted Properties</h2>
          <table className="w-full border">
            <thead className="bg-green-100">
              <tr>
                <th className="p-2 border">Property Name</th>
                <th className="p-2 border">Client</th>
                <th className="p-2 border">Location</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{p.propertyName}</td>
                  <td className="p-2 border">{p.client}</td>
                  <td className="p-2 border">{p.location}</td>
                  <td className="p-2 border">
                    <span
                      className={`px-2 py-1 text-sm rounded ${getStatusBadge(
                        p.status
                      )}`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="p-2 border text-center">
                    <button className="text-blue-600 hover:underline mr-2">
                      🔍 View
                    </button>
                    <button className="text-green-600 hover:underline">
                      ⬇ Download Report
                    </button>
                  </td>
                </tr>
              ))}
              {properties.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-3 text-center text-gray-500">
                    No properties submitted yet.
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

export default ClientProperties;

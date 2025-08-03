import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const AdminDealers = () => {
  const [dealers, setDealers] = useState([
    { id: 1, name: "Sharma Properties", license: "RERA123456", status: "Pending" },
    { id: 2, name: "Kumar Real Estate", license: "RERA654321", status: "Approved" },
  ]);

  const handleApprove = (id) => {
    const updated = dealers.map((dealer) =>
      dealer.id === id ? { ...dealer, status: "Approved" } : dealer
    );
    setDealers(updated);
  };

  const handleReject = (id) => {
    const updated = dealers.map((dealer) =>
      dealer.id === id ? { ...dealer, status: "Rejected" } : dealer
    );
    setDealers(updated);
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-semibold text-blue-700 mb-4">Registered Dealers</h1>
        <p className="text-gray-600 mb-6">Validate or reject dealer applications below.</p>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="w-full text-left table-auto border">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-2">Dealer Name</th>
                <th className="px-4 py-2">License No.</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dealers.map((dealer) => (
                <tr key={dealer.id} className="border-t">
                  <td className="px-4 py-2">{dealer.name}</td>
                  <td className="px-4 py-2">{dealer.license}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded text-white text-sm ${
                      dealer.status === "Approved"
                        ? "bg-green-600"
                        : dealer.status === "Rejected"
                        ? "bg-red-600"
                        : "bg-yellow-500"
                    }`}>
                      {dealer.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => handleApprove(dealer.id)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(dealer.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
              {dealers.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">No dealers available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDealers;

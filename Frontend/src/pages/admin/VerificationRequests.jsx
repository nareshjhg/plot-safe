import React, { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import ManageRequest from "./ManageRequest";
import axios from "axios";

const VerificationRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Fetch requests from backend
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/verification");
        setRequests(res.data);
      } catch (error) {
        console.error("Error fetching verification requests:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const statusStyle = {
    pending: "bg-yellow-100 text-yellow-700",
    verified: "bg-green-600 text-white",
    rejected: "bg-red-100 text-red-700",
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <h1 className="text-xl font-semibold text-gray-800 mb-6">
          Verification Requests
        </h1>

        <div className="bg-white rounded-xl border shadow-sm overflow-x-auto w-full max-w-full">
          {loading ? (
            <p className="text-gray-500 text-center py-6">Loading...</p>
          ) : requests.length === 0 ? (
            <p className="text-gray-500 text-center py-6">
              No verification requests found.
            </p>
          ) : (
            <table className="w-full text-sm min-w-[1200px]">
              <thead className="border-b bg-gray-100">
                <tr className="text-left text-gray-600">
                  <th className="px-6 py-4">Request ID</th>
                  <th className="px-6 py-4">Buyer</th>
                  <th className="px-6 py-4">Property</th>
                  <th className="px-6 py-4">Verifier</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Submitted On</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {requests.map((req) => (
                  <tr key={req._id} className="border-b last:border-none">
                    <td className="px-6 py-4 font-medium">{req._id}</td>
                    <td className="px-6 py-4">{req.applicantName || "-"}</td>
                    <td className="px-6 py-4">
                      {req.propertyType || "-"} - {req.colony || "-"} -{" "}
                      {req.propertyNumber || "-"}
                    </td>
                    <td className="px-6 py-4">{req.verifier || "Unassigned"}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs capitalize ${
                          statusStyle[req.status] || "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {req.status || "pending"}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {req.createdAt
                        ? new Date(req.createdAt).toLocaleDateString()
                        : "-"}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setSelectedRequest(req)}
                        className="border px-4 py-1 rounded-lg text-xs hover:bg-gray-100"
                      >
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Manage Modal */}
        {selectedRequest && (
          <ManageRequest
            request={selectedRequest}
            onClose={() => setSelectedRequest(null)}
          />
        )}
      </div>
    </div>
  );
};

export default VerificationRequests;

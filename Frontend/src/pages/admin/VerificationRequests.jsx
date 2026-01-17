import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import ManageRequestModal from "./ManageRequestModal";

const VerificationRequests = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);

  const requests = [
    {
      id: "REQ-124",
      buyer: "Rajesh Kumar",
      property: "Flat 301, Sunrise Apartments",
      verifier: "Unassigned",
      status: "pending",
      date: "2025-10-26",
      documents: ["Sale Deed.pdf", "Registry.pdf"],
    },
    {
      id: "REQ-123",
      buyer: "Priya Sharma",
      property: "Plot No. 45, Green Valley",
      verifier: "Suresh Iyer",
      status: "in-progress",
      date: "2025-10-25",
      documents: ["Agreement.pdf"],
    },
    {
      id: "REQ-122",
      buyer: "Amit Patel",
      property: "Shop 12, Commercial Complex",
      verifier: "Deepa Krishnan",
      status: "completed",
      date: "2025-10-24",
      documents: ["FinalReport.pdf"],
    },
  ];

  const statusStyle = {
    pending: "bg-gray-100 text-gray-700",
    "in-progress": "bg-yellow-100 text-yellow-700",
    completed: "bg-black text-white",
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <h1 className="text-xl font-semibold text-gray-800 mb-6">
          Verification Requests
        </h1>

        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr className="text-left text-gray-600">
                <th className="px-6 py-4">Request ID</th>
                <th className="px-6 py-4">Buyer</th>
                <th className="px-6 py-4">Property</th>
                <th className="px-6 py-4">Verifier</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {requests.map((req) => (
                <tr key={req.id} className="border-b last:border-none">
                  <td className="px-6 py-4 font-medium">{req.id}</td>
                  <td className="px-6 py-4">{req.buyer}</td>
                  <td className="px-6 py-4">{req.property}</td>
                  <td className="px-6 py-4">{req.verifier}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs capitalize ${statusStyle[req.status]}`}
                    >
                      {req.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{req.date}</td>
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
        </div>

        {/* Manage Modal */}
        <ManageRequestModal
          request={selectedRequest}
          onClose={() => setSelectedRequest(null)}
        />
      </div>
    </div>
  );
};

export default VerificationRequests;

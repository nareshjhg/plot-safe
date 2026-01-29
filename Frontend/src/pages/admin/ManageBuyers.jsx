import axios from "axios";
import { useEffect, useState } from "react";

import { UserPlus, X } from "lucide-react";
import AdminSidebar from "../../components/AdminSidebar";

const ManageBuyers = () => {
  const [selectedBuyer, setSelectedBuyer] = useState(null);

  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    const fetchBuyers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/buyers");
        setBuyers(res.data);
      } catch (error) {
        console.log("Error fetching buyers:", error);
      }
    };

    fetchBuyers();
  }, []);
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold text-gray-800">Manage Buyers</h1>

          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-900 transition">
            <UserPlus size={16} />
            Add New Buyer
          </button>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b bg-gray-50">
              <tr className="text-left text-gray-600">
                <th className="px-6 py-4">User ID</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Requests</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {buyers.map((buyer) => (
                <tr key={buyer.id} className="border-b last:border-none">
                  <td className="px-6 py-4 font-medium">{buyer.id}</td>
                  <td className="px-6 py-4">{buyer.name}</td>
                  <td className="px-6 py-4 text-gray-600">{buyer.email}</td>
                  <td className="px-6 py-4">{buyer.requests}</td>
                  <td className="px-6 py-4">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-xs">
                      {buyer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => setSelectedBuyer(buyer)}
                      className="border px-4 py-1 rounded-lg text-xs hover:bg-gray-100 transition"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MODAL */}
        {selectedBuyer && (
          <BuyerModal
            buyer={selectedBuyer}
            onClose={() => setSelectedBuyer(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ManageBuyers;

const BuyerModal = ({ buyer, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-md mx-4 p-6 relative animate-fadeIn">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <h2 className="text-lg font-semibold mb-4">Buyer Details</h2>

        {/* Content */}
        <div className="space-y-3 text-sm">
          <Info
            label="User ID"
            value={`USR-${buyer._id.substring(buyer._id.length - 5).toUpperCase()}`}
          />

          <Info label="Name" value={buyer.name} />
          <Info label="Email" value={buyer.email} />
          <Info label="Phone" value={buyer.mobile} />

          <Info label="Total Requests" value={buyer.requests} />
          <Info label="Joined On" value={buyer.joined} />
          <Info label="Status" value={buyer.status} />
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100"
          >
            Close
          </button>

          <button className="px-4 py-2 text-sm bg-black text-white rounded-lg hover:bg-gray-900">
            Edit Buyer
          </button>
        </div>
      </div>
    </div>
  );
};

const Info = ({ label, value }) => (
  <div className="flex justify-between border-b pb-2">
    <span className="text-gray-500">{label}</span>
    <span className="font-medium">{value}</span>
  </div>
);

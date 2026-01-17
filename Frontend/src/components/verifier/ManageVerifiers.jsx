import React, { useState } from "react";
import { UserPlus, Star } from "lucide-react";
import AdminSidebar from "../../components/AdminSidebar";
import AddVerifierModal from "./AddVerifierModal";

const ManageVerifiers = () => {
  const [open, setOpen] = useState(false);

  const verifiers = [
    {
      id: "VER-001",
      name: "Suresh Iyer",
      assigned: 5,
      completed: 45,
      rating: 4.8,
    },
    {
      id: "VER-002",
      name: "Deepa Krishnan",
      assigned: 3,
      completed: 38,
      rating: 4.9,
    },
    {
      id: "VER-003",
      name: "Vikram Singh",
      assigned: 4,
      completed: 52,
      rating: 4.7,
    },
  ];

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold text-gray-800">
            Manage Verifiers
          </h1>

          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-900"
          >
            <UserPlus size={16} />
            Add New Verifier
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr className="text-left text-gray-600">
                <th className="px-6 py-4 font-medium">Verifier ID</th>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Assigned</th>
                <th className="px-6 py-4 font-medium">Completed</th>
                <th className="px-6 py-4 font-medium">Rating</th>
                <th className="px-6 py-4 font-medium">Actions</th>
              </tr>
            </thead>

            <tbody>
              {verifiers.map((v) => (
                <tr key={v.id} className="border-b last:border-none">
                  <td className="px-6 py-4 font-medium">{v.id}</td>
                  <td className="px-6 py-4">{v.name}</td>
                  <td className="px-6 py-4">{v.assigned}</td>
                  <td className="px-6 py-4">{v.completed}</td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1">
                      <Star size={14} className="text-black" />
                      {v.rating}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="border px-4 py-1 rounded-lg text-xs hover:bg-gray-100">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        <AddVerifierModal
          isOpen={open}
          onClose={() => setOpen(false)}
          onSave={() => setOpen(false)}
        />
      </div>
    </div>
  );
};

export default ManageVerifiers;

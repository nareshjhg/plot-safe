import React, { useState } from "react";
import { UserPlus } from "lucide-react";
import AdminSidebar from "../../components/AdminSidebar";

const AdminDealers = () => {
  const [dealers, setDealers] = useState([
    {
      id: 1,
      name: "Sharma Properties",
      license: "RERA123456",
      status: "Pending",
      email: "sharma@example.com",
      phone: "9876543210",
      city: "Delhi",
      address: "123, MG Road, Delhi",
    },
    {
      id: 2,
      name: "Kumar Real Estate",
      license: "RERA654321",
      status: "Approved",
      email: "kumar@example.com",
      phone: "9876501234",
      city: "Mumbai",
      address: "456, Marine Drive, Mumbai",
    },
  ]);

  const [selectedDealer, setSelectedDealer] = useState(null);
  const [openViewModal, setOpenViewModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [editData, setEditData] = useState({
    name: "",
    license: "",
    email: "",
    phone: "",
    city: "",
    address: "",
  });

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

  const openView = (dealer) => {
    setSelectedDealer(dealer);
    setOpenViewModal(true);
  };

  const openEdit = (dealer) => {
    setSelectedDealer(dealer);
    setEditData({
      name: dealer.name,
      license: dealer.license,
      email: dealer.email,
      phone: dealer.phone,
      city: dealer.city,
      address: dealer.address,
    });
    setOpenEditModal(true);
  };

  const openDelete = (dealer) => {
    setSelectedDealer(dealer);
    setOpenDeleteModal(true);
  };

  const closeAll = () => {
    setOpenViewModal(false);
    setOpenEditModal(false);
    setOpenDeleteModal(false);
    setSelectedDealer(null);
  };

  const handleSave = () => {
    const updated = dealers.map((dealer) =>
      dealer.id === selectedDealer.id ? { ...dealer, ...editData } : dealer
    );
    setDealers(updated);
    closeAll();
  };

  const handleDelete = () => {
    const updated = dealers.filter((dealer) => dealer.id !== selectedDealer.id);
    setDealers(updated);
    closeAll();
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8">
        {/* ===== HEADER ===== */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold text-gray-800">
            Manage Dealers
          </h1>

          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-900 transition">
            <UserPlus size={16} />
            Add New Dealer
          </button>
        </div>

        {/* ===== TABLE CARD ===== */}
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr className="text-left text-gray-600">
                <th className="px-6 py-4 font-medium">Dealer ID</th>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">License</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Actions</th>
              </tr>
            </thead>

            <tbody>
              {dealers.map((dealer) => (
                <tr key={dealer.id} className="border-b last:border-none">
                  <td className="px-6 py-4 font-medium">DLR-{dealer.id}</td>
                  <td className="px-6 py-4">{dealer.name}</td>
                  <td className="px-6 py-4">{dealer.license}</td>
                  <td className="px-6 py-4">
                    <span className={`bg-black text-white px-3 py-1 rounded-full text-xs`}>
                      {dealer.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 flex gap-2">
                    <button
                      onClick={() => openView(dealer)}
                      className="border px-4 py-1 rounded-lg text-xs hover:bg-gray-100 transition"
                    >
                      View
                    </button>

                    <button
                      onClick={() => openEdit(dealer)}
                      className="border px-4 py-1 rounded-lg text-xs hover:bg-gray-100 transition"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => openDelete(dealer)}
                      className="border px-4 py-1 rounded-lg text-xs hover:bg-gray-100 transition"
                    >
                      Delete
                    </button>

                    <button
                      onClick={() => handleApprove(dealer.id)}
                      className="border px-4 py-1 rounded-lg text-xs hover:bg-gray-100 transition"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => handleReject(dealer.id)}
                      className="border px-4 py-1 rounded-lg text-xs hover:bg-gray-100 transition"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== VIEW MODAL ===== */}
      {openViewModal && selectedDealer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl w-96 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">Dealer Details</h2>
              <button onClick={closeAll} className="text-gray-500 hover:text-black">
                X
              </button>
            </div>

            <div className="space-y-2">
              <div><strong>Name:</strong> {selectedDealer.name}</div>
              <div><strong>Email:</strong> {selectedDealer.email}</div>
              <div><strong>Phone:</strong> {selectedDealer.phone}</div>
              <div><strong>City:</strong> {selectedDealer.city}</div>
              <div><strong>Address:</strong> {selectedDealer.address}</div>
              <div><strong>License:</strong> {selectedDealer.license}</div>
              <div><strong>Status:</strong> {selectedDealer.status}</div>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button onClick={closeAll} className="px-4 py-2 rounded-lg border hover:bg-gray-100">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== EDIT MODAL ===== */}
      {openEditModal && selectedDealer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl w-96 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">Edit Dealer</h2>
              <button onClick={closeAll} className="text-gray-500 hover:text-black">
                X
              </button>
            </div>

            <div className="space-y-3">
              <input
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                className="w-full border rounded px-3 py-2"
                placeholder="Dealer Name"
              />
              <input
                value={editData.license}
                onChange={(e) => setEditData({ ...editData, license: e.target.value })}
                className="w-full border rounded px-3 py-2"
                placeholder="License No."
              />
              <input
                value={editData.email}
                onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                className="w-full border rounded px-3 py-2"
                placeholder="Email"
              />
              <input
                value={editData.phone}
                onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                className="w-full border rounded px-3 py-2"
                placeholder="Phone"
              />
              <input
                value={editData.city}
                onChange={(e) => setEditData({ ...editData, city: e.target.value })}
                className="w-full border rounded px-3 py-2"
                placeholder="City"
              />
              <input
                value={editData.address}
                onChange={(e) => setEditData({ ...editData, address: e.target.value })}
                className="w-full border rounded px-3 py-2"
                placeholder="Address"
              />
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button onClick={closeAll} className="px-4 py-2 rounded-lg border hover:bg-gray-100">
                Cancel
              </button>
              <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-black text-white">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== DELETE MODAL ===== */}
      {openDeleteModal && selectedDealer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl w-96 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">Delete Dealer</h2>
              <button onClick={closeAll} className="text-gray-500 hover:text-black">
                X
              </button>
            </div>

            <p className="text-gray-600">
              Are you sure you want to delete <strong>{selectedDealer.name}</strong>?
            </p>

            <div className="mt-4 flex justify-end gap-2">
              <button onClick={closeAll} className="px-4 py-2 rounded-lg border hover:bg-gray-100">
                Cancel
              </button>
              <button onClick={handleDelete} className="px-4 py-2 rounded-lg bg-red-600 text-white">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDealers;

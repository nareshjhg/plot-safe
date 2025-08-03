import React from "react";
import AdminSidebar from "../../components/AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Admin Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card title="Total Dealers" count={24} color="bg-blue-100" />
          <Card title="Public Users" count={132} color="bg-green-100" />
          <Card title="Approved Colonies" count={48} color="bg-yellow-100" />
          <Card title="Pending Requests" count={7} color="bg-red-100" />
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <ActionButton title="Add Colony" />
            <ActionButton title="Verify Dealer" />
            <ActionButton title="Manage Users" />
            <ActionButton title="View Complaints" />
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="bg-white shadow rounded p-4 space-y-2 text-gray-700">
            <li>✅ Dealer “Anil Estate” verified.</li>
            <li>📌 Colony “Shiv Enclave” approved by admin.</li>
            <li>📨 Complaint received from user “Rahul” in Faridabad.</li>
            <li>🕓 Pending approval: “Green Valley Colony”.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Reusable Components

const Card = ({ title, count, color }) => (
  <div className={`p-4 rounded shadow ${color}`}>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-2xl font-bold">{count}</p>
  </div>
);

const ActionButton = ({ title }) => (
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
    {title}
  </button>
);

export default AdminDashboard;

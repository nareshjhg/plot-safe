// pages/dealer/Dashboard.jsx
import React from "react";
import Sidebar from "../../components/sidebar";
import { Link } from "react-router-dom";

const DealerDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Welcome, Dealer</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-700">Total Listings</h2>
            <p className="text-2xl font-bold text-green-600 mt-2">12</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-700">Approved Listings</h2>
            <p className="text-2xl font-bold text-blue-600 mt-2">9</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-700">Flagged Listings</h2>
            <p className="text-2xl font-bold text-red-600 mt-2">3</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/dealer/add-listing"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl shadow-md"
            >
              🏠 Add New Property
            </Link>
            <Link
              to="/dealer/my-properties"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl shadow-md"
            >
              📁 View My Listings
            </Link>
            <Link
              to="/dealer/legality-check"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-3 rounded-xl shadow-md"
            >
              ✅ Check Legality
            </Link>
          </div>
        </div>

        {/* Flagged Properties */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-red-600 mb-4">⚠️ Recently Flagged Listings</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="border-b pb-2">#103 - Sector 45 Plot | Flagged for wrong CLU</li>
            <li className="border-b pb-2">#78 - Green Enclave | Registry mismatch</li>
            <li>#59 - Sector 21B Plot | User reported illegal construction</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DealerDashboard;

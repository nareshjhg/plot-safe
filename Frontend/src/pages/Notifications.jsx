import React from "react";
import Sidebar from "../components/sidebar";

const Notifications = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">🔔 Notifications</h1>
        <p className="text-gray-600 mb-6">Stay updated with the latest alerts and updates.</p>

        <div className="space-y-4">
          <div className="bg-white p-4 shadow rounded-xl border-l-4 border-blue-500">
            ✅ Your property at Green Valley was verified successfully.
          </div>
          <div className="bg-white p-4 shadow rounded-xl border-l-4 border-yellow-500">
            ⏳ Your request for Sunrise Colony is still under review.
          </div>
          <div className="bg-white p-4 shadow rounded-xl border-l-4 border-red-500">
            ⚠️ Fraud report received – we are investigating.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

// components/DealerSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const DealerSidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md">
      <div className="p-4 text-lg font-bold text-green-700 border-b">
        Dealer Menu
      </div>
      <ul className="p-4 space-y-3 text-sm">
        <li><Link to="/dealer/dashboard" className="block text-gray-700 hover:text-green-600">🏠 Dashboard</Link></li>
        <li><Link to="/dealer/clients" className="block text-gray-700 hover:text-green-600">👥 My Clients</Link></li>
        <li><Link to="/dealer/add-property" className="block text-gray-700 hover:text-green-600">📝 Submit Property</Link></li>
        <li><Link to="/dealer/properties" className="block text-gray-700 hover:text-green-600">📂 Client Properties</Link></li>
        <li><Link to="/dealer/reports" className="block text-gray-700 hover:text-green-600">📑 Reports</Link></li>
        <li><Link to="/dealer/earnings" className="block text-gray-700 hover:text-green-600">💰 Earnings / Subscription</Link></li>
        <li><Link to="/public/notifications" className="block text-gray-700 hover:text-green-600">🔔 Notifications</Link></li>
        <li><Link to="/dealer/profile" className="block text-gray-700 hover:text-green-600">⚙ Profile & Settings</Link></li>
        <li><Link to="/logout" className="block text-gray-700 hover:text-green-600">🚪 Logout</Link></li>
      </ul>
    </div>
  );
};

export default DealerSidebar;

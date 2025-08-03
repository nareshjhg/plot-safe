// components/DealerSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const DealerSidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md">
      <div className="p-4 text-lg font-bold text-green-700 border-b">Dealer Menu</div>
      <ul className="p-4 space-y-3 text-sm">
        <li><Link to="/dealer_Dashboard" className="block text-gray-700 hover:text-green-600">🏠 Dashboard</Link></li>
        <li><Link to="/Add_property" className="block text-gray-700 hover:text-green-600">🏠 Add Property Listing</Link></li>
        <li><Link to="/dealer/my-properties" className="block text-gray-700 hover:text-green-600">🗃 My Listings</Link></li>
        <li><Link to="/dealer/upload-docs" className="block text-gray-700 hover:text-green-600">🧾 Upload Documents</Link></li>
        <li><Link to="/dealer/check-status" className="block text-gray-700 hover:text-green-600">🚦 Check Colony Status</Link></li>
        <li><Link to="/dealer/map" className="block text-gray-700 hover:text-green-600">📍 Area Approval Map</Link></li>
        <li><Link to="/dealer/fraud-reports" className="block text-gray-700 hover:text-green-600">❗ Fraud Report Status</Link></li>
      </ul>
    </div>
  );
};

export default DealerSidebar;

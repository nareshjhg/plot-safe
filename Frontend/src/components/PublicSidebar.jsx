// components/PublicSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const PublicSidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md">
      <div className="p-4 text-lg font-bold text-blue-700 border-b">Public Menu</div>
      <ul className="p-4 space-y-3 text-sm">
        <li><Link to="/public/search" className="block text-gray-700 hover:text-blue-600">🔍 Search Colony/Property</Link></li>
        <li><Link to="/public/status" className="block text-gray-700 hover:text-blue-600">👁 Legality Status</Link></li>
        <li><Link to="/public/report-fraud" className="block text-gray-700 hover:text-blue-600">🗣 Report Fraud</Link></li>
        <li><Link to="/public/documents" className="block text-gray-700 hover:text-blue-600">📄 View Source Docs</Link></li>
        <li><Link to="/public/map" className="block text-gray-700 hover:text-blue-600">📍 Approved/Illegal Map</Link></li>
        <li><Link to="/public/feedback" className="block text-gray-700 hover:text-blue-600">✉️ Feedback / Suggestion</Link></li>
      </ul>
    </div>
  );
};

export default PublicSidebar;

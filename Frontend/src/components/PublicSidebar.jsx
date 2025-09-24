// components/PublicSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const PublicSidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md">
      {/* Sidebar Title */}
      <div className="p-4 text-lg font-bold text-blue-700 border-b">
        Public Menu
      </div>

      {/* Menu Items */}
      <ul className="p-4 space-y-3 text-sm">
        <li>
          <Link to="/public/dashboard" className="block text-gray-700 hover:text-blue-600">
            📊 Dashboard
          </Link>
        </li>
        <li>
          <Link to="/check-property" className="block text-gray-700 hover:text-blue-600">
            🔍 Search Colony/Property
          </Link>
        </li>
        <li>
          <Link to="/public/status" className="block text-gray-700 hover:text-blue-600">
            👁 Legality Status
          </Link>
        </li>
        <li>
          <Link to="/report-fraud" className="block text-gray-700 hover:text-blue-600">
            🗣 Report Fraud
          </Link>
        </li>
        <li>
          <Link to="/public/documents" className="block text-gray-700 hover:text-blue-600">
            📄 View Source Docs
          </Link>
        </li>
        <li>
          <Link to="/approved-colonies" className="block text-gray-700 hover:text-blue-600">
            📍 Approved/Illegal Map
          </Link>
        </li>
        <li>
          <Link to="/public/feedback" className="block text-gray-700 hover:text-blue-600">
            ✉️ Feedback / Suggestion
          </Link>
        </li>
        <li>
          <Link to="/public/new-request" className="block text-gray-700 hover:text-blue-600">
            📝 New Verification Request
          </Link>
        </li>
        <li>
          <Link to="/public/properties" className="block text-gray-700 hover:text-blue-600">
            🏠 My Properties
          </Link>
        </li>
        <li>
          <Link to="/public/reports" className="block text-gray-700 hover:text-blue-600">
            📑 Reports
          </Link>
        </li>
        <li>
          <Link to="/public/payments" className="block text-gray-700 hover:text-blue-600">
            💳 Payments & Invoices
          </Link>
        </li>
        <li>
          <Link to="/public/notifications" className="block text-gray-700 hover:text-blue-600">
            🔔 Notifications
          </Link>
        </li>
        <li>
          <Link to="/public/profile" className="block text-gray-700 hover:text-blue-600">
            ⚙️ Profile & Settings
          </Link>
        </li>
        <li>
          <Link to="/logout" className="block text-gray-700 hover:text-red-600">
            🚪 Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PublicSidebar;

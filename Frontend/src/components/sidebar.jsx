// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const role = "buyer"; // change to "buyer" | "admin" | "verifier" for testing

  const commonItems = [
    { path: "/notifications", label: "🔔 Notifications" },
    { path: "/profile", label: "⚙ Profile & Settings" },
    { path: "/logout", label: "🚪 Logout" },
  ];

  const roleBasedItems = {
    buyer: [
      { path: "/public/new-request", label: "📝 New Verification Request" },
      { path: "/public/properties", label: "📂 My Properties" },
      { path: "/public/reports", label: "📑 Reports" },
      { path: "/public/payments", label: "💳 Payments & Invoices" },
      { path: "/public/status", label: "👁 Legality status" },
    ],
    dealer: [
      { path: "/dealer/clients", label: "👥 My Clients" },
      { path: "/dealer/add-property", label: "📝 Submit Property" },
      { path: "/dealer/properties", label: "📂 Client Properties" },
      { path: "/dealer/reports", label: "📑 Reports" },
      { path: "/dealer/earnings", label: "💰 Earnings / Subscription" },
    ],
    admin: [
      { path: "/admin/manage-buyers", label: "👤 Manage Buyers" },
      { path: "/admin/manage-dealers", label: "🏢 Manage Dealers" },
      { path: "/admin/manage-verifiers", label: "🧾 Manage Verifiers" },
      { path: "/admin/verification-requests", label: "📂 Verification Requests" },
      { path: "/admin/reports", label: "📑 Reports Management" },
      { path: "/admin/payments", label: "💰 Payments / Revenue" },
      { path: "/admin/analytics", label: "📊 Analytics & Insights" },
    ],
    verifier: [
      { path: "/verifier/assigned", label: "📂 Assigned Properties" },
      { path: "/verifier/upload", label: "📝 Upload Findings" },
    ],
  };

  const menuItems = [...(roleBasedItems[role] || []), ...commonItems];

  return (
    <div className="w-64 h-screen bg-white shadow-md">
      <div className="p-4 text-lg font-bold text-blue-700 border-b">
        {role.charAt(0).toUpperCase() + role.slice(1)} Menu
      </div>

      <ul className="p-4 space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="block p-2 rounded hover:bg-blue-100 text-gray-700"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

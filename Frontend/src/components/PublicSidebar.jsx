import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  PlusCircle,
  Building2,
  FileText,
  CreditCard,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    icon: <Home size={18} />,
    path: "/public/dashboard",
  },
  {
    name: "New Verification Request",
    icon: <PlusCircle size={18} />,
    path: "/public/new-request",
  },
  {
    name: "My Properties",
    icon: <Building2 size={18} />,
    path: "/public/properties",
  },
  {
    name: "Reports",
    icon: <FileText size={18} />,
    path: "/public/reports",
  },
  {
    name: "Payments & Invoices",
    icon: <CreditCard size={18} />,
    path: "/public/payments",
  },
  {
    name: "Notifications",
    icon: <Bell size={18} />,
    path: "/public/notifications",
  },
  {
    name: "Profile & Settings",
    icon: <Settings size={18} />,
    path: "/public/profile",
  },
];

const PublicSidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white border-r flex flex-col">
      {/* Logo */}
      <div className="px-6 py-5 border-b">
        <h1 className="text-lg font-bold text-blue-600">PropertyVerify</h1>
        <p className="text-xs text-gray-500">Buyer Dashboard</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition
              ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t">
        <NavLink
          to="/logout"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-red-50 hover:text-red-600 transition"
        >
          <LogOut size={18} />
          Logout
        </NavLink>
      </div>
    </aside>
  );
};

export default PublicSidebar;

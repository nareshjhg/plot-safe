import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  UserCheck,
  UserCog,
  FileText,
  BarChart2,
  IndianRupee,
  Settings,
  LogOut,
} from "lucide-react";

const AdminSidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/admin/dashboard", icon: Home },
    { name: "Manage Buyers", path: "/admin/buyers", icon: Users },
    { name: "Manage Dealers", path: "/admin/dealers", icon: UserCheck },
    { name: "Manage Verifiers", path: "/admin/verifiers", icon: UserCog },
    { name: "Verification Requests", path: "/admin/requests", icon: FileText },
    { name: "Reports Management", path: "/admin/reports", icon: FileText },
    { name: "Payments / Revenue", path: "/admin/payments", icon: IndianRupee },
    { name: "Analytics & Insights", path: "/admin/analytics", icon: BarChart2 },
    { name: "System Settings", path: "/admin/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white border-r flex flex-col">
      {/* ===== BRAND ===== */}
      <div className="px-6 py-6 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
            P
          </div>
          <div>
            <h2 className="font-bold text-blue-700 leading-tight">
              PropertyVerify
            </h2>
            <p className="text-xs text-gray-500">Admin Dashboard</p>
          </div>
        </div>
      </div>

      {/* ===== MENU ===== */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {menu.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* ===== LOGOUT ===== */}
      <div className="px-4 py-4 border-t">
        <button className="flex items-center gap-3 w-full px-4 py-2 text-sm rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;

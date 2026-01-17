import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  PlusCircle,
  Building2,
  FileText,
  CreditCard,
  Eye,
  Users,
  UserCheck,
  ClipboardList,
  BarChart3,
  Bell,
  Settings,
  LogOut,
  Upload,
} from "lucide-react";

const Sidebar = () => {
  const role = "dealer"; // buyer | dealer | admin | verifier

  const commonItems = [
    {
      label: "Notifications",
      path: "/notifications",
      icon: <Bell size={18} />,
    },
    {
      label: "Profile & Settings",
      path: "/profile",
      icon: <Settings size={18} />,
    },
  ];

  const roleBasedItems = {
    buyer: [
      {
        label: "Dashboard",
        path: "/public/dashboard",
        icon: <Home size={18} />,
      },
      {
        label: "New Verification Request",
        path: "/public/new-request",
        icon: <PlusCircle size={18} />,
      },
      {
        label: "My Properties",
        path: "/public/properties",
        icon: <Building2 size={18} />,
      },
      {
        label: "Reports",
        path: "/public/reports",
        icon: <FileText size={18} />,
      },
      {
        label: "Payments & Invoices",
        path: "/public/payments",
        icon: <CreditCard size={18} />,
      },
      {
        label: "Legality Status",
        path: "/public/status",
        icon: <Eye size={18} />,
      },
    ],

    dealer: [
      {
        label: "My Clients",
        path: "/dealer/clients",
        icon: <Users size={18} />,
      },
      {
        label: "Submit Property",
        path: "/dealer/add-property",
        icon: <PlusCircle size={18} />,
      },
      {
        label: "Client Properties",
        path: "/dealer/properties",
        icon: <Building2 size={18} />,
      },
      {
        label: "Reports",
        path: "/dealer/reports",
        icon: <FileText size={18} />,
      },
      {
        label: "Earnings / Subscription",
        path: "/dealer/earnings",
        icon: <CreditCard size={18} />,
      },
    ],

    admin: [
      {
        label: "Manage Buyers",
        path: "/admin/manage-buyers",
        icon: <Users size={18} />,
      },
      {
        label: "Manage Dealers",
        path: "/admin/manage-dealers",
        icon: <UserCheck size={18} />,
      },
      {
        label: "Manage Verifiers",
        path: "/admin/manage-verifiers",
        icon: <ClipboardList size={18} />,
      },
      {
        label: "Verification Requests",
        path: "/admin/verification-requests",
        icon: <FileText size={18} />,
      },
      {
        label: "Reports Management",
        path: "/admin/reports",
        icon: <FileText size={18} />,
      },
      {
        label: "Payments / Revenue",
        path: "/admin/payments",
        icon: <CreditCard size={18} />,
      },
      {
        label: "Analytics & Insights",
        path: "/admin/analytics",
        icon: <BarChart3 size={18} />,
      },
    ],

    verifier: [
      {
        label: "Assigned Properties",
        path: "/verifier/assigned",
        icon: <ClipboardList size={18} />,
      },
      {
        label: "Upload Findings",
        path: "/verifier/upload",
        icon: <Upload size={18} />,
      },
    ],
  };

  const menuItems = [...(roleBasedItems[role] || []), ...commonItems];

  return (
    <aside className="w-64 h-screen bg-white border-r flex flex-col">
      {/* Header */}
      <div className="px-6 py-5 border-b">
        <h1 className="text-lg font-bold text-blue-600">PropertyVerify</h1>
        <p className="text-xs text-gray-500 capitalize">{role} Dashboard</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {menuItems.map((item, index) => (
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
            {item.label}
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

export default Sidebar;

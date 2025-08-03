import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";

const AdminSidebar = () => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const menu = [
    { name: "Dashboard", path: "/admin/dashboard" },
    {
      name: "Manage",
      children: [
        { name: "Dealers", path: "/admin/dealers" },
        { name: "Colonies", path: "/admin/colonies-List" },
        { name: "Blogs", path: "/admin/blogs" },
        { name: "Docs", path: "/admin/docs" },
      ],
    },
    {
      name: "Colonies",
      children: [
        { name: "Add Colonies", path: "/admin/Add-colonies-form" },
        { name: "Colonies List", path: "/admin/colonies-List" },
        { name: "Colonies Map", path: "/admin/colonies" },
      ],
    },
    { name: "Reports", path: "/admin/reports" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-white border-r px-4 py-6">
      <h2 className="text-xl font-bold text-blue-700 mb-6">Admin Panel</h2>
      <nav className="space-y-2">
        {menu.map((item) => {
          if (item.children) {
            const isOpen = openMenus[item.name];
            return (
              <div key={item.name}>
                <button
                  onClick={() => toggleMenu(item.name)}
                  className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-50 text-gray-700"
                >
                  <span>{item.name}</span>
                  {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </button>
                {isOpen && (
                  <div className="ml-4 space-y-1">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className={`block px-4 py-1 rounded-md text-sm hover:bg-blue-100 ${
                          location.pathname === sub.path
                            ? "bg-blue-100 text-blue-800 font-semibold"
                            : "text-gray-600"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          } else {
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 ${
                  location.pathname === item.path
                    ? "bg-blue-100 text-blue-800 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            );
          }
        })}
      </nav>
    </aside>
  );
};

export default AdminSidebar;

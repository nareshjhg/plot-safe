import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "How it Work", path: "/how-it-work" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const activeClass =
    "text-blue-600 font-semibold border-b-2 border-blue-600";
  const normalClass = "hover:text-blue-500 transition-colors";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          🧱 Property Profit
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign-Up
          </NavLink>
          <NavLink
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl text-blue-600">
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-500 transition"
                }
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center"
            >
              Sign-Up
            </NavLink>
            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center"
            >
              Login
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">🧱 RealtySafe</Link>
        <div className="space-x-4 hidden md:flex">
          <Link to="/About" className="hover:text-blue-500">About Us</Link>
          <Link to="/check-property" className="hover:text-blue-500">Property Check</Link>
          <Link to="/dealer-check" className="hover:text-blue-500">Dealer Check</Link>
          <Link to="/upload-docs" className="hover:text-blue-500">Legal Docs</Link>
          <Link to="/learn" className="hover:text-blue-500">Learn</Link>
        </div>
        <div className="flex space-x-2">
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">Sign-Up</Link>
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">Login</Link>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} RealtySafe. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-12 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">RealtySafe</h3>
          <p className="text-sm">
            Secure your property investment with trust & transparency. We verify property ownership, 
            legal documents, and provide trusted insights for safe buying decisions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-600">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-blue-600">Plans & Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-blue-600">FAQs</Link></li>
          </ul>
        </div>

        {/* Trust & Verification */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Trust & Security</h3>
          <ul className="text-sm space-y-2">
            <li>✅ SSL Secured Website</li>
            <li>✅ Verified by Legal Experts</li>
            <li>✅ Government Data Integration</li>
            <li>✅ Data Encryption & Privacy Compliance</li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedin />
            </a>
          </div>
          <p className="text-sm">Email: support@realtysafe.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 text-gray-600 text-sm py-4 text-center border-t border-gray-300">
        © {new Date().getFullYear()} RealtySafe. All rights reserved. | 
        <Link to="/terms" className="ml-2 hover:text-blue-600">Terms & Conditions</Link> | 
        <Link to="/privacy" className="ml-2 hover:text-blue-600">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;

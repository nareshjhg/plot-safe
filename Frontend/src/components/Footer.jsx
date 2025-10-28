import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isTrustOpen, setTrustOpen] = useState(false);

  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-700 mt-16 border-t border-gray-300 shadow-inner relative overflow-hidden">
      {/* Gradient Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-700">PlotSafe</h3>
          <p className="text-sm leading-relaxed">
            Secure your property investment with trust & transparency. 
            We verify ownership, legal documents, and provide reliable insights 
            for safe and confident property decisions.
          </p>
          <p className="mt-4 text-xs text-gray-500 italic">
            “Empowering India with verified property intelligence.”
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm space-y-2">
            {[
              { path: '/about', name: 'About Us' },
              { path: '/services', name: 'Services' },
              { path: '/pricing', name: 'Plans & Pricing' },
              { path: '/contact', name: 'Contact' },
              { path: '/faq', name: 'FAQs' }
            ].map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-blue-600 transition duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Trust & Verification */}
        <div>
          <div
            onClick={() => setTrustOpen(!isTrustOpen)}
            className="flex justify-between items-center mb-4 cursor-pointer md:cursor-default"
          >
            <h3 className="text-lg font-semibold">Trust & Security</h3>
            <span className="md:hidden text-xl">{isTrustOpen ? "−" : "+"}</span>
          </div>

          {(isTrustOpen || window.innerWidth >= 768) && (
            <>
              <ul className="text-sm space-y-2">
                <li>✅ SSL Secured Website</li>
                <li>✅ Verified by Legal Experts</li>
                <li>✅ Government Data Integration</li>
                <li>✅ Data Encryption & Privacy Compliance</li>
              </ul>

              <div className="mt-4">
                <h4 className="font-semibold text-sm mb-2">Government Data Sources</h4>
                <ul className="text-xs space-y-1">
                  <li>
                    Haryana Land Records:{" "}
                    <a
                      href="https://jamabandi.nic.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      jamabandi.nic.in
                    </a>
                  </li>
                  <li>
                    IGR Haryana (Registry Office):{" "}
                    <a
                      href="https://igrharyana.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      igrharyana.gov.in
                    </a>
                  </li>
                </ul>
                <p className="text-[11px] text-gray-500 mt-2 leading-snug">
                  PlotSafe uses publicly available government data for verification purposes.
                  We are not affiliated with or endorsed by any government department.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4 mb-5">
            {[
              { icon: <FaFacebookF />, color: 'hover:text-blue-600', link: 'https://facebook.com', label: 'Facebook' },
              { icon: <FaTwitter />, color: 'hover:text-sky-400', link: 'https://twitter.com', label: 'Twitter' },
              { icon: <FaInstagram />, color: 'hover:text-pink-500', link: 'https://instagram.com', label: 'Instagram' },
              { icon: <FaLinkedin />, color: 'hover:text-blue-700', link: 'https://linkedin.com', label: 'LinkedIn' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title={item.label}
                className={`p-2 rounded-full border border-gray-300 transition duration-300 ${item.color} hover:scale-110`}
              >
                {item.icon}
              </a>
            ))}
          </div>
          <p className="text-sm">📧 Email: <a href="mailto:support@plotsafe.com" className="hover:text-blue-600">support@plotsafe.com</a></p>
          <p className="text-sm">📞 Phone: <a href="tel:+919876543210" className="hover:text-blue-600">+91 98765 43210</a></p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-gray-300 text-sm py-4 text-center border-t border-gray-700">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold text-white">PlotSafe</span>. All rights reserved. |{" "}
          <Link to="/terms" className="hover:text-blue-400">Terms & Conditions</Link> |{" "}
          <Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

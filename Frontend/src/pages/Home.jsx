import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-blue-400 mb-4">
          Property Legality Check, Made Easy.
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg">
          Verify plots, dealers, and documents instantly using official
          government data and our AI-powered risk score.
        </p>

        {/* Buttons */}
        <div className="space-x-4 mb-12">
          <Link
            to="/check-property"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg transition duration-300"
          >
            Check Property Now
          </Link>
          <Link
            to="/upload-docs"
            className="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-800"
          >
            Upload Legal Docs
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 text-left">
          {[
            {
              title: "✅ Verified with Govt Data",
              desc: "Every colony and plot is cross-checked with DTCP, DDA, and MCF records.",
            },
            {
              title: "🤖 AI-Powered Risk Score",
              desc: "Instantly assess fraud or encroachment risk before you invest.",
            },
            {
              title: "🔒 Dealer & Registry Check",
              desc: "Check if your dealer is trusted and registry is in approved area.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
        {/* Quick Links */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Quick Links</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <Link
              to="/checklist"
              className="bg-white dark:bg-gray-800 border border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 py-3 px-4 rounded-lg font-semibold transition"
            >
              Check List
            </Link>
            <Link
              to="/risk-score"
              className="bg-white dark:bg-gray-800 border border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 py-3 px-4 rounded-lg font-semibold transition"
            >
              Risk Score
            </Link>
            <Link
              to="/approved-colonies"
              className="bg-white dark:bg-gray-800 border border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 py-3 px-4 rounded-lg font-semibold transition"
            >
              Approved Colonies
            </Link>
            <Link
              to="/report-fraud"
              className="bg-white dark:bg-gray-800 border border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 py-3 px-4 rounded-lg font-semibold transition"
            >
              Report Fraud
            </Link>
            <Link
              to="/community"
              className="bg-white dark:bg-gray-800 border border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 py-3 px-4 rounded-lg font-semibold transition"
            >
              Community
            </Link>
            <Link
              to="/alerts"
              className="bg-white dark:bg-gray-800 border border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 py-3 px-4 rounded-lg font-semibold transition"
            >
              Alerts
            </Link>
          </div>
        </div>

        {/* How It Works */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">How It Works</h2>
          <ol className="text-left space-y-4 text-gray-700 dark:text-gray-300">
            <li>1️⃣ Enter colony or location name to verify legality.</li>
            <li>
              2️⃣ Upload your registry or sale deed PDF to get instant AI
              analysis.
            </li>
            <li>
              3️⃣ Get a report with legal status, risk flags, and verified
              dealers nearby.
            </li>
          </ol>
        </div>

        {/* Contact CTA */}
        <div className="bg-blue-100 dark:bg-gray-800 rounded-xl py-10 px-6 mt-10">
          <h3 className="text-2xl font-semibold mb-4">
            Need Help or Want to Report a Fraud?
          </h3>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Contact our support team or submit your query anonymously.
          </p>
          <Link
            to="/Contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-md"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

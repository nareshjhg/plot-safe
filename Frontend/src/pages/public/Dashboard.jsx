// pages/public/Dashboard.jsx
import React from "react";
import PublicSidebar from "../../components/PublicSidebar";
import { Link } from "react-router-dom";
import { MapPin, FileSearch, AlertTriangle, FileText, MessageCircle } from "lucide-react";

const features = [
  {
    title: "🔍 Check Legality",
    description: "Search by colony name or property number to view legal status.",
    icon: <FileSearch className="w-6 h-6 text-blue-600" />,
    link: "/public/search",
  },
  {
    title: "📍 View Colony Map",
    description: "See approved and illegal colonies on interactive map.",
    icon: <MapPin className="w-6 h-6 text-green-600" />,
    link: "/public/map",
  },
  {
    title: "🗣 Report Fraud",
    description: "Report unauthorized or suspicious colonies and agents.",
    icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    link: "/public/report-fraud",
  },
  {
    title: "📄 View Documents",
    description: "Access CLU, Registry, DTCP, MCF or license documents.",
    icon: <FileText className="w-6 h-6 text-yellow-600" />,
    link: "/public/documents",
  },
  {
    title: "✉️ Submit Feedback",
    description: "Share your suggestions or report issues to improve the platform.",
    icon: <MessageCircle className="w-6 h-6 text-purple-600" />,
    link: "/public/feedback",
  },
];

const PublicDashboard = () => {
  return (
    <div className="flex">
      <PublicSidebar />
      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Welcome, Public User</h1>
        <p className="text-gray-700 mb-8">Check legality, report fraud, view documents and maps.</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Link
              to={feature.link}
              key={index}
              className="bg-white shadow rounded-xl p-5 hover:shadow-md transition cursor-pointer border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-full p-2">{feature.icon}</div>
                <div>
                  <h2 className="font-semibold text-lg">{feature.title}</h2>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicDashboard;

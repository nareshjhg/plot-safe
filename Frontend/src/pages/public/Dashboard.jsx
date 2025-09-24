// pages/public/Dashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import PublicSidebar from "../../components/PublicSidebar";
import {
  MapPin,
  FileSearch,
  AlertTriangle,
  FileText,
  MessageCircle,
} from "lucide-react";

const features = [
  {
    title: "Check Legality",
    description: "Search by colony name or property number to view legal status.",
    icon: <FileSearch className="w-6 h-6 text-blue-600" />,
    link: "/public/search",
    color: "blue",
  },
  {
    title: "View Colony Map",
    description: "See approved and illegal colonies on interactive map.",
    icon: <MapPin className="w-6 h-6 text-green-600" />,
    link: "/public/map",
    color: "green",
  },
  {
    title: "Report Fraud",
    description: "Report unauthorized or suspicious colonies and agents.",
    icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
    link: "/public/report-fraud",
    color: "red",
  },
  {
    title: "View Documents",
    description: "Access CLU, Registry, DTCP, MCF or license documents.",
    icon: <FileText className="w-6 h-6 text-yellow-600" />,
    link: "/public/documents",
    color: "yellow",
  },
  {
    title: "Submit Feedback",
    description: "Share your suggestions or report issues to improve the platform.",
    icon: <MessageCircle className="w-6 h-6 text-purple-600" />,
    link: "/public/feedback",
    color: "purple",
  },
];

const PublicDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <PublicSidebar />

      {/* Main content */}
      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-700">
            Welcome, Public User 👋
          </h1>
          <p className="text-gray-600 mt-2">
            Quickly check legality, explore maps, report fraud, or view documents.
          </p>
        </header>

        {/* Features grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <Link
              to={feature.link}
              key={idx}
              className="bg-white shadow-sm hover:shadow-md border border-gray-100 rounded-2xl p-6 transition"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-full bg-${feature.color}-100 flex items-center justify-center`}
                >
                  {feature.icon}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h2>
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

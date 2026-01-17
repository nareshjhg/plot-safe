import React from "react";
import Sidebar from "../../components/sidebar";
import {
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  Download,
  Eye,
  Plus,
} from "lucide-react";

const stats = [
  {
    label: "Total Requests",
    value: 4,
    icon: <FileText className="text-blue-600" />,
    bg: "bg-blue-50",
  },
  {
    label: "Completed",
    value: 1,
    icon: <CheckCircle className="text-green-600" />,
    bg: "bg-green-50",
  },
  {
    label: "In Progress",
    value: 1,
    icon: <Clock className="text-yellow-600" />,
    bg: "bg-yellow-50",
  },
  {
    label: "Pending",
    value: 1,
    icon: <AlertCircle className="text-gray-600" />,
    bg: "bg-gray-100",
  },
];

const requests = [
  {
    id: "REQ-001",
    property: "Flat 301, Sunrise Apartments, Andheri West, Mumbai",
    plan: "Standard",
    date: "2025-10-20",
    status: "completed",
  },
  {
    id: "REQ-002",
    property: "Plot No. 45, Green Valley Society, Thane",
    plan: "Premium",
    date: "2025-10-23",
    status: "in-progress",
  },
  {
    id: "REQ-003",
    property: "Shop 12, Commercial Complex, Bandra West",
    plan: "Basic",
    date: "2025-10-25",
    status: "pending",
  },
];

const statusStyle = {
  completed: "bg-black text-white",
  "in-progress": "bg-gray-100 text-gray-700",
  pending: "bg-gray-200 text-gray-700",
};

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome back, <span className="text-blue-600">Rajesh Kumar</span>!
        </h1>
        <p className="text-gray-500 mt-1">
          Here's an overview of your property verifications
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border p-5 flex justify-between items-center"
            >
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="text-2xl font-semibold">{item.value}</p>
              </div>
              <div
                className={`p-3 rounded-lg ${item.bg} flex items-center justify-center`}
              >
                {item.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Recent Requests */}
        <div className="bg-white rounded-xl border mt-8">
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <h2 className="font-semibold text-gray-800">
              Recent Verification Requests
            </h2>
            <button className="bg-black text-white text-sm px-4 py-1.5 rounded-lg">
              View All
            </button>
          </div>

          <div className="divide-y">
            {requests.map((req, i) => (
              <div key={i} className="px-6 py-4 flex justify-between">
                <div>
                  <p className="font-medium text-gray-800">
                    {req.property}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    ID: {req.id} &nbsp; | &nbsp; Plan: {req.plan} &nbsp; | &nbsp;
                    Date: {req.date}
                  </p>
                  <span
                    className={`inline-block mt-2 px-3 py-1 rounded-full text-xs capitalize ${statusStyle[req.status]}`}
                  >
                    {req.status}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  {req.status === "completed" && (
                    <button className="flex items-center gap-1 bg-black text-white px-3 py-1.5 rounded-lg text-xs">
                      <Download size={14} />
                      Download
                    </button>
                  )}
                  <button className="flex items-center gap-1 border px-3 py-1.5 rounded-lg text-xs">
                    <Eye size={14} />
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-600 text-white rounded-xl p-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Submit New Request</h3>
              <p className="text-sm opacity-90">
                Start a new property verification
              </p>
            </div>
            <Plus size={36} />
          </div>

          <div className="bg-green-600 text-white rounded-xl p-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">View Reports</h3>
              <p className="text-sm opacity-90">
                Access all verification reports
              </p>
            </div>
            <Download size={36} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

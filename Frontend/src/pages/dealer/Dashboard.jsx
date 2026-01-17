import React from "react";
import Sidebar from "../../components/sidebar";
import {
  Users,
  FileText,
  CheckCircle,
  TrendingUp,
  Plus,
  Download,
} from "lucide-react";

const DealerDashboard = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-800">
          Dealer Dashboard
        </h1>
        <p className="text-gray-500 mb-8">
          Manage your clients and property verifications
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Clients"
            value="12"
            subtitle="+3 this month"
            icon={<Users />}
            color="blue"
          />
          <StatCard
            title="Active Requests"
            value="8"
            subtitle="4 in progress"
            icon={<FileText />}
            color="yellow"
          />
          <StatCard
            title="Completed"
            value="45"
            subtitle="+12 this month"
            icon={<CheckCircle />}
            color="green"
          />
          <StatCard
            title="Monthly Earnings"
            value="₹15,450"
            subtitle="+18% from last month"
            icon={<TrendingUp />}
            color="purple"
          />
        </div>

        {/* Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Clients */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="font-semibold text-gray-800 mb-4">
              Recent Clients
            </h2>

            {[
              { name: "Rajesh Kumar", email: "rajesh@example.com", count: 2 },
              { name: "Priya Sharma", email: "priya@example.com", count: 1 },
              { name: "Amit Patel", email: "amit@example.com", count: 3 },
            ].map((c, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-gray-50"
              >
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="text-sm text-gray-500">{c.email}</p>
                </div>
                <span className="text-xs bg-black text-white px-3 py-1 rounded-full">
                  {c.count} properties
                </span>
              </div>
            ))}
          </div>

          {/* Recent Verifications */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="font-semibold text-gray-800 mb-4">
              Recent Verifications
            </h2>

            <VerificationItem
              title="Flat 301, Sunrise Apartments"
              user="Rajesh Kumar"
              status="completed"
            />
            <VerificationItem
              title="Plot No. 45, Green Valley"
              user="Priya Sharma"
              status="in-progress"
            />
            <VerificationItem
              title="Shop 12, Commercial Complex"
              user="Amit Patel"
              status="pending"
            />
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ActionCard
            title="Add New Client"
            subtitle="Manage your client list"
            icon={<Users />}
            color="blue"
          />
          <ActionCard
            title="Submit Property"
            subtitle="New verification request"
            icon={<Plus />}
            color="green"
          />
          <ActionCard
            title="View Reports"
            subtitle="Access all reports"
            icon={<Download />}
            color="purple"
          />
        </div>
      </div>
    </div>
  );
};

/* ---------- Reusable Components ---------- */

const StatCard = ({ title, value, subtitle, icon, color }) => (
  <div className="bg-white rounded-xl border p-6 flex justify-between items-center">
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold mt-1">{value}</h3>
      <p className="text-sm text-green-600 mt-1">{subtitle}</p>
    </div>
    <div className={`p-3 rounded-xl bg-${color}-100 text-${color}-600`}>
      {icon}
    </div>
  </div>
);

const VerificationItem = ({ title, user, status }) => {
  const styles = {
    completed: "bg-black text-white",
    "in-progress": "bg-gray-200 text-gray-800",
    pending: "bg-gray-100 text-gray-700",
  };

  return (
    <div className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-gray-50">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{user}</p>
      </div>
      <span className={`text-xs px-3 py-1 rounded-full ${styles[status]}`}>
        {status}
      </span>
    </div>
  );
};

const ActionCard = ({ title, subtitle, icon, color }) => (
  <div
    className={`rounded-xl p-6 text-white bg-${color}-600 hover:opacity-90 transition cursor-pointer`}
  >
    <div className="mb-3">{icon}</div>
    <h3 className="font-semibold">{title}</h3>
    <p className="text-sm opacity-90">{subtitle}</p>
  </div>
);

export default DealerDashboard;

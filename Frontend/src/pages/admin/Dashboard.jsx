import {
  Users,
  FileText,
  CheckCircle,
  IndianRupee,
} from "lucide-react";

import AdminSidebar from "../../components/AdminSidebar";
import StatCard from "../../components/Dashboard/StatCard";
import Card from "../../components/Dashboard/Card";
import RequestItem from "../../components/Dashboard/RequestItem";
import VerifierCard from "../../components/Dashboard/VerifierCard";
import ChartCard from "../../components/Dashboard/ChartCard";

const AdminDashboard = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard title="Total Users" value="1,234" icon={Users} color="bg-blue-100 text-blue-600" />
          <StatCard title="Active Requests" value="45" icon={FileText} color="bg-yellow-100 text-yellow-600" />
          <StatCard title="Completed Today" value="23" icon={CheckCircle} color="bg-green-100 text-green-600" />
          <StatCard title="Revenue (Month)" value="₹3.2L" icon={IndianRupee} color="bg-purple-100 text-purple-600" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="Recent Requests">
            <RequestItem
              name="Flat 301"
              buyer="Rajesh Kumar"
              verifier="Unassigned"
              status="pending"
              actionLabel="Assign"
            />
          </Card>

          <Card title="Verifier Performance">
            <VerifierCard name="Suresh Iyer" id="VER-001" rating="4.8" completed={45} assigned={5} />
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <ChartCard title="Verification Trends" />
          <ChartCard title="Revenue Analytics" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

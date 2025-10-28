// pages/dealer/Earnings.jsx
import React, { useState } from "react";
import Sidebar from "../../components/sidebar"; // adjust path if needed

const Earnings = () => {
  const [earnings] = useState([
    { id: 1, client: "Rahul Sharma", amount: 2000, date: "2025-09-10" },
    { id: 2, client: "Priya Verma", amount: 3500, date: "2025-09-14" },
  ]);

  const [subscription] = useState({
    plan: "Pro Dealer Plan",
    price: "₹999 / month",
    nextBilling: "2025-10-01",
    status: "Active",
  });

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-green-700 mb-6">
          💰 Earnings & Subscription
        </h1>

        {/* Subscription Info */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-3">My Subscription</h2>
          <p><span className="font-semibold">Plan:</span> {subscription.plan}</p>
          <p><span className="font-semibold">Price:</span> {subscription.price}</p>
          <p><span className="font-semibold">Next Billing Date:</span> {subscription.nextBilling}</p>
          <p>
            <span className="font-semibold">Status:</span>{" "}
            <span
              className={`px-2 py-1 text-sm rounded ${
                subscription.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {subscription.status}
            </span>
          </p>
          <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            🔄 Upgrade / Manage Plan
          </button>
        </div>

        {/* Earnings Table */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-3">My Earnings</h2>
          <table className="w-full border">
            <thead className="bg-green-100">
              <tr>
                <th className="p-2 border">Client</th>
                <th className="p-2 border">Amount</th>
                <th className="p-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {earnings.map((e) => (
                <tr key={e.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{e.client}</td>
                  <td className="p-2 border">₹{e.amount}</td>
                  <td className="p-2 border">{e.date}</td>
                </tr>
              ))}
              {earnings.length === 0 && (
                <tr>
                  <td colSpan="3" className="p-3 text-center text-gray-500">
                    No earnings yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="mt-4 text-right font-semibold text-green-700">
            Total: ₹{earnings.reduce((sum, e) => sum + e.amount, 0)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;

import React from "react";
import Sidebar from "../../components/sidebar";

const Payments = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">💳 Payments & Invoices</h1>
        <p className="text-gray-600 mb-6">View your payment history and download invoices.</p>

        <div className="bg-white shadow rounded-xl p-6">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-gray-700 font-semibold border-b">
              <tr>
                <th className="py-2">Invoice #</th>
                <th className="py-2">Date</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Status</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">INV-001</td>
                <td>2025-09-10</td>
                <td>₹1,500</td>
                <td className="text-green-600">Paid</td>
                <td><button className="text-blue-600 hover:underline">Download</button></td>
              </tr>
              <tr>
                <td className="py-2">INV-002</td>
                <td>2025-09-15</td>
                <td>₹1,000</td>
                <td className="text-yellow-600">Pending</td>
                <td><button className="text-blue-600 hover:underline">Pay Now</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;

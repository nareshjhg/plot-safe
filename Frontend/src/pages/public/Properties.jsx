import React from "react";
import PublicSidebar from "../../components/PublicSidebar";

const Properties = () => {
  return (
    <div className="flex">
      <PublicSidebar />
      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">🏠 My Properties</h1>
        <p className="text-gray-600 mb-6">Here are the properties you have submitted for verification.</p>

        <div className="bg-white shadow rounded-xl p-6">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-gray-700 font-semibold border-b">
              <tr>
                <th className="py-2">Colony</th>
                <th className="py-2">Property No.</th>
                <th className="py-2">Status</th>
                <th className="py-2">Submitted On</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">Green Valley</td>
                <td>123</td>
                <td className="text-green-600">Verified ✅</td>
                <td>2025-09-10</td>
              </tr>
              <tr>
                <td className="py-2">Sunrise Colony</td>
                <td>45-B</td>
                <td className="text-yellow-600">Pending ⏳</td>
                <td>2025-09-15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Properties;

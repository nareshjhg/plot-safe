import React from "react";
import PublicSidebar from "../../components/PublicSidebar";

const Reports = () => {
  return (
    <div className="flex">
      <PublicSidebar />
      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">📑 Reports</h1>
        <p className="text-gray-600 mb-6">Download verification reports for your submitted properties.</p>

        <div className="bg-white shadow rounded-xl p-6 space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <span>Green Valley - Property 123</span>
            <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              Download PDF
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span>Sunrise Colony - Property 45-B</span>
            <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;

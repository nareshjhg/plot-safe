import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import axios from "axios";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/reports", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setReports(res.data);
    } catch (error) {
      console.error("Failed to fetch reports", error);
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = (id) => {
    window.open(
      `http://localhost:5000/api/reports/download/${id}`,
      "_blank"
    );
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-blue-700 mb-2">📑 Reports</h1>
        <p className="text-gray-600 mb-6">
          Download verification reports for your submitted properties.
        </p>

        {loading ? (
          <p className="text-gray-500">Loading reports...</p>
        ) : reports.length === 0 ? (
          <p className="text-gray-500">No reports available yet.</p>
        ) : (
          <div className="bg-white shadow rounded-xl p-6 space-y-4">
            {reports.map((report) => (
              <div
                key={report._id}
                className="flex justify-between items-center border-b last:border-none pb-3"
              >
                <div>
                  <p className="font-medium">
                    {report.propertyName} - {report.propertyId}
                  </p>
                  <p className="text-xs text-gray-500">
                    Status:{" "}
                    <span className="capitalize font-semibold">
                      {report.status}
                    </span>
                  </p>
                </div>

                <button
                  onClick={() => downloadPDF(report._id)}
                  className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700"
                >
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;

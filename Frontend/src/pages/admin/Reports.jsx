import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const AdminReports = () => {
  const [reports, setReports] = useState([
    {
      id: 1,
      reporter: "Amit Kumar",
      area: "Green Valley",
      dealer: "Sharma Properties",
      type: "Fraud Dealer",
      description: "Dealer asked for money without agreement.",
      status: "Pending",
      date: "2025-07-18",
    },
    {
      id: 2,
      reporter: "Neha Singh",
      area: "Sunrise Colony",
      dealer: "Unknown",
      type: "Demolished Property",
      description: "Property demolished without notice.",
      status: "Resolved",
      date: "2025-07-15",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const reportsPerPage = 5;

  // Filter reports based on search
  const filteredReports = reports.filter(
    (r) =>
      r.reporter.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredReports.length / reportsPerPage);
  const paginatedReports = filteredReports.slice(
    (page - 1) * reportsPerPage,
    page * reportsPerPage
  );

  // Update report status
  const updateStatus = (id, newStatus) => {
    setReports((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8 bg-gray-50">
        <h1 className="text-2xl font-semibold text-blue-700 mb-4">Fraud Reports</h1>

        <input
          type="text"
          placeholder="Search by reporter, type or area..."
          className="border p-2 rounded mb-6 w-full max-w-md"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(1);
          }}
        />

        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="w-full border-collapse">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="p-3 border">Reporter</th>
                <th className="p-3 border">Area</th>
                <th className="p-3 border">Dealer</th>
                <th className="p-3 border">Type</th>
                <th className="p-3 border">Description</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedReports.length === 0 && (
                <tr>
                  <td colSpan={8} className="p-4 text-center text-gray-500">
                    No reports found.
                  </td>
                </tr>
              )}

              {paginatedReports.map((report) => (
                <tr key={report.id} className="border-t align-top">
                  <td className="p-3">{report.reporter}</td>
                  <td className="p-3">{report.area}</td>
                  <td className="p-3">{report.dealer}</td>
                  <td className="p-3">{report.type}</td>
                  <td className="p-3 max-w-xs">{report.description}</td>
                  <td className="p-3 font-semibold">
                    {report.status === "Resolved" ? (
                      <span className="text-green-600">{report.status}</span>
                    ) : report.status === "Rejected" ? (
                      <span className="text-red-600">{report.status}</span>
                    ) : (
                      <span className="text-yellow-600">{report.status}</span>
                    )}
                  </td>
                  <td className="p-3">{report.date}</td>
                  <td className="p-3 space-x-2 text-center whitespace-nowrap">
                    {report.status !== "Resolved" && (
                      <>
                        <button
                          onClick={() => updateStatus(report.id, "Resolved")}
                          className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                          Mark Resolved
                        </button>
                        <button
                          onClick={() => updateStatus(report.id, "Rejected")}
                          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {report.status === "Resolved" && (
                      <span className="text-gray-500">No actions</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-4 flex justify-center space-x-2">
            {[...Array(totalPages).keys()].map((i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  page === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminReports;

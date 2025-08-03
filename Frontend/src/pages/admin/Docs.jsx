import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const AdminDocs = () => {
  // Mock document data
  const [docs, setDocs] = useState([
    {
      id: 1,
      name: "Registry_GreenValley.pdf",
      user: "John Doe",
      uploadDate: "2025-07-20",
      status: "Pending",
      fileUrl: "/docs/Registry_GreenValley.pdf",
    },
    {
      id: 2,
      name: "SaleDeed_Sunrise.pdf",
      user: "Jane Smith",
      uploadDate: "2025-07-18",
      status: "Approved",
      fileUrl: "/docs/SaleDeed_Sunrise.pdf",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const docsPerPage = 5;

  // Filtered & paginated docs
  const filteredDocs = docs.filter(
    (doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.user.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredDocs.length / docsPerPage);
  const paginatedDocs = filteredDocs.slice(
    (page - 1) * docsPerPage,
    page * docsPerPage
  );

  // Approve / Reject handlers
  const updateStatus = (id, newStatus) => {
    setDocs((prev) =>
      prev.map((doc) =>
        doc.id === id ? { ...doc, status: newStatus } : doc
      )
    );
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-8 bg-gray-50">
        <h1 className="text-2xl font-semibold text-blue-700 mb-4">
          Uploaded Legal Documents
        </h1>

        <input
          type="text"
          placeholder="Search by document name or user..."
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
                <th className="p-3 border">Document Name</th>
                <th className="p-3 border">Uploaded By</th>
                <th className="p-3 border">Upload Date</th>
                <th className="p-3 border">Status</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedDocs.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-4 text-center text-gray-500">
                    No documents found.
                  </td>
                </tr>
              )}

              {paginatedDocs.map((doc) => (
                <tr key={doc.id} className="border-t">
                  <td className="p-3">
                    <a
                      href={doc.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {doc.name}
                    </a>
                  </td>
                  <td className="p-3">{doc.user}</td>
                  <td className="p-3">{doc.uploadDate}</td>
                  <td className="p-3 font-semibold">
                    {doc.status === "Approved" ? (
                      <span className="text-green-600">{doc.status}</span>
                    ) : doc.status === "Rejected" ? (
                      <span className="text-red-600">{doc.status}</span>
                    ) : (
                      <span className="text-yellow-600">{doc.status}</span>
                    )}
                  </td>
                  <td className="p-3 space-x-2 text-center">
                    <button
                      disabled={doc.status === "Approved"}
                      onClick={() => updateStatus(doc.id, "Approved")}
                      className={`px-3 py-1 rounded text-white ${
                        doc.status === "Approved"
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                    >
                      Approve
                    </button>
                    <button
                      disabled={doc.status === "Rejected"}
                      onClick={() => updateStatus(doc.id, "Rejected")}
                      className={`px-3 py-1 rounded text-white ${
                        doc.status === "Rejected"
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-red-600 hover:bg-red-700"
                      }`}
                    >
                      Reject
                    </button>
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

export default AdminDocs;

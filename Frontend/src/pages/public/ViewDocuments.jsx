// pages/public/ViewDocuments.jsx
import React, { useState } from "react";
import { FileText, Search } from "lucide-react";

const ViewDocuments = () => {
  const [search, setSearch] = useState("");

  const documents = [
    {
      id: 1,
      title: "CLU (Change of Land Use) Certificate",
      description:
        "Verify whether the land is approved for residential, commercial, or industrial use.",
      file: "/docs/clu-sample.pdf",
      type: "CLU",
    },
    {
      id: 2,
      title: "Registry / Sale Deed",
      description: "Check registered ownership and title transfer details.",
      file: "/docs/registry-sample.pdf",
      type: "Registry",
    },
    {
      id: 3,
      title: "DTCP Approval",
      description: "Check if the colony or project is approved by DTCP.",
      file: "/docs/dtcp-approval.pdf",
      type: "DTCP",
    },
    {
      id: 4,
      title: "MCF / Municipal License",
      description:
        "Verify local authority approval and construction compliance.",
      file: "/docs/mcf-license.pdf",
      type: "MCF",
    },
    {
      id: 5,
      title: "Builder / Developer License",
      description:
        "Check if the builder or developer holds valid registration under RERA or DTCP.",
      file: "/docs/builder-license.pdf",
      type: "License",
    },
  ];

  const filtered = documents.filter((doc) =>
    doc.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-6">
        <div className="flex items-center mb-6">
          <FileText className="w-8 h-8 text-yellow-600 mr-3" />
          <h1 className="text-2xl font-bold text-gray-800">View Documents</h1>
        </div>

        <p className="text-gray-600 mb-6">
          Access and download official property-related documents like CLU,
          Registry, DTCP, MCF, or Builder License to confirm legal authenticity.
        </p>

        {/* Search bar */}
        <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 mb-6">
          <Search className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search documents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none w-full text-gray-700"
          />
        </div>

        {/* Document cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((doc) => (
              <div
                key={doc.id}
                className="border rounded-xl p-4 hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-gray-800 mb-1">
                  {doc.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{doc.description}</p>
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 font-medium hover:underline"
                >
                  View / Download
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No matching documents found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewDocuments;

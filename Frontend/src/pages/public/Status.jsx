import React, { useState } from "react";
import PublicSidebar from "../../components/PublicSidebar";

const Status = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const colonies = [
    {
      name: "Green Valley",
      property: "123",
      status: "Approved ✅",
      details: "Approved by DTCP on 01-Jan-2024. License #GV-2024-001",
    },
    {
      name: "Sunrise Colony",
      property: "45-B",
      status: "Pending ⏳",
      details: "Verification request submitted. Awaiting approval.",
    },
    {
      name: "Rose Garden",
      property: "78-C",
      status: "Illegal ❌",
      details: "Not registered under DTCP. Marked as unauthorized colony.",
    },
  ];

  const handleCheck = (e) => {
    e.preventDefault();
    const found = colonies.find(
      (c) =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.property.toLowerCase().includes(query.toLowerCase())
    );
    setResult(found || null);
  };

  return (
    <div className="flex">
      <PublicSidebar />
      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">
          👁 Legality Status
        </h1>
        <p className="text-gray-600 mb-6">
          Check the detailed legality status of any colony or property.
        </p>

        {/* Search Input */}
        <form onSubmit={handleCheck} className="flex gap-3 mb-6 max-w-lg">
          <input
            type="text"
            placeholder="Enter colony or property no."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Check
          </button>
        </form>

        {/* Result Display */}
        {result ? (
          <div className="bg-white shadow rounded-xl p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {result.name} - {result.property}
            </h2>
            <p className="text-lg font-medium mb-1">{result.status}</p>
            <p className="text-gray-600">{result.details}</p>
          </div>
        ) : (
          query && (
            <p className="text-red-600 font-medium">
              No legality record found for "{query}".
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default Status;

import React, { useState } from "react";
import Sidebar from "../../components/sidebar";
import axios from "axios";

const Status = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCheck = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    try {
      const res = await axios.get(
        `http://localhost:5000/api/status/check?query=${query}`
      );
      setResult(res.data);
    } catch (err) {
      setError("No legality record found.");
    }
  };

  const statusMap = {
    approved: "Approved ✅",
    pending: "Pending ⏳",
    illegal: "Illegal ❌",
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">
          👁 Legality Status
        </h1>

        <form onSubmit={handleCheck} className="flex gap-3 mb-6 max-w-lg">
          <input
            type="text"
            placeholder="Enter colony or property no."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 border rounded-lg px-4 py-2"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Check
          </button>
        </form>

        {result && (
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">
              {result.colonyName} - {result.propertyNumber}
            </h2>
            <p className="text-lg font-medium">
              {statusMap[result.status]}
            </p>
            <p className="text-gray-600">{result.details}</p>
            {result.licenseNumber && (
              <p className="text-sm text-gray-500 mt-2">
                License: {result.licenseNumber}
              </p>
            )}
          </div>
        )}

        {error && <p className="text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default Status;

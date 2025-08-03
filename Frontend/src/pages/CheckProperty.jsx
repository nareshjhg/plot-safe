import React, { useState } from "react";

const fakeCheckPropertyAPI = (input) => {
  // Simulate API response based on input (for demo only)
  if (!input) return null;
  const normalized = input.trim().toLowerCase();
  if (normalized.includes("approved")) return { status: "Approved", areaType: "MCF/DTCP Approved Colony" };
  if (normalized.includes("illegal")) return { status: "Illegal", areaType: "Unauthorized Colony" };
  if (normalized.includes("gray")) return { status: "Gray Area", areaType: "Under Investigation" };
  return { status: "Unknown", areaType: "No data available" };
};

const CheckProperty = () => {
  const [plot, setPlot] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = fakeCheckPropertyAPI(plot);
    setResult(res);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Check Property Legality</h2>

      <form onSubmit={handleSubmit} className="mb-8">
        <label htmlFor="plot" className="block mb-2 font-semibold">
          Enter Plot/Area Name:
        </label>
        <input
          id="plot"
          type="text"
          value={plot}
          onChange={(e) => setPlot(e.target.value)}
          placeholder="e.g., Greenfield Approved Colony"
          className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Check Status
        </button>
      </form>

      {result && (
        <div
          className={`p-6 rounded shadow ${
            result.status === "Approved"
              ? "bg-green-100 text-green-800"
              : result.status === "Illegal"
              ? "bg-red-100 text-red-800"
              : result.status === "Gray Area"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          <h3 className="text-xl font-bold mb-2">Status: {result.status}</h3>
          <p>{result.areaType}</p>
        </div>
      )}
    </div>
  );
};

export default CheckProperty;

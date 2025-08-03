import React, { useState } from "react";

const colonyList = [
  { name: "Greenfield Colony", area: "Sector 12", type: "MCF" },
  { name: "Silver Residency", area: "Sector 21", type: "DTCP" },
  { name: "Shiv Vihar", area: "Sector 10", type: "MCF" },
  { name: "Ravi Nagar", area: "Ballabgarh", type: "DTCP" },
];

const ApprovedColonies = () => {
  const [area, setArea] = useState("");
  const [type, setType] = useState("");

  const filtered = colonyList.filter((colony) => {
    const matchesArea = area ? colony.area.toLowerCase().includes(area.toLowerCase()) : true;
    const matchesType = type ? colony.type === type : true;
    return matchesArea && matchesType;
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Approved Colony List</h2>

      {/* Filter Controls */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by Area e.g. Sector 10"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        >
          <option value="">All Types</option>
          <option value="MCF">MCF Approved</option>
          <option value="DTCP">DTCP Approved</option>
        </select>
      </div>

      {/* Colony Results */}
      <ul>
        {filtered.length > 0 ? (
          filtered.map((colony, index) => (
            <li
              key={index}
              className="border rounded p-4 mb-3 flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold text-lg">{colony.name}</h3>
                <p className="text-gray-600">{colony.area}</p>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                ✅ {colony.type} Approved
              </span>
            </li>
          ))
        ) : (
          <p className="text-red-600">No colonies found for your filters.</p>
        )}
      </ul>
    </div>
  );
};

export default ApprovedColonies;

import React, { useState } from 'react';
import AdminSidebar from '../../components/AdminSidebar';
import ColonyMap from '../../components/ColonyMap';

const ColonyAdmin = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [colonies] = useState([
    { name: "Green Valley", status: "Approved", position: [28.423, 77.315], source: "https://example.com/greenvalley" },
    { name: "Sunrise Colony", status: "Not Approved", position: [28.418, 77.310], source: "https://example.com/sunrise" },
    { name: "Lotus Park", status: "Approved", position: [28.419, 77.320], source: "https://example.com/lotus" },
  ]);

  const filteredColonies = colonies.filter(colony => {
    const matchesStatus = filterStatus === 'All' || colony.status === filterStatus;
    const matchesSearch = colony.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">Manage Colonies</h1>

        {/* Search & Filter */}
        <div className="flex items-center gap-4 mb-4">
          <input
            type="text"
            placeholder="Search colony..."
            className="border px-4 py-2 rounded w-full max-w-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="All">All</option>
            <option value="Approved">Approved</option>
            <option value="Not Approved">Not Approved</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Colony Map */}
          <div className="h-[500px] border rounded shadow">
            <ColonyMap colonies={filteredColonies} />
          </div>

          {/* Colony List */}
          <div className="bg-white border rounded shadow p-4">
            <h2 className="text-xl font-semibold mb-3">Colony List</h2>
            <ul className="space-y-2">
              {filteredColonies.length === 0 && (
                <li className="text-gray-500">No colonies found.</li>
              )}
              {filteredColonies.map((colony, index) => (
                <li
                  key={index}
                  className={`p-3 rounded border-l-4 ${
                    colony.status === 'Approved'
                      ? 'border-green-500 bg-green-50'
                      : 'border-red-500 bg-red-50'
                  }`}
                >
                  <div className="font-medium">{colony.name}</div>
                  <div className="text-sm text-gray-600">
                    Status: <span className="font-semibold">{colony.status}</span>
                  </div>
                  <a
                    href={colony.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 text-sm underline"
                  >
                    Source Link
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColonyAdmin;

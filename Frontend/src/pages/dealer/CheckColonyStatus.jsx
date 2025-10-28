import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';

const colonyData = [
  { name: 'Green Valley', status: 'Approved by DTCP', area: 'Sector 85' },
  { name: 'Rosewood Residency', status: 'Pending RERA', area: 'Sector 89' },
  { name: 'Shree Nagar', status: 'Unauthorized', area: 'Ballabgarh' },
];

const CheckColonyStatus = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = colonyData.filter((colony) =>
      colony.name.toLowerCase().includes(search.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-4 text-green-700">Check Colony Status</h1>
        <p className="text-gray-600 mb-6">Search colony name to check its legal status (CLU, RERA, DTCP etc.).</p>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter colony name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded w-full"
          />
          <button
            onClick={handleSearch}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Search
          </button>
        </div>

        {results.length > 0 ? (
          <table className="w-full bg-white shadow rounded overflow-hidden">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-2 text-left">Colony Name</th>
                <th className="px-4 py-2 text-left">Area</th>
                <th className="px-4 py-2 text-left">Legal Status</th>
              </tr>
            </thead>
            <tbody>
              {results.map((colony, index) => (
                <tr key={index} className="border-t hover:bg-green-50">
                  <td className="px-4 py-2">{colony.name}</td>
                  <td className="px-4 py-2">{colony.area}</td>
                  <td className="px-4 py-2 font-medium text-green-700">{colony.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500 mt-4">No results found. Please try another name.</p>
        )}
      </div>
    </div>
  );
};

export default CheckColonyStatus;

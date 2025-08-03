import React, { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const mockColonies = [
  { id: 1, name: "Shanti Vihar", status: "Approved", location: "Faridabad", source: "RERA" },
  { id: 2, name: "Green City", status: "Illegal", location: "Ballabgarh", source: "MCD" },
];

const AdminColonies1 = () => {
  // eslint-disable-next-line no-unused-vars
  const [colonies, setColonies] = useState(mockColonies);
  const [search, setSearch] = useState("");

  const filteredColonies = colonies.filter((colony) =>
    colony.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-semibold text-blue-700 mb-4">
          Approved/Illegal Colonies
        </h1>

        <div className="mb-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search colonies..."
            className="border px-4 py-2 rounded-md w-1/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            + Add Colony
          </button>
        </div>

        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Location</th>
              <th className="py-2 px-4">Source</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredColonies.map((colony) => (
              <tr key={colony.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{colony.name}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      colony.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {colony.status}
                  </span>
                </td>
                <td className="py-2 px-4">{colony.location}</td>
                <td className="py-2 px-4">{colony.source}</td>
                <td className="py-2 px-4 space-x-2">
                  <button className="text-blue-600 hover:underline text-sm">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline text-sm">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredColonies.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No colonies found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminColonies1;

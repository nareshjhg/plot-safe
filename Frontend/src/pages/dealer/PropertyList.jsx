import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/sidebar";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [selected, setSelected] = useState(null);

  // Fetch properties
  const loadProperties = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/dealer/properties", {
        headers: { Authorization: `Bearer ${token}` }
      });

      setProperties(res.data.properties);
    } catch (err) {
      console.log("Loading Error:", err);
    }
  };

  useEffect(() => {
    loadProperties();
  }, []);

  // Delete Property
  const deleteProperty = async (id) => {
    if (!window.confirm("Are you sure?")) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(`http://localhost:5000/api/dealer/properties/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      loadProperties();
    } catch (err) {
      console.log("Delete Error:", err);
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold text-green-700 mb-6">Property Listings</h1>

        <div className="overflow-x-auto bg-white p-4 rounded shadow">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Address</th>
                <th className="p-2 border">CLu Status</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {properties.length === 0 ? (
                <tr>
                  <td className="text-center p-4" colSpan="5">
                    No Properties Found
                  </td>
                </tr>
              ) : (
                properties.map((p) => (
                  <tr key={p._id} className="border hover:bg-gray-50">
                    <td className="p-2 border">{p.title}</td>
                    <td className="p-2 border">₹ {p.price}</td>
                    <td className="p-2 border">{p.address}</td>
                    <td className="p-2 border">{p.cluStatus}</td>

                    <td className="p-2 border flex gap-2 justify-center">
                      {/* View Details */}
                      <button
                        onClick={() => setSelected(p)}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                      >
                        View
                      </button>

                      {/* Edit */}
                      <button
                        onClick={() => (window.location.href = `/dealer/property/edit/${p._id}`)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() => deleteProperty(p._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* ===== VIEW DETAILS MODAL ===== */}
        {selected && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg w-1/2">
              <h2 className="text-2xl font-semibold mb-4">{selected.title}</h2>

              <p><strong>Address:</strong> {selected.address}</p>
              <p><strong>Price:</strong> ₹ {selected.price}</p>
              <p><strong>Colony Name:</strong> {selected.colonyName}</p>
              <p><strong>CLU Status:</strong> {selected.cluStatus}</p>

              <h3 className="text-lg font-semibold mt-4">Documents:</h3>
              <ul className="list-disc ml-6">
                {selected.registryDoc && (
                  <li>
                    <a
                      href={`http://localhost:5000/uploads/${selected.registryDoc}`}
                      className="text-blue-600 underline"
                      download
                    >
                      Download Registry PDF
                    </a>
                  </li>
                )}

                {selected.cluDoc && (
                  <li>
                    <a
                      href={`http://localhost:5000/uploads/${selected.cluDoc}`}
                      className="text-blue-600 underline"
                      download
                    >
                      Download CLU PDF
                    </a>
                  </li>
                )}

                {selected.otherDocs?.map((doc, i) => (
                  <li key={i}>
                    <a
                      href={`http://localhost:5000/uploads/${doc}`}
                      className="text-blue-600 underline"
                      download
                    >
                      Download Document {i + 1}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelected(null)}
                className="mt-4 bg-gray-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default PropertyList;

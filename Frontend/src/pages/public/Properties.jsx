import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import axios from "axios";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/verification");
        setProperties(res.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">📄 My Verification Requests</h1>
        <p className="text-gray-600 mb-6">
          Below are all property verification requests you submitted.
        </p>

        {/* UPDATED RESPONSIVE SCROLL CONTAINER */}
        <div className="bg-white shadow rounded-xl p-6 overflow-x-auto w-full max-w-full">

          {loading ? (
            <p className="text-gray-500 text-center">Loading...</p>
          ) : properties.length === 0 ? (
            <p className="text-gray-500 text-center py-4">
              No verification requests submitted yet.
            </p>
          ) : (
            <table className="w-full text-sm text-left text-gray-600 min-w-[1400px]">
              <thead className="text-gray-700 font-semibold border-b bg-gray-100">
                <tr>
                  <th className="py-2 px-2">Applicant</th>
                  <th className="py-2 px-2">Owner</th>
                  <th className="py-2 px-2">Property Details</th>
                  <th className="py-2 px-2">Visit Info</th>
                  <th className="py-2 px-2">Documents</th>
                  <th className="py-2 px-2">Status</th>
                  <th className="py-2 px-2">Submitted On</th>
                </tr>
              </thead>

              <tbody>
                {properties.map((item) => (
                  <tr key={item._id} className="border-b">

                    {/* Applicant Details */}
                    <td className="py-3 px-2">
                      <p><b>Name:</b> {item.applicantName}</p>
                      <p><b>CNIC:</b> {item.applicantCNIC}</p>
                      <p><b>Phone:</b> {item.applicantPhone}</p>
                      <p><b>Email:</b> {item.applicantEmail}</p>
                    </td>

                    {/* Owner Details */}
                    <td className="py-3 px-2">
                      <p><b>Name:</b> {item.ownerName}</p>
                      <p><b>CNIC:</b> {item.ownerCNIC}</p>
                      <p><b>Phone:</b> {item.ownerPhone}</p>
                      <p><b>Email:</b> {item.ownerEmail}</p>
                      <p><b>Relation:</b> {item.relationToOwner}</p>
                    </td>

                    {/* Property Details */}
                    <td className="py-3 px-2">
                      <p><b>Type:</b> {item.propertyType}</p>
                      <p><b>Colony:</b> {item.colony}</p>
                      <p><b>Block:</b> {item.block}</p>
                      <p><b>No:</b> {item.propertyNumber}</p>
                      <p><b>Street:</b> {item.streetWidth}</p>
                      <p><b>Size:</b> {item.size}</p>
                      <p><b>Facing:</b> {item.facing}</p>
                      <p><b>Registry No:</b> {item.registryNo}</p>
                      <p><b>Map Approval:</b> {item.mapApprovalNo}</p>
                    </td>

                    {/* Visit Info */}
                    <td className="py-3 px-2">
                      <p><b>Required:</b> {item.physicalVisitRequired}</p>
                      <p><b>Date:</b> {item.preferredVisitDate}</p>
                      <p><b>Time:</b> {item.preferredVisitTime}</p>
                      <p><b>GPS:</b> {item.latitude}, {item.longitude}</p>

                      {item.googleMapLink && (
                        <a
                          href={item.googleMapLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 underline"
                        >
                          View Map
                        </a>
                      )}
                    </td>

                    {/* Documents */}
                    <td className="py-3 px-2">
                      {[
                        "registryCopy",
                        "fardCopy",
                        "allotmentLetter",
                        "taxReceipt",
                        "utilityBill",
                        "ownerCnicFront",
                        "ownerCnicBack"
                      ].map((doc) => (
                        <p key={doc}>
                          <b>{doc}:</b>{" "}
                          {item[doc] ? (
                            <a
                              href={`http://localhost:5000${item[doc]}`}
                              target="_blank"
                              className="text-blue-600 underline"
                            >
                              View
                            </a>
                          ) : (
                            "❌ Not Uploaded"
                          )}
                        </p>
                      ))}
                    </td>

                    {/* Status */}
                    <td
                      className={
                        item.status === "verified"
                          ? "text-green-600 font-bold"
                          : item.status === "pending"
                          ? "text-yellow-600 font-bold"
                          : "text-red-600 font-bold"
                      }
                    >
                      {item.status || "pending"}
                    </td>

                    {/* Date */}
                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>

                  </tr>
                ))}
              </tbody>

            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;

import React from "react";

const ManageRequest = ({ request, onClose }) => {
  if (!request) return null; // Safely avoid undefined

  const documents = [
    "registryCopy",
    "fardCopy",
    "allotmentLetter",
    "taxReceipt",
    "utilityBill",
    "ownerCnicFront",
    "ownerCnicBack",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-5xl p-6 overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Manage Request: {request._id}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 font-bold"
          >
            X
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="font-semibold">Applicant Info</h3>
            <p><b>Name:</b> {request.applicantName || "-"}</p>
            <p><b>CNIC:</b> {request.applicantCNIC || "-"}</p>
            <p><b>Phone:</b> {request.applicantPhone || "-"}</p>
            <p><b>Email:</b> {request.applicantEmail || "-"}</p>
          </div>

          <div>
            <h3 className="font-semibold">Owner Info</h3>
            <p><b>Name:</b> {request.ownerName || "-"}</p>
            <p><b>CNIC:</b> {request.ownerCNIC || "-"}</p>
            <p><b>Phone:</b> {request.ownerPhone || "-"}</p>
            <p><b>Email:</b> {request.ownerEmail || "-"}</p>
            <p><b>Relation:</b> {request.relationToOwner || "-"}</p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Property Details</h3>
          <p><b>Type:</b> {request.propertyType || "-"}</p>
          <p><b>Colony:</b> {request.colony || "-"}</p>
          <p><b>Block:</b> {request.block || "-"}</p>
          <p><b>Number:</b> {request.propertyNumber || "-"}</p>
          <p><b>Street Width:</b> {request.streetWidth || "-"}</p>
          <p><b>Size:</b> {request.size || "-"}</p>
          <p><b>Facing:</b> {request.facing || "-"}</p>
          <p><b>Registry No:</b> {request.registryNo || "-"}</p>
          <p><b>Map Approval:</b> {request.mapApprovalNo || "-"}</p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Visit Info</h3>
          <p><b>Required:</b> {request.physicalVisitRequired || "-"}</p>
          <p><b>Date:</b> {request.preferredVisitDate || "-"}</p>
          <p><b>Time:</b> {request.preferredVisitTime || "-"}</p>
          <p><b>GPS:</b> {request.latitude || "-"}, {request.longitude || "-"}</p>
          {request.googleMapLink && (
            <a
              href={request.googleMapLink}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              View Map
            </a>
          )}
        </div>

        <div className="mb-4">
          <h3 className="font-semibold">Documents</h3>
          {documents.map((doc) => (
            <p key={doc}>
              <b>{doc}:</b>{" "}
              {request[doc] ? (
                <a
                  href={`http://localhost:5000${request[doc]}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  View
                </a>
              ) : (
                "❌ Not Uploaded"
              )}
            </p>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border hover:bg-gray-100"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageRequest;

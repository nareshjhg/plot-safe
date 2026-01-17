import React, { useState } from "react";
import { X, Upload } from "lucide-react";

const ManageRequestModal = ({ request, onClose }) => {
  const [verifier, setVerifier] = useState(request?.verifier || "");
  const [status, setStatus] = useState(request?.status || "");

  if (!request) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl w-full max-w-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">
            Manage Request {request.id}
          </h2>
          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-4 space-y-4 text-sm">
          {/* Assign Verifier */}
          <div>
            <label className="font-medium block mb-1">Assign Verifier</label>
            <select
              value={verifier}
              onChange={(e) => setVerifier(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option>Unassigned</option>
              <option>Suresh Iyer</option>
              <option>Deepa Krishnan</option>
              <option>Vikram Singh</option>
            </select>
          </div>

          {/* Change Status */}
          <div>
            <label className="font-medium block mb-1">Change Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In-Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Documents */}
          <div>
            <label className="font-medium block mb-1">Documents</label>
            <ul className="space-y-1">
              {request.documents.map((doc, i) => (
                <li
                  key={i}
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          {/* Upload Report */}
          <div>
            <label className="font-medium block mb-1">
              Upload Final Report
            </label>
            <label className="flex items-center gap-2 border px-4 py-2 rounded-lg cursor-pointer text-sm hover:bg-gray-100">
              <Upload size={16} />
              Upload PDF
              <input type="file" hidden />
            </label>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded-lg"
          >
            Cancel
          </button>
          <button className="px-4 py-2 text-sm bg-black text-white rounded-lg">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageRequestModal;

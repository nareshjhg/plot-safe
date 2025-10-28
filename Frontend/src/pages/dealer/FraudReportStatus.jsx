import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar';

// Mock data for fraud reports
const mockReports = [
  {
    id: 'FR-001',
    property: 'Green Valley Plot 12',
    status: 'Under Review',
    reportedOn: '2025-07-20',
  },
  {
    id: 'FR-002',
    property: 'Sunrise Colony Flat 5B',
    status: 'Resolved',
    reportedOn: '2025-07-15',
  },
  {
    id: 'FR-003',
    property: 'Shree Nagar Shop 3',
    status: 'Pending',
    reportedOn: '2025-07-22',
  },
];

const statusColors = {
  'Under Review': 'bg-yellow-200 text-yellow-800',
  Resolved: 'bg-green-200 text-green-800',
  Pending: 'bg-red-200 text-red-800',
};

const FraudReportStatus = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch real data here later, for now set mock data
    setReports(mockReports);
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-4 text-red-700">Fraud Report Status</h1>
        <p className="text-gray-600 mb-6">
          Track the status of any reported fraud or flagged properties.
        </p>

        {reports.length === 0 ? (
          <p className="text-gray-500">No fraud reports found.</p>
        ) : (
          <table className="w-full bg-white rounded shadow overflow-hidden">
            <thead className="bg-red-100">
              <tr>
                <th className="text-left px-4 py-2">Report ID</th>
                <th className="text-left px-4 py-2">Property</th>
                <th className="text-left px-4 py-2">Status</th>
                <th className="text-left px-4 py-2">Reported On</th>
              </tr>
            </thead>
            <tbody>
              {reports.map(({ id, property, status, reportedOn }) => (
                <tr key={id} className="border-t hover:bg-red-50">
                  <td className="px-4 py-2 font-mono">{id}</td>
                  <td className="px-4 py-2">{property}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[status] || 'bg-gray-200 text-gray-800'}`}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="px-4 py-2">{reportedOn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default FraudReportStatus;

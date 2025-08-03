import React from "react";

const alertsData = [
  {
    id: 1,
    title: "⚠️ Fraudulent Dealer Alert",
    description:
      "A dealer in Sector 43 was found selling plots without valid documentation. Please verify all papers before purchasing.",
    date: "2025-07-21",
  },
  {
    id: 2,
    title: "✅ Government Approved Layout",
    description:
      "New layout approved in Sector 17. Visit the Approved Colonies section to learn more.",
    date: "2025-07-20",
  },
  {
    id: 3,
    title: "📢 Survey Notice",
    description:
      "Municipal survey teams will visit areas of Sector 21 to verify construction legality. Cooperate fully.",
    date: "2025-07-18",
  },
];

const Alerts = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-red-600">🚨 Alerts & Notices</h1>

      <div className="space-y-4">
        {alertsData.map((alert) => (
          <div
            key={alert.id}
            className="border-l-4 border-red-500 bg-red-50 p-4 rounded shadow"
          >
            <h2 className="text-xl font-semibold text-red-700">{alert.title}</h2>
            <p className="text-gray-700 mt-1">{alert.description}</p>
            <p className="text-sm text-gray-500 mt-2">📅 {alert.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;


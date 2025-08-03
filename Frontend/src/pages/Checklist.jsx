// src/pages/Checklist.jsx
import React from "react";

const Checklist = () => {
  const items = [
    "Is the colony listed in approved government layouts?",
    "Check for valid CLU (Change of Land Use) approval",
    "Is the dealer RERA or DTCP registered?",
    "Was the property part of any demolition notice?",
    "Match Khasra number in registry vs master plan",
    "Upload sale deed to cross-check for forgery",
    "Is electricity/sewage officially provided?",
  ];

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Safe Property Buying Checklist</h1>
      <p className="text-gray-700 mb-4">
        Before you buy, verify these points to avoid legal or fraud risks:
      </p>
      <ul className="list-disc pl-6 space-y-3">
        {items.map((item, index) => (
          <li key={index} className="text-gray-800 dark:text-gray-200">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <p className="text-sm text-gray-500">
          Tip: You can also <strong>upload your registry PDF</strong> to check these points automatically.
        </p>
      </div>
    </div>
  );
};

export default Checklist;

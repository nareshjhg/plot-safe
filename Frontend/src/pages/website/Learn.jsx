// src/pages/Learn.jsx
import React from "react";

const Learn = () => {
  const topics = [
    {
      title: "What is CLU (Change of Land Use)?",
      content:
        "CLU is required to convert agricultural land to residential or commercial use. Always verify CLU approval before buying.",
    },
    {
      title: "Why Approved Colonies Matter",
      content:
        "Only colonies approved by DTCP, DDA, or urban local bodies are legally secure. Unapproved ones risk demolition.",
    },
    {
      title: "RERA & Dealer Registration",
      content:
        "Check if your dealer is RERA or DTCP registered. It reduces risk of fraud and ensures accountability.",
    },
    {
      title: "Khasra & Registry Matching",
      content:
        "Ensure the land's khasra number in registry matches the master plan. Mismatch may indicate encroachment.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Learn About Legal Property Checks</h1>
      <div className="space-y-6">
        {topics.map((topic, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{topic.title}</h2>
            <p className="text-gray-700">{topic.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;

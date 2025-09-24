import React from "react";

const steps = [
  {
    number: "1",
    title: "Enter Property Details",
    description:
      "Start by submitting basic property details like address, owner name, registry number, and required documents.",
    icon: "📝",
  },
  {
    number: "2",
    title: "Verification Process",
    description:
      "Our system and legal experts cross-check ownership, legal disputes, encumbrances, and approvals with government records.",
    icon: "🔍",
  },
  {
    number: "3",
    title: "Get Verified Report",
    description:
      "Receive a clear, downloadable verification report showing if the property is ✅ Safe, ⚠ Risky, or ❌ Disputed.",
    icon: "📑",
  },
];

const HowItWorks = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-blue-700">
        How It Works
      </h1>

      <div className="grid gap-10 md:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center mb-4">
              <span className="text-5xl">{step.icon}</span>
            </div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              Step {step.number}: {step.title}
            </h2>
            <p className="text-gray-700">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;

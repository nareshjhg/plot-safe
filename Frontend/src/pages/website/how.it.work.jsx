import React from "react";

const buyerSteps = [
  {
    number: "01",
    title: "Create Account",
    description: "Sign up as a buyer and provide basic information",
    icon: "👤",
  },
  {
    number: "02",
    title: "Submit Property Details",
    description:
      "Enter property address, owner name, registry number, and upload documents",
    icon: "📝",
  },
  {
    number: "03",
    title: "Verification Process",
    description:
      "Our legal team verifies ownership, title deed, court cases, and encumbrances",
    icon: "🔍",
  },
  {
    number: "04",
    title: "Receive Report",
    description:
      "Download comprehensive verification report within 24–48 hours",
    icon: "📑",
  },
];

const dealerSteps = [
  {
    number: "01",
    title: "Register as Dealer",
    description: "Create dealer account with business details",
    icon: "🏢",
  },
  {
    number: "02",
    title: "Add Clients",
    description: "Manage your client list and property portfolio",
    icon: "👥",
  },
  {
    number: "03",
    title: "Bulk Verification",
    description: "Submit multiple properties for verification at once",
    icon: "📂",
  },
  {
    number: "04",
    title: "Share Reports",
    description: "Download and share verified reports with your clients",
    icon: "📤",
  },
];

const verificationProcess = [
  {
    number: "1",
    title: "Document Collection",
    description:
      "We collect title deed, sale deed, encumbrance certificate, and tax receipts",
  },
  {
    number: "2",
    title: "Ownership Verification",
    description:
      "Verify current ownership, chain of ownership, and seller rights",
  },
  {
    number: "3",
    title: "Legal Clearance Check",
    description:
      "Check for court cases, legal disputes, mortgages, and liens",
  },
  {
    number: "4",
    title: "Authority Records",
    description:
      "Verify records with municipal corporation and revenue departments",
  },
  {
    number: "5",
    title: "Site Inspection",
    description:
      "Physical verification of boundaries, construction approvals, and occupancy",
  },
  {
    number: "6",
    title: "Report Generation",
    description:
      "Comprehensive report with findings, red flags, and recommendations",
  },
];

const timeline = [
  {
    time: "0–2 hours",
    description: "Document submission & verification initiation",
  },
  {
    time: "12–24 hours",
    description: "Legal team conducts detailed verification",
  },
  {
    time: "24–48 hours",
    description: "Receive final verification report",
  },
];

const HowItWorks = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          How It Works
        </h1>
        <p className="text-gray-600">
          A simple, transparent process to verify your property
        </p>
      </div>

      {/* For Property Buyers */}
      <section>
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          For Property Buyers
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          {buyerSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{step.icon}</div>
              <span className="text-sm font-bold text-blue-600">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold mt-2 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For Property Dealers */}
      <section>
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          For Property Dealers
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          {dealerSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-md text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{step.icon}</div>
              <span className="text-sm font-bold text-blue-600">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold mt-2 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Verification Process */}
      <section>
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Our Verification Process
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {verificationProcess.map((step, idx) => (
            <div
              key={idx}
              className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600"
            >
              <span className="text-blue-700 font-bold text-lg">
                Step {step.number}
              </span>
              <h3 className="text-lg font-semibold mt-2 mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section>
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Typical Timeline
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center bg-white p-5 rounded-xl shadow-md"
            >
              <span className="font-semibold text-blue-600">
                {item.time}
              </span>
              <span className="text-gray-700 text-sm">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HowItWorks;

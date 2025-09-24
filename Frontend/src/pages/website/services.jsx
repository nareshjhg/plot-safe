import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const services = [
  {
    title: "Property Verification",
    description:
      "Comprehensive verification of ownership, title deed, encumbrance, and registry documents.",
    icon: "🏠",
  },
  {
    title: "Legal Check",
    description:
      "Identify court cases, disputes, mortgages, and ensure compliance with legal regulations.",
    icon: "⚖️",
  },
  {
    title: "Valuation & Profitability Reports",
    description:
      "Get detailed property valuation, market trends, and profitability insights before investing.",
    icon: "📊",
  },
  {
    title: "Buyer Awareness Reports",
    description:
      "Educational guides and fraud alerts to help buyers avoid risks and make safe decisions.",
    icon: "📘",
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "₹1,999",
    description: "Essential checks for quick buyers",
    features: [
      "Registry / Sale Deed Check",
      "Property Tax Receipts",
      "Mutation / Khata record",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    price: "₹4,999",
    description: "Most popular choice for buyers",
    features: [
      "All Basic Checks",
      "Encumbrance Certificate",
      "RERA / Authority Approval Check",
      "Court Case Record Search",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹9,999+",
    description: "Full legal verification",
    features: [
      "All Standard Checks",
      "15–30 Year Title Search",
      "Local Authority Approval",
      "On-ground Verifier Inspection",
      "Final Legal Opinion Report",
    ],
    highlight: false,
  },
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Services Section */}
      <h1 className="text-4xl font-bold mb-12 text-center text-blue-700">
        Our Services
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">
              {service.title}
            </h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Pricing Plans */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Pricing Plans
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-8 text-center shadow-md transition transform hover:-translate-y-2 hover:shadow-xl ${
                plan.highlight
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white border-2 border-blue-700"
                  : "bg-white border"
              }`}
            >
              {plan.highlight && (
                <span className="absolute top-0 right-0 mt-3 mr-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                  Most Popular
                </span>
              )}
              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.highlight ? "text-white" : "text-gray-800"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mb-4 ${
                  plan.highlight ? "text-gray-100" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>
              <p
                className={`text-3xl font-bold mb-6 ${
                  plan.highlight ? "text-yellow-200" : "text-blue-600"
                }`}
              >
                {plan.price}
              </p>

              <ul className="text-left mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle
                      className={`${
                        plan.highlight ? "text-yellow-200" : "text-blue-600"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full px-6 py-3 rounded-lg font-semibold transition transform hover:-translate-y-1 ${
                  plan.highlight
                    ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {plan.highlight ? "Get Verified" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

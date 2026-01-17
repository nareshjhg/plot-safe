import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const services = [
  {
    title: "Property Verification",
    icon: "🏠",
    points: [
      "Ownership verification",
      "Title deed authentication",
      "Encumbrance certificate check",
      "Property tax clearance",
      "Municipal records verification",
      "Previous ownership history",
    ],
  },
  {
    title: "Legal Check",
    icon: "⚖️",
    points: [
      "Court case verification",
      "Legal disputes check",
      "Mortgage & loan verification",
      "Builder approval verification",
      "Land use compliance",
      "NOC from authorities",
    ],
  },
  {
    title: "Valuation & Profitability",
    icon: "📊",
    points: [
      "Current market valuation",
      "Price trend analysis",
      "Investment return projection",
      "Rental yield estimation",
      "Resale potential assessment",
      "Locality development insights",
    ],
  },
  {
    title: "Buyer Awareness Reports",
    icon: "📘",
    points: [
      "Property buying checklist",
      "Legal documentation guide",
      "Common fraud patterns",
      "Buyer rights & responsibilities",
      "Tax implications",
      "Registration process guide",
    ],
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "₹999",
    description: "Essential verification for small properties",
    delivery: "48-hour delivery",
    features: [
      "Ownership verification",
      "Basic title deed check",
      "Encumbrance certificate",
      "PDF report",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    price: "₹2,499",
    description: "Comprehensive verification for buyers",
    delivery: "24-hour delivery",
    features: [
      "Everything in Basic",
      "Legal dispute check",
      "Court case verification",
      "Market valuation",
      "Detailed PDF + Excel report",
      "Email support",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹4,999",
    description: "Complete due diligence package",
    delivery: "Priority 12-hour delivery",
    features: [
      "Everything in Standard",
      "Site visit & inspection",
      "Builder verification",
      "Investment analysis",
      "30-min legal consultation",
      "Phone & Email support",
      "Unlimited revisions",
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
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
          >
            <div className="text-5xl mb-4 text-center">{service.icon}</div>
            <h2 className="text-xl font-semibold text-blue-600 mb-4 text-center">
              {service.title}
            </h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {service.points.map((point, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <FaCheckCircle className="text-blue-600 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Pricing Plans */}
      <div className="mt-24">
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

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="mb-3 opacity-90">{plan.description}</p>

              <p className="text-3xl font-bold mb-1">{plan.price}</p>
              <p className="text-sm mb-6 opacity-80">{plan.delivery}</p>

              <ul className="text-left mb-6 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle
                      className={
                        plan.highlight ? "text-yellow-300" : "text-blue-600"
                      }
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
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

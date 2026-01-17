import React from "react";

const articles = [
  {
    category: "Buyer Guide",
    date: "March 15, 2025",
    title: "How to Check Property Papers Before Buying",
    description:
      "A comprehensive guide to understanding and verifying essential property documents.",
  },
  {
    category: "Legal",
    date: "March 10, 2025",
    title: "10 Red Flags in Property Documents",
    description:
      "Warning signs that indicate potential legal issues with property ownership.",
  },
  {
    category: "Documentation",
    date: "March 5, 2025",
    title: "Understanding Encumbrance Certificate",
    description:
      "What is an EC, why it matters, and how to get one for your property.",
  },
  {
    category: "Safety",
    date: "February 28, 2025",
    title: "Avoid Real Estate Frauds: A Complete Guide",
    description:
      "Common fraud patterns in property transactions and how to protect yourself.",
  },
  {
    category: "Legal",
    date: "February 20, 2025",
    title: "Title Deed vs Sale Deed: Key Differences",
    description:
      "Understanding the legal documents that prove property ownership.",
  },
  {
    category: "Process",
    date: "February 15, 2025",
    title: "Property Registration Process in India",
    description:
      "Step-by-step guide to registering your property with local authorities.",
  },
];

const resources = [
  {
    title: "Property Verification Checklist",
    description: "Complete checklist of documents to verify before buying",
    size: "PDF • 2.5 MB",
  },
  {
    title: "Buyer's Legal Guide",
    description: "Understanding your legal rights and responsibilities",
    size: "PDF • 3.2 MB",
  },
  {
    title: "Common Fraud Patterns",
    description: "Identify and avoid property fraud schemes",
    size: "PDF • 1.8 MB",
  },
];

const faqs = [
  "What is property verification?",
  "How long does the verification process take?",
  "What documents do I need to provide?",
  "Is my information kept confidential?",
  "What if verification reveals issues?",
  "Can dealers use this service for multiple properties?",
  "Do you provide physical site inspection?",
  "What areas do you cover?",
];

const Resources = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Knowledge Hub
        </h1>
        <p className="text-gray-600">
          Learn everything about property verification, legal documentation,
          and safe property buying
        </p>
      </div>

      {/* Articles */}
      <section>
        <h2 className="text-3xl font-bold text-blue-700 mb-10">
          Latest Articles & Guides
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <span className="text-xs font-semibold text-blue-600">
                {article.category}
              </span>
              <p className="text-xs text-gray-500 mt-1">{article.date}</p>

              <h3 className="text-lg font-semibold mt-3 mb-2 text-gray-800">
                {article.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                {article.description}
              </p>

              <a
                href="#"
                className="text-blue-600 font-medium hover:underline text-sm"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Free Resources */}
      <section>
        <h2 className="text-3xl font-bold text-blue-700 mb-10">
          Free Resources
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((item, idx) => (
            <div
              key={idx}
              className="bg-blue-50 border border-blue-200 rounded-2xl p-6"
            >
              <h3 className="font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {item.description}
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">{item.size}</span>
                <button className="text-blue-600 font-medium hover:underline">
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section>
        <h2 className="text-3xl font-bold text-blue-700 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((q, idx) => (
            <div
              key={idx}
              className="bg-white shadow-sm rounded-xl p-5"
            >
              <p className="font-semibold text-gray-800">{q}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Resources;

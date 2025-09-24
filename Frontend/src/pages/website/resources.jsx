import React from "react";

const blogs = [
  {
    title: "How to Check Property Papers",
    description: "Step-by-step guide to verify ownership, title deeds, and registry documents.",
    link: "#",
  },
  {
    title: "Avoid Real Estate Frauds",
    description: "Learn common tricks used by fraudsters and how to stay safe.",
    link: "#",
  },
];

const faqs = [
  {
    q: "Why is property verification important?",
    a: "It helps prevent fraud, disputes, and ensures that you’re buying from the rightful owner.",
  },
  {
    q: "How long does verification take?",
    a: "Basic checks are instant. Full legal verification usually takes 3–7 working days.",
  },
];

const Resources = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-blue-700">
        Resources & Knowledge Hub
      </h1>

      {/* Blogs & Guides */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
          Blogs & Guides
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <a
                href={blog.link}
                className="text-blue-600 font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">FAQs</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white shadow-sm rounded-xl p-6">
              <h3 className="font-semibold text-gray-800">{faq.q}</h3>
              <p className="text-gray-600 mt-2">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Free Tools */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-600 mb-6">
          Free Tools
        </h2>
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Free Property Buyer Checklist
          </h3>
          <p className="text-gray-600 mb-6">
            Download our step-by-step checklist (PDF) to ensure your property documents are in order
            before buying.
          </p>
          <a
            href="/checklist.pdf"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Download Free PDF
          </a>
        </div>
      </section>
    </div>
  );
};

export default Resources;

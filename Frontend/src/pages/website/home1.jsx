import React from "react";
import { Link } from "react-router-dom";

const Home1 = () => {
  return (
    <div className="w-full">
      {/* Hero with Search */}
      <section className="relative bg-[url('https://images.pexels.com/photos/17636977/pexels-photo-17636977.jpeg')] bg-cover bg-center text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Property Legality Check, Made Easy 🏡
          </h1>
          <p className="text-lg mb-8">
            Verify plots, dealers, and documents instantly using{" "}
            <strong>Govt Data + AI Risk Score</strong>.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-lg p-3 flex flex-col md:flex-row items-center gap-3">
            <input
              type="text"
              placeholder="Enter Colony / Dealer / Registry No..."
              className="flex-1 px-4 py-3 rounded-md text-gray-800 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white font-semibold">
              Check Property Now
            </button>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Quick Verification Tools</h2>
        <div className="grid gap-8 md:grid-cols-4">
          {[
            { title: "Check List", icon: "📋", link: "/checklist" },
            { title: "Risk Score", icon: "⚡", link: "/risk-score" },
            { title: "Approved Colonies", icon: "🏘️", link: "/approved-colonies" },
            { title: "Report Fraud", icon: "🚨", link: "/report-fraud" },
          ].map((cat, i) => (
            <Link
              key={i}
              to={cat.link}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition cursor-pointer block"
            >
              <div className="text-4xl">{cat.icon}</div>
              <h3 className="text-lg font-semibold mt-3">{cat.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Recently Verified Properties / Fraud Alerts */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Recent Verifications & Alerts
        </h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "✅ Verified – Plot in Sector 45 Gurgaon",
              desc: "Cross-checked with DTCP & MCF records.",
              status: "Verified",
            },
            {
              title: "⚠️ Fraud Alert – Fake Registry in Faridabad",
              desc: "Dealer flagged for duplicate documents.",
              status: "Fraud",
            },
            {
              title: "✅ Verified – Apartment in Sonipat",
              desc: "Clear title & tax receipts verified.",
              status: "Verified",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 text-left hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <span
                className={`px-3 py-1 text-sm rounded ${
                  p.status === "Verified"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage Cities */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Verification Coverage</h2>
        <div className="grid gap-6 md:grid-cols-4">
          {["Delhi", "Gurgaon", "Faridabad", "Sonipat"].map((city, i) => (
            <div
              key={i}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={`https://images.pexels.com/photos/534219/pexels-photo-534219.jpeg?cs=srgb&dl=architectural-design-architecture-bangkok-534219.jpg&fm=jpg/400x300/?${city}`}
                alt={city}
                className="w-full h-48 object-cover group-hover:scale-110 transition"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xl font-bold">
                {city}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-700 to-green-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Get Your Property Legally Verified Today
        </h2>
        <p className="mb-6">
          Avoid fraud & invest with confidence. Trusted by 500+ buyers & dealers.
        </p>
        <Link
          to="/signup"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Start Verification
        </Link>
      </section>
    </div>
  );
};

export default Home1;

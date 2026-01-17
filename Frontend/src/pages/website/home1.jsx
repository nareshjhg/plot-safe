import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Clock,
  FileCheck,
  Search,
  CheckCircle,
  Download,
} from "lucide-react";

const Home1 = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[url('https://images.pexels.com/photos/17636977/pexels-photo-17636977.jpeg')] bg-cover bg-center text-white py-28 px-6">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Property Legality Check, Made Easy 🏡
          </h1>
          <p className="text-lg mb-8 text-gray-200">
            Verify plots, dealers & documents using{" "}
            <strong>Govt Records + AI Risk Analysis</strong>
          </p>

          <div className="bg-white rounded-xl shadow-xl p-3 flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter Colony / Dealer / Registry No"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold">
              Check Property
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose PropertyVerify
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
              title: "Trust & Transparency",
              desc: "Verified property documents with complete legal clarity and authenticity checks.",
            },
            {
              icon: <Clock className="w-10 h-10 text-green-600" />,
              title: "Fast Turnaround",
              desc: "Receive detailed verification reports within 24–48 hours.",
            },
            {
              icon: <FileCheck className="w-10 h-10 text-purple-600" />,
              title: "Accurate Reports",
              desc: "Verification backed by legal experts and official government records.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-center mb-14">
          How It Works
        </h2>

        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {[
            {
              step: "01",
              icon: <Search className="w-8 h-8 text-blue-600" />,
              title: "Enter Property Details",
              desc: "Provide property address, owner name and registry number.",
            },
            {
              step: "02",
              icon: <CheckCircle className="w-8 h-8 text-green-600" />,
              title: "Verification Process",
              desc: "We verify ownership, title deed, court cases and approvals.",
            },
            {
              step: "03",
              icon: <Download className="w-8 h-8 text-purple-600" />,
              title: "Get Verified Report",
              desc: "Download a comprehensive legal verification report.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition"
            >
              <span className="absolute -top-5 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                {item.step}
              </span>
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: "Rajesh Kumar",
              role: "Property Buyer",
              review:
                "PropertyVerify saved me from a fraudulent deal. Pending court cases were revealed clearly.",
            },
            {
              name: "Priya Sharma",
              role: "Real Estate Dealer",
              review:
                "This service helps me build trust. I verify every property before listing it.",
            },
            {
              name: "Amit Patel",
              role: "First-time Buyer",
              review:
                "The detailed report gave me confidence in my first property purchase.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition"
            >
              <p className="text-gray-600 mb-6">“{t.review}”</p>
              <h4 className="font-semibold">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-700 to-green-600 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Verify Your Property?
        </h2>
        <p className="mb-8 text-lg">
          Join thousands of smart buyers who verify before they buy.
        </p>

        <Link
          to="/signup"
          className="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Get Started Now
        </Link>
      </section>
    </div>
  );
};

export default Home1;

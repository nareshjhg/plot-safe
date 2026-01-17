import React from "react";
import { ShieldCheck, Users, FileCheck, Lock } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Naresh Kumar",
      role: "Founder & CEO",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      desc: "Visionary leader driving PlotSafe’s mission to bring transparency to property transactions.",
    },
    {
      name: "Anjali Sharma",
      role: "CTO",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      desc: "Technology expert leading platform development, integrations, and AI-driven fraud detection.",
    },
    {
      name: "Rahul Mehta",
      role: "Legal Advisor",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
      desc: "Specialist in real estate law, ensuring all verifications comply with property regulations.",
    },
    {
      name: "Sneha Verma",
      role: "Operations Head",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      desc: "Managing verification agents, government partnerships, and seamless client onboarding.",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-green-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
        <p className="text-lg max-w-3xl mx-auto opacity-90">
          Welcome to <span className="font-semibold">PlotSafe</span> – your trusted partner in
          <strong> property verification</strong> and <strong>fraud prevention</strong>.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* What We Do */}
        <section>
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            What We Do
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                icon: <FileCheck className="w-10 h-10 text-blue-600" />,
                title: "Verified Property Listings",
                desc: "Every property on PlotSafe is reviewed for authenticity with govt. data.",
              },
              {
                icon: <Users className="w-10 h-10 text-green-600" />,
                title: "Direct Contact",
                desc: "Connect directly with verified dealers and buyers – no middlemen.",
              },
              {
                icon: <Lock className="w-10 h-10 text-purple-600" />,
                title: "Secure Login",
                desc: "Phone/OTP login and encrypted dashboards for secure access.",
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-orange-600" />,
                title: "Role-Based Dashboards",
                desc: "Custom dashboards for buyers, dealers, and admins with tailored tools.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition text-left flex items-start gap-4"
              >
                {item.icon}
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Mission & Vision
          </h2>
          <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
            Our mission is to bring <strong>transparency</strong> to the property market and ensure
            that every buyer, seller, and dealer can make safe and informed decisions. <br />
            Our vision is a property ecosystem where <strong>fraud is minimized</strong>,
            <strong> trust is maximized</strong>, and every transaction is backed by verified records.
          </p>
        </section>

        {/* Our Story */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              We started PlotSafe after witnessing countless cases of{" "}
              <strong>fake registries, duplicate sales, and disputed ownership</strong> in the real estate sector.
              Buyers often lacked reliable ways to verify documents, and dealers struggled to build trust with clients.
              PlotSafe was created to solve this problem by combining{" "}
              <strong>digital tools, government integrations, and legal expertise</strong> to
              make property transactions safer for everyone.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
              alt="Our Story"
              className="rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Trust Signals */}
        <section>
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            Why Trust Us
          </h2>
          <div className="grid gap-6 md:grid-cols-3 text-center">
            {[
              "Experienced legal advisors & verification agents",
              "Partnerships with govt. databases (RERA, land records, municipal authorities)",
              "Secure encrypted dashboards & document storage",
              "Fraud-checked & watermarked property reports",
              "Compliance with data privacy & property regulations",
              "Trusted by 500+ buyers, dealers & investors",
            ].map((point, i) => (
              <div
                key={i}
                className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition"
              >
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section>
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
            {team.map((member, i) => (
              <div
                key={i}
                className="p-6 bg-white shadow rounded-xl hover:shadow-lg transition flex flex-col items-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover shadow"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
                <p className="text-gray-600 text-sm mt-2">{member.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Want to Verify Your Property?
        </h2>
        <p className="mb-6">Join PlotSafe and make safe, fraud-free investments today.</p>
        <a
          href="/signup"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default About;

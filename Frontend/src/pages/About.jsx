import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">About Us</h1>

      <p className="text-lg text-gray-700 mb-6 text-center">
        Welcome to <span className="font-semibold">PlotSafe</span> – your trusted platform for secure land and property listings.
      </p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">What We Do</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li><strong>Verified Property Listings:</strong> Every property on PlotSafe is reviewed for authenticity.</li>
            <li><strong>Direct Contact:</strong> Connect directly with verified dealers and buyers.</li>
            <li><strong>Secure Login:</strong> Sign up/login using phone number and OTP.</li>
            <li><strong>Role-Based Dashboards:</strong> Tailored dashboards for Public users and Dealers.</li>
            <li><strong>Location Filters:</strong> Easily find properties based on your area.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Vision</h2>
          <p className="text-gray-700">
            We aim to simplify and secure the land buying and selling process using modern digital tools, ensuring transparency and trust for everyone.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;

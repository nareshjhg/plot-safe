import React, { useState } from "react";
// import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    // try {
    //   const res = await axios.post("https://api.exclicon.com/api/submit/form1", formData);
    //   setSuccess("Message sent successfully!");
    //   setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    // } catch (err) {
    //   setSuccess("Failed to send message!");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-blue-700">
        Contact us
      </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <form
            className="space-y-6 w-full bg-white p-8 rounded-xl shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
            aria-label="Contact form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition focus:outline-none focus:ring-4 focus:ring-indigo-300"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {success && (
              <p className={`text-sm mt-2 ${success.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
                {success}
              </p>
            )}
          </form>

          <div
            className="space-y-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg text-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-600">
                Contact Info
              </h3>
              <ul className="space-y-3 text-md">
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+919205956553" className="text-indigo-600 hover:underline">
                    +91-9205956553
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:excliconaiinnovation@gmail.com" className="text-indigo-600 hover:underline">
                    excliconaiinnovation@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Address:</strong> Ballabhgarh, Faridabad, Haryana, India
                </li>
                <li>
                  <strong>Hours:</strong> Mon - Sat: 9 AM - 6 PM
                </li>
              </ul>
            </div>

            <iframe
              title="Google Map"
              className="w-full h-64 rounded-xl shadow-lg border border-gray-300"
              src="https://maps.google.com/maps?q=ballabhgarh,%20faridabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/919205956553"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition focus:outline-none focus:ring-4 focus:ring-green-400"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48a12.07 12.07 0 00-17.05 0A12 12 0 003 12.27a11.8 11.8 0 001.65 6l-1.14 4.18 4.27-1.12a11.91 11.91 0 005.49 1.4H13a12 12 0 007.52-20.25zM13 21.42a9.91 9.91 0 01-5.13-1.42l-.36-.2-2.52.66.67-2.45-.23-.38a9.93 9.93 0 0115.84-11 10 10 0 01-8.27 14.79z" />
          <path d="M17.56 14.65l-2.53-.72a.75.75 0 00-.7.19l-.63.65a7.1 7.1 0 01-3.15-3.16l.65-.63a.75.75 0 00.18-.7l-.72-2.53a.75.75 0 00-1.28-.3l-1.08 1.08a1.55 1.55 0 00-.36 1.58 9.67 9.67 0 005.59 5.59 1.55 1.55 0 001.58-.36l1.08-1.08a.75.75 0 00-.3-1.28z" />
        </svg>
      </a>
    </section>
  );
};

export default Contact;

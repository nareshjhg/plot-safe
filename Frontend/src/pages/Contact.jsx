import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add API logic here
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-700 dark:text-blue-400 mb-6">Contact Us</h1>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-10">
          Have questions or want to report something? Send us a message.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

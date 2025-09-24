import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    role: "buyer",
    company: "",
    gst: "",
    city: "",
    acceptTerms: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, mobile, password, confirmPassword, acceptTerms } = form;

    if (!name || !email || !mobile || !password || !confirmPassword) {
      setError("All required fields must be filled.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }
    if (!/^[0-9]{10}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!acceptTerms) {
      setError("You must accept the Terms & Conditions.");
      return;
    }

    // Simulate API call
    console.log("Signup submitted:", form);
    setSuccess("✅ Account created successfully! OTP verification pending.");
    setForm({
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      role: "buyer",
      company: "",
      gst: "",
      city: "",
      acceptTerms: false,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 px-4 py-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 sm:p-10 w-full max-w-lg mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-4 sm:mb-6 text-blue-700">
          Create Your Account
        </h2>
        <p className="text-center text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          Join <span className="font-semibold">PlotSafe</span> and verify before you buy 🚀
        </p>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-4">{success}</p>}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Role */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="buyer">Buyer</option>
              <option value="dealer">Dealer</option>
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@domain.com"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Mobile Number</label>
            <input
              type="text"
              name="mobile"
              placeholder="10-digit mobile"
              value={form.mobile}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg pr-10 focus:ring-2 focus:ring-blue-500"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="••••••••"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg pr-10 focus:ring-2 focus:ring-blue-500"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 cursor-pointer text-gray-500"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Dealer Fields */}
          {form.role === "dealer" && (
            <>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">Company Name</label>
                <input
                  type="text"
                  name="company"
                  placeholder="ABC Realty Pvt. Ltd."
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">GST (Optional)</label>
                <input
                  type="text"
                  name="gst"
                  placeholder="GST Number"
                  value={form.gst}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          {/* Buyer Fields */}
          {form.role === "buyer" && (
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">City / Location</label>
              <input
                type="text"
                name="city"
                placeholder="Enter your city"
                value={form.city}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          {/* OTP & reCAPTCHA */}
          <div className="bg-gray-50 p-3 rounded-lg border text-sm text-gray-600 text-center">
            🔐 OTP Verification (Email / Mobile) will be integrated here.
          </div>
          <div className="bg-gray-50 p-3 rounded-lg border text-sm text-gray-600 text-center">
            🤖 Google reCAPTCHA placeholder (to protect from bots).
          </div>

          {/* Terms */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={form.acceptTerms}
              onChange={handleChange}
              className="mr-2 h-4 w-4"
            />
            <span className="text-sm text-gray-600">
              I accept the{" "}
              <a href="/terms" className="text-blue-600 hover:underline">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg hover:opacity-90 transition font-medium"
          >
            Sign Up
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-6">
          By creating an account, you agree to receive verification updates & alerts from PlotSafe.
        </p>
      </div>
    </div>
  );
};

export default Signup;

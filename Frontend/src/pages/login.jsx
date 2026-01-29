import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "", role: "buyer" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [otpLogin, setOtpLogin] = useState(false);
  const [otp, setOtp] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: form.email, password: form.password }),
  });

  const data = await res.json();

  if (!res.ok) {
    setError(data.message);
    return;
  }

  // Save Token + User
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));

  redirectUser(data.user.role);
};


  const redirectUser = () => {
    if (form.role === "buyer") {
      window.location.href = "/public/dashboard";
    } else if (form.role === "dealer") {
      window.location.href = "/dealer/dashboard";
    } else {
      window.location.href = "/admin-panel";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Login</h2>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Role Selection */}
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="buyer">Buyer</option>
            <option value="dealer">Dealer</option>
            <option value="admin">Admin/Verifier</option>
          </select>

          {/* Email / Mobile */}
          <input
            type="text"
            name="email"
            placeholder="Email or Mobile"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          {/* Toggle between Password & OTP login */}
          {!otpLogin ? (
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg pr-10 focus:ring-2 focus:ring-blue-500"
                />
                <span
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <label className="flex items-center text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2"
                  />
                  Remember Me
                </label>
                <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="mt-2 w-full bg-gray-100 border text-gray-700 py-2 rounded-lg hover:bg-gray-200"
              >
                Send OTP
              </button>
            </div>
          )}

          {/* Toggle Login Mode */}
          <p
            className="text-sm text-center text-blue-600 cursor-pointer hover:underline"
            onClick={() => {
              setOtpLogin(!otpLogin);
              setError("");
            }}
          >
            {otpLogin ? "Login with Password" : "Login with OTP"}
          </p>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-2.5 rounded-lg hover:opacity-90 transition font-medium"
          >
            Login
          </button>
        </form>

        {/* Security Notice */}
        <p className="text-xs text-gray-500 text-center mt-6">
          🔐 Accounts lock after 3 failed attempts. Sessions auto-expire after inactivity.
        </p>
      </div>
    </div>
  );
};

export default Login;

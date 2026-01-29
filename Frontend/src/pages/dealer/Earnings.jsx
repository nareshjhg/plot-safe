// pages/dealer/Earnings.jsx
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";

const Earnings = () => {
  const [subscription, setSubscription] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchSubscription();
  }, []);

  // 🔹 Subscription API
  const fetchSubscription = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/subscription/my",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) throw new Error("Subscription API not found");

      const data = await res.json();
      setSubscription(data.subscription || null);
    } catch (err) {
      console.error("Subscription Error:", err);
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-green-700 mb-6">
          💰 Subscription Status
        </h1>

        {/* Subscription Info */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-3">My Subscription</h2>

          {!subscription ? (
            <p className="text-red-600 font-semibold">
              ❌ No Active Subscription
            </p>
          ) : (
            <>
              <p><b>Plan:</b> {subscription.planName}</p>
              <p><b>Price:</b> ₹{subscription.price}</p>
              <p>
                <b>Expiry:</b>{" "}
                {new Date(subscription.endDate).toLocaleDateString()}
              </p>
              <span className="inline-block mt-2 px-3 py-1 rounded bg-green-100 text-green-700">
                Active
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Earnings;

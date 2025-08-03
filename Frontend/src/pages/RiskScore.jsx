import React, { useState } from "react";

// Fake scoring logic for demonstration
const calculateRiskScore = (colony, dealer) => {
  if (!colony || !dealer) return null;

  const normalizedColony = colony.toLowerCase();
  const normalizedDealer = dealer.toLowerCase();

  let baseScore = 50;

  if (normalizedColony.includes("illegal")) baseScore += 30;
  if (normalizedColony.includes("approved")) baseScore -= 30;
  if (normalizedDealer.includes("blacklisted")) baseScore += 40;
  if (normalizedDealer.includes("trusted")) baseScore -= 20;

  if (baseScore > 100) baseScore = 100;
  if (baseScore < 0) baseScore = 0;

  return baseScore;
};

const RiskScore = () => {
  const [colony, setColony] = useState("");
  const [dealer, setDealer] = useState("");
  const [score, setScore] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const risk = calculateRiskScore(colony, dealer);
    setScore(risk);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">AI Risk Score</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 mb-8">
        <div>
          <label htmlFor="colony" className="block font-semibold mb-1">
            Colony/Area Name:
          </label>
          <input
            type="text"
            id="colony"
            value={colony}
            onChange={(e) => setColony(e.target.value)}
            placeholder="e.g., Greenfield Colony"
            className="w-full border border-gray-300 rounded px-4 py-3"
            required
          />
        </div>
        <div>
          <label htmlFor="dealer" className="block font-semibold mb-1">
            Dealer Name:
          </label>
          <input
            type="text"
            id="dealer"
            value={dealer}
            onChange={(e) => setDealer(e.target.value)}
            placeholder="e.g., Suresh Properties"
            className="w-full border border-gray-300 rounded px-4 py-3"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-semibold"
        >
          Get Risk Score
        </button>
      </form>

      {score !== null && (
        <div
          className={`rounded p-6 text-lg font-semibold ${
            score < 30
              ? "bg-green-100 text-green-800"
              : score < 70
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          🧠 Risk Score: {score} / 100 —{" "}
          {score < 30
            ? "Low Risk"
            : score < 70
            ? "Moderate Risk"
            : "High Risk"}
        </div>
      )}
    </div>
  );
};

export default RiskScore;

import React, { useState } from "react";

const sampleDealers = [
  {
    id: 1,
    name: "Ramesh Builders",
    verified: true,
    rating: 4.5,
    reviews: 25,
  },
  {
    id: 2,
    name: "Suresh Property Dealer",
    verified: false,
    rating: 3.8,
    reviews: 10,
  },
  {
    id: 3,
    name: "Anil Realty",
    verified: true,
    rating: 4.9,
    reviews: 40,
  },
];

const DealerCheck = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDealers, setFilteredDealers] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = sampleDealers.filter((dealer) =>
      dealer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDealers(filtered);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Dealer Check</h2>
      <form onSubmit={handleSearch} className="mb-6">
        <input
          type="text"
          placeholder="Search dealer by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="mt-3 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {filteredDealers.length === 0 && searchTerm && (
        <p className="text-gray-600">No dealers found for "{searchTerm}"</p>
      )}

      <ul>
        {filteredDealers.map((dealer) => (
          <li
            key={dealer.id}
            className="border border-gray-200 rounded p-4 mb-4 flex items-center justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold">{dealer.name}</h3>
              <p className="text-sm text-gray-600">
                Ratings: {dealer.rating} ⭐ ({dealer.reviews} reviews)
              </p>
            </div>
            {dealer.verified && (
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                Verified Dealer
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DealerCheck;

import React from 'react';
import DealerSidebar from '../../components/DealerSidebar';

const MyListings = () => {
  const listings = [
    {
      id: 1,
      title: '2BHK Flat in Sector 21',
      colony: 'Green Valley',
      status: 'Approved',
      date: '2025-07-20',
    },
    {
      id: 2,
      title: 'Plot in New Town',
      colony: 'Unapproved Area',
      status: 'Pending',
      date: '2025-07-10',
    },
  ];

  return (
    <div className="flex">
      <DealerSidebar />
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-green-700">My Listings</h1>

        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase">
              <tr>
                <th className="px-6 py-3">Title</th>
                <th className="px-6 py-3">Colony</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Date Added</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {listings.map((listing) => (
                <tr key={listing.id} className="border-b">
                  <td className="px-6 py-4">{listing.title}</td>
                  <td className="px-6 py-4">{listing.colony}</td>
                  <td className={`px-6 py-4 font-medium ${listing.status === 'Approved' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {listing.status}
                  </td>
                  <td className="px-6 py-4">{listing.date}</td>
                  <td className="px-6 py-4 space-x-2">
                    <button className="text-blue-600 hover:underline">Edit</button>
                    <button className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyListings;

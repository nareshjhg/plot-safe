import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';

const AddColonyForm = () => {
  const [name, setName] = useState('');
  const [district, setDistrict] = useState('');
  const [colonyType, setColonyType] = useState('Residential');
  const [source, setSource] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Approved');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newColony = {
      name,
      district,
      colonyType,
      source,
      description,
      status
    };

    console.log('New Colony Data:', newColony);
    // You can call your API or state update function here

    // Reset form
    setName('');
    setDistrict('');
    setColonyType('Residential');
    setSource('');
    setDescription('');
    setStatus('Approved');
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-8 bg-gray-50 min-h-screen">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Add Colony</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Colony Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border p-2 rounded"
            />

            <input
              type="text"
              placeholder="District"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="border p-2 rounded"
            />

            <select
              value={colonyType}
              onChange={(e) => setColonyType(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Mixed">Mixed</option>
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="Approved">Approved</option>
              <option value="Not Approved">Not Approved</option>
            </select>

            <input
              type="url"
              placeholder="Source Link (Govt Website, PDF, etc.)"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="border p-2 rounded col-span-1 md:col-span-2"
            />

            <textarea
              placeholder="Description or Notes"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 rounded col-span-1 md:col-span-2"
              rows={3}
            />
          </div>

          <button
            type="submit"
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Add Colony
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddColonyForm;

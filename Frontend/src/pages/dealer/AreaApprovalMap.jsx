import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import DealerSidebar from '../../components/DealerSidebar';
import 'leaflet/dist/leaflet.css';

// Sample colony data with lat,lng and status
const colonies = [
  { name: 'Green Valley', status: 'Approved', position: [28.423, 77.315] },
  { name: 'Sunrise Colony', status: 'Illegal', position: [28.418, 77.310] },
  { name: 'Rosewood Residency', status: 'Approved', position: [28.430, 77.320] },
  { name: 'Shree Nagar', status: 'Illegal', position: [28.425, 77.305] },
];

const AreaApprovalMap = () => {
  return (
    <div className="flex">
      <DealerSidebar />
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-4 text-green-700">Area Approval Map</h1>
        <p className="text-gray-600 mb-6">View map of approved and illegal colonies.</p>

        <MapContainer center={[28.423, 77.315]} zoom={13} className="leaflet-container">
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {colonies.map(({ name, status, position }, idx) => (
            <CircleMarker
              key={idx}
              center={position}
              radius={10}
              color={status === 'Approved' ? 'green' : 'red'}
              fillOpacity={0.5}
            >
              <Popup>
                <div>
                  <strong>{name}</strong>
                  <br />
                  Status: <span className={status === 'Approved' ? 'text-green-700' : 'text-red-700'}>{status}</span>
                </div>
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default AreaApprovalMap;

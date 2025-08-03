// ColonyMap.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const colonyData = [
  {
    name: "Green Valley",
    status: "Approved",
    position: [28.423, 77.315]
  },
  {
    name: "Sunrise Colony",
    status: "Not Approved",
    position: [28.418, 77.310]
  }
];

const ColonyMap = () => {
  return (
    <div className="h-[80vh] w-full rounded-lg overflow-hidden shadow-md">
      <MapContainer center={[28.421, 77.313]} zoom={15} scrollWheelZoom={true} className="h-full w-full">
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {colonyData.map((colony, idx) => (
          <Marker key={idx} position={colony.position}>
            <Popup>
              <strong>{colony.name}</strong><br />
              Status:{" "}
              <span className={colony.status === "Approved" ? "text-green-600" : "text-red-600"}>
                {colony.status}
              </span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ColonyMap;

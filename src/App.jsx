import { useState } from "react";
import MapComponent from "./MapComponent";

const locations = [
  {
      id: 1,
      name: "Location A",
      position: [25.281813, 51.523330],
      description: "This is Location A in Doha. Here show detials for this location.",
  },
  {
      id: 2,
      name: "Location B",
      position: [24.7136, 46.6753],
      description: "This is Location B in Riyadh. Here show detials for this location.",
  },
  {
      id: 3,
      name: "Location C",
      position: [30.0444, 31.2357],
      description: "This is Location C in Cairo. Here show detials for this location.",
  },
  {
      id: 4,
      name: "Location D",
      position: [15.596457, 32.532431],
      description: "This is Location C in Khartoum. Here show detials for this location.",
  },
];

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="flex md:flex-row flex-col h-screen">
      {/* القائمة اليسرى */}
      <div className="bg-white shadow-md p-4 w-full md:w-1/7 overflow-y-auto">
        <h2 className="mb-4 font-bold text-gray-800 text-xl">Locations</h2>
        {locations.map((loc) => (
          <button
            key={loc.id}
            className={`block w-full text-left px-4 py-2 mb-2 rounded hover:bg-blue-100 transition cursor-pointer ${selectedLocation?.id === loc.id ? "bg-blue-50 font-semibold" : ""
              }`}
            onClick={() => setSelectedLocation(loc)}
          >
            {loc.name}
          </button>
        ))}
      </div>

      {/* الخريطة في المنتصف */}
      <div className="relative flex-1 bg-gray-200">
        <MapComponent
          locations={locations}
          selectedLocation={selectedLocation}
        />
      </div>

      {/* معلومات الموقع في اليمين */}
      <div className="bg-white shadow-lg p-6 border-gray-300 border-l w-full md:w-1/5 overflow-y-auto">
        {selectedLocation ? (
          <>
            <h3 className="font-bold text-gray-800 text-xl">{selectedLocation.name}</h3>
            <p className="mt-2 text-gray-600 text-sm">{selectedLocation.description}</p>
          </>
        ) : (
          <p className="text-gray-400 italic">Select a location to see details</p>
        )}
      </div>
    </div>
  );
}

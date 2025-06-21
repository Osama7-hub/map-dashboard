import { useState } from "react";
import MapComponent from "./components/MapComponent";
import LeftSidebar from "./components/LeftSidebar";
import LocationDetails from "./components/LocationDetails";
import Navbar from "./components/Navbar";

const locations = [
  {
    id: 1,
    name: "Location A",
    position: [25.281813, 51.523330],
    description: "Main location in Doha.",
    chartData: {
      visits: [100, 150, 200, 180, 130, 90, 170],
      resources: [45, 35, 20],
    },
    children: [
      {
        id: 11,
        name: "Sub A1",
        position: [25.284, 51.527],
        description: "Sub-location A1 in Doha.",
        chartData: {
          visits: [50, 80, 60, 70, 90, 40, 30],
          resources: [30, 40, 30],
        }
      },
      {
        id: 12,
        name: "Sub A2",
        position: [25.276, 51.520],
        description: "Sub-location A2 in Doha.",
        chartData: {
          visits: [50, 80, 60, 70, 90, 40, 30],
          resources: [30, 40, 30],
        }
      },
      {
        id: 13,
        name: "Sub A3",
        position: [25.276, 51.520],
        description: "Sub-location A2 in Doha.",
        chartData: {
          visits: [50, 80, 60, 70, 90, 40, 30],
          resources: [30, 40, 30],
        }
      },
      {
        id: 14,
        name: "Sub A4",
        position: [25.276, 51.520],
        description: "Sub-location A2 in Doha.",
        chartData: {
          visits: [50, 80, 60, 70, 90, 40, 30],
          resources: [30, 40, 30],
        }
      },
      {
        id: 15,
        name: "Sub A5",
        position: [25.276, 51.520],
        description: "Sub-location A2 in Doha.",
        chartData: {
          visits: [50, 80, 60, 70, 90, 40, 30],
          resources: [30, 40, 30],
        }
      },
      {
        id: 16,
        name: "Sub A6",
        position: [25.276, 51.520],
        description: "Sub-location A2 in Doha.",
        chartData: {
          visits: [50, 80, 60, 70, 90, 40, 30],
          resources: [30, 40, 30],
        }
      },
    ],
  },
  {
    id: 2,
    name: "Location B",
    position: [24.7136, 46.6753],
    description: "This is Location B in Riyadh. Here show detials for this location.",
    chartData: {
      visits: [100, 150, 200, 180, 130, 90, 170],
      resources: [45, 35, 20],
    },
    children: [
      {
        id: 21,
        name: "Sub B1",
        position: [24.7136, 46.6753],
        description: "Sub-location B1 in Doha.",
        chartData: {
          visits: [100, 150, 200, 180, 130, 90, 170],
          resources: [45, 35, 20],
        },
      },
      {
        id: 22,
        name: "Sub B2",
        position: [24.7136, 46.6753],
        description: "Sub-location B2 in Doha.",
        chartData: {
          visits: [100, 150, 200, 180, 130, 90, 170],
          resources: [45, 35, 20],
        },
      },
      {
        id: 23,
        name: "Sub B3",
        position: [24.7136, 46.6753],
        description: "Sub-location B2 in Doha.",
        chartData: {
          visits: [100, 150, 200, 180, 130, 90, 170],
          resources: [45, 35, 20],
        },
      },
      {
        id: 24,
        name: "Sub B4",
        position: [24.7136, 46.6753],
        description: "Sub-location B2 in Doha.",
        chartData: {
          visits: [100, 150, 200, 180, 130, 90, 170],
          resources: [45, 35, 20],
        },
      },
      {
        id: 25,
        name: "Sub B5",
        position: [24.7136, 46.6753],
        description: "Sub-location B2 in Doha.",
        chartData: {
          visits: [100, 150, 200, 180, 130, 90, 170],
          resources: [45, 35, 20],
        },
      },
      {
        id: 26,
        name: "Sub B6",
        position: [24.7136, 46.6753],
        description: "Sub-location B2 in Doha.",
        chartData: {
          visits: [100, 150, 200, 180, 130, 90, 170],
          resources: [45, 35, 20],
        },
      },
    ],
  },
  {
    id: 3,
    name: "Location C",
    position: [30.0444, 31.2357],
    description: "This is Location C in Cairo. Here show detials for this location.",
    chartData: {
      visits: [100, 150, 200, 180, 130, 90, 170],
      resources: [45, 35, 20],
    },
    children: [
      {
        id: 31,
        name: "Sub C1",
        position: [30.0444, 31.2357],
        description: "Sub-location C1 in Doha.",
        chartData: {
          visits: [100, 150, 200, 180, 130, 90, 170],
          resources: [45, 35, 20],
        },
      },
      {
        id: 32,
        name: "Sub C2",
        position: [30.0444, 31.2357],
        description: "Sub-location C2 in Doha.",
        chartData: {
          visits: [100, 150, 200, 180, 130, 90, 170],
          resources: [45, 35, 20],
        },
      },
      {
        id: 23,
        name: "Sub C3",
        position: [24.7136, 46.6753],
        description: "Sub-location C2 in Doha.",
        chartData: {
          visits: [100, 150, 200, 180, 130, 90, 170],
          resources: [45, 35, 20],
        },
      },
      {
        id: 24,
        name: "Sub C4",
        position: [24.7136, 46.6753],
        description: "Sub-location C2 in Doha.",
        chartData: {
          visits: [100, 150, 200, 180, 130, 90, 170],
          resources: [45, 35, 20],
        },
      },
      {
        id: 25,
        name: "Sub C5",
        position: [24.7136, 46.6753],
        description: "Sub-location C2 in Doha.",
        chartData: {
          visits: [100, 150, 200, 180, 130, 90, 170],
          resources: [45, 35, 20],
        },
      },
      {
        id: 26,
        name: "Sub C6",
        position: [24.7136, 46.6753],
        description: "Sub-location C2 in Doha.",
        chartData: {
          visits: [100, 150, 200, 180, 130, 90, 170],
          resources: [45, 35, 20],
        },
      },

    ],
  },
  {
    id: 4,
    name: "Location D",
    position: [15.596457, 32.532431],
    description: "This is Location C in Khartoum. Here show detials for this location.",
    chartData: {
      visits: [100, 150, 200, 180, 130, 90, 170],
      resources: [45, 35, 20],
    },
    children: [
      {
        id: 41,
        name: "Sub D1",
        position: [15.596457, 32.532431],
        description: "Sub-location D1 in Doha.",
        chartData: {
          visits: [100, 150, 200, 180, 130, 90, 170],
          resources: [45, 35, 20],
        },
      },
      {
        id: 42,
        name: "Sub D2",
        position: [15.596457, 32.532431],
        description: "Sub-location D2 in Doha.",
        chartData: {
          visits: [100, 150, 200, 180, 130, 90, 170],
          resources: [45, 35, 20],
        },
      },
      {
        id: 43,
        name: "Sub D3",
        position: [15.596457, 32.532431],
        description: "Sub-location D2 in Doha.",
        chartData: {
          visits: [100, 150, 200, 180, 130, 90, 170],
          resources: [45, 35, 20],
        },
      },
      {
        id: 44,
        name: "Sub D4",
        position: [15.596457, 32.532431],
        description: "Sub-location D2 in Doha.",
        chartData: {
          visits: [100, 150, 200, 180, 130, 90, 170],
          resources: [45, 35, 20],
        },
      },
      {
        id: 45,
        name: "Sub D5",
        position: [15.596457, 32.532431],
        description: "Sub-location D2 in Doha.",
        chartData: {
          visits: [100, 150, 200, 180, 130, 90, 170],
          resources: [45, 35, 20],
        },
      },
      {
        id: 46,
        name: "Sub D6",
        position: [15.596457, 32.532431],
        description: "Sub-location D2 in Doha.",
        chartData: {
          visits: [100, 150, 200, 180, 130, 90, 170],
          resources: [45, 35, 20],
        },
      },
    ],
  },
];

export default function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <>
      <Navbar />

      {/* ✅ استخدام Grid دائمًا، لكن الأعمدة تتغير حسب حجم الشاشة */}
      <div className="grid grid-cols-12 h-[calc(100vh-64px)] overflow-hidden">
        
        {/* ✅ Sidebar */}
        <div className="col-span-12 md:col-span-2 overflow-y-auto">
          <LeftSidebar
            locations={locations}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        </div>

        {/* ✅ Map */}
        <div className="col-span-12 md:col-span-8 h-full min-h-[50vh]">
          <MapComponent
            locations={locations}
            selectedLocation={selectedLocation}
          />
        </div>

        {/* ✅ Location Details */}
        <div className="col-span-12 md:col-span-2 max-h-[30vh] md:max-h-none overflow-y-auto">
          <LocationDetails selectedLocation={selectedLocation} />
        </div>
      </div>
    </>
  );
}

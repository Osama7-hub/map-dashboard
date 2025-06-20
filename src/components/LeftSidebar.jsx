import { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import SubMenu from "./SubMenu";

export default function LeftSidebar({locations, selectedLocation, setSelectedLocation}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedLocation, setExpandedLocation] = useState(null);
  const subMenuRef = useRef();

  const filteredLocations = locations.filter((loc) =>
    loc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(e) {
      if (subMenuRef.current && !subMenuRef.current.contains(e.target)) {
        setExpandedLocation(null);
      }
    }

    if (expandedLocation) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expandedLocation]);

  return (
    <div className="z-40 flex flex-col col-span-12 md:col-span-2 bg-[#1f1f2c] p-4 overflow-hidden text-white">
      <div className="mb-6">
        <h2 className="font-semibold text-gray-100 text-lg tracking-wide">
          📍 Locations
        </h2>
      </div>

      <input
        type="text"
        placeholder="Search location..."
        className="bg-[#2a2a3a] mb-4 px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm placeholder-gray-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="z-40 flex-1 space-y-2 overflow-y-auto">
        {filteredLocations.map((loc) => {
          const isExpanded = expandedLocation?.id === loc.id;
          const hasChildren = loc.children && loc.children.length > 0;

          return (
            <div key={loc.id} className="relative">
              <div
                onClick={() => {
                  if (isExpanded) {
                    setExpandedLocation(null);
                  } else {
                    setExpandedLocation(loc);
                    setSelectedLocation(null);
                  }
                }}
                className={`px-3 py-2 rounded-md cursor-pointer transition-colors duration-200 flex items-center justify-between ${
                  isExpanded
                    ? "bg-[#2f2f42] text-white font-medium"
                    : "hover:bg-[#2f2f42] text-gray-300"
                }`}
              >
                {loc.name}
                {hasChildren && (
                  <span
                    className={`ml-2 transform transition-transform duration-300 ${
                      isExpanded ? "rotate-90" : "rotate-0"
                    }`}
                  >
                    ▸
                  </span>
                )}
              </div>
            </div>
          );
        })}

        {/* قائمة المواقع الفرعية */}
        <AnimatePresence>
          {expandedLocation?.children?.length > 0 && (
            <SubMenu
              expandedLocation={expandedLocation}
              setExpandedLocation={setExpandedLocation}
              setSelectedLocation={setSelectedLocation}
              selectedLocation={selectedLocation}
              subMenuRef={subMenuRef}
            />
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
}

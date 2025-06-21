import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SubMenu from "./SubMenu";

export default function LeftSidebar({ locations, selectedLocation, setSelectedLocation, setSidebarOpen }) {
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
    <div className="z-40 flex flex-col bg-[#1f1f2c] p-3 w-full h-full text-white">
      <div className="mb-4 px-2">
        <h2 className="font-semibold text-gray-100 text-lg">📍 Locations</h2>
      </div>

      <input
        type="text"
        placeholder="Search location..."
        className="bg-[#2a2a3a] mx-2 mb-4 px-3 py-2 border border-gray-700 rounded-md text-white text-sm placeholder-gray-400"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="flex-1 space-y-1 px-2 overflow-y-auto">
        {filteredLocations.map((loc) => {
          const isExpanded = expandedLocation?.id === loc.id;
          const hasChildren = loc.children && loc.children.length > 0;

          return (
            <li key={loc.id} className="relative">
              {/* زر الموقع */}
              <div
                onClick={(e) => {
                  e.stopPropagation(); // ✅ هذا يمنع الضغط من الوصول للخلفية
                  if (isExpanded) {
                    setExpandedLocation(null);
                  } else {
                    setExpandedLocation(loc);
                    setSelectedLocation(null);
                  }
                }}
                className={`px-3 py-2 rounded-md cursor-pointer transition flex justify-between items-center ${
                  isExpanded ? "bg-[#2f2f42]" : "hover:bg-[#2f2f42]"
                }`}
              >
                {loc.name}
                {hasChildren && (
                  <span className={`transform transition-transform ${isExpanded ? "rotate-90" : ""}`}>
                    ▸
                  </span>
                )}
              </div>

              {/* ✅ عرض القائمة الفرعية في الشاشات الصغيرة فقط */}
              {hasChildren && (
                <div className="md:hidden block">
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-1 py-2 pl-4"
                      >
                        {loc.children.map((child) => (
                          <li
                            key={child.id}
                            className={`px-3 py-2 rounded-md text-sm cursor-pointer hover:bg-blue-600 ${
                              selectedLocation?.id === child.id
                                ? "bg-blue-800 text-white"
                                : "text-gray-300"
                            }`}
                            onClick={() => {
                              setSelectedLocation(child);
                              setExpandedLocation(null);
                              setSidebarOpen(false);
                            }}
                          >
                            {child.name}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* ✅ القائمة الفرعية المنفصلة - تظهر فقط في الشاشات الكبيرة */}
      <div className="hidden md:block">
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
      </div>
    </div>
  );
}

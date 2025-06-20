import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function SubMenu({
  expandedLocation,
  setExpandedLocation,
  setSelectedLocation,
  selectedLocation,
  subMenuRef
}) {

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
    <motion.div
      ref={subMenuRef}
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -30, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="top-15 left-[16.9%] z-20 absolute bg-[#FAFBFD] shadow-2xl border border-gray-200 rounded-sm w-60 h-auto max-h-[80vh] text-gray-800"
    >
      <ul className="space-y-2 text-center">
        {expandedLocation?.children.map((sub) => (
          <li
            key={sub.id}
            onClick={() => {
              setSelectedLocation(sub);
              setExpandedLocation(null);
            }}
            className={`cursor-pointer px-3 py-5  rounded-md text-sm transition duration-200 hover:bg-blue-100 border-b border-gray-100  ${
              selectedLocation?.id === sub.id
                ? "bg-blue-200 text-blue-900"
                : "text-gray-600"
            }`}
          >
            {/* ▸ {sub.name} */}
             {sub.name}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

import { useState, useRef, useEffect } from "react";
import { Bell, User, Settings, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <header className="flex justify-between items-center bg-[#1f1f2c] shadow-md px-6 py-3 text-white">
      {/* شعار أو عنوان */}
      <div className="font-semibold text-lg tracking-wide">🛰️ Analytics Dashboard</div>

      {/* قائمة أيقونات */}
      <nav className="flex items-center gap-6 text-gray-300">
        {/* <button className="hover:text-white transition">
          <Bell size={20} />
        </button>
        <button className="hover:text-white transition">
          <Settings size={20} />
        </button> */}
        {/* المستخدم + القائمة */}
        <div className="relative" ref={menuRef}>
          <div
            onClick={() => setShowMenu((prev) => !prev)}
            className="flex justify-center items-center bg-gray-500 hover:opacity-90 rounded-full w-8 h-8 font-bold text-sm cursor-pointer"
          >
            <User size={18} />
          </div>

          {/* القائمة المنسدلة */}
          <AnimatePresence>
            {showMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="right-0 absolute bg-white shadow-lg mt-2 border border-gray-200 rounded-md w-48 overflow-hidden text-gray-800"
              >
                <ul className="text-sm">
                  <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">👤 Profile</li>
                  <li className="hover:bg-gray-100 px-4 py-2 cursor-pointer">⚙️ Settings</li>
                  <li className="flex items-center gap-1 hover:bg-gray-100 px-4 py-2 text-red-600 cursor-pointer">
                    <LogOut size={16} />
                    Logout
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}

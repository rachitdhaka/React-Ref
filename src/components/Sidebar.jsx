import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ onClose }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-white h-full w-full border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="font-bold text-xl text-black">
          <Link to="/dashboard" className="font-ocr-large">React Hooks</Link>
        </h1>
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="lg:hidden text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4">
        <ul className="flex flex-col gap-2">
          <li
            className={`text-gray-700 hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-colors ${
              isActive("/useState") ? "bg-blue-100 text-blue-700 font-medium" : ""
            }`}
          >
            <Link to="/useState" className="block" onClick={onClose}>
              useState
            </Link>
          </li>
          <li
            className={`text-gray-700 hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-colors ${
              isActive("/useEffect") ? "bg-blue-100 text-blue-700 font-medium" : ""
            }`}
          >
            <Link to="/useEffect" className="block" onClick={onClose}>
              useEffect
            </Link>
          </li>
          <li className="text-gray-700 hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-colors">
            <a href="#" className="block">
              useRef
            </a>
          </li>
          <li className="text-gray-700 hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-colors">
            <a href="#" className="block">
              useCallback
            </a>
          </li>
          <li className="text-gray-700 hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-colors">
            <a href="#" className="block">
              useMemo
            </a>
          </li>
          <li className="text-gray-700 hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-colors">
            <a href="#" className="block">
              useContext
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

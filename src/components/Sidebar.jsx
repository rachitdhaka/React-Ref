import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-white h-screen w-64 p-4 border-r border-gray-200">
      <div>
        <h1 className="font-bold text-xl  text-black p-2 rounded">
          <Link to="/dashboard" className="font-ocr-large">React Hooks</Link>
        </h1>
      </div>

      <div className="h-full pl-3 ">
        <ul className="flex flex-col  h-screen   rounded  gap-2">
          <li
            className={`text-gray-700 hover:bg-gray-200 p-1 rounded cursor-pointer transition-colors ${
              isActive("/useState") ? "bg-blue-100 text-blue-700" : ""
            }`}
          >
            <Link to="/useState" className="block">
              - useState
            </Link>
          </li>
          <li
            className={`text-gray-700 hover:bg-gray-200 p-1 rounded cursor-pointer transition-colors ${
              isActive("/useState") ? "bg-blue-100 text-blue-700" : ""
            }`}
          >
            <Link to="/useEffect" className="block">
              - useEffect
            </Link>
          </li>
          <li className="text-gray-700 hover:bg-gray-200 p-1 rounded cursor-pointer transition-colors">
            <a href="#" className="block">
              - useRef
            </a>
          </li>
          <li className="text-gray-700 hover:bg-gray-200 p-1 rounded cursor-pointer transition-colors">
            <a href="#" className="block">
              - useCallBack
            </a>
          </li>
          <li className="text-gray-700 hover:bg-gray-200 p-1 rounded cursor-pointer transition-colors">
            <a href="#" className="block">
              - useMemo
            </a>
          </li>
          <li className="text-gray-700 hover:bg-gray-200 p-1 rounded cursor-pointer transition-colors">
            <a href="#" className="block">
              - useContext
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

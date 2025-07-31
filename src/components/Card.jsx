import React from "react";
import { Link, useLocation } from "react-router-dom";

const Card = ({ title, Def }) => {
  return (
    <div className="min-h-[200px] max-h-fit w-full border border-gray-300 rounded-lg shadow-lg bg-white flex flex-col hover:shadow-xl transition-shadow duration-200">
      {/* Header */}
      <div className="flex p-3 md:p-4 justify-between items-center">
        <h2 className="text-sm md:text-md font-bold font-ocr">{title}</h2>
        <h4 className="text-[10px] md:text-[12px] bg-[#EFF6FF] text-[#2563EB] max-w-fit px-2 py-1 rounded-full">
          Hooks
        </h4>
      </div>

      {/* Content */}
      <div className="flex p-3 md:p-4 flex-1">
        <p className="text-xs md:text-sm font-regular font-ocr-small text-[#4B5563] leading-relaxed">
          {Def}
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-start p-3 md:p-4 mt-auto">
        <Link
          to={`/${title}`}
          className="text-[#0EA5E9] hover:text-blue-700 hover:underline text-xs md:text-sm font-medium transition-colors duration-200"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default Card;

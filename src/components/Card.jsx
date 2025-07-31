import React from "react";
import { Link, useLocation } from "react-router-dom";
const Card = ({ title, Def }) => {
  return (
    <div className="min-h-[200px] max-h-fit w-sm border border-gray-300 rounded-lg shadow-lg bg-white flex flex-col ">


      <div className=" flex p-3 justify-between items-center">
        <h2 className="text-md font-bold font-ocr ">{title}</h2>
        <h4 className="text-[12px] bg-[#EFF6FF] text-[#2563EB] max-w-fit px-2 py-1 rounded-full"> Hooks </h4>
      </div>




      <div className="flex p-3">
        <p className="text-sm font-regular font-ocr-small text-[#4B5563] ">{Def}</p>
      </div>




      <div className="flex justify-start p-3 mt-auto">
        <Link
          to={`/${title}`}
          className="text-[#0EA5E9] hover:text-blue-700 hover:underline text-sm font-medium"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Card;

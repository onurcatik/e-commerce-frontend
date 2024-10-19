import React from "react";
import { FaReact, FaNodeJs, FaVuejs, FaPython, FaAws } from "react-icons/fa";

const Partners = () => {
  return (
    <div className="py-8 mt-24 bg-gradient-to-r from-gray-400 to-gray-500 dark:bg-gray-500 dark:bg-opacity-10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 place-items-center opacity-50">
          <FaReact className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] text-blue-500" />
          <FaNodeJs className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] text-green-500" />
          <FaVuejs className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] text-green-400" />
          <FaPython className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] text-yellow-500" />
          <FaAws className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] text-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default Partners;

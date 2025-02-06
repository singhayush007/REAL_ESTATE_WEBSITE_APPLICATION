import React from 'react';
import { BiMessageAltDetail } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { ImHome } from "react-icons/im";

const ToolsAndResources = () => {
  return (
    <div className="w-full h-[600px] relative flex flex-col items-center justify-center">
      {/* Background Image */}
      <img 
        src="https://hungaryphototours.com/wp-content/uploads/2015/09/View-from-Fishermens-Bastion-to-Hungarian-Parliament-6965-X3.jpg" 
        alt="View from Fishermen's Bastion to Hungarian Parliament" 
        className="w-full h-full object-cover brightness-25"
      />

      {/* Overlay Content */}
      <div className="absolute top-[20%] w-full text-center">
        <h1 className="text-white text-2xl sm:text-4xl font-bold whitespace-nowrap mb-6">
          Real Estate Tools and Resources
        </h1>

        {/* Icons Row with Labels & Descriptions */}
        <div className="flex justify-center gap-56 mt-2">
          {/* 1st Icon + Label + Description */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 flex justify-center items-center bg-yellow-500 rounded-full transition-all duration-300 group-hover:bg-yellow-600">
              <ImHome className="text-white text-3xl" />
            </div>
            <p className="text-white font-bold mt-2 text-lg transition-all duration-300 group-hover:scale-105">
              MORE LISTINGS
            </p>
            <p className="text-white text-sm text-center max-w-[220px] mt-1 opacity-80">
              Check up to 40% more houses for sale. See pictures of your new life at a new place. See maps, markets, etc.
            </p>
          </div>

          {/* 2nd Icon + Label + Description */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 flex justify-center items-center bg-yellow-500 rounded-full transition-all duration-300 group-hover:bg-yellow-600">
              <BiMessageAltDetail className="text-white text-3xl" />
            </div>
            <p className="text-white font-bold mt-2 text-lg transition-all duration-300 group-hover:scale-105">
              TOP-RATED AGENTS
            </p>
            <p className="text-white text-sm text-center max-w-[220px] mt-1 opacity-80">
              All our real estate agents are professionals in your neighbourhood, ready to help you find your new home.
            </p>
          </div>

          {/* 3rd Icon + Label + Description */}
          <div className="flex flex-col items-center group cursor-pointer">
            <div className="w-16 h-16 flex justify-center items-center bg-yellow-500 rounded-full transition-all duration-300 group-hover:bg-yellow-600">
              <FaRegStar className="text-white text-3xl" />
            </div>
            <p className="text-white font-bold mt-2 text-lg transition-all duration-300 group-hover:scale-105">
              HOME ESTIMATES
            </p>
            <p className="text-white text-sm text-center max-w-[220px] mt-1 opacity-80">
              Wanna know how much your new home will cost? See estimates for any neighbourhood and check prices for similar homes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsAndResources;






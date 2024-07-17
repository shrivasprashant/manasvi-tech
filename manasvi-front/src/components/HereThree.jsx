import React from "react";
import img1 from "../assets/Images/hero1.png";


const HereThree = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto">
        <div className="max-md:order-1 max-md:text-center">
          <h3 className="text-gray-800 md:text-3xl text-2xl md:leading-10">
            Prompt Delivery and Enjoyable Dining Experience.
          </h3>
          <p className="mt-4 text-sm text-gray-600">
            Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla
            officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad
            tempor ut reprehenderit.
          </p>
          <button
            type="button"
            className="px-5 py-2.5 mt-8 rounded text-sm outline-none tracking-wide bg-blue-600 text-white hover:bg-blue-700"
          >
            Explore
          </button>
        </div>
        <div className="md:h-[470px]">
          <img
            src={img1}
            className="w-full h-full md:object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HereThree;

// src/components/FrontPage.js
import React from "react";

import background from "../assets/Images/Footer.jpg";
import mlogo from "../assets/Images/manasvilogo.png";

const FrontPage = () => {
  return (
    <div
      className="md:min-h-screen h-60 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      
      <div className="text-white text-3xl font-bold flex justify-center items-center md:h-screen">
        <img src={mlogo} alt="Manasvi Technologies Logo" />
      </div>
    </div>
  );
};

export default FrontPage;

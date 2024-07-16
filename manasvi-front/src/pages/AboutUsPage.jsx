import React, { useState } from "react";
import backgroundImage from "../assets/Images/Footer.jpg";
import OurTeam from "../components/OurTeam";
import Marquee from "./../components/Marquee";

const AboutUsPage = () => {
  const [showMission, setShowMission] = useState(true);

  return (
    <div className="min-h-screen bg-cover bg-center">
      <div
        className="h-[40vh] p-4 flex justify-center items-center bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            About Us
          </h1>
          <nav className="mt-2 text-white">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span className="mx-2">→</span>
            <a href="/about" className="font-bold underline">
              About Us
            </a>
          </nav>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <h3 className="text-2xl font-bold mb-2">
              Welcome to Manasvi Technologies (OPC) Pvt. Ltd
            </h3>
            <p className="text-gray-700 mb-4 text-sm">
              Welcome to the heart of innovation, where every line of code we
              write is a step towards transforming dreams into digital
              realities. At Manasvi Technologies (OPC) Pvt. Ltd, we don't just
              craft websites, applications, and software, we sculpt experiences
              that resonate.
            </p>
            <p className="text-gray-700 mb-4 text-sm">
              Welcome to Manasvi Technologies (OPC) Pvt. Ltd, where the journey
              of transformation begins. Our journey began with a simple mission:
              to bridge the gap between technology and human connection. From
              the moment you step into our digital world, you embark on a
              journey beyond conventional boundaries. Our team of tech artisans
              thrives on challenges, turning complexities into elegant
              solutions. But we're more than just developers, we're dream
              weavers.
            </p>
            <p className="text-gray-700 mb-4 text-sm">
              From Website development to digital marketing strategies, we're
              your trusted companions on the road to success. But our journey
              doesn't end with deployment. We're here for the long haul,
              navigating the ever-changing landscape of technology alongside
              you. We provide not just solutions, but partnerships built on
              trust, integrity, and a shared vision for tomorrow.
            </p>

            <button className="bg-[#3c4785] text-white py-2 px-4 rounded-full hover:bg-[#2c3569] transition duration-300">
              Learn more
            </button>
          </div>
        </div>
        <div className="right-container w-full md:w-1/2 p-4 flex flex-col items-center justify-center ">
          <div className="bg-[#BDBDFA] p-16 rounded-md overflow-hidden">
            <div className="rounded-lg shadow-md overflow-hidden w-full max-h-[400px] animate-bounce">
              <img
                src="https://manasvitech.in/images/vision.jpg"
                alt="Manage your finances the easy way"
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 text-center w-full overflow-hidden py-4 ">
          <div
            className={`transition-transform duration-700 ease-in-out ${
              showMission ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              At MANASVI TECHNOLOGIES (OPC) PVT. LTD. our mission is to empower
              businesses with cutting-edge technology solutions that drive
              growth and innovation. Through expert web development, application
              creation, and strategic digital marketing, we strive to elevate
              your online presence and maximize your impact in the digital
              sphere. With a focus on creativity, efficiency, and results, we
              are committed to delivering exceptional value and helping you
              achieve your goals in the ever-evolving digital landscape.
            </p>
          </div>
          <div
            className={`transition-transform duration-700 ease-in-out ${
              showMission ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p className="text-gray-700 mb-4">
              At MANASVI TECHNOLOGIES (OPC) PVT. LTD. our vision is to be the
              beacon of innovation in the digital realm, revolutionizing
              businesses through bespoke web and application development, and
              strategic digital marketing solutions. We aspire to empower our
              clients with cutting-edge technology, driving their success and
              growth in the dynamic online landscape. With a relentless pursuit
              of excellence and a commitment to staying ahead of industry
              trends, we aim to be the catalyst for transformative change in the
              digital world.
            </p>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              className={`py-2 px-4 rounded-full transition duration-300 ${
                showMission ? "bg-[#3c4785] text-white" : "bg-gray-300"
              }`}
              onClick={() => setShowMission(true)}
            >
              Our Mission
            </button>
            <button
              className={`py-2 px-4 rounded-full transition duration-300 ${
                !showMission ? "bg-[#3c4785] text-white" : "bg-gray-300"
              }`}
              onClick={() => setShowMission(false)}
            >
              Our Vision
            </button>
          </div>
        </div>
      </div>
      <OurTeam />
      <Marquee />
    </div>
  );
};

export default AboutUsPage;

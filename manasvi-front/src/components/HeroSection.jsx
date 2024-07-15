import React from 'react';
import backgroundImage from '../assets/Images/Footer.jpg'; // Update this path

const HeroSection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white p-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
            <div className="mb-4">
              <button className="px-4 py-2 bg-[#13193c] rounded-full text-sm">About Us</button>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">Your personal finances, a few taps away.</h1>
            <p className="mb-6 text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <ul className="mb-6">
              <li className="mb-2"><span className="text-purple-500">●</span> Saving</li>
              <li className="mb-2"><span className="text-purple-500">●</span> Payments</li>
              <li className="mb-2"><span className="text-purple-500">●</span> Investing</li>
              <li className="mb-2"><span className="text-purple-500">●</span> Scheduling</li>
              <li><span className="text-purple-500">●</span> Tracking</li>
            </ul>
            <button className="px-4 py-2 bg-[#13193c] rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500">
              Learn More
            </button>
          </div>
          {/* Right Section */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <img src="https://via.placeholder.com/300x600" alt="Phone Mockup" className="w-72 lg:w-96" />
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-40 h-48 bg-white rounded-lg shadow-lg p-4 text-center">
                <h3 className="text-lg font-bold">30 days view</h3>
                <p className="text-purple-500 text-4xl font-extrabold mb-4">75%</p>
                <p className="text-gray-700">Savings</p>
              </div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-40 h-48 bg-white rounded-lg shadow-lg p-4 text-center">
                <h3 className="text-lg font-bold">30 days view</h3>
                <p className="text-purple-500 text-4xl font-extrabold mb-4">79%</p>
                <p className="text-gray-700">Investments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

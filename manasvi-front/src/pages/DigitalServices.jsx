import React from 'react';
import backgroundImage from '../assets/Images/Footer.jpg';
import ServicesPage from '../components/ServicesPage';


const DigitalServices = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" >
      <div className="h-[40vh] p-4 flex justify-center items-center" style={{ backgroundImage: `url(${backgroundImage})` }}> 
        <div className="container mx-auto text-center">
          <h1 className="text-4xl text-white font-bold">Digital Marketing</h1>
          <nav className="mt-2">
            <a href="/" className="text-white">Home</a>
            <span className="text-white mx-2">→</span>
            <a href="/services/digital" className="text-white font-bold underline">Digital Marketing</a>
          </nav>
        </div>
      </div>
      <div className="container mx-auto mt-8 flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl text-center font-semibold mb-4 py-2 px-20 bg-[#BDBDFA] rounded-lg">Digital Marketing</h2>
            <h3 className="text-2xl font-bold mb-2">Your personal Project, a few taps away.</h3>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <div className="flex flex-wrap mb-4">
              <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-xs font-bold mr-2">Web</span>
              <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-xs font-bold mr-2">Software</span>
              <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-xs font-bold mr-2">SMO</span>
              <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-xs font-bold mr-2">Ads</span>
              <span className="bg-purple-200 text-purple-800 py-1 px-3 rounded-full text-xs font-bold mr-2">SEO</span>
            </div>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <button className="bg-[#3c4785] text-white py-2 px-4 rounded-full">Learn more</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center bg-[#BDBDFA]">
          <img src="/path/to/your/image.png" alt="Manage your finances the easy way" className="rounded-lg shadow-md" />
        </div>
        
      </div>

      <ServicesPage />
    </div>
  );
};

export default DigitalServices;

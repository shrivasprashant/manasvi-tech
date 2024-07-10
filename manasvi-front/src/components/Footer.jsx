// src/components/Footer.js
import React from 'react';
import backgroundImage from "../assets/Images/Footer.jpg"; 

const Footer = () => {
  return (
    <div 
      className="bg-cover bg-no-repeat bg-center py-12" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Product</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline text-base">Employee database</a></li>
              <li><a href="#" className="hover:underline text-base">Payroll</a></li>
              <li><a href="#" className="hover:underline text-base">Absences</a></li>
              <li><a href="#" className="hover:underline text-base">Time tracking</a></li>
              <li><a href="#" className="hover:underline text-base">Shift planner</a></li>
              <li><a href="#" className="hover:underline text-base">Recruiting</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold">Information</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline text-base">FAQ</a></li>
              <li><a href="#" className="hover:underline text-base">Blog</a></li>
              <li><a href="#" className="hover:underline text-base">Support</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold">Company</h2>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:underline text-base">About us</a></li>
              <li><a href="#" className="hover:underline text-base">Careers</a></li>
              <li><a href="#" className="hover:underline text-base">Contact us</a></li>
              <li><a href="#" className="hover:underline text-base">Lift Media</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold">Subscribe</h2>
            <form className="mt-4">
              <div className="flex flex-col sm:flex-row items-center">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full sm:w-auto sm:flex-1 px-2 py-2 rounded-md text-gray-900"
                />
                <button className="mt-2 sm:mt-0 sm:ml-2 px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700 text-white">
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-sm md:text-base">
                Hello, we are Lift Media. Our goal is to translate the positive effects from ...
              </p>
            </form>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm md:text-base">
          <div className="flex justify-center space-x-8">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
          <p className="mt-4">
            <img src="path-to-logo.png" alt="Company Logo" className="mx-auto"/>
            <span>Manasvi Technologies (OPC) Pvt. Ltd.</span>
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-400">
              <img src="path-to-linkedin-icon.png" alt="LinkedIn"/>
            </a>
            <a href="#" className="hover:text-gray-400">
              <img src="path-to-twitter-icon.png" alt="Twitter"/>
            </a>
            <a href="#" className="hover:text-gray-400">
              <img src="path-to-facebook-icon.png" alt="Facebook"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

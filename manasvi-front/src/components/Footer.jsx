import React from "react";
import backgroundImage from "../assets/Images/Footer.jpg";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import mlogo from "../assets/Images/manasvilogo.png";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-12"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Product</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline text-base">
                  Employee database
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-base">
                  Payroll
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-base">
                  Absences
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-base">
                  Time tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-base">
                  Shift planner
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-base">
                  Recruiting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold">Information</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline text-base">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-base">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-base">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold">Company</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:underline text-base">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-base">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-base">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-base">
                  Lift Media
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold">Subscribe</h2>
            <form className="mt-4">
              <div className="flex flex-col md:flex-row items-center">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full md:flex-1 px-4 py-2 rounded-md text-gray-900 md:mr-2"
                />
                <button className="w-full md:w-auto mt-2 md:mt-0 px-4 py-2 bg-purple-600 rounded-md hover:bg-purple-700 text-white">
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-sm md:text-base">
                Hello, we are Lift Media. Our goal is to translate the positive effects from ...
              </p>
            </form>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-4 text-center text-sm text-white md:text-base space-y-4 md:space-y-0">
          <div className="flex justify-center md:justify-start">
            <img src={mlogo} className="h-6 md:h-12" alt="Company Logo" />
          </div>
          <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8">
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-white text-center text-sm md:text-base">
          <p>111B, 80 Feet Rd, above Bhagwan Ustad gulab jamu wala, Old Ashoka Garden, Ashoka Garden, Bhopal, Madhya Pradesh 462023</p>
          <p>203 Shagun Arcade, near Medanta Hospital, at Rashoma Square, Vijay Nagar, Indore</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

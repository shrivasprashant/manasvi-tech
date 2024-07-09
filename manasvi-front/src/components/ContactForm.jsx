import React from 'react';
import Contactimg from "../assets/Images/contact.png";

function ContactForm() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Background Image Overlay */}
      <img src={Contactimg} alt="Background" className="absolute mt-[40px] inset-0 w-[480px] h-[600] object-cover opacity-50" />
      
      {/* Contact Form Container */}
      <div className="relative flex items-center justify-center">
        <div className="bg-white p-8 rounded-tl-[80px] shadow-lg w-full max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
          <form className="space-y-4  rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="border border-gray-300 p-2 rounded w-full" />
              <input type="text" placeholder="Address" className="border border-gray-300 p-2 rounded w-full" />
              <input type="text" placeholder="Phone Number" className="border border-gray-300 p-2 rounded w-full" />
              <input type="email" placeholder="Email" className="border border-gray-300 p-2 rounded w-full" />
            </div>
            <textarea placeholder="Message" className="border border-gray-300 p-2 rounded w-full h-32"></textarea>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span>
                By sending this form I confirm that I have read and accept the 
                <a href="#" className="text-blue-500"> Privacy Policy</a>
              </span>
            </div>
            <button type="submit" className="w-full bg-purple-500 text-white p-2 rounded mt-4 hover:bg-purple-600">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { LuPhoneCall } from "react-icons/lu";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoMdPrint } from "react-icons/io";
import { BsFillSendFill } from "react-icons/bs";

const ContactR = () => {
  return (
    <div>
      <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-white rounded-lg py-6">
      <div className="grid lg:grid-cols-3 items-center">
        <div className="grid sm:grid-cols-2 gap-4 z-20 relative lg:left-16 max-lg:px-4">
          <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
            
            <SlLocationPin className="w-7 text-3xl fill-blue-600"/>
            <h4 className="text-gray-800 text-base font-bold mt-4">Visit office</h4>
            <p className="text-sm text-gray-600 mt-2">Prabhat Bhopal</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
          <LuPhoneCall className="w-7 text-3xl"/>
            <h4 className="text-gray-800 text-base font-bold mt-4">Call us</h4>
            <p className="text-sm text-gray-600 mt-2">+999999999</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
          <IoChatboxEllipsesOutline className="w-7 text-3xl fill-blue-600"/>
            <h4 className="text-gray-800 text-base font-bold mt-4">Chat to us</h4>
            <p className="text-sm text-gray-600 mt-2">huaaaaaaa.com</p>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg w-full h-44 p-4 text-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]">
          <IoMdPrint className="w-7 text-3xl fill-blue-600"/>
            <h4 className="text-gray-800 text-base font-bold mt-4">Fax</h4>
            <p className="text-sm text-gray-600 mt-2">+kaha miloge</p>
          </div>
        </div>

        <div className="lg:col-span-2 bg-[#091E55] rounded-lg sm:p-10 p-4 z-10 max-lg:-order-1 max-lg:mb-8">
          <h2 className="text-3xl text-white text-center font-bold mb-6">Contact us</h2>
          <form>
            <div className="max-w-md mx-auto space-y-3">
              <input type='text' placeholder='Name'
                className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none" />
              <input type='email' placeholder='Email'
                className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none" />
              <input type='email' placeholder='Phone No.'
                className="w-full bg-gray-100 rounded-lg py-3 px-6 text-sm outline-none" />
              <textarea placeholder='Message' rows="6"
                className="w-full bg-gray-100 rounded-lg px-6 text-sm pt-3 outline-none"></textarea>
              <button type='button'
                className="text-gray-800 w-full relative bg-[#7E22CE] hover:bg-yellow-500 font-semibold rounded-lg text-sm px-6 py-3 !mt-6">
                <BsFillSendFill className='mr-2 inline' fill='currentColors'/>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ContactR

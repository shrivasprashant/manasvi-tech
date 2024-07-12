import React from 'react'
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div className=''>
      <nav className=" p-4 fixed top-0 left-0 w-full bg-gray-800 z-10">
        <div className="container mx-auto flex justify-between items-center  filter drop-shadow-lg  ">
          <div className=""></div>
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white font-bold underline" : "text-white"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-white font-bold underline" : "text-white"
              }
            >
              About Us
            </NavLink>
            <div className="relative group">
              <button className="text-white focus:outline-none">
                Services
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-[#3c4785] text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <NavLink
                  to="/services/web"
                  className={({ isActive }) =>
                    isActive ? "block px-4 py-2 font-bold underline" : "block px-4 py-2"
                  }
                >
                  Web Development
                </NavLink>
                <NavLink
                  to="/services/digital"
                  className={({ isActive }) =>
                    isActive ? "block px-4 py-2 font-bold underline" : "block px-4 py-2"
                  }
                >
                  Digital Marketing
                </NavLink>
                <NavLink
                  to="services/app"
                  className={({ isActive }) =>
                    isActive ? "block px-4 py-2 font-bold underline" : "block px-4 py-2"
                  }
                >
                  App Development
                </NavLink>
                <NavLink
                  to="services/software"
                  className={({ isActive }) =>
                    isActive ? "block px-4 py-2 font-bold underline" : "block px-4 py-2"
                  }
                >
                  Software Development
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "text-white font-bold underline" : "text-white"
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "text-white font-bold underline" : "text-white"
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive ? "text-white font-bold underline" : "text-white"
              }
            >
              Team
            </NavLink>
          </div>
          <div className="hidden md:block space-x-4">
            <a href="tel:+8319056741" className="text-white">
              📞 8319056741
            </a>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-white font-bold underline" : "text-white"
              }
            >
              <button className="text-white focus:outline-none py-1 px-4 border border-gray-400 rounded-2xl">
                Contact Us
              </button>
            </NavLink>
          </div>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">☰</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
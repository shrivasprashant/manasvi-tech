import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import mlogo from "../assets/Images/manasvilogo.png";

const Header = () => {
  const [isBottomBarVisible, setBottomBarVisible] = useState(false);
  const [isServiceBarVisible, setServiceBarVisible] = useState(false);


  const toggleBottomBar = () => {
    setBottomBarVisible(!isBottomBarVisible);
  };

  const toggleServiceBar = () => {
    setServiceBarVisible(!isServiceBarVisible);
  };

  return (
    <div>
      <nav className="p-4 fixed top-0 left-0 w-full bg-gray-800 z-10">
        <div className="container mx-auto flex justify-between items-center filter drop-shadow-lg">
          <div>
            <img src={mlogo} alt="Manasvi Logo" className="h-10" />
          </div>
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
                    isActive
                      ? "block px-4 py-2 font-bold underline"
                      : "block px-4 py-2"
                  }
                >
                  Web Development
                </NavLink>
                <NavLink
                  to="/services/digital"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 font-bold underline"
                      : "block px-4 py-2"
                  }
                >
                  Digital Marketing
                </NavLink>
                <NavLink
                  to="/services/app"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 font-bold underline"
                      : "block px-4 py-2"
                  }
                >
                  App Development
                </NavLink>
                <NavLink
                  to="/services/software"
                  className={({ isActive }) =>
                    isActive
                      ? "block px-4 py-2 font-bold underline"
                      : "block px-4 py-2"
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
            <button
              onClick={toggleBottomBar}
              className="text-white focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Bottom Bar for Mobile */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-gray-800 z-20 transition-transform duration-500 transform ${
          isBottomBarVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="container mx-auto p-4 flex flex-col space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white font-bold underline" : "text-white"
            }
            onClick={toggleBottomBar}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-white font-bold underline" : "text-white"
            }
            onClick={toggleBottomBar}
          >
            About Us
          </NavLink>
          <div className="relative">
            <button onClick={toggleServiceBar} className="text-white focus:outline-none">Services</button>
            {isServiceBarVisible && (
              <div className="absolute left-0 mt-2 w-full bg-[#3c4785] text-white rounded-lg shadow-lg">
              <NavLink
                to="/services/web"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 font-bold underline"
                    : "block px-4 py-2"
                }
                onClick={toggleBottomBar}
              >
                Web Development
              </NavLink>
              <NavLink
                to="/services/digital"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 font-bold underline"
                    : "block px-4 py-2"
                }
                onClick={toggleBottomBar}
              >
                Digital Marketing
              </NavLink>
              <NavLink
                to="/services/app"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 font-bold underline"
                    : "block px-4 py-2"
                }
                onClick={toggleBottomBar}
              >
                App Development
              </NavLink>
              <NavLink
                to="/services/software"
                className={({ isActive }) =>
                  isActive
                    ? "block px-4 py-2 font-bold underline"
                    : "block px-4 py-2"
                }
                onClick={toggleBottomBar}
              >
                Software Development
              </NavLink>
            </div>
            )}
            
          </div>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "text-white font-bold underline" : "text-white"
            }
            onClick={toggleBottomBar}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-white font-bold underline" : "text-white"
            }
            onClick={toggleBottomBar}
          >
            Products
          </NavLink>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              isActive ? "text-white font-bold underline" : "text-white"
            }
            onClick={toggleBottomBar}
          >
            Team
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-white font-bold underline" : "text-white"
            }
            onClick={toggleBottomBar}
          >
            Contact Us
          </NavLink>
          <a href="tel:+8319056741" className="text-white">
            📞 8319056741
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

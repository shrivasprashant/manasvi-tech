import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import mlogo from "../assets/Images/manasvilogo.png";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  const [isBottomBarVisible, setBottomBarVisible] = useState(false);
  const [isServiceBarVisible, setServiceBarVisible] = useState(false);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const toggleBottomBar = () => {
    setBottomBarVisible(!isBottomBarVisible);
  };

  const toggleServiceBar = () => {
    setServiceBarVisible(!isServiceBarVisible);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setHeaderVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <div>
      <nav
        className={`p-4 fixed top-0 left-0 w-full z-10  transition-transform duration-300 ${
          isHeaderVisible
            ? "transform translate-y-0"
            : "transform -translate-y-full"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center filter drop-shadow-lg">
          <div>
            <img src={mlogo} alt="Manasvi Logo" className="h-6 md:h-10" />
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
              <button
                onClick={toggleServiceBar}
                className="text-white focus:outline-none"
              >
                Services
                <FaAngleDown className="inline-block ml-1" />
              </button>
              {isServiceBarVisible && (
                <div className="absolute -left-20 text-center leading-none mt-2 w-56 bg-[#3c4785] text-white rounded-lg shadow-lg transition-opacity duration-300">
                  <NavLink
                    to="/services/web"
                    onClick={toggleServiceBar}
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
                    onClick={toggleServiceBar}
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
                    onClick={toggleServiceBar}
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
                    onClick={toggleServiceBar}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 font-bold underline"
                        : "block px-4 py-2"
                    }
                  >
                    Software Development
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="https://manasviportfolio.online/"
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
        className={`fixed top-0 left-0 w-full h-screen backdrop-filter backdrop-blur-2xl  bg-[#040615] bg-opacity-80 z-20 transition-transform duration-500 transform ${
          isBottomBarVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto p-4 flex flex-col space-y-4">
          <div className="w-full h-20px  flex items-center justify-between">
            <div className=" h-full ">
              <p className="text-gray-300 text-xl">Menu</p>
            </div>
            <div onClick={toggleBottomBar} className=" h-full ">
              <p className="text-gray-300 text-xl">✖</p>
            </div>
          </div>
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
            <button
              onClick={toggleServiceBar}
              className="text-white focus:outline-none flex items-center"
            >
              Services <FaAngleDown />
            </button>
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
            8319056741 📞
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

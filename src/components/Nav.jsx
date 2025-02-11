import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.svg";

const Nav = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setProductOpen(false);
    setConnectOpen(false);
  };

  return (
<nav className="fixed top-0 left-0 w-full z-50 md:static md:z-auto flex items-center justify-between px-4 py-3">
{/* Left section: Logo + Product Name */}
      <div className="flex items-center">
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center h-10 w-auto"
        >
          <img src={logo} alt="Logo" className="h-8 w-auto" />
          <span className="ml-2 text-xl font-bold text-black">RouteCaster</span>
        </Link>
      </div>

      {/* Right section: Desktop Links */}
      <div className="relative">
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link
              to="/about"
              className="text-black hover:text-orange-500 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="text-black hover:text-orange-500 transition-colors"
            >
              Pricing
            </Link>
          </li>

          {/* Product dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <div className="flex items-center space-x-1 text-black hover:text-orange-500 transition-colors">
              <span>Product</span>
              <FaChevronDown className="text-sm" />
            </div>
            {/* Invisible bridging element to cover the gap */}
            <div className="absolute top-full left-0 w-full h-2" />
            <ul
              className={`absolute top-full left-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg transform origin-top transition-all duration-200 ${
                productOpen
                  ? "scale-y-100 opacity-100"
                  : "scale-y-0 opacity-0 pointer-events-none"
              }`}
            >
              <li>
                <Link
                  to="/features"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/roadmap"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Roadmap
                </Link>
              </li>
              <li>
                  <Link
                    to="/docs"
                    onClick={closeMobileMenu}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Docs
                  </Link>
                </li>
              <li>
                <Link
                  to="/support"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setConnectOpen(true)}
            onMouseLeave={() => setConnectOpen(false)}
          >
            <div className="flex items-center space-x-1 text-black hover:text-orange-500 transition-colors">
              <span>Connect</span>
              <FaChevronDown className="text-sm" />
            </div>
            {/* Invisible bridging element to cover the gap */}
            <div className="absolute top-full left-0 w-full h-2" />
            <ul
              className={`absolute top-full left-0 mt-2 w-36 bg-white text-black rounded-md shadow-lg transform origin-top transition-all duration-200 ${
                connectOpen
                  ? "scale-y-100 opacity-100"
                  : "scale-y-0 opacity-0 pointer-events-none"
              }`}
            >
              <li>
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/brand"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Brand Assets
                </Link>
              </li>
              <li>
                <Link
                  to="/press"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          <li>
            <Link
              to="/login"
              className="text-black hover:text-orange-500 transition-colors"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="bg-orange-500 text-white px-4 py-2 rounded-md transition-all hover:bg-orange-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Sign Up
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={toggleMobileMenu}
        >
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu with smooth fade/slide */}
        <div
          className={`absolute right-0 top-14 w-52 bg-white text-black shadow-md rounded-md z-50 overflow-hidden transform transition-all duration-300 ease-out ${
            isMobileOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="block hover:text-orange-500 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                onClick={closeMobileMenu}
                className="block hover:text-orange-500 transition-colors"
              >
                Pricing
              </Link>
            </li>

            {/* Mobile Product dropdown */}
            <li>
              <button
                type="button"
                onClick={() => setProductOpen(!productOpen)}
                className="flex items-center space-x-1 hover:text-orange-500 transition-colors"
              >
                <span>Product</span>
                <FaChevronDown className="text-sm" />
              </button>
              <ul
                className={`mt-2 bg-white text-black rounded-md shadow-md transition-all duration-200 overflow-hidden ${
                  productOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <li>
                  <Link
                    to="/features"
                    onClick={closeMobileMenu}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/roadmap"
                    onClick={closeMobileMenu}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link
                    to="/docs"
                    onClick={closeMobileMenu}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Docs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    onClick={closeMobileMenu}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </li>

            {/* Mobile Connect dropdown */}
            <li>
              <button
                type="button"
                onClick={() => setConnectOpen(!connectOpen)}
                className="flex items-center space-x-1 hover:text-orange-500 transition-colors"
              >
                <span>Connect</span>
                <FaChevronDown className="text-sm" />
              </button>
              <ul
                className={`mt-2 bg-white text-black rounded-md shadow-md transition-all duration-200 overflow-hidden ${
                  connectOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <li>
                  <Link
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    onClick={closeMobileMenu}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/brand"
                    onClick={closeMobileMenu}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Brand Assets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/press"
                    onClick={closeMobileMenu}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/login"
                onClick={closeMobileMenu}
                className="block hover:text-orange-500 transition-colors"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                onClick={closeMobileMenu}
                className="block bg-orange-500 text-white px-4 py-2 rounded-md transition-all hover:bg-orange-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

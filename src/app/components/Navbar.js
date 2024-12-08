'use client'; // Add this line at the top

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let dropdownTimeout; // To delay the closing of the dropdown

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout); // Cancel any closing timeout
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // Add a delay of 300ms before closing the dropdown
  };

  return (
    <div>
      <div className="flex flex-row justify-center items-center top-0 w-full bg-zinc-100 text-black relative z-10">
        <div className="container flex justify-between items-center p-0">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src="/assets/kls-rd-long.png"
              alt="Logo"
              style={{ width: '18em', height: 'auto' }}
            />
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            <Link href="/" passHref>
              <span className="hover:text-lime-500">Home</span>
            </Link>
            <Link href="/about" passHref>
              <span className="hover:text-lime-500">About Us</span>
            </Link>
            <Link href="/services" passHref>
              <span className="hover:text-lime-500">Services</span>
            </Link>

            {/* Packages Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:text-lime-500 focus:outline-none">
                Packages
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute bg-white shadow-md rounded-lg mt-2 w-48 z-50"
                  style={{ transition: 'opacity 0.3s ease-in-out' }}
                >
                  <Link href="/packages/cms">
                    <span className="block px-4 py-2 text-black hover:bg-lime-500 hover:text-white">
                      CMS Package
                    </span>
                  </Link>
                  <Link href="/packages/osp">
                    <span className="block px-4 py-2 text-black hover:bg-lime-500 hover:text-white">
                      Online Store Package
                    </span>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/our-work" passHref>
              <span className="hover:text-lime-500">Our Work</span>
            </Link>
            <Link href="/contact" passHref>
              <span className="hover:text-lime-500">Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

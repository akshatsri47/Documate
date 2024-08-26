import React from 'react';
import svg from '../assets/img.svg';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <div className="flex items-center">
          <img src={svg} alt="Rearticle Logo" className="h-10 w-auto" />
        </div>

        <nav className="flex items-center space-x-6 ml-auto">
          <a href="#about" className="text-gray-700 hover:text-gray-900 px-4 py-2 text-xl">
            About
          </a>
          <a href="#signup" className="bg-transparent border border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition duration-200">
            Sign Up
          </a>
          <a href="#signin" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
            Sign In
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

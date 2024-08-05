import React from 'react';

export default function Navbar() {
  return (
    <nav className='bg-gray-800 h-[70px]  py-4'>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
      <div className="flex items-start">
        <span className="text-white text-lg font-semibold">Searching App</span>
      </div>
      <div className="hidden md:block">
        <a href="#" className="text-gray-300 mx-4 hover:text-white">Home</a>
        <a href="#" className="text-gray-300 mx-4 hover:text-white">About</a>
        <a href="#" className="text-gray-300 mx-4 hover:text-white">Services</a>
        <a href="#" className="text-gray-300 mx-4 hover:text-white">Contact</a>
      </div>
    </div>
    </nav>
  );
}
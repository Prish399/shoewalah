import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Free Websites', href: '#' },
    { name: 'Domain Name', href: '#' },
    { name: 'Websites & Hosting', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            <a href="#">Website.com</a>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors duration-300">{link.name}</a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Log In</a>
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">Sign Up</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-blue-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-600 hover:text-blue-600 py-2 px-4 rounded-md transition-colors duration-300">{link.name}</a>
              ))}
              <hr className="my-2" />
              <a href="#" className="text-gray-600 hover:text-blue-600 py-2 px-4 rounded-md transition-colors duration-300">Log In</a>
              <a href="#" className="bg-blue-600 text-white text-center px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 mt-2">Sign Up</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
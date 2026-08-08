import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // close mobile menu
  };


  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-gray-800/50">
      <nav className="flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 py-4 text-white font-bold max-w-7xl mx-auto">

        {/* Logo */}
        <div className="text-2xl text-gray-100 font-extrabold tracking-wider">
          <a href="#" className="hover:text-teal-400 transition-colors">Shayaba</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-base lg:text-lg">
          <button onClick={() => handleScroll('home')} className="hover:text-teal-400 transition-colors cursor-pointer">About</button>
          <button onClick={() => handleScroll('skills')} className="hover:text-teal-400 transition-colors cursor-pointer">Skills</button>
          <button onClick={() => handleScroll('experience')} className="hover:text-teal-400 transition-colors cursor-pointer">Experience</button>
          <button onClick={() => handleScroll('projects')} className="hover:text-teal-400 transition-colors cursor-pointer">Projects</button>
          <button onClick={() => handleScroll('education')} className="hover:text-teal-400 transition-colors cursor-pointer">Education</button>
          <button onClick={() => handleScroll('contact')} className="hover:text-teal-400 transition-colors cursor-pointer">Contact</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-1 focus:outline-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-6 bg-black/95 backdrop-blur-lg border-b border-gray-800 text-white font-semibold text-base transition-all duration-300 shadow-2xl">
          <button onClick={() => handleScroll('home')} className="w-full py-2 hover:text-teal-400 transition-colors cursor-pointer">About</button>
          <button onClick={() => handleScroll('skills')} className="w-full py-2 hover:text-teal-400 transition-colors cursor-pointer">Skills</button>
          <button onClick={() => handleScroll('experience')} className="w-full py-2 hover:text-teal-400 transition-colors cursor-pointer">Experience</button>
          <button onClick={() => handleScroll('projects')} className="w-full py-2 hover:text-teal-400 transition-colors cursor-pointer">Projects</button>
          <button onClick={() => handleScroll('education')} className="w-full py-2 hover:text-teal-400 transition-colors cursor-pointer">Education</button>
          <button onClick={() => handleScroll('contact')} className="w-full py-2 hover:text-teal-400 transition-colors cursor-pointer">Contact</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

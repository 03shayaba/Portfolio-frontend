import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // close mobile menu
  };

  const navLinks = [
    { name: 'About', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-xl shadow-black/80 py-3'
          : 'bg-black/80 backdrop-blur-md border-b border-gray-800/40 py-4'
      }`}
    >
      <nav className="flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48 text-white font-bold max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wider">
          <a
            href="#"
            className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-transparent bg-clip-text hover:opacity-90 transition-all cursor-pointer"
          >
            Shayaba
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-base lg:text-lg">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="relative text-gray-200 hover:text-cyan-400 transition-colors duration-200 cursor-pointer py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800/60 focus:outline-none cursor-pointer transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <FiX size={26} className="text-cyan-400" /> : <FiMenu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-2 py-6 px-4 bg-slate-950/95 backdrop-blur-2xl border-b border-cyan-500/20 text-white font-semibold text-base transition-all duration-300 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="w-full py-2.5 rounded-lg hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-200 text-center cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

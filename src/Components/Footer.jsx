import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='text-white pt-8 pb-8 border-t border-gray-800/50 bg-black/60 backdrop-blur-md px-4'>
        <h2 className='text-center text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-transparent bg-clip-text'>Shayaba Bano</h2>
        <div className='flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-4 text-sm font-semibold text-gray-300'>
          <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className='hover:text-teal-400 transition-colors cursor-pointer'>About</button>
          <button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })} className='hover:text-teal-400 transition-colors cursor-pointer'>Skills</button>
          <button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })} className='hover:text-teal-400 transition-colors cursor-pointer'>Experience</button>
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className='hover:text-teal-400 transition-colors cursor-pointer'>Projects</button>
          <button onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' })} className='hover:text-teal-400 transition-colors cursor-pointer'>Education</button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className='hover:text-teal-400 transition-colors cursor-pointer'>Contact</button>
        </div>
        <div className='flex justify-center items-center mt-6 mb-4 gap-6'>
            <a href="https://linkedin.com/in/shayaba-bano-1863b32aa" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors" aria-label="LinkedIn Profile">
                <FaLinkedin size={28} />
            </a>
            <a href="https://github.com/03shayaba" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors" aria-label="GitHub Profile">
                <FaGithubSquare size={28} />
            </a>
        </div>
        <p className='text-xs text-center text-gray-400'>© 2025 Shayaba Bano. Every word and pixel reserved.</p>
    </footer>
  )
}

export default Footer
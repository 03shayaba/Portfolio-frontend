import React from 'react'

import black from '../assets/black.avif';
// import { FaNode } from "react-icons/fa";
// import { RiReactjsLine } from "react-icons/ri";
// import { SiMongodb } from "react-icons/si";
// import { SiExpress } from "react-icons/si";
import { useState, useEffect } from 'react';
import profile from '../assets/Profile.png';
const Home = () => {
  const cvLink = 'https://drive.google.com/file/d/1LMhFl73_frvnE6721Z8AF3e2fLXeYeLj/view?usp=sharing'
  const [text, setText] = useState('');
  const name = " I'm Shayaba Bano";
  const speed = 100; // typing/deleting speed (ms per letter)
  const delay = 100; // pause before deleting (ms)

  useEffect(() => {
    let index = 0;
    let deleting = false;

    const interval = setInterval(() => {
      if (!deleting) {
        // Typing forward
        if (index < name.length) {
          setText((prev) => prev + name.charAt(index));
          index++;
        } else {
          deleting = true; // start deleting after finishing
          setTimeout(() => { }, delay);
        }
      } else {
        // Deleting backward
        if (index > 0) {
          setText((prev) => prev.slice(0, -1));
          index--;
        } else {
          deleting = false; // start typing again
        }
      }
    }, speed);

    return () => clearInterval(interval); // cleanup
  }, []);

  const handleDownload = () => {
    window.open(cvLink, '_blank');
  }

  return (
    <div className='min-h-screen flex items-center justify-center pt-20 pb-12 sm:pt-24 sm:pb-16'>
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 text-gray-200 max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-14">
          {/* Left Content */}
          <div className='flex-1 max-w-2xl text-center md:text-start'>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold'>
              Hello<span className='bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-transparent bg-clip-text'>{text}|</span>
            </h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-1">
              MERN stack <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-transparent bg-clip-text">Developer</span>
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              & React Native <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-transparent bg-clip-text">ENTHUSIAST</span>
            </h1>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 text-transparent bg-clip-text leading-relaxed mt-3'>
              Building Scalable Applications & Automating Deployments
            </p>
            <p className='text-xs sm:text-sm md:text-base lg:text-lg font-normal text-gray-300 leading-relaxed mt-4'>
              I’m a MERN Stack Developer specializing in building modern, full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I focus on creating responsive, scalable, and user-friendly interfaces with React, backed by secure, efficient, and well-structured RESTful APIs on the server side.
            </p>
            <div className='flex justify-center items-center md:justify-start mt-6'>
              <button onClick={handleDownload} className='px-7 py-3 bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-teal-400/40 hover:scale-105 transition-all duration-300 cursor-pointer'>
                Download CV
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image Balanced alongside Text */}
          <div className='shrink-0 flex justify-center items-center'>
            <div className='relative group flex justify-center items-center'>
              {/* Soft Ambient Background Glow */}
              <div className='absolute -inset-2 bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-600 rounded-full blur-2xl opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse'></div>
              
              {/* Gradient Border Frame */}
              <div className='relative p-1.5 bg-gradient-to-tr from-cyan-400 via-teal-400 to-blue-500 rounded-full shadow-[0_0_30px_rgba(45,212,191,0.35)] group-hover:shadow-[0_0_50px_rgba(56,189,248,0.5)] transition-all duration-500'>
                <img
                  src={profile}
                  alt="Shayaba Bano"
                  className='w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full transition-transform duration-500 group-hover:scale-[1.02]'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
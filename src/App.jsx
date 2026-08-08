

import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import black from './assets/black.avif';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
const App = () => {
  return (
    <div className='bg-black text-white scroll-smooth overflow-x-hidden w-full min-h-screen'>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      
    </div>
  )
}

export default App

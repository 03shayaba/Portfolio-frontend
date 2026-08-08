import React from 'react'
import hanumant from '../assets/hanumant.png'
import exbg from '../assets/ex.avif'

const Experience = () => {
  return (
    <div className="pt-16 pb-16 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-white">
        <h1 className="text-center text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-transparent bg-clip-text">
          Experience
        </h1>

        <hr className="border-t-4 border-cyan-400 mx-auto w-24 sm:w-32 my-3 shadow-lg shadow-cyan-500/30" />

        <p className="text-center max-w-2xl mx-auto text-sm sm:text-base md:text-lg pb-2 text-gray-300">
          A showcase of my professional journey, beginning with my role as a MERN Stack Intern at Hanumant Technology Private Limited.
        </p>
      </div>

      {/* Experience Card */}
      <div
        className="max-w-4xl mx-auto border-2 border-cyan-500/80 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl shadow-cyan-500/25 mt-6 hover:scale-[1.01] transition-transform duration-300 bg-gray-950"
      >
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mb-5">
          <div className="w-16 h-16 sm:w-20 sm:h-20 border border-gray-700 bg-gray-900 flex justify-center items-center rounded-xl shrink-0">
            <img className="w-12 h-8 sm:w-16 sm:h-10 object-contain" src={hanumant} alt="Hanumant Technology" />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-transparent bg-clip-text">MERN Stack Intern</h2>
            <p className='text-gray-200 text-sm sm:text-base font-semibold'>Hanumant Technology Pvt. Ltd.</p>
            <p className='text-gray-400 text-xs sm:text-sm'>June 2025 - December 2025</p>
          </div>
        </div>

        {/* Description */}
        <div className="text-gray-300">
          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            Completed full-stack MERN projects including a Web-Based Code Editor and a Task Management Application, implementing features such as user authentication, CRUD operations, real-time updates, and responsive UI design. Built scalable backend APIs using Node.js and Express.js with MongoDB for data management, and developed dynamic frontend interfaces using React.js.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-5">
          <h3 className="mb-2 font-bold text-sm sm:text-base text-gray-200">Skills:</h3>

          <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-2.5 text-xs sm:text-sm font-medium">
            {[
              'HTML', 'CSS', 'JavaScript', 'React',
              'Bootstrap', 'Tailwind CSS', 'Git', 'GitHub',
              'Node.js', 'REST APIs', 'MongoDB', 'Express.js',
            ].map((skill, i) => (
              <div
                key={i}
                className="text-gray-200 hover:text-slate-950 border border-cyan-500/30 rounded-lg px-2.5 py-1 sm:px-3 sm:py-1.5 hover:bg-gradient-to-r hover:from-cyan-500 hover:via-teal-400 hover:to-blue-500 hover:font-extrabold transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience

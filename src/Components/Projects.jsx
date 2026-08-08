import React from 'react'
import pr1 from '../assets/pr1.png'
import pr2 from '../assets/pr2.png'
import pr3 from '../assets/pr3.png'
import { useState } from 'react'
import pr4 from '../assets/pr4.png'
import pr5 from '../assets/pr5.png'
import pr6 from '../assets/pr6.png'
import bg from '../assets/bg.avif'
const projectsData = [
       {
        id: 1,
        image: pr4,
        title: "Influtics Clone",
        description: "Developed an Influencer marketing platform clone using JavaScript, React, Tailwind CSS, Hooks and functional components that allows users to find and connect with influencers.",
        technologies: ["React", "CSS", "JavaScript", "Tailwind CSS", "Hooks"],
        link: "influtics-clone.netlify.app"
      
    }
    ,    {
        id: 2,
        image: pr5,
        title: "Web Code Editor",
        description: "The Web Code Editor is a full-stack application that allows users to write, edit, and manage code directly in the browser. It provides a modern development-like experience with real-time editing, authentication, and secure data storage.The application is built using React and Tailwind CSS on the frontend, powered by the Monaco Editor for an IDE-like coding interface. The backend is developed using Node.js, Express, and MongoDB, with secure authentication implemented using JWT and bcrypt.",
        technologies: ["React", "CSS", "JavaScript", "Tailwind CSS", "monaco-editor", "Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
        link: "codeeditor111.netlify.app"
    },
    {
        id: 3,
        image: pr6,
        title: "Task Manager",
        description: "The Task Manager Application is a full-stack web application that helps users create, update, manage, and track their projects and tasks efficiently. It is designed to improve productivity by allowing users to organize work, set priorities, and monitor progress in a simple and user-friendly interface.The application provides secure user authentication and personalized dashboards, ensuring that each user can manage only their own projects and tasks.",
        technologies: ["React", "Tailwind CSS", "JavaScript", "Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
        link: "task-manager-application.netlify.app"
    },
    {
        id: 4,
        image: pr1,
        title: "Weather App",
        description: "Developed a weather application using HTML , css , Javascript and OpenWeather API, allowing users to search for weather information by city.",
        technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
        link: "weather123-web.netlify.app"
    },
    {
        id: 5,
        image: pr2,
        title: "Proton Drive Clone",
        description: "Created a Proton Drive clone using HTML, CSS, and JavaScript that allows users to upload, delete, and organize files.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "proton-drive-4b33fc.netlify.app"
    },
    {
        id: 6,
        image: pr3,
        title: "Ecommerce Website",
        description: "Built an Ecommerce website using HTML, CSS, and JavaScript that allows users to browse products, add them to a cart, and proceed to checkout.",
        technologies: ["React", "CSS", "JavaScript", "Tailwind CSS", "Context API"],
        link: "forever-app-123.netlify.app"
    }
    


]


const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    return (
        <div className='text-white pt-16 pb-16 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto'>
            <h1 className='text-3xl sm:text-4xl text-center font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-transparent bg-clip-text'>My Projects</h1>
            <hr className='border-t-4 w-24 sm:w-32 mx-auto my-3 border-cyan-400 shadow-lg shadow-cyan-500/30' />
            <p className='text-gray-300 text-sm sm:text-base md:text-lg text-center mt-2 max-w-2xl mx-auto'>
                A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
            </p>
            
            {/* my Projects Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 pb-10 justify-items-center'>
                {projectsData.map((project) => (
                    <div 
                        key={project.id} 
                        onClick={() => setSelectedProject(project)} 
                        className='border-2 border-cyan-500/80 text-white rounded-2xl p-4 sm:p-5 bg-gray-950 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.02] transition-all duration-300 w-full max-w-sm flex flex-col justify-between cursor-pointer'
                    >
                        <div>
                            <img src={project.image} alt={project.title} className='w-full h-44 sm:h-48 object-cover rounded-lg mb-4' />
                            <h2 className='text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-transparent bg-clip-text'>{project.title}</h2>
                            <p className='text-gray-300 text-xs sm:text-sm mb-4 line-clamp-3'>{project.description}</p>
                        </div>

                        <div>
                            <h3 className='text-xs sm:text-sm font-semibold mb-2 text-gray-200'>Technologies Used:</h3>
                            <div className='flex flex-wrap gap-1.5 mb-4'>
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className='text-xs px-2.5 py-1 rounded-md bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 text-slate-950 font-extrabold shadow-sm'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className='flex justify-between items-center pt-2 border-t border-gray-800'>
                                <span className='text-xs text-teal-400 font-semibold'>Click for details</span>
                                <a 
                                    href={`https://${project.link}`} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    onClick={(e) => e.stopPropagation()} 
                                    className='text-cyan-400 hover:text-teal-300 text-xs sm:text-sm font-semibold hover:underline'
                                >
                                    Live Link ↗
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Expanded Card / Modal */}
            {selectedProject && (
                <div className='fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4 overflow-y-auto'>
                    <div className='bg-gray-950 border-2 border-cyan-500/80 rounded-2xl p-5 sm:p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-cyan-500/30 relative text-white'>
                        {/* Close Button & Title */}
                        <div className='flex justify-between items-start mb-4 gap-4'>
                            <h2 className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-transparent bg-clip-text'>
                                {selectedProject.title}
                            </h2>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="text-gray-400 hover:text-cyan-400 text-3xl font-bold leading-none p-1 cursor-pointer transition-colors"
                                aria-label="Close"
                            >
                                &times;
                            </button>
                        </div>
                        <img src={selectedProject.image} alt={selectedProject.title} className='w-full h-48 sm:h-64 object-cover rounded-xl mb-4 border border-gray-800' />
                        <p className='text-gray-300 text-sm sm:text-base leading-relaxed mb-4'>{selectedProject.description}</p>
                        
                        <h3 className='text-sm sm:text-base font-semibold mb-2 text-gray-200'>Technologies Used:</h3>
                        <div className='flex flex-wrap gap-2 mb-6'>
                            {selectedProject.technologies.map((tech, index) => (
                                <span key={index} className='text-xs sm:text-sm px-3 py-1 rounded-lg bg-gray-900 border border-cyan-500/40 text-cyan-300 font-semibold'>
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className='flex justify-end gap-3 border-t border-gray-800 pt-4'>
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className='px-4 py-2 text-xs sm:text-sm rounded-xl bg-gray-900 border border-gray-700 hover:border-cyan-400 text-gray-200 cursor-pointer transition-all'
                            >
                                Close
                            </button>
                            <a 
                                href={`https://${selectedProject.link}`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className='px-5 py-2 text-xs sm:text-sm bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-teal-400/40 hover:scale-105 transition-all duration-300 cursor-pointer'
                            >
                                Visit Project ↗
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Projects
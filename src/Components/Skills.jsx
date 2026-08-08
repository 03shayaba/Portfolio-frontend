import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiPostman,
  SiWebstorm,
  SiCplusplus,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMysql,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiRender } from "react-icons/si";
import { SiCanva } from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
      { name: "React", icon: <FaReact className="text-sky-400" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
      { name: "Bootstrap", icon: <FaBootstrap className="text-indigo-600" /> },
      { name: "React Native", icon: <FaReact className="text-sky-400" /> },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "SQL", icon: <SiMysql className="text-blue-700" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-blue-600" /> },
      // { name: "Prisma", icon: <SiPrisma className="text-blue-400" /> },
    ],
  },
];

const skillsData1 = [
  {
    category: "Languages",
    skills: [
      { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express", icon: <SiExpress className="text-gray-600" /> },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Docker", icon: <FaDocker className="text-sky-600" /> },
      // { name: "AWS", icon: <FaAws className="text-orange-500" /> },
      { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
      { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
      { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "WebStorm", icon: <SiWebstorm className="text-cyan-500" /> },
      { name: "Netlify", icon: <SiNetlify className="text-teal-500" /> },
      { name: "Render", icon: <SiRender className="text-red-400" /> },
      // { name: "Canva", icon: <SiCanva className="text-blue-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="text-white pt-16 pb-20 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto">
      <div className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text hover:text-white">
        Skills
      </div>
      <hr className="border-t-4 w-24 sm:w-32 mx-auto mt-3 border-blue-500 shadow-xl" />

      <p className="text-sm sm:text-base md:text-lg text-center mt-4 text-gray-300 max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various projects and experiences.
      </p>

      {/* ---- FIRST ROW ---- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10">
        {skillsData.map((section, index) => (
          <div
            key={index}
            className="border-2 border-blue-500 rounded-xl p-4 sm:p-6 shadow-xl bg-gray-950 shadow-blue-500/30 hover:shadow-2xl transition-all"
          >
            <h2 className="text-lg sm:text-xl bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text text-center underline font-bold">
              {section.category}
            </h2>
            <div className="flex flex-wrap gap-2.5 mt-4 justify-center">
              {section.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-indigo-50 px-3 py-1.5 sm:py-2 border rounded-lg text-xs sm:text-sm font-medium text-gray-800 hover:bg-indigo-100 hover:scale-105 transition-transform"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ---- SECOND ROW ---- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8">
        {skillsData1.map((section, index) => (
          <div
            key={index}
            className="border-2 border-blue-500 rounded-xl p-4 sm:p-6 bg-gray-950 shadow-xl shadow-blue-500/30 hover:shadow-2xl transition-all"
          >
            <h2 className="text-lg sm:text-xl bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text text-center underline font-bold">
              {section.category}
            </h2>
            <div className="flex flex-wrap gap-2.5 mt-4 justify-center">
              {section.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-indigo-50 px-3 py-1.5 sm:py-2 border rounded-lg text-xs sm:text-sm font-medium text-gray-800 hover:bg-indigo-100 hover:scale-105 transition-transform"
                >
                  {skill.icon}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

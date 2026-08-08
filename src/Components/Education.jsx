import React, { useEffect, useState } from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import college from '../assets/College-.jpg';
import logo1 from '../assets/logo1.png';

const Education = () => {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect mobile view
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const events = [
    {
      status: 'Bachelor of Technology in Computer Science and Engineering',
      date: 'M.G. Institute of Management and Technology',
      icon: 'pi pi-graduation-cap',
      color: '#3B82F6',
      description:
        "Earned a Bachelor's degree in Computer Science and Engineering from M.G.I.M.T., Lucknow. The program provided a strong foundation in Data Structures, Algorithms, Web Development, and Database Management Systems.",
      image: college,
      Grade: 'CGPA: 8.5/10',
    },
    {
      status: 'U.P. Board (XII) - Shri Janki Prasad Inter College',
      // date: 'Completed in 2020',
      icon: 'pi pi-book',
      color: '#10B981',
      description:
        'Completed Class 12 from Shri Janki Prasad Inter College, Balamau, Hardoi, focusing on Physics, Chemistry, Mathematics, and Computer Science.',
      image: logo1,
      Grade: 'Percentage: 75%',
    },
    {
      status: 'U.P. Board (X) - Shri Janki Prasad Inter College',
      // date: 'Completed in 2018',
      icon: 'pi pi-book',
      color: '#F59E0B',
      description:
        'Completed 10th grade with a strong academic record, developing a disciplined and consistent learning approach.',
      image: logo1,
      Grade: 'Percentage: 81%',
    },
  ];

  const customizedMarker = (item) => (
    <span
      className="flex w-8 h-8 sm:w-10 sm:h-10 items-center justify-center text-white rounded-full shadow-md text-xs sm:text-base shrink-0"
      style={{ backgroundColor: item.color }}
    >
      <i className={item.icon}></i>
    </span>
  );

  const customizedContent = (item) => (
    <Card className="!bg-gray-950 !border-2 !border-cyan-500/80 !shadow-xl !shadow-cyan-500/25 text-white p-1 sm:p-5 rounded-xl w-full max-w-2xl hover:shadow-2xl transition-all duration-300 mb-6 sm:mb-10">
      {/* Logo + Title */}
      <div className="flex flex-row items-start sm:items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3 w-full">
        {item.image && (
          <img
            src={item.image}
            alt={item.status}
            className="w-9 h-9 sm:w-12 sm:h-12 rounded-full shadow-md shrink-0 object-cover border border-cyan-400 mt-0.5 sm:mt-0"
          />
        )}
        <div className="flex flex-col text-left min-w-0 flex-1">
          <h3 className="text-xs sm:text-base md:text-lg font-bold bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-transparent bg-clip-text leading-snug break-words">
            {item.status}
          </h3>
          <p className="text-[11px] sm:text-sm text-teal-400 font-semibold mt-0.5">{item.Grade}</p>
        </div>
      </div>

      {/* Subtitle / Institution */}
      {item.date && (
        <p className="text-xs sm:text-sm text-gray-300 font-medium mb-1.5 sm:mb-2">{item.date}</p>
      )}

      {/* Description */}
      <p className="text-[11px] sm:text-sm text-gray-300 leading-relaxed">{item.description}</p>
    </Card>
  );

  return (
    <div className="pt-12 sm:pt-16 pb-12 sm:pb-16 px-2 sm:px-8 md:px-16 max-w-7xl mx-auto">
      <h2 className="font-bold mb-2 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 text-transparent bg-clip-text text-center text-3xl sm:text-4xl">Education</h2>
      <hr className="border-t-4 border-cyan-400 w-24 sm:w-32 mx-auto my-3 shadow-lg shadow-cyan-500/30" />
      <p className="text-gray-300 text-center text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
        Throughout my academic journey, I’ve gained valuable knowledge and experience.  
        Here are the details of my education.
      </p>

      {/* Timeline Container */}
      <div className="card flex justify-center w-full max-w-5xl mx-auto px-1 sm:px-0">
        <Timeline
          value={events}
          align={isMobile ? 'left' : 'alternate'}
          className="customized-timeline w-full"
          marker={customizedMarker}
          content={customizedContent}
        />
      </div>
    </div>
  );
};

export default Education;

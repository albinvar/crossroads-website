import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BannerSection from './BannerSection';

const Course = () => {
  const sections = [
    { name: 'Banner Section', component: <BannerSection /> },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const tabVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="w-full">
      <div className="flex gap-4 p-4 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 rounded-md text-xs font-medium transition-colors duration-200 flex-shrink-0 ${activeTab === index
                ? 'bg-blue-300 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            {section.name}
          </button>
        ))}
      </div>

      <div className=''>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {sections[activeTab].component}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Course;
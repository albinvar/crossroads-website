import React, { useState, useEffect } from 'react';
import CourseCard from '../../../../components/UiComponents/CourseCard';
import apiService from '../../../../api/apiService';
import { motion, AnimatePresence } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const tabContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
};

const additionalCardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: 'easeOut',
    },
  }),
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

const PopularCourses = () => {
  const [activeTab, setActiveTab] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [courses, setCourses] = useState([]);
  const [tabs, setTabs] = useState([]);
  const COURSES_PER_PAGE = 6;

  useEffect(() => {
    const fetchTabs = async () => {
      try {
        const response = await apiService.getPopularCourseTabs();
        const data = response.data;
        setTabs(data);
        if (data.length > 0) {
          setActiveTab(data[0]);
        }
      } catch (error) {
        console.error('Error fetching popular course tabs:', error);
      }
    };
    fetchTabs();
  }, []);

  useEffect(() => {
    if (!activeTab) return;

    const fetchCourses = async () => {
      try {
        const response = await apiService.getCoursesByTab(activeTab);
        setCourses(response.data);
      } catch (error) {
        console.error(`Error fetching courses for tab ${activeTab}:`, error);
      }
    };
    fetchCourses();
  }, [activeTab]);

  const displayedCourses = showAll
    ? courses
    : courses.slice(0, COURSES_PER_PAGE);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowAll(false);
  };

  const handleViewMore = () => {
    setShowAll(true);
  };

  if (tabs.length === 0) {
    return null;
  }

  return (
    <motion.section
      className="py-14 sm:py-14 md:py-20 lg:py-24 bg-gray-100"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto px-4 sm:px-6 md:px-20 lg:px-28">
        <div className="text-center space-y-6">
          <p className="text-xl uppercase" style={{ color: '#00334D' }}>
            Popular Courses
          </p>
          <h2 className="text-4xl font-bold">
            <span style={{ color: '#00334D' }}>Academic </span>
            <span style={{ color: '#F9920A' }}>Courses</span>
          </h2>
        </div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center space-x-0 lg:space-x-4 mt-8 mb-16 sm:mb-16 md:mb-16 lg:mb-16"
          variants={tabContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`w-44 h-16 lg:w-32 lg:h-10 rounded-full transition ${
                activeTab === tab
                  ? 'bg-[#F9920A] text-white'
                  : 'text-primary-dark border border-[#F9920A] hover:bg-[#F9920A] hover:text-white'
              }`}
              variants={tabVariants}
            >
              <span dangerouslySetInnerHTML={{ __html: tab }} />
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={cardContainerVariants}
            initial="hidden"
            animate="visible"
            key={activeTab}
          >
            {displayedCourses.length > 0 ? (
              displayedCourses.map((course, index) => (
                <motion.div
                  key={course.id || index}
                  variants={
                    showAll && index >= COURSES_PER_PAGE
                      ? additionalCardVariants
                      : cardVariants
                  }
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={index - COURSES_PER_PAGE}
                >
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    image={course.image}
                    link={course.link} 
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                className="col-span-full text-center text-gray-500 py-8"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <p className="text-lg font-semibold">No courses available</p>
                <p className="mt-2">Check back later for updates!</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {courses.length > COURSES_PER_PAGE && !showAll && (
            <motion.div
              className="flex justify-center mt-16"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.button
                onClick={handleViewMore}
                className="px-6 py-2 rounded-full transition border border-[#F9920A] text-[#F9920A] hover:bg-[#F9920A] hover:text-white text-sm"
                variants={buttonVariants}
                whileHover="hover"
              >
                View More
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default PopularCourses;
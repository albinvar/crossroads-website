import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import CourseCard from '../../../../components/UiComponents/CourseCard';
import apiService from '../../../../api/apiService';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 
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
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.4 } },
};
 
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};
 
const PopularCourses = () => {
  const [activeTab, setActiveTab] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const [courses, setCourses] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [error, setError] = useState(null);
  const COURSES_PER_PAGE = 6;
  const sectionRef = useRef(null);
  const sliderRefs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
 
  useEffect(() => {
    const fetchTabs = async () => {
      try {
        const response = await apiService.getPopularCourseTabs();
        const data = response.data;
        console.log('Tabs fetched:', data);
        setTabs(data);
        if (data.length > 0) {
          setActiveTab(data[0]);
        }
        sliderRefs.current = data.map(() => React.createRef());
      } catch (error) {
        console.error('Error fetching popular course tabs:', error);
        setError('Failed to load course categories.');
      }
    };
    fetchTabs();
  }, []);
 
  useEffect(() => {
    if (!activeTab) return;
 
    const fetchCourses = async () => {
      try {
        const response = await apiService.getCoursesByTab(activeTab);
        console.log(`Courses for tab ${activeTab}:`, response.data);
        setCourses(response.data);
        setCurrentPage(1);
        setShowAll(false);
        setError(null);
      } catch (error) {
        console.error(`Error fetching courses for tab ${activeTab}:`, error);
        setCourses([]);
        setError('Failed to load courses.');
      }
    };
    fetchCourses();
  }, [activeTab]);

  const totalPages = Math.ceil(courses.length / COURSES_PER_PAGE);
  const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
  const endIndex = startIndex + COURSES_PER_PAGE;
  const displayedCourses = courses.slice(startIndex, endIndex);
  console.log('Courses length:', courses.length, 'Total pages:', totalPages, 'Displayed courses:', displayedCourses.length, 'Show all:', showAll, 'Should show View More:', courses.length > COURSES_PER_PAGE && !showAll);
 
  const handleTabClick = (tab, tabIndex) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setShowAll(false);
    if (sliderRefs.current[tabIndex]?.current) {
      sliderRefs.current[tabIndex].current.slickGoTo(0);
    }
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
 
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setShowAll(false);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
 
  const handleViewMore = () => {
    navigate('/services/education/find-a-course'); 
  };
 
  const handlePrev = (tabIndex) => {
    if (sliderRefs.current[tabIndex]?.current) {
      sliderRefs.current[tabIndex].current.slickPrev();
    }
  };
 
  const handleNext = (tabIndex) => {
    if (sliderRefs.current[tabIndex]?.current) {
      sliderRefs.current[tabIndex].current.slickNext();
    }
  };
 
  const mobileSliderSettings = {
    dots: true,
    infinite: displayedCourses.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
 
  if (tabs.length === 0 || error) {
    return (
      <motion.section
        className="py-14 sm:py-14 md:py-20 lg:py-24 bg-gray-100"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold text-gray-500">
            {error || 'No course categories available.'}
          </p>
        </div>
      </motion.section>
    );
  }
 
  return (
    <motion.section
      ref={sectionRef}
      className="pt-14 sm:pt-14 md:pt-20 lg:pt-20 pb-8 sm:pb-8 md:pb-16 lg:pb-16 bg-gray-100"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <p className="text-xl font-semibold uppercase" style={{ color: '#00334D' }}>
            Popular Courses
          </p>
          <h2 className="text-4xl font-bold">
            <span style={{ color: '#00334D' }}>Academic </span>
            <span style={{ color: '#F9920A' }}>Courses</span>
          </h2>
        </div>
 
        {/* Mobile View */}
        <div className="block sm:hidden mt-6">
          <div className="flex flex-col space-y-4 mb-8">
            {tabs.map((tab, tabIndex) => (
              <div key={tab}>
                <motion.button
                  variants={tabVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => handleTabClick(tab, tabIndex)}
                  className={`w-full h-10 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeTab === tab
                      ? 'bg-[#F9920A] text-white'
                      : 'border border-[#F9920A] text-[#F9920A] hover:bg-[#F9920A] hover:text-white'
                  }`}
                >
                  <span dangerouslySetInnerHTML={{ __html: tab }} />
                </motion.button>
                <AnimatePresence mode="wait">
                  {activeTab === tab && (
                    <motion.div
                      key={tab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                      exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                      className="bg-gray-100 rounded-lg p-4 mt-4"
                    >
                      {displayedCourses.length > 0 ? (
                        <Slider ref={sliderRefs.current[tabIndex]} {...mobileSliderSettings}>
                          {displayedCourses.map((course, index) => (
                            <motion.div
                              key={course.id || index}
                              variants={cardVariants}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                            >
                              <CourseCard
                                title={course.title}
                                description={course.description}
                                imageSrc={course.image}
                                link={`/services/education/course/${course.link}`}
                              />
                            </motion.div>
                          ))}
                        </Slider>
                      ) : (
                        <div className="text-center text-gray-500 py-8">
                          <p className="text-lg font-semibold">No courses available</p>
                          <p className="mt-2">Check back later for updates!</p>
                        </div>
                      )}
                      {displayedCourses.length > 1 && (
                        <div className="flex justify-center space-x-4 mt-4">
                          <button
                            className="text-[#00334D] w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#F9920A] hover:text-white transition-colors duration-300"
                            onClick={() => handlePrev(tabIndex)}
                            aria-label="Previous Slide"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M15 18l-6-6 6-6" />
                            </svg>
                          </button>
                          <button
                            className="text-[#00334D] w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#F9920A] hover:text-white transition-colors duration-300"
                            onClick={() => handleNext(tabIndex)}
                            aria-label="Next Slide"
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M9 18l6-6-6-6" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
 
        {/* Desktop View */}
        <div className="hidden sm:block">
          <motion.div
            className="flex flex-wrap gap-4 justify-center space-x-0 lg:space-x-4 mt-8 mb-16"
            variants={tabContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {tabs.map((tab, tabIndex) => (
              <motion.button
                key={tab}
                onClick={() => handleTabClick(tab, tabIndex)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 w-auto ${
                  activeTab === tab
                    ? 'bg-[#F9920A] text-white'
                    : 'text-[#00334D] border border-[#F9920A] hover:bg-[#F9920A] hover:text-white'
                }`}
                variants={tabVariants}
              >
                <span dangerouslySetInnerHTML={{ __html: tab }} />
              </motion.button>
            ))}
          </motion.div>
 
          <AnimatePresence mode="wait">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={cardContainerVariants}
              initial="hidden"
              animate="visible"
              key={activeTab}
            >
              {(showAll ? courses : displayedCourses).length > 0 ? (
                (showAll ? courses : displayedCourses).map((course, index) => (
                  <motion.div
                    key={course.id || index}
                    variants={cardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <CourseCard
                      title={course.title}
                      description={course.description}
                      imageSrc={course.image}
                      link={`/services/education/find-a-course${course.link}`}
                    />
                  </motion.div>
                ))
              ) : (
                <motion.div
                  className="col-span-full text-center text-gray-500 py-8"
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                >
                  <p className="text-lg font-semibold">No courses available</p>
                  <p className="mt-2">Check back later for updates!</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
 
          {displayedCourses.length > 0 && (
            <motion.div
              className="flex justify-center gap-2 mt-16"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
            >
              <motion.button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  currentPage === 1
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-[#F9920A] text-white hover:bg-[#00334D]'
                }`}
                aria-label="Previous Page"
                variants={buttonVariants}
                whileHover={currentPage !== 1 ? "hover" : ""}
              >
                Prev
              </motion.button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <motion.button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    currentPage === page
                      ? 'bg-[#F9920A] text-white'
                      : 'border border-[#F9920A] text-[#F9920A] hover:bg-[#F9920A] hover:text-white'
                  }`}
                  aria-label={`Page ${page}`}
                  variants={buttonVariants}
                  whileHover="hover"
                >
                  {page}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  currentPage === totalPages
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-[#F9920A] text-white hover:bg-[#00334D]'
                }`}
                aria-label="Next Page"
                variants={buttonVariants}
                whileHover={currentPage !== totalPages ? "hover" : ""}
              >
                Next
              </motion.button>
            </motion.div>
          )}
 
          {!location.pathname.includes('/services/education/find-a-course') && (
            <motion.div
              className="flex justify-center mt-8"
              initial="hidden"
              animate="visible"
              variants={buttonVariants}
            >
              <motion.button
                onClick={() => handleViewMore()}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-[#F9920A] text-white hover:bg-[#00334D] transition-all duration-200"
                variants={buttonVariants}
                whileHover="hover"
              >
                View More
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};
 
export default PopularCourses;
 
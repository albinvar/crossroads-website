import React, { useState, useEffect, useRef } from 'react';
import TestimonialCard from '../../../../components/UiComponents/TestimonialCard';
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
 
const HearTheirStories = () => {
  const [activeTab, setActiveTab] = useState('');
  const [testimonials, setTestimonials] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);
  const cardsPerSlide = 6;
 
  useEffect(() => {
    const fetchTabs = async () => {
      try {
        const response = await apiService.getTestimonialsTab();
        const data = response.data.map(tab => tab.tab_name);
        console.log('Tabs fetched:', data);
        setTabs(data);
        if (data.length > 0) {
          setActiveTab(data[0]);
        } else {
          console.log('No tabs available');
        }
      } catch (error) {
        console.error('Error fetching testimonial tabs:', error);
      }
    };
    fetchTabs();
  }, []);
 
  useEffect(() => {
    if (!activeTab) return;
 
    const fetchTestimonials = async () => {
      try {
        const response = await apiService.getTestimonialsTab();
        const selectedTab = response.data.find(tab => tab.tab_name === activeTab);
        if (selectedTab) {
          const images = selectedTab.image_listings || [];
          const videos = selectedTab.video_listings || [];
          const combinedTestimonials = [
            ...images.map(item => ({
              id: item.id,
              type: 'image',
              name: item.name,
              image: item.image,
              flag: item.flag,
              rating: item.rating,
              description: item.description,
            })),
            ...videos.map(item => ({
              id: item.id,
              type: 'video',
              name: item.name,
              video: item.video,
              flag: item.flag,
              rating: item.rating,
              description: item.description,
            })),
          ];
          console.log(`Testimonials for tab ${activeTab}:`, combinedTestimonials);
          setTestimonials(combinedTestimonials);
          setCurrentPage(1);
        } else {
          console.log(`No testimonials for tab ${activeTab}`);
          setTestimonials([]);
        }
      } catch (error) {
        console.error(`Error fetching testimonials for tab ${activeTab}:`, error);
        setTestimonials([]);
      }
    };
    fetchTestimonials();
  }, [activeTab]);
 
  const handleTabClick = (tab) => {
    console.log('Tab clicked:', tab);
    setActiveTab(tab);
    setCurrentPage(1);
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
 
  const chunkArray = (array, size) => {
    if (!array || array.length === 0) return [];
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };
 
  const testimonialSlides = chunkArray(testimonials, cardsPerSlide);
  const totalPages = testimonialSlides.length;
  console.log('Testimonials length:', testimonials.length, 'Total pages:', totalPages, 'Current page:', currentPage, 'Should show pagination:', testimonials.length > 0);
 
  const handlePrevPage = () => {
    if (currentPage > 1) {
      console.log('Previous page clicked, new page:', currentPage - 1);
      setCurrentPage(currentPage - 1);
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      console.log('Next page clicked, new page:', currentPage + 1);
      setCurrentPage(currentPage + 1);
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  const handlePageChange = (pageNumber) => {
    console.log('Page change to:', pageNumber);
    setCurrentPage(pageNumber);
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
 
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
 
  if (tabs.length === 0) {
    console.log('Rendering null due to no tabs');
    return null;
  }
 
  return (
    <motion.section
      ref={sectionRef}
      className="py-8 px-4 sm:px-6 lg:px-8 bg-white"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold">
            <span style={{ color: '#00334D' }}>Hear </span>
            <span style={{ color: '#F9920A' }}>their stories</span>
          </h2>
          <p className="text-gray-400">
            Discover the journeys of individuals who transformed ambition into achievement with Crossroads.
          </p>
        </div>
 
        <motion.div
          className="flex flex-wrap gap-4 justify-center space-x-0 lg:space-x-4 mt-8 mb-16"
          variants={tabContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`w-72 h-16 lg:w-48 lg:h-10 rounded-full transition text-sm font-medium ${
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
          {testimonials.length > 0 ? (
            <motion.div
              variants={cardContainerVariants}
              initial="hidden"
              animate="visible"
              key={activeTab}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonialSlides[currentPage - 1]?.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id || index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <TestimonialCard
                      name={testimonial.name}
                      description={testimonial.description}
                      image={testimonial.type === 'image' ? testimonial.image : null}
                      video={testimonial.type === 'video' ? testimonial.video : null}
                      flag={testimonial.flag}
                      rating={testimonial.rating}
                    />
                  </motion.div>
                ))}
              </div>
 
              {testimonials.length > 0 && (
                <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-2">
                  <button
                    onClick={handlePrevPage}
                    className={`px-3 py-1 rounded text-sm font-medium ${
                      currentPage === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-[#F9920A] hover:text-[#e07a00]'
                    }`}
                    disabled={currentPage === 1}
                    aria-label="Previous Page"
                  >
                    Prev
                  </button>
 
                  {pageNumbers.map((number) => (
                    <button
                      key={number}
                      onClick={() => handlePageChange(number)}
                      className={`px-3 py-1 rounded text-sm font-medium ${
                        currentPage === number
                          ? 'bg-[#F9920A] text-white'
                          : 'text-[#F9920A] hover:text-[#e07a00]'
                      }`}
                      aria-label={`Page ${number}`}
                    >
                      {number}
                    </button>
                  ))}
 
                  <button
                    onClick={handleNextPage}
                    className={`px-3 py-1 rounded text-sm font-medium ${
                      currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-[#F9920A] hover:text-[#e07a00]'
                    }`}
                    disabled={currentPage === totalPages}
                    aria-label="Next Page"
                  >
                    Next
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              className="col-span-full text-center text-gray-500 py-8"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-lg font-semibold">No testimonials available</p>
              <p className="mt-2">Check back later for updates!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
 
export default HearTheirStories;
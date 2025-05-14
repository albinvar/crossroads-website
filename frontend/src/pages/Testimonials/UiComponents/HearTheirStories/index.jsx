import React, { useState, useEffect } from 'react';
import TestimonialCard from '../../../../components/UiComponents/TestimonialCard';
import apiService from '../../../../api/apiService';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
};

const HearTheirStories = () => {
  const [activeTab, setActiveTab] = useState('');
  const [testimonials, setTestimonials] = useState([]);
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    const fetchTabs = async () => {
      try {
        const response = await apiService.getTestimonialsTab();
        const data = response.data.map(tab => tab.tab_name);
        setTabs(data);
        if (data.length > 0) {
          setActiveTab(data[0]);
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
          setTestimonials(combinedTestimonials);
        }
      } catch (error) {
        console.error(`Error fetching testimonials for tab ${activeTab}:`, error);
      }
    };
    fetchTestimonials();
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const sliderSettings = {
    dots: false,
    infinite: testimonials.length > 6,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: false,
  };

  const sliderRef = React.useRef(null);

  const handleNavigation = (direction) => {
    if (direction === 'prev') {
      sliderRef.current.slickPrev();
    } else {
      sliderRef.current.slickNext();
    }
  };

  const chunkTestimonials = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const testimonialChunks = chunkTestimonials(testimonials, 6);

  if (tabs.length === 0) {
    return null;
  }

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto px-4">
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
              className={`w-72 h-16 lg:w-48 lg:h-10 rounded-full transition ${
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
          {testimonials.length > 0 ? (
            <motion.div
              variants={cardContainerVariants}
              initial="hidden"
              animate="visible"
              key={activeTab}
            >
              <Slider ref={sliderRef} {...sliderSettings}>
                {testimonialChunks.map((chunk, chunkIndex) => (
                  <div key={chunkIndex} className="p-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {chunk.map((testimonial, index) => (
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
                  </div>
                ))}
              </Slider>
              {testimonials.length > 6 && (
                <div className="flex justify-center gap-6 mt-10 lg:mt-12">
                  <button
                    onClick={() => handleNavigation('prev')}
                    aria-label="Previous Slide"
                    className="w-6 h-6 text-gray-400 hover:text-primary-dark transition-colors duration-300"
                  >
                    <FaChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => handleNavigation('next')}
                    aria-label="Next Slide"
                    className="w-6 h-6 text-gray-400 hover:text-primary-dark transition-colors duration-300"
                  >
                    <FaChevronRight className="w-6 h-6" />
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
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import apiService from '../../../../api/apiService';
import Button from '../../../../components/Button';
import { Link } from 'react-router';
import { ArrowRight } from '../../../../components/Icons';

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

const limitCharacters = (text, maxLength) => {
  if (!text || typeof text !== 'string') return '';
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

const Events = () => {
  const [activeTab, setActiveTab] = useState('Upcoming Events');
  const [showAll, setShowAll] = useState(false);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const EVENTS_PER_PAGE = 6;
  const TITLE_MAX_LENGTH = 110;
  const DESCRIPTION_MAX_LENGTH = 140;

  const tabs = ['Upcoming Events', 'Past Events'];

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      try {
        const response = await apiService.getNewsEventsByTab('');
        setEvents(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching events:', error);
        setEvents([]);
        setError('Failed to load events. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const now = new Date();
  const upcomingEvents = events
    .filter((event) => {
      if (!event.date) {
        console.warn(`Event ${event.id} has no date`);
        return false;
      }
      const eventDate = new Date(event.date);
      if (isNaN(eventDate.getTime())) {
        console.warn(`Event ${event.id} has invalid date: ${event.date}`);
        return false;
      }
      return eventDate >= now;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const pastEvents = events
    .filter((event) => {
      if (!event.date) return false;
      const eventDate = new Date(event.date);
      if (isNaN(eventDate.getTime())) return false;
      return eventDate < now;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const displayedEvents = activeTab === 'Upcoming Events' ? upcomingEvents : pastEvents;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowAll(false);
  };

  const handleViewMore = () => {
    setShowAll(true);
  };

  if (isLoading) {
    return (
      <motion.div
        className="text-center text-gray-500 py-8"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        Loading events...
      </motion.div>
    );
  }

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto px-4 sm:px-6 md:px-20 lg:px-28">
        <motion.div
          className="flex flex-wrap gap-4 justify-center space-x-0 lg:space-x-4 mb-20"
          variants={tabContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`w-44 h-16 lg:w-44 lg:h-10 rounded-full transition ${
                activeTab === tab
                  ? 'bg-[#F9920A] text-white'
                  : 'text-primary-dark border border-[#F9920A] hover:bg-[#F9920A] hover:text-white'
              }`}
              variants={tabVariants}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {error && (
          <motion.div
            className="text-center text-red-500 py-8"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            {error}
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          <div key={activeTab}>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={cardContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {isLoading ? (
                <motion.div
                  className="col-span-full text-center text-gray-500 py-8"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <p className="text-lg font-semibold">Loading events...</p>
                </motion.div>
              ) : displayedEvents.length > 0 ? (
                displayedEvents
                  .slice(0, showAll ? undefined : EVENTS_PER_PAGE)
                  .map((event, index) => (
                    <motion.div
                      key={event.id || index}
                      variants={
                        showAll && index >= EVENTS_PER_PAGE
                          ? additionalCardVariants
                          : cardVariants
                      }
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      custom={index - EVENTS_PER_PAGE}
                    >
                      <div className="h-full news-card bg-white rounded-lg overflow-hidden group">
                        <div className="relative mx-4">
                          <img
                            src={
                              event.image ||
                              'https://via.placeholder.com/300x200?text=No+Image'
                            }
                            alt="Event Image"
                            className="transition-all duration-300 rounded-lg grayscale group-hover:grayscale-0"
                            onError={(e) => {
                              e.target.src =
                                'https://via.placeholder.com/300x200?text=Image+Not+Found';
                              console.error(`Failed to load image: ${event.image}`);
                            }}
                          />
                          <Button
                            label={
                              activeTab === 'Upcoming Events'
                                ? 'Register Now'
                                : 'View Details'
                            }
                            className="absolute top-4 left-4 text-white text-md bg-primary-orange hover:bg-primary-orange/80 rounded-full px-4 py-2 transition-colors duration-300"
                          />
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                limitCharacters(event.title, TITLE_MAX_LENGTH) ||
                                'Untitled Event',
                            }}
                          />
                          <div
                            className="mt-2 flex-grow"
                            dangerouslySetInnerHTML={{
                              __html:
                                limitCharacters(
                                  event.description,
                                  DESCRIPTION_MAX_LENGTH
                                ) || 'No description available.',
                            }}
                          />
                          <Link
                            to={`/news-and-events/${event.link}`}
                            className="mt-4 group text-primary-dark flex items-center hover:text-primary-dark-hover transition-colors duration-300"
                          >
                            <span className="mr-2 text-lg lg:text-[14px] font-medium">
                              Read More
                            </span>
                            <ArrowRight
                              className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 fill-primary-dark group-hover:fill-primary-dark-hover"
                            />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))
              ) : (
                <motion.div
                  className="col-span-full text-center text-gray-500 py-8"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <p className="text-lg font-semibold">
                    No {activeTab.toLowerCase()} available
                  </p>
                  <p className="mt-2">Check back later for updates!</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </AnimatePresence>

        <AnimatePresence>
          {displayedEvents.length > EVENTS_PER_PAGE && !showAll && (
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

export default Events;
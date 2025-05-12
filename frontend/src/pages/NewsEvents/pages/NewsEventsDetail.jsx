import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import apiService from '../../../api/apiService';
import Banner from '../../../components/Banner';
import EventForm from '../UiComponents/EventForm';
import ContactInformation from '../../../components/UiComponents/ContactInformation';
import NewsEventsSection from '../../Home/UiComponents/NewsEventsSection';
import PastEventsRecap from '../UiComponents/PastEventsRecap';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
};

const NewsEventsDetail = () => {
  const { link } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const secondTabLabel = 'Additional Information';
  const [newsItems, setNewsItems] = useState([]);

  const stripTags = (html) => {
    const div = document.createElement('div');
    div.innerHTML = html || '';
    return div.textContent || div.innerText || '';
  };

  useEffect(() => {
    const fetchEvent = async () => {
      setIsLoading(true);
      try {
        const response = await apiService.getNewsEventByLink(link);
        setEvent(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching event details:', error);
        setError('Failed to load event details. Please try again later.');
        setEvent(null);
      } finally {
        setIsLoading(false);
      }
    };
    fetchEvent();
  }, [link]);

  const handleJoinEvent = (formData) => {
    console.log('Join Event Form Data:', formData);
  };

  if (isLoading) {
    return (
      <motion.div
        className="text-center text-gray-500 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Loading event details...
      </motion.div>
    );
  }

  if (error || !event) {
    return (
      <motion.div
        className="text-center text-red-500 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {error || 'Event not found.'}
      </motion.div>
    );
  }

  const eventType = event.date && new Date(event.date) > new Date() ? 'upcoming' : 'past';

  return (
    <>
      <Banner
        title={stripTags(event.detailed_page_title || event.title || 'Untitled Event')}
        backgroundImage={event.detailed_page_image || event.image || 'https://via.placeholder.com/1200x400?text=No+Image'}
        className="object-top"
      />
      <motion.section
        className="mx-auto mt-14 sm:mt-14 lg:mt-20 px-4 sm:px-6 md:px-12 lg:px-28"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-stretch gap-6 mx-auto">
          <div className="w-full lg:w-1/2">
            <img
              src={event.detailed_page_image || event.image || 'https://via.placeholder.com/600x500?text=No+Image'}
              alt={stripTags(event.detailed_page_title || event.title || 'Event Image')}
              className="w-full h-64 sm:h-80 lg:h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/600x500?text=Image+Not+Found';
                console.error(`Failed to load image: ${event.detailed_page_image || event.image}`);
              }}
            />
          </div>
          <div className="w-full lg:w-1/2 bg-white p-3 sm:p-4 md:p-6">
            <h2 className="mb-3 text-lg sm:text-xl text-gray-600 font-semibold">
              {stripTags(event.detailed_page_title || event.title || 'Untitled Event')}
            </h2>
            <div
              className="prose text-gray-600 text-sm sm:text-base md:text-lg mb-6"
              dangerouslySetInnerHTML={{
                __html: event.detailed_page_description || event.description || 'No description available.',
              }}
            />
            <div
              className="flex items-center space-x-8 sm:space-x-8 lg:space-x-12 mb-6 overflow-x-auto"
              role="tablist"
              aria-label="Event Details Tabs"
            >
              <button
                className={`text-sm sm:text-base md:text-lg font-medium cursor-pointer transition-all duration-300 min-w-max py-2 ${
                  activeTab === 'overview'
                    ? 'text-[#F9920A] border-b-2 border-[#F9920A]'
                    : 'text-gray-600 hover:text-[#F9920A] hover:border-b-2 hover:border-[#F9920A]'
                }`}
                onClick={() => setActiveTab('overview')}
                role="tab"
                aria-selected={activeTab === 'overview'}
                aria-controls="overview-panel"
              >
                EVENT OVERVIEW
              </button>
              <button
                className={`text-sm sm:text-base md:text-lg font-medium cursor-pointer transition-all duration-300 min-w-max py-2 ${
                  activeTab === 'secondTab'
                    ? 'text-[#F9920A] border-b-2 border-[#F9920A]'
                    : 'text-gray-600 hover:text-[#F9920A] hover:border-b-2 hover:border-[#F9920A]'
                }`}
                onClick={() => setActiveTab('secondTab')}
                role="tab"
                aria-selected={activeTab === 'secondTab'}
                aria-controls="additional-info-panel"
              >
                {secondTabLabel.toUpperCase()}
              </button>
            </div>
            {activeTab === 'overview' && (
              <ul className="text-gray-700 text-sm sm:text-base md:text-lg" id="overview-panel" role="tabpanel">
                {event.detailed_page_date && (
                  <li className="flex items-start justify-start space-x-2 pb-4 border-b border-gray-300">
                    <span className="font-semibold min-w-[0px] sm:min-w-[0px]">• Date:</span>
                    <span
                      className="flex-1"
                      dangerouslySetInnerHTML={{
                        __html: event.detailed_page_date,
                      }}
                    />
                  </li>
                )}
                {event.detailed_page_time && (
                  <li className="flex items-start justify-start space-x-2 py-4 border-b border-gray-300">
                    <span className="font-semibold min-w-[0px] sm:min-w-[0px]">• Time:</span>
                    <span
                      className="flex-1"
                      dangerouslySetInnerHTML={{
                        __html: event.detailed_page_time,
                      }}
                    />
                  </li>
                )}
                {event.detailed_page_event_location && (
                  <li className="flex items-start justify-start space-x-2 py-4 border-b border-gray-300">
                    <span className="font-semibold min-w-[0px] sm:min-w-[0px] lg:min-w-[19%]">• Event Location:</span>
                    <span
                      className="flex-1"
                      dangerouslySetInnerHTML={{
                        __html: event.detailed_page_event_location,
                      }}
                    />
                  </li>
                )}
                {event.detailed_page_event_category && (
                  <li className="flex items-start justify-start space-x-2 pt-4">
                    <span className="font-semibold min-w-[0px] sm:min-w-[0px]">• Category:</span>
                    <span
                      className="flex-1"
                      dangerouslySetInnerHTML={{
                        __html: event.detailed_page_event_category,
                      }}
                    />
                  </li>
                )}
              </ul>
            )}
            {activeTab === 'secondTab' && (
              <div
                className="text-gray-700 text-sm sm:text-base md:text-lg"
                id="additional-info-panel"
                role="tabpanel"
              >
                {event.detailed_page_additional_information ? (
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-700">Additional Information</h3>
                    <div
                      className="prose text-gray-600"
                      dangerouslySetInnerHTML={{
                        __html: event.detailed_page_additional_information,
                      }}
                    />
                  </div>
                ) : (
                  <p>No additional information available.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.section>
      <div className='mt-8 sm:mt-8 lg:mt-20 px-4 lg:px-0'>
        <EventForm
          latitude={event.google_map_latitude}
          longitude={event.google_map_longitude}
          title={stripTags(event.detailed_page_title || event.title || 'Untitled Event')}
          eventType={eventType}
          onJoinEvent={handleJoinEvent}
        />
      </div>
      {eventType === 'past' && (
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <PastEventsRecap eventId={event.id} />
        </div>
      )}
      <div className="mt-8 sm:mt-12 lg:mt-16">
        <NewsEventsSection
          newsItems={newsItems}
          setNewsItems={setNewsItems}
          filterType={eventType}
          currentEventLink={link}
          hideTitleAndDescription={true}
          isSlider={true}
          showMoreButton={false}
        />
      </div>
      <div className='px-4 sm:px-4 lg:px-28 mb-16 sm:mb-16 lg:mb-36 mt-8 sm:mt-8 lg:mt-20'>
        <ContactInformation />
      </div>
    </>
  );
};

export default NewsEventsDetail;
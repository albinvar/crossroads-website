import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apiService from '../../../../api/apiService';
import Button from '../../../../components/Button';
import { Link, useNavigate } from 'react-router';
import { ArrowRight } from '../../../../components/Icons';

const limitCharacters = (text, maxLength) => {
  if (!text || typeof text !== 'string') return '';
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

const NewsEventsSection = ({ 
  newsItems, 
  setNewsItems, 
  filterType = 'upcoming', 
  currentEventLink = null, 
  hideTitleAndDescription = false,
  isSlider = false,
  showMoreButton = true
}) => {
  const sliderRef = useRef(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const TITLE_MAX_LENGTH = 110;
  const DESCRIPTION_MAX_LENGTH = 140;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const [newsResponse, titleResponse] = await Promise.all([
          apiService.getNewsEventsByTab(''),
          apiService.getNewsTitle(),
        ]);

        if (isMounted) {
          const now = new Date();
          const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          const transformedNews = newsResponse.data
            .map((news) => ({
              image: news.image,
              title: news.title,
              description: news.description,
              link: news.link,
              order: news.order,
              date: news.date,
            }))
            .filter((news) => {
              const eventDate = new Date(news.date);
              const isUpcoming = eventDate >= today;
              return filterType === 'upcoming' ? isUpcoming : !isUpcoming;
            })
            .filter((news) => news.link !== currentEventLink)
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .slice(0, 4);
          setNewsItems(transformedNews);
          const titleData = titleResponse.data[0];
          setTitle(titleData?.title || '');
          setDescription(titleData?.description || '');
        }
      } catch (error) {
        console.error('Error fetching news data:', error);
        if (isMounted) {
          setNewsItems([]);
          setTitle('');
          setDescription('');
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [setNewsItems, filterType, currentEventLink]);

const sliderSettings = {
    dots: false,
    infinite: newsItems?.length > 1,
    speed: 300,
    slidesToShow: 4, 
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
          infinite: newsItems?.length > 1,
        },
      },
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
          infinite: newsItems?.length > 2,
        },
      },
      {
        breakpoint: 9999,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: newsItems?.length > 4,
        },
      },
    ],
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
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
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleShowMoreClick = () => {
    navigate('/news-and-events');
  };

  if (newsItems === null || title === null || description === null) {
    return null;
  }

  return (
    <section className="pb-6 pt-6 sm:pt-6 lg:pt-0 px-4 md:px-12 bg-white">
      <motion.div
        className="mb-8 text-center"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        {hideTitleAndDescription ? (
          <h2 className="font-bold pb-8">
            <span className='text-primary-dark'>Other</span> <span className='text-primary-orange'>Events</span>
          </h2>
        ) : (
          <>
            <div dangerouslySetInnerHTML={{ __html: title }} />
            <div
              className="mt-2 max-w-2xl mx-auto"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </>
        )}
      </motion.div>

      <div className="bottom-arrows">
        {newsItems && newsItems.length > 0 ? (
          <>
            {(isMobile || isSlider) ? (
              <>
                <Slider ref={sliderRef} {...sliderSettings}>
                  {newsItems.map((item, index) => (
                    <div key={index} className="px-2">
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="h-full news-card bg-white rounded-lg overflow-hidden group">
                          <div className="relative mx-4">
                            <img
                              src={item.image || 'https://via.placeholder.com/300x200?text=No+Image'}
                              alt={limitCharacters(item.title, TITLE_MAX_LENGTH) || 'Event Image'}
                              className="transition-all duration-300 rounded-lg grayscale group-hover:grayscale-0"
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                                console.error(`Failed to load image: ${item.image}`);
                              }}
                            />
                            <Button
                              label="Register Now"
                              className="absolute top-4 left-4 text-white text-md bg-primary-orange hover:bg-primary-orange/80 rounded-full px-4 py-2 transition-colors duration-300"
                            />
                          </div>
                          <div className="p-4 flex flex-col flex-grow">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: limitCharacters(item.title, TITLE_MAX_LENGTH) || 'Untitled Event',
                              }}
                            />
                            <div
                              className="mt-2 flex-grow"
                              dangerouslySetInnerHTML={{
                                __html: limitCharacters(item.description, DESCRIPTION_MAX_LENGTH) || 'No description available.',
                              }} />
                            <Link
                              to={`/news-and-events/${item.link}`}
                              className="mt-4 group text-primary-dark flex items-center hover:text-primary-dark-hover transition-colors duration-300"
                            >
                              <span className="mr-2 text-lg lg:text-[14px] font-medium">Read More</span>
                              <ArrowRight
                                className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 fill-primary-dark group-hover:fill-primary-dark-hover"
                              />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </Slider>
                <div className="custom-arrows flex justify-center mt-2 sm:mt-2 lg:mt-4">
                  <div className="flex justify-center mt-4 sm:mt-6 gap-4 sm:gap-6">
                    <button onClick={goToPrev} aria-label="Previous Slide">
                      <FaChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-400 hover:text-primary-dark transition-all duration-300" />
                    </button>
                    <button onClick={goToNext} aria-label="Next Slide">
                      <FaChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-400 hover:text-primary-dark transition-all duration-300" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-4 gap-6"
                initial="hidden"
                animate="visible"
                variants={cardContainerVariants}
              >
                {newsItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="h-full news-card bg-white rounded-lg overflow-hidden group">
                      <div className="relative mx-4">
                        <img
                          src={item.image || 'https://via.placeholder.com/300x200?text=No+Image'}
                          alt={limitCharacters(item.title, TITLE_MAX_LENGTH) || 'Event Image'}
                          className="transition-all duration-300 rounded-lg grayscale group-hover:grayscale-0"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                            console.error(`Failed to load image: ${item.image}`);
                          }}
                        />
                        <Button
                          label="Register Now"
                          className="absolute top-4 left-4 text-white text-md bg-primary-orange hover:bg-primary-orange/80 rounded-full px-4 py-2 transition-colors duration-300"
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-grow">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: limitCharacters(item.title, TITLE_MAX_LENGTH) || 'Untitled Event',
                          }}
                        />
                        <div
                          className="mt-2 flex-grow"
                          dangerouslySetInnerHTML={{
                            __html: limitCharacters(item.description, DESCRIPTION_MAX_LENGTH) || 'No description available.',
                          }}
                        />
                        <Link
                          to={`/news-and-events/${item.link}`}
                          className="mt-4 group text-primary-dark flex items-center hover:text-primary-dark-hover transition-colors duration-300"
                        >
                          <span className="mr-2 text-lg lg:text-[14px] font-medium">Read More</span>
                          <ArrowRight
                            className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 fill-primary-dark group-hover:fill-primary-dark-hover"
                          />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
            {showMoreButton && (
              <div className="custom-arrows flex justify-center mt-10 sm:mt-10 lg:mt-12">
                <Button
                  label="Show More"
                  className="px-6 py-2 rounded-full transition border border-[#F9920A] text-[#F9920A] hover:bg-[#F9920A] hover:text-white text-sm"
                  onClick={handleShowMoreClick}
                />
              </div>
            )}
          </>
        ) : (
          <motion.div
            className="text-center text-primary-dark/50 text-lg font-semibold"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            No {filterType} events available.
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default NewsEventsSection;
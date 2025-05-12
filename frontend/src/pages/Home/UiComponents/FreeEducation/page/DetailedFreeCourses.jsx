import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import apiService from '../../../../../api/apiService';
import { motion, AnimatePresence } from 'framer-motion';
import Banner from '../../../../../components/Banner';
import ContactInformation from '../../../../../components/UiComponents/ContactInformation';
import parse, { domToReact } from 'html-react-parser';

const BASE_MEDIA_URL = import.meta.env.VITE_BASE_MEDIA_URL || 'http://127.0.0.1:8000';

const TickSVG = () => (
  <svg
    className="w-5 h-5 sm:w-6 sm:h-6 text-[#F9920A] mr-2 inline-block shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" fill="#F9920A" />
    <path
      d="M8 12L11 15L17 9"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DetailedFreeCourses = () => {
  const { link } = useParams();
  const [course, setCourse] = useState(null);
  const [banners, setBanners] = useState([]);
  const [tabs, setTabs] = useState([]);
  const [whyChooseTitle, setWhyChooseTitle] = useState(null);
  const [whyChooseItems, setWhyChooseItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const courseResponse = await apiService.getCourseListings(link);
        console.log('Course Response:', courseResponse.data);
        const courseData = courseResponse.data[0] || null;
        setCourse(courseData);

        const bannerResponse = await apiService.getFreeCourseDetailPageBanner(link);
        console.log('Banner Response:', bannerResponse.data);
        setBanners(
          bannerResponse.data.map((banner) => ({
            ...banner,
            banner_image: banner.banner_image
              ? banner.banner_image.startsWith('http')
                ? banner.banner_image
                : `${BASE_MEDIA_URL}${banner.banner_image.startsWith('/') ? '' : '/'}${banner.banner_image}`
              : 'https://via.placeholder.com/1200x400',
          }))
        );

        const tabResponse = await apiService.getFreeCourseDetailPageTabs(link);
        console.log('Tab Response:', tabResponse.data);
        const formattedTabs = tabResponse.data.map((tab) => ({
          id: tab.id,
          tab: tab.tab_name,
          contents: tab.contents.map((content) => ({
            id: content.id,
            content: content.content,
            background_image: content.background_image
              ? content.background_image.startsWith('http')
                ? content.background_image
                : `${BASE_MEDIA_URL}${content.background_image.startsWith('/') ? '' : '/'}${content.background_image}`
              : 'https://via.placeholder.com/600x400',
          })),
        }));
        setTabs(formattedTabs);
        if (formattedTabs.length > 0) {
          setActiveTab(formattedTabs[0].id);
        }

        const whyChooseTitleResponse = await apiService.getFreeCourseDetailPageWhyChooseTitle(link);
        console.log('Why Choose Title Response:', whyChooseTitleResponse.data);
        setWhyChooseTitle(whyChooseTitleResponse.data[0] || { title: '<h2>Why Choose This Course?</h2>' });

        const whyChooseResponse = await apiService.getFreeCourseDetailPageWhyChoose(link);
        console.log('Why Choose Items Response:', whyChooseResponse.data);
        setWhyChooseItems(
          whyChooseResponse.data.map((item) => ({
            id: item.id,
            title: item.title,
            description: item.description,
          }))
        );

        setLoading(false);
      } catch (err) {
        console.error('Error fetching course data:', err);
        setError('Failed to load course details');
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [link]);

  if (loading) {
    return <div className="text-center py-16">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-16">{error}</div>;
  }

  if (!course && !tabs.length && !whyChooseItems.length) {
    return <div className="text-center py-16">Course not found</div>;
  }

  const renderTabContent = () => {
    const activeTabData = tabs.find((item) => item.id === activeTab);

    if (!activeTabData) return null;

    const parseContentWithTick = (htmlContent) => {
      return parse(htmlContent, {
        replace: (domNode) => {
          if (domNode.name && /^h[1-6]$/.test(domNode.name)) {
            return (
              <div className="flex items-center">
                <TickSVG />
                {React.createElement(
                  domNode.name,
                  { className: '' },
                  domToReact(domNode.children)
                )}
              </div>
            );
          }
        },
      });
    };

    return (
      <AnimatePresence mode="wait">
        <div>
          {activeTabData.contents.map((item, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.div
                key={`${activeTab}-${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-8 sm:mt-12 lg:mt-16"
              >
                <div
                  className={`w-full mx-auto flex flex-col md:flex-row items-stretch bg-gray-100 ${
                    isReversed ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full md:w-1/2">
                    <img
                      src={item.background_image}
                      alt={`${activeTabData.tab} ${course?.title || 'Course'} - Section ${index + 1}`}
                      className={`w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover px-4 ${
                        isReversed ? 'md:pr-10 md:pl-4 lg:pr-20' : 'md:pl-10 lg:pl-20'
                      }`}
                      loading="lazy"
                      onError={(e) => {
                        console.warn(`Failed to load image: ${item.background_image}`);
                        e.target.src = 'https://via.placeholder.com/600x400';
                      }}
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex items-center p-6 sm:p-8">
                    <div
                      className={`prose max-w-none ${
                        isReversed
                          ? 'ml-4 sm:ml-6 lg:ml-16 mr-4 sm:mr-6'
                          : 'mr-4 sm:mr-6 lg:mr-16 ml-4 sm:ml-6'
                      }`}
                    >
                      {parseContentWithTick(item.content)}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </AnimatePresence>
    );
  };

  return (
    <div className="course-container">
      {/* Banner Section */}
      {banners.length > 0 && (
        <motion.div
          className="banner-wrapper mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {banners.map((banner) => (
            <div key={banner.id} className="relative">
              <Banner title={banner.banner_title} backgroundImage={banner.banner_image} />
            </div>
          ))}
        </motion.div>
      )}
      {/* Tab */}
      {tabs.length > 0 && (
        <motion.div
          className="mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-wrap gap-2 justify-center space-x-2 my-6 sm:my-8 lg:my-12">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`min-w-[120px] sm:w-40 h-8 sm:h-9 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-[#F9920A] text-white'
                    : 'bg-transparent text-[#00334D] border border-[#F9920A] hover:bg-[#F9920A] hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {tab.tab}
              </motion.button>
            ))}
          </div>
          {renderTabContent()}
        </motion.div>
      )}

      {(whyChooseTitle || whyChooseItems.length > 0) && (
        <motion.div
          className="mt-8 sm:mt-12 lg:mt-20 bg-[#00334D] py-8 sm:py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="mx-auto px-4 sm:px-10 md:px-20">
            <div
              className="prose prose-invert max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: whyChooseTitle?.title || '<h2>Why Choose This Course?</h2>' }}
            />
            {whyChooseItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {whyChooseItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="bg-[#F9920A]/30 rounded-lg shadow-lg p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.3 }}
                  >
                    <div className="flex items-center mb-2">
                      <TickSVG />
                      <div
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-gray-200 text-center">No reasons provided for choosing this course.</p>
            )}
            <div className="text-center mt-8">
              <button className="text-white hover:text-[#00334D] bg-[#F9920A] hover:bg-[#fcfcfc] transition-all duration-300 text-sm px-4 py-2 rounded-full">
                Register Now
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Contact Information */}
      <div className="px-4 sm:px-4 lg:px-28 mb-16 sm:mb-16 lg:mb-36 mt-14 sm:mt-14 lg:mt-20">
        <ContactInformation />
      </div>
    </div>
  );
};

export default DetailedFreeCourses;
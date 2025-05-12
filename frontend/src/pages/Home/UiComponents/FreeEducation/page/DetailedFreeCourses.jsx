import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router";
import ContactInformation from "../../../../../components/UiComponents/ContactInformation";
import apiService from "../../../../../api/apiService";
import Banner from "../../../../../components/Banner";

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
  const [bannerData, setBannerData] = useState({});
  const [tabsData, setTabsData] = useState([]);
  const [whyChooseTitle, setWhyChooseTitle] = useState("");
  const [whyChooseItems, setWhyChooseItems] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bannerResponse = await apiService.getFreeCourseDetailPageBanner(link);
        const banner = bannerResponse.data[0] || {};
        setBannerData({
          title: banner.banner_title,
          image: banner.banner_image,
        });

        const tabsResponse = await apiService.getFreeCourseDetailPageTabs(link);
        const tabs = tabsResponse.data.map((tab) => ({
          tab: tab.tab_name,
          contents: tab.contents.map((content) => ({
            content: content.content,
          })),
          images: tab.contents.map((content) => content.background_image).filter((img) => img),
        }));
        setTabsData(tabs);
        if (tabs.length > 0) {
          setActiveTab(tabs[0].tab);
        }

        const whyChooseTitleResponse = await apiService.getFreeCourseDetailPageWhyChooseTitle(link);
        const title = whyChooseTitleResponse.data[0]?.title || "";
        setWhyChooseTitle(title);

        const whyChooseResponse = await apiService.getFreeCourseDetailPageWhyChoose(link);
        setWhyChooseItems(
          whyChooseResponse.data.map((item) => ({
            title: item.title,
            description: item.description,
          }))
        );

        setLoading(false);
      } catch (error) {
        console.error("Error fetching course data:", error);
        setError("Failed to load course details");
        setLoading(false);
      }
    };

    fetchData();
  }, [link]);


  if (loading) {
    return <div className="text-center py-16">Loading Course Details...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-16">{error}</div>;
  }

  if (!bannerData.title) {
    return <div className="text-center py-10">Course not found</div>;
  }

  const renderContent = () => {
    const activeTabData = tabsData.find((item) => item.tab === activeTab);

    if (!activeTabData) return null;

    const contentGroups = [];
    for (let i = 0; i < activeTabData.contents.length; i += 3) {
      contentGroups.push(activeTabData.contents.slice(i, i + 3));
    }

    return (
      <AnimatePresence mode="wait">
        <div>
          {contentGroups.map((group, groupIndex) => {
            const isReversed = groupIndex % 2 === 1;
            const background_image =
              activeTabData.images && activeTabData.images[groupIndex]
                ? activeTabData.images[groupIndex]
                : activeTabData.images[0] || bannerData.image;

            return (
              <motion.div
                key={`${activeTab}-${groupIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-8 sm:mt-8 lg:mt-20"
              >
                <div
                  className={`w-full mx-auto flex flex-col md:flex-row items-stretch bg-gray-100 ${isReversed ? "md:flex-row-reverse" : ""
                    }`}
                >
                  <div className="w-full md:w-1/2">
                    <img
                      src={background_image}
                      alt={`${activeTab} ${bannerData.title} Program - Section ${groupIndex + 1}`}
                      className={`w-full h-[500px] sm:h-[450px] md:h-[500px] object-cover px-4 ${isReversed ? "md:pr-10 md:pl-4 lg:pr-28" : "md:pl-10 lg:pl-28"
                        }`}
                      onError={(e) => (e.target.src = "https://via.placeholder.com/600x400")}
                    />
                  </div>
                  <div className="w-full md:w-1/2 grid items-center p-4">
                    <div>
                      <ul
                        className={`space-y-8 ${isReversed
                            ? "ml-4 sm:ml-4 lg:ml-24 mr-4 sm:mr-4 lg:mr-0"
                            : "mr-4 sm:mr-4 lg:mr-9 ml-4 sm:ml-4 lg:ml-0"
                          }`}
                      >
                        {group.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className="block"
                            dangerouslySetInnerHTML={{
                              __html: item.content
                            }}
                          />
                        ))}
                      </ul>
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
    <>
      <div className="course-container">
        <div className="banner-wrapper">
          <Banner title={bannerData.title} backgroundImage={bannerData.image} />
        </div>
        <div className="flex flex-wrap gap-2 justify-center space-x-2 my-6 sm:my-8 lg:my-16 overflow-x-auto px-4">
          {tabsData.map((tab) => (
            <motion.button
              key={tab.tab}
              onClick={() => setActiveTab(tab.tab)}
              className={`min-w-[120px] sm:w-40 h-8 sm:h-9 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${activeTab === tab.tab
                  ? "bg-[#F9920A] text-white"
                  : "bg-transparent text-[#00334D] border border-[#F9920A] hover:bg-[#F9920A] hover:text-white"
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

        {renderContent()}
        <div className="mt-8 sm:mt-8 lg:mt-24">
          <div className="bg-[#00334D] py-8 sm:py-10">
            <div
              className="px-4 sm:px-10 md:px-20"
              dangerouslySetInnerHTML={{
                __html: whyChooseTitle
              }}
            />
            <div className="py-8 sm:py-10 px-4 sm:px-10 md:px-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {whyChooseItems.map((card, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#F9920A]/30 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.3 }}
                  >
                    <div className="pt-2 space-x-2 flex items-center justify-start">
                      <span className="ml-3">
                        <TickSVG />
                      </span>
                      <div dangerouslySetInnerHTML={{
                        __html: card.title
                      }} />
                    </div>
                    <div
                      className="text-gray-200 p-4 sm:p-5 ml-6 mr-4 text-sm sm:text-base"
                      dangerouslySetInnerHTML={{
                        __html: card.description
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <button
                className="text-white hover:text-[#00334D] bg-[#F9920A] hover:bg-[#fcfcfc] transition-all duration-300 text-sm px-4 py-2 rounded-full"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
        <div className="my-6 sm:my-8 lg:my-16">
          <ContactInformation />
        </div>
      </div>
    </>
  );
};

export default DetailedFreeCourses;
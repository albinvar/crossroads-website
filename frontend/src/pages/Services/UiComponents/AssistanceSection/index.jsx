import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apiService from "../../../../api/apiService";

const AssistanceSection = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [tabs, setTabs] = useState([]);
  const [listings, setListings] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: listings.filter((item) => item.tab === activeTab).length > 1,
    infinite: listings.filter((item) => item.tab === activeTab).length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: listings.filter((item) => item.tab === activeTab).length > 1,
    autoplaySpeed: 3000,
    afterChange: (current) => {
      const activeListings = listings.filter(
        (item) => item.tab === activeTab
      );
      setSelectedItem(activeListings[current]);
    },
    arrows: false,
  };

  useEffect(() => {
    apiService
      .getServiceDocumentationAssistanceTabs()
      .then((response) => {
        const fetchedTabs = response.data;
        setTabs(fetchedTabs);
        if (fetchedTabs.length > 0) {
          setActiveTab(fetchedTabs[0].id);
        }
      })
      .catch((error) => {
        console.error("Error fetching tabs:", error);
      });

    apiService
      .getServiceDocumentationAssistanceListings()
      .then((response) => {
        setListings(response.data);
        if (response.data.length > 0 && activeTab) {
          const activeListings = response.data.filter(
            (item) => item.tab === activeTab
          );
          setSelectedItem(activeListings[0] || null);
        }
      })
      .catch((error) => {
        console.error("Error fetching listings:", error);
      });
  }, []);

  useEffect(() => {
    if (activeTab && listings.length > 0) {
      const activeListings = listings.filter(
        (item) => item.tab === activeTab
      );
      setSelectedItem(activeListings[0] || null);
      if (sliderRef.current) sliderRef.current.slickGoTo(0);
    }
  }, [activeTab, listings]);

  const activeListings = listings.filter((item) => item.tab === activeTab);

  return (
    <div className="mx-auto pt-4 sm:pt-4 lg:pt-8 pb-8 sm:pb-8 lg:pb-12">
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-gray-100 flex flex-col">
          <div className="relative flex flex-col sm:flex-row justify-center sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 py-4 sm:py-6">
            <div className="hidden md:hidden lg:hidden xl:block -z-0 absolute w-[87%] h-24 left-0 top-0 rounded-br-lg bg-white">
            </div>
            <div className="hidden md:hidden lg:hidden xl:block z-20 absolute w-[13%] h-24 right-0 top-0 rounded-tl-xl bg-gray-100">
            </div>
            <div className="hidden md:hidden lg:hidden xl:block z-10 absolute w-[13%] h-24 right-0 top-0 bg-white">
            </div>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`z-30 w-full h-16 lg:w-64 lg:h-10 rounded-full border transition-colors duration-300 ${activeTab === tab.id
                  ? "bg-[#F9920A] text-white"
                  : "border-[#F9920A] text-[#F9920A] hover:bg-[#F9920A] hover:text-white"
                  }`}
                onClick={() => {
                  setActiveTab(tab.id);
                }}
                dangerouslySetInnerHTML={{ __html: tab.tab_name }}
              />
            ))}
          </div>

          <div className="flex-1 flex flex-col justify-start">
            {activeTab && activeListings.length > 0 ? (
              activeListings.length > 1 ? (
                <Slider ref={sliderRef} {...sliderSettings}>
                  {activeListings.map((item) => (
                    <div key={item.id} className="px-4">
                      <div className="py-8"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                      <div
                        className="leading-relaxed max-h-full sm:max-h-full lg:max-h-[400px]"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="px-4">
                  <div className="py-8"
                    dangerouslySetInnerHTML={{ __html: activeListings[0].title }}
                  />
                  <div
                    className="leading-relaxed max-h-full sm:max-h-full lg:max-h-[400px]"
                    dangerouslySetInnerHTML={{ __html: activeListings[0].description }}
                  />
                </div>
              )
            ) : (
              <div className="px-4">
                <p className="text-sm sm:text-base lg:text-base leading-relaxed text-[#00334D]">
                  No listings available for this tab.
                </p>
              </div>
            )}
          </div>

          {activeTab && activeListings.length > 1 && (
            <div className="pb-4 flex justify-center space-x-2">
<button
                className="text-[#00334D] w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center hover:text-[#F9920A] transition-colors duration-300"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 sm:w-6"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="text-[#00334D] w-6 sm:w-8 h-6 sm:h-8 flex items-center justify-center hover:text-[#F9920A] transition-colors duration-300"
                onClick={() => sliderRef.current.slickNext()}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 sm:w-6"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="bg-white flex items-center justify-center h-full">
            {selectedItem && selectedItem.image ? (
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center text-[#00334D]">
                No image available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistanceSection;
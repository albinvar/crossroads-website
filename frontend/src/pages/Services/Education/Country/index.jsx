import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router"; 
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Banner from "../../../../components/Banner";
import apiService from "../../../../api/apiService";
import { ArrowRight } from "../../../../components/Icons";

const stripHtml = (html) => {
  if (!html || typeof html !== "string") return "";
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const Country = () => {
  const [bannerData, setBannerData] = useState({
    title: "",
    image: "",
  });
  const [countryData, setCountryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    apiService
      .getServiceCountryBanner()
      .then((response) => {
        const data = response.data[0] || {};
        setBannerData({
          title: stripHtml(data.title || "Explore Study Destinations"),
          image: data.image || "",
        });
      })
      .catch((err) => {
        setError("Failed to fetch banner data");
        console.error("Error fetching banner:", err);
      });

    apiService
      .getServiceDestinationListing()
      .then((response) => {
        const fetchedData = response.data.map((item) => ({
          name: stripHtml(item.destination_name || "Unnamed Destination"),
          flag: item.destination_image || "",
          description: stripHtml(item.destination_description || "No description available"),
          path: `/services/education/country/${item.slug || ""}`,
        }));
        setCountryData(fetchedData);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch country data");
        setLoading(false);
        console.error("Error fetching countries:", err);
      });
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: countryData.length > 2,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: countryData.length > 2,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const chunkArray = (array, size) => {
    if (array.length <= size) {
      return [array];
    }
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const chunkSize = countryData.length <= 8 ? countryData.length : 8;
  const slides = chunkArray(countryData, chunkSize);

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const renderCountryContent = () => {
    if (countryData.length <= 2) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {countryData.map((country, index) => (
            <Link to={country.path} key={index}>
              <div
                className="relative h-64 sm:h-72 lg:h-72 bg-gray-100 rounded-xl shadow-lg overflow-hidden group transition-all duration-300"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute top-4 right-4 z-10">
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 23 23"
                    fill="none"
                    className="transition-all duration-300 group-hover:fill-white fill-[#00334D] group-hover:rotate-180"
                  >
                    <path d="M17.3249 22.9103L17.3458 6.13748L0.572996 6.15845L0.58507 1.00038L22.5343 0.949003L22.4829 22.8982L17.3249 22.9103Z" />
                  </svg>
                </div>

                <div
                  className={`absolute inset-0 flex items-center space-x-4 justify-center p-4 sm:p-6 transition-opacity duration-300 ${
                    hoveredCard === index ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <img
                    src={country.flag}
                    alt={`${country.name} flag`}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full mb-4 border-4 border-[#00334D]/10"
                    loading="lazy"
                  />
                  <h3 className="text-xl sm:text-2xl text-[#00334D]">
                    {country.name}
                  </h3>
                </div>

                <div
                  className={`absolute inset-0 flex flex-col p-4 sm:p-6 bg-[#00334D] text-white transition-opacity duration-300 ${
                    hoveredCard === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full mr-2 sm:mr-3 border-2 border-white"
                    />
                    <h3 className="text-xl sm:text-2xl text-[#fcfcfc]">
                      {country.name}
                    </h3>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: country.description }} className="mb-4 sm:mb-6 line-clamp-4" />
                  <div className="mt-auto">
                    <Link
                      to={country.path}
                      className="text-[#F9920A] font-medium flex items-center hover:underline text-sm sm:text-base lg:text-sm"
                    >
                      <span className="mr-2">Know more</span>
                      <ArrowRight className="fill-primary-orange" />
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      );
    }

    return (
      <>
        <Slider ref={sliderRef} {...sliderSettings}>
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="px-2">
              <div className="grid grid-cols-4 gap-4 sm:gap-6 lg:grid-rows-2">
                {slide.map((country, index) => (
                  <Link to={country.path} key={`${slideIndex}-${index}`}>
                    <div
                      className="relative h-64 sm:h-72 lg:h-72 bg-gray-100 rounded-xl shadow-lg overflow-hidden group transition-all duration-300"
                      onMouseEnter={() =>
                        setHoveredCard(slideIndex * 8 + index)
                      }
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className="absolute top-4 right-4 z-10">
                        <svg
                          width="15"
                          height="16"
                          viewBox="0 0 23 23"
                          fill="none"
                          className="transition-all duration-300 group-hover:fill-white fill-[#00334D] group-hover:rotate-180"
                        >
                          <path d="M17.3249 22.9103L17.3458 6.13748L0.572996 6.15845L0.58507 1.00038L22.5343 0.949003L22.4829 22.8982L17.3249 22.9103Z" />
                        </svg>
                      </div>

                      <div
                        className={`absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${
                          hoveredCard === slideIndex * 8 + index
                            ? "opacity-0"
                            : "opacity-100"
                        }`}
                      >
                        <img
                          src={country.flag}
                          alt={`${country.name} flag`}
                          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full mb-4 border-4 border-[#00334D]/10"
                          loading="lazy"
                        />
                        <h3 className="text-xl sm:text-2xl font-bold text-[#00334D]">
                          {country.name}
                        </h3>
                      </div>

                      <div
                        className={`absolute inset-0 flex flex-col p-4 sm:p-6 bg-[#00334D] text-white transition-opacity duration-300 ${
                          hoveredCard === slideIndex * 8 + index
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                      >
                        <div className="flex items-center mb-4">
                          <img
                            src={country.flag}
                            alt={`${country.name} flag`}
                            className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full mr-2 sm:mr-3 border-2 border-white"
                          />
                          <h3 className="text-lg sm:text-xl font-bold">
                            {country.name}
                          </h3>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: country.description }} className="mb-4 sm:mb-6 line-clamp-4" />
                        <div className="mt-auto">
                          <Link
                            to={country.path}
                            className="text-[#F9920A] font-medium flex items-center hover:underline text-sm sm:text-base lg:text-sm"
                          >
                            <span className="mr-2">Know more</span>
                            <ArrowRight className="fill-primary-orange" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center mt-8 space-x-4">
          <button
            className="transition-all duration-300"
            style={{ color: "#00334D" }}
            onClick={goToPrev}
            aria-label="Previous Slide"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            className="transition-all duration-300"
            style={{ color: "#00334D" }}
            onClick={goToNext}
            aria-label="Next Slide"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </>
    );
  };

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-8">{error}</div>;
  }

  return (
    <>
      <Banner
        title={bannerData.title}
        backgroundImage={bannerData.image}
        buttonText="Apply Now"
        showApplyButton={true}
      />

      <section className="pt-12 sm:pt-12 lg:pt-16 pb-20 sm:pb-20 lg:pb-32 px-4 sm:px-4 lg:px-28">
        <div className="mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              <span className="text-[#00334D]">Know</span>
              <span className="text-[#F9920A]"> your destination</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Begin your academic journey in these welcoming study destinations.
            </p>
          </div>

          <div className="relative">
            {countryData.length > 0 ? (
              renderCountryContent()
            ) : (
              <div className="text-center text-red-500">
                No data available for the carousel.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Country;
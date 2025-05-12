import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CountryCard from "../../../../components/CountryCard";
import apiService from "../../../../api/apiService";
import Map from "../../../../components/Map";
import FreeEducationCourses from "../../../../components/UiComponents/FreeEducationCourses";
import { Link } from "react-router"; 

const FreeEducation = ({ freeEducationCourseCase = true }) => {
  const [countries, setCountries] = useState([]);
  const [freeEducationData, setFreeEducationData] = useState(null);
  const [error, setError] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const titleResponse = await apiService.getFreeEducationTitle();
        const titleData = titleResponse.data[0];
        if (isMounted) {
          setFreeEducationData({
            title: titleData.title || "",
            description: titleData.description || "",
          });
        }
        const countriesResponse = await apiService.getFreeEducationCountries();
        const countryData = countriesResponse.data.map((country) => ({
          name: country.country_name,
          flagSrc: country.country_image,
          borderOrientation: getBorderOrientation(country.order),
          link: country.link, 
        }));
        if (isMounted) {
          setCountries(countryData);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        if (isMounted) {
          setError("Failed to load education information");
          setFreeEducationData({
            title: "",
            description: "",
          });
          setCountries([]);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  const getBorderOrientation = (order) => {
    const orientations = ["to bottom", "to right", "to top", "45deg", "135deg"];
    return orientations[order % orientations.length] || "to bottom";
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();

  if (!freeEducationData || countries === null) {
    return null;
  }

  return (
    <>
      <div className="pb-16 bg-cover bg-center relative">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 justify-center">
          <section className="hidden lg:block py-8 sm:py-10 lg:py-12 -z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-0">
                <div className="relative shadow-[8px_0_15px_-3px_rgba(0,0,0,0.1)] p-6 sm:p-8 order-1">
                  <div className="absolute bg-white w-full h-6 -top-3 right-0" />
                  <div
                    className="text-center md:text-end"
                    dangerouslySetInnerHTML={{
                      __html: freeEducationData.title,
                    }}
                  />
                  <div className="absolute bg-white w-full h-6 -bottom-3 right-0" />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center items-center md:items-start text-center md:text-start order-2">
                  <div
                    className="mb-4 sm:mb-6"
                    dangerouslySetInnerHTML={{
                      __html: freeEducationData.description,
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="block lg:hidden py-8 sm:py-10 lg:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div
                    className="text-center md:text-end"
                    dangerouslySetInnerHTML={{
                      __html: freeEducationData.title,
                    }}
                  />
                </div>
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center md:items-start text-center md:text-start">
                  <div
                    className="mb-4 sm:mb-6"
                    dangerouslySetInnerHTML={{
                      __html: freeEducationData.description,
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          {countries.length > 0 ? (
            <>
              <div className="relative">
                <div className="hidden lg:block absolute -top-20 left-0 w-full h-full -z-0">
                  <Map width="100%" height="500px" fill="#f0f0f0" />
                </div>
                <div className="hidden lg:grid z-10 grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 py-8 justify-items-center">
                  {countries.map((country, index) => (
                    <Link
                      key={index}
                      to={`/free-education/${country.link}`}
                      className="z-30"
                    >
                      <CountryCard
                        name={country.name}
                        flagSrc={country.flagSrc}
                        borderOrientation={country.borderOrientation}
                      />
                    </Link>
                  ))}
                </div>

                <div className="block lg:hidden z-10 -mt-2 -mb-8">
                  <Slider ref={sliderRef} {...sliderSettings}>
                    {countries.map((country, index) => (
                      <div key={index} className="px-2">
                        <Link
                          to={`/free-education/${country.link}`}
                          className="z-30"
                        >
                          <CountryCard
                            name={country.name}
                            flagSrc={country.flagSrc}
                            borderOrientation={country.borderOrientation}
                          />
                        </Link>
                      </div>
                    ))}
                  </Slider>
                  <div className="flex justify-center mt-10 gap-4">
                    <button
                      onClick={goToPrev}
                      aria-label="Previous Slide"
                      className="p-2"
                    >
                      <FaChevronLeft className="w-6 h-6 text-gray-400 hover:text-primary-dark transition-all duration-300" />
                    </button>
                    <button
                      onClick={goToNext}
                      aria-label="Next Slide"
                      className="p-2"
                    >
                      <FaChevronRight className="w-6 h-6 text-gray-400 hover:text-primary-dark transition-all duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {error && (
                <div className="text-red-500 text-center mb-4">{error}</div>
              )}
              <div className="text-center py-8 text-gray-500">
                No countries available at this time.
              </div>
            </>
          )}
        </div>
      </div>
      {freeEducationCourseCase && (
        <section>
          <FreeEducationCourses />
        </section>
      )}
    </>
  );
};

export default FreeEducation;
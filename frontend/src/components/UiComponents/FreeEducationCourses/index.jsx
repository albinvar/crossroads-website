import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import apiService from "../../../api/apiService";
import { Link } from "react-router"; 
import { ArrowRight } from "../../Icons";

const FreeEducationCourses = () => {
  const sliderRef = useRef(null);
  const [coursesData, setCourseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiService.getFreeEducationCourses()
      .then(response => {
        const data = response.data.map(item => ({
          imageSrc: item.course_image,
          title: item.title,
          description: item.description,
          link: item.link || "", 
        }));
        setCourseData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching courses data:', err);
        setError('Failed to load courses information');
        setCourseData([]);
        setLoading(false);
      });
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { adaptiveHeight: true } },
      { breakpoint: 768, settings: { adaptiveHeight: true } },
    ],
  };

  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();

  if (loading) {
    return <div className="text-center py-16">Loading Courses Data...</div>;
  }

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white flex items-center min-h-[auto] md:min-h-[600px] w-full">
      <div className="w-full px-0">
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {coursesData.length > 0 ? (
          <Slider ref={sliderRef} {...sliderSettings} className="w-full">
            {coursesData.map((card, index) => (
              <div key={index} className="w-full px-0">
                <div className="flex flex-col md:flex-row w-full h-auto md:h-[500px] lg:h-[600px] bg-white">
                  <div className="w-full md:w-1/2 h-[300px] sm:h-[300px] md:h-full">
                    <img
                      src={card.imageSrc}
                      alt="Course Image"
                      className="w-full h-full object-cover"
                      onError={(e) => (e.target.src = "https://via.placeholder.com/600x800")}
                    />
                  </div>
                  <div
                    className="relative w-full md:w-1/2 px-6 sm:px-6 md:px-24 py-8 sm:py-8 md:py-28 flex flex-col justify-between"
                    style={{ backgroundColor: '#00334D' }}
                  >
                    <div
                      className="absolute top-0 left-0 w-1/2 h-6 sm:h-8 md:h-12"
                      style={{ backgroundColor: '#F9920A' }}
                    />
                    <div
                      className="absolute bottom-0 right-0 w-1/2 h-6 sm:h-8 md:h-12"
                      style={{ backgroundColor: '#F9920A' }}
                    />
                    <div className="flex flex-col flex-1">
                      <div
                        className="mb-6"
                        style={{ color: '#F9920A' }}
                        dangerouslySetInnerHTML={{ __html: card.title }}
                      />
                      <div
                        className="mb-6"
                        dangerouslySetInnerHTML={{ __html: card.description }}
                      />
                    </div>
                    {card.link ? (
                      <Link
                        to={`/services/education/course/${card.link}`}
                        className="group flex items-center"
                      >
                        <span className="mr-2 text-lg lg:text-[14px] font-medium text-primary-orange group-hover:text-gray-50 transition-colors duration-300">Read More</span>
                        <ArrowRight
                          className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 fill-primary-orange group-hover:fill-gray-50"
                        />
                      </Link>
                    ) : (
                      <span className="text-gray-400">No details available</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No courses available at this time.
          </div>
        )}
        {coursesData.length > 0 && (
          <div className="flex justify-center mt-10 sm:mt-10 lg:mt-14 gap-4 sm:gap-6">
            <button
              onClick={goToPrev}
              aria-label="Previous Slide"
            >
              <FaChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-400 hover:text-primary-dark transition-all duration-300" />
            </button>
            <button
              onClick={goToNext}
              aria-label="Next Slide"
            >
              <FaChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-400 hover:text-primary-dark transition-all duration-300" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FreeEducationCourses;
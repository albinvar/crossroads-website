import React, { useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurCourses = ({ coursesData }) => {
  const sliderRef = useRef(null);
  const { title = "<h2>Our Courses</h2>", courses = [] } = coursesData || {};

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
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

  if (!courses || courses.length === 0) {
    return (
      <motion.div
        className="text-center text-red-500 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        No courses available for this destination.
      </motion.div>
    );
  }

  return (
    <section className="">
      <motion.div
        className="mb-8 text-center p-2"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <div dangerouslySetInnerHTML={{ __html: title }} />
      </motion.div>
      <div className="values-carousel max-w-full mx-2">
        <Slider ref={sliderRef} {...sliderSettings}>
          {courses
            .sort((a, b) => a.order - b.order)
            .map((course, index) => (
              <div
                key={index}
                className="scale-[1] hover:scale-[1.05] transition-all duration-300 p-4"
              >
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="h-full text-left value-card rounded-lg overflow-hidden">
                    <div className="relative">
                      <img
                        src={course.image}
                        alt={`${course.title.replace(/<[^>]+>/g, "")} Image`}
                        className="rounded-lg transition-all duration-300 w-full h-48 object-cover"
                        onError={(e) => {
                          e.target.src =
                            "https://via.placeholder.com/300x200?text=Course+Image+Not+Found";
                          console.error(`Failed to load image: ${course.image}`);
                        }}
                      />
                    </div>
                    <div className="py-4 flex flex-col flex-grow">
                      <div
                        className="text-lg font-semibold"
                        dangerouslySetInnerHTML={{ __html: course.title }}
                      />
                      <div
                        className="mt-2 flex-grow"
                        dangerouslySetInnerHTML={{ __html: course.description }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
        </Slider>
        <div className="custom-arrows flex justify-center mt-2 sm:mt-2 lg:mt-0">
          <div className="flex justify-center mt-4 sm:mt-6 gap-4 sm:gap-6">
            <button onClick={goToPrev} aria-label="Previous Slide">
              <FaChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-400 hover:text-primary-dark transition-all duration-300" />
            </button>
            <button onClick={goToNext} aria-label="Next Slide">
              <FaChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-400 hover:text-primary-dark transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router'; 
import Slider from 'react-slick';
import Button from '../../../../components/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apiService from '../../../../api/apiService'; 

const Hero = ({ slides, setSlides }) => {
  useEffect(() => {
    apiService.getHomeBanner()
      .then(response => {
        const transformedSlides = response.data
          .map(banner => ({
            bg: banner.image,
            title: banner.title,
            desc: banner.description,
            order: banner.order,
            link: banner.link, 
          }))
          .sort((a, b) => a.order - b.order);
        setSlides(transformedSlides);
      })
      .catch(error => {
        console.error('Error fetching home banner data:', error);
      });
  }, [setSlides]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    customPaging: () => (
      <div className="w-3 h-3 bg-white rounded-full opacity-50 hover:opacity-100 transition-opacity cursor-pointer" />
    ),
    appendDots: dots => (
      <div style={{ bottom: '20px' }}>
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative overflow-hidden min-h-[60vh] md:min-h-[85vh]">
      {slides && slides.length > 0 && (
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="outline-none">
              <div
                className="relative bg-cover bg-center flex items-center min-h-[60vh] md:min-h-[85vh]"
                style={{ backgroundImage: `url(${slide.bg})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20" />
                <motion.div
                  className="relative z-10 px-4 sm:px-8 md:px-16 text-white w-full max-w-7xl mx-auto py-12 md:py-20"
                  initial="hidden"
                  animate="visible"
                  key={index}
                >
                  <div className="text-left max-w-3xl">
                    <motion.div
                      className="leading-tight mb-4"
                      variants={textVariants}
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                    <motion.div
                      className="mt-4 max-w-lg"
                      variants={textVariants}
                      transition={{ delay: 0.2 }}
                      dangerouslySetInnerHTML={{ __html: slide.desc }}
                    />
                    <motion.div
                      className="mt-8 flex space-x-4"
                      variants={textVariants}
                      transition={{ delay: 0.4 }}
                    >
                        <Button
                          label="Apply Now"
                          className="text-[#fcfcfc] hover:text-primary-dark text-sm font-light bg-primary-dark hover:bg-white rounded-full w-32 h-10 transition-colors duration-300"
                        />
                      <Link to={`/services/education/course/${slide.link}`} className='flex items-center justify-center text-white hover:text-primary-orange text-sm font-light bg-primary-orange hover:bg-white rounded-full w-32 h-10 transition-colors duration-300'>
                        Learn More
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Hero;
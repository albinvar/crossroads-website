import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import { ArrowDown } from '../../../../../../../components/Icons';

const NeedQuality = ({ QualityMain, quality }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const variants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const arrowVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 bg-[#00334D] px-4 md:px-16 py-8 md:py-16 flex flex-col justify-start">
        <div
          className="mb-4 md:mb-6"
          dangerouslySetInnerHTML={{ __html: QualityMain.title }}
        />
        <div
          className="mb-4 md:mb-6"
          style={{ lineHeight: '1.5' }}
          dangerouslySetInnerHTML={{ __html: QualityMain.description }}
        />
        {QualityMain.list.length > 0 ? (
          QualityMain.list.map((item, index) => (
            <div
              key={index}
              className={`my-2 md:my-4 rounded-lg ${activeIndex === index ? 'bg-primary-orange/30 shadow-lg p-2' : 'bg-transparent'}`}
            >
              <motion.button
                className="w-full text-left text-base md:text-lg font-semibold flex justify-between items-center"
                onClick={() => setActiveIndex(index === activeIndex ? null : index)}
              >
                <div className="flex justify-start items-center">
                  <FontAwesomeIcon
                    icon={faCheck}
                    size="xs"
                    className={`bg-[#F9920A] text-white mr-2 relative p-1 rounded-full ${activeIndex === index ? 'ml-0' : 'ml-2'}`}
                  />
                  <div
                    dangerouslySetInnerHTML={{ __html: item.listTitle }}
                    className="pl-2"
                    style={{ lineHeight: '1.5' }}
                  />
                </div>
                <motion.div
                  variants={arrowVariants}
                  animate={activeIndex === index ? 'open' : 'closed'}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowDown
                    fill={activeIndex === index ? '#F9920D' : '#F9920A'}
                  />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    variants={variants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="overflow-hidden"
                  >
                    <div className="flex items-start justify-start space-x-2">
                      <div
                        className="text-xs md:text-sm pt-2 pl-9"
                        style={{ lineHeight: '1.5' }}
                        dangerouslySetInnerHTML={{ __html: item.listDescription }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-300">No reasons to choose this country available.</p>
        )}
      </div>
      <div
        className="w-full lg:w-1/2 flex items-center justify-center bg-cover bg-center bg-no-repeat py-8 md:py-0"
        style={{ backgroundImage: `url(${QualityMain.image || 'https://via.placeholder.com/800x600'})` }}
      >
        <motion.div
          className="bg-primary-dark bg-opacity-40 p-6 md:p-8 rounded-xl shadow-lg text-left w-11/12 md:max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: quality.content }}
          />
          <Link
            to="/contact-us"
            className="mt-2 bg-primary-orange hover:bg-[#fcfcfc] text-white hover:text-primary-dark text-sm font-medium py-2 px-4 rounded-full transition-all duration-300 ease-in-out inline-block"
          >
            For more details click here
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default NeedQuality;
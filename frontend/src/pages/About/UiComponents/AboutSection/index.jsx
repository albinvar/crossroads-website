import React, { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from '../../../../components/Icons';
import apiService from '../../../../api/apiService';

const AboutSection = ({ aboutData, setAboutData }) => {
  useEffect(() => {
    apiService.getAboutHighlights()
      .then(response => {
        const data = response.data;
        const about = Array.isArray(data) ? data[0] : data;
        const transformedData = {
          title: about.title,
          subtitle: about.subtitle,
          description: about.description,
          link: about.link,
        };
        setAboutData(transformedData);
      })
      .catch(error => {
        console.error('Error fetching about highlights:', error);
      });
  }, [setAboutData]);

  return (
    <>
      <section className="hidden lg:block py-8 sm:py-8 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {aboutData && (
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-0">
              <div className="relative shadow-[8px_0_15px_-3px_rgba(0,0,0,0.1)] md:shadow-[8px_0_15px_-3px_rgba(0,0,0,0.1)] p-6 sm:p-8 order-1">
                <div className="absolute bg-white w-full h-6 -top-3 right-0"></div>
                <div
                  className="text-center md:text-end"
                  dangerouslySetInnerHTML={{ __html: aboutData.title }}
                />
                <div
                  className="text-center md:text-end mb-6 sm:mb-8"
                  dangerouslySetInnerHTML={{ __html: aboutData.subtitle }}
                />
                <div className="absolute bg-white w-full h-6 -bottom-3 right-0"></div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center items-center md:items-start text-center md:text-start order-2">
                <div
                  className="mb-4 sm:mb-6"
                  dangerouslySetInnerHTML={{ __html: aboutData.description }}
                />
                <div>
                  <Link
                    to={aboutData.link}
                    className="flex items-center justify-center md:justify-start text-primary-dark hover:text-primary-dark-hover transition-colors duration-300"
                  >
                    <span className="font-medium text-xs sm:text-sm md:text-md lg:text-md mr-2">Read More</span>
                    <ArrowRight className="transition-colors duration-300 group-hover:fill-primary-dark-hover/80 w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="block lg:hidden -mt-2 pb-10 sm:pb-10 lg:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {aboutData && (
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="p-4 sm:p-6 lg:p-8">
                <div
                  className="text-center md:text-end"
                  dangerouslySetInnerHTML={{ __html: aboutData.title }}
                />
                <div
                  className="text-center md:text-end mt-2 sm:mt-4"
                  dangerouslySetInnerHTML={{ __html: aboutData.subtitle }}
                />
              </div>
              <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center md:items-start text-center md:text-start">
                <div
                  className="mb-4 sm:mb-6"
                  dangerouslySetInnerHTML={{ __html: aboutData.description }}
                />
                <div>
                  <Link
                    to={aboutData.link}
                    className="flex items-center justify-center md:justify-start text-primary-dark hover:text-primary-dark-hover transition-colors duration-300"
                  >
                    <span className="text-lg lg:text-md font-medium mr-2">Read More</span>
                    <ArrowRight className="transition-colors duration-300 group-hover:fill-primary-dark-hover/80 w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AboutSection;
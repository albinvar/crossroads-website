import React, { useState, Suspense, lazy } from 'react';
import LottieLoader from '../../components/LottieLoader';
import ServiceHighlights from '../Services/UiComponents/ServiceHighlights';
import AboutSection from '../About/UiComponents/AboutSection';
import PopularCourses from './UiComponents/PopularCourses';
import FreeEducation from './UiComponents/FreeEducation';
import NewsEventsSection from './UiComponents/NewsEventsSection';
import TestimonialSection from './UiComponents/TestimonialSection';
import ContactInformation from '../../components/UiComponents/ContactInformation';
const Hero = lazy(() => import('./UiComponents/Hero'));

const Home = () => {
  const [slides, setSlides] = useState([]);
  const [aboutData, setAboutData] = useState(null);
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [newsItems, setNewsItems] = useState([]);

  return (
    <Suspense fallback={<LottieLoader />}>
      <div>
        <Hero slides={slides} setSlides={setSlides} setError={setError} />
        <ServiceHighlights services={services} setServices={setServices} />
        <AboutSection aboutData={aboutData} setAboutData={setAboutData} />
        <PopularCourses />
        <FreeEducation />
        <NewsEventsSection 
          newsItems={newsItems} 
          setNewsItems={setNewsItems} 
          filterType="upcoming" 
          isSlider={false} 
          showMoreButton={true} 
        />
        <TestimonialSection />
        <div className='px-4 sm:px-4 lg:px-28 mb-16 sm:mb-16 lg:mb-36 mt-14 sm:mt-14 lg:mt-20'>
          <ContactInformation />
        </div>
        {error && <div className="text-center text-red-500 py-4">Error: {error}</div>}
      </div>
    </Suspense>
  );
};

export default Home;
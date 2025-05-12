import React, { useState, Suspense, lazy } from 'react';
import LottieLoader from '../../components/LottieLoader';
import NewsEvents from '../Home/UiComponents/NewsEventsSection';
import TestimonialSection from '../Home/UiComponents/TestimonialSection';
import ContactInformation from '../../components/UiComponents/ContactInformation';
import MissionVision from './UiComponents/MissionVision';
import TailorGuidance from './UiComponents/TailorGuidance';
import OurValues from './UiComponents/OurValues';
import WhyCrossroads from './UiComponents/WhyCrossroads';
const BannerSection = lazy(() => import('./UiComponents/BannerSection'));

const About = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [error, setError] = useState(null);

    return (
        <Suspense fallback={<LottieLoader />}>
            <div>
                <BannerSection />
                <div className="px-4 sm:px-4 lg:px-28 my-10 sm:my-10 lg:my-16">
                    <TailorGuidance />
                </div>
                <div className="px-4 sm:px-4 lg:px-28 my-10 sm:my-10 lg:my-10">
                    <WhyCrossroads />
                </div>
                <div className="px-4 sm:px-4 lg:px-28 my-10 sm:my-10 lg:my-10">
                    <MissionVision />
                </div>
                <div className="my-6 sm:my-6 lg:my-14">
                    <OurValues />
                </div>
                <NewsEvents newsItems={newsItems} setNewsItems={setNewsItems} />
                <TestimonialSection />
                <div className="px-4 sm:px-4 lg:px-28 mb-16 sm:mb-16 lg:mb-36 mt-10 sm:mt-10 lg:mt-20">
                    <ContactInformation />
                </div>
                {error && <div className="text-center text-red-500 py-4">Error: {error}</div>}
            </div>
        </Suspense>
    );
};

export default About;
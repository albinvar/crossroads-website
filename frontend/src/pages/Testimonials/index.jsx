import React, { useState, Suspense, lazy } from 'react';
import LottieLoader from '../../components/LottieLoader';
import ContactInformation from '../../components/UiComponents/ContactInformation';
import HearTheirStories from './UiComponents/HearTheirStories';
const BannerSection = lazy(() => import('./UiComponents/BannerSection'));

const Testimonials = () => {
    const [error, setError] = useState(null);

    return (
        <Suspense fallback={<LottieLoader />}>
            <div>
                <BannerSection />
                <div className="px-4 sm:px-4 lg:px-28 mb-16 sm:mb-16 lg:mb-20 mt-14 sm:mt-14 lg:mt-16">
                    <HearTheirStories />
                </div>
                <div className="px-4 sm:px-4 lg:px-28 mb-16 sm:mb-16 lg:mb-36 mt-14 sm:mt-14 lg:mt-20">
                    <ContactInformation />
                </div>
                {error && <div className="text-center text-red-500 py-4">Error: {error}</div>}
            </div>
        </Suspense>
    );
};

export default Testimonials;
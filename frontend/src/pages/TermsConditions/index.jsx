import React from "react";
import TermsConditionsSection from "./UiComponents/TermsConditionSection";
import ContactInformation from "../../components/UiComponents/ContactInformation";
import BannerSection from "./UiComponents/BannerSection";

const TermsAndConditions = () => {
    return (
        <>
            <BannerSection />
            <div className='px-4 sm:px-4 lg:px-28 mt-14 sm:mt-14 lg:mt-16'>
                <TermsConditionsSection />
            </div>
            <div className='px-4 sm:px-4 lg:px-28 mb-16 sm:mb-16 lg:mb-36 mt-14 sm:mt-14 lg:mt-16'>
                <ContactInformation />
            </div>
        </>
    );
};

export default TermsAndConditions;
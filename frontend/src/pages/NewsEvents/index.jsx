import React from 'react'
import BannerSection from './UiComponents/BannerSection'
import ContactInformation from '../../components/UiComponents/ContactInformation'
import Events from './UiComponents/Events'

const NewsEvents = () => {
  return (
    <>
      <BannerSection />
      <div className="px-4 sm:px-4 lg:px-28 mt-14 sm:mt-14 lg:mt-20">
      <Events/>
      </div>
      <div className='px-4 sm:px-4 lg:px-28 mb-16 sm:mb-16 lg:mb-36 mt-8 sm:mt-8 lg:mt-20'>
        <ContactInformation />
      </div>
    </>
  )
}

export default NewsEvents
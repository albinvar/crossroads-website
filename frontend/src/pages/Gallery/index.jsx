import React from 'react'
import BannerSection from './UiComponents/BannerSection'
import GalleryMain from './UiComponents/GalleryMain'
import ContactInformation from '../../components/UiComponents/ContactInformation'

const Gallery = () => {
  return (
    <>
      <BannerSection />
      <div className="px-4 sm:px-4 lg:px-28 my-10 sm:my-10 lg:my-16">
        <GalleryMain />
      </div>
      <div className='px-4 sm:px-4 lg:px-28 mb-16 sm:mb-16 lg:mb-36 mt-14 sm:mt-14 lg:mt-16'>
          <ContactInformation />
        </div>
    </>
  )
}

export default Gallery
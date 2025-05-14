import React from 'react'
import BannerSection from './UiComponents/BannerSection'
import BlogPost from './UiComponents/BlogPost'
import ContactInformation from '../../components/UiComponents/ContactInformation'

const Blogs = () => {
  return (
    <>
      <BannerSection />
      <div className="px-4 sm:px-4 lg:px-28">
        <BlogPost />
      </div>
      <div className='px-4 sm:px-4 lg:px-28 mb-16 sm:mb-16 lg:mb-36 mt-14 sm:mt-14 lg:mt-20'>
        <ContactInformation />
      </div>
    </>
  )
}

export default Blogs
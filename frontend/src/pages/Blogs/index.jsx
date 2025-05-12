import React from 'react'
import BannerSection from './UiComponents/BannerSection'
import BlogPost from './UiComponents/BlogPost'

const Blogs = () => {
  return (
    <>
      <BannerSection />
      <div className="px-4 sm:px-4 lg:px-28">
        <BlogPost/>
      </div>
    </>
  )
}

export default Blogs
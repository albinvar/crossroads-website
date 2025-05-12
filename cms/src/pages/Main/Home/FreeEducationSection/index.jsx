import React from 'react'
import TitleSection from './TitleSection'
import CountryListing from './CountryListing'
import EducationListing from './EducationListing'

const FreeEducationSection = () => {
  return (
    <div className='space-y-8'>
      <TitleSection/>
      <CountryListing/>
      <EducationListing/>
    </div>
  )
}

export default FreeEducationSection
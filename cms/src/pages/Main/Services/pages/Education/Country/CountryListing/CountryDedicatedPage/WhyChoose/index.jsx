import React from 'react'
import TitleSection from './TitleSection'
import WhyChooseListSection from './WhyChooseListSection'
import IntakeSection from './IntakeSection'

const WhyChoose = () => {
  return (
    <div className='space-y-8'>
        <TitleSection/>
        <WhyChooseListSection/>
        <IntakeSection/>
    </div>
  )
}

export default WhyChoose
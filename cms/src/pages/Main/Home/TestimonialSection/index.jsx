import React from 'react'
import ImageWithContent from './ImageWithContent'
import VideoWithContent from './VideoWithContent'
import TitleSection from './TitleSection'

const TestimonialSection = () => {
    return (
        <div className='space-y-8'>
            <TitleSection />
            <ImageWithContent/>
            <VideoWithContent/>
        </div>
    )
}

export default TestimonialSection
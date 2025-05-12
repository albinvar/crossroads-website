import React from 'react'
import BannerSection from './UiComponents/Banner'
import ContactInformation from '../../components/UiComponents/ContactInformation'
import InfoHub from './UiComponents/InfoHub'

const mapLocation = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.960156463408!2d76.30966471474592!3d10.014455192336135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d2040ea1321%3A0x882574aff9e3e896!2sOberon+Mall!5e0!3m2!1sen!2sin!4v1698765432109!5m2!1sen!2sin";

const Contact = () => {
  return (
    <>
      <BannerSection />
      <div className='px-4 sm:px-4 lg:px-28 mt-14 sm:mt-14 lg:mt-20'>
        <InfoHub />
      </div>
      <div className='px-4 sm:px-4 lg:px-28 mb-16 sm:mb-16 lg:mb-20 mt-14 sm:mt-14 lg:mt-20'>
        <ContactInformation />
      </div>
      <div className='px-4 sm:px-4 lg:px-0 mb-16 sm:mb-16 lg:mb-36'>
        <div className="w-full h-[500px] relative">
          <iframe
            src={mapLocation}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Crossroads Career Consultants Location"
            className="filter grayscale-0 hover:grayscale-0 transition-all duration-300"
          ></iframe>

          <a
            href="https://www.google.com/maps/place/Oberon+Mall/@10.0144552,76.3096647,17z/data=!3m1!4b1!4m5!3m4!1s0x3b080d2040ea1321:0x882574aff9e3e896!8m2!3d10.0144552!4d76.3118534"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10"
          ></a>

          <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-4 rounded-lg max-w-xs shadow-lg z-20">
            <div className="flex items-start">
              <div className='ml-2 flex items-center justify-start'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-5 fill-primary-orange"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
              </svg>
              </div>
              <div className='relative -top-1'>
                <h3 className="text-lg font-semibold text-[#00334D]">Our Location</h3>
                <p className="text-gray-600 text-sm">
                  Crossroads Career Consultants Pvt. Ltd, Level 3, Oberon Mall,
                  Edapally, Kochi, Kerala 682024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
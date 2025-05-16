import React, { useState } from 'react';
import { useLocation, Link } from "react-router";
import logo from "../../assets/images/logo-footer.webp";
import SocialMedia from '../SocialMedia';
import shadow from "../../assets/images/shadow.webp";
import { Like, Telephone } from '../Icons';
import Modal from '../Modal';
import { AnimatePresence } from 'framer-motion';

const servicesData = {
  title: 'Services',
  links: [
    { label: 'Education', href: '/services/education/find-a-course' },
    { label: 'Job Assistance', href: '' },
    { label: 'Documentation & Travel Assistance', href: '/services/documentation-assistance' },
    { label: 'Immigration', href: '' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact Us', href: '/contact-us' },
  ],
};

const Footer = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <>

      <footer className="bg-[#00334D] mt-8 sm:mt-8 lg:mt-20">
        <div className="relative -top-14 bg-white mx-0 md:mx-20 lg:mx-28 rounded-none sm:rounded-none md:rounded-full lg:md:rounded-full xl:md:rounded-full shadow-xl">
          <div className="py-8 px-4 md:px-20">
            <div className="container mx-auto flex flex-col md:flex-col lg:flex-row justify-between items-center px-4">
              <span className="text-gray-950 text-xl md:text-xl lg:text-2xl xl:text-xl font-bold font-two text-center md:text-center lg:text-left uppercase">
                Any Question Or Remarks?
              </span>
              <div className="flex items-center space-x-4 mt-4 md:mt-4 lg:mt-0">
                <button
                  className="bg-[#F9920A] hover:bg-primary-dark text-gray-100 py-3 px-8 rounded-full transition-all duration-300 shadow-xl shadow-gray-500"
                  onClick={openModal}
                >
                  <span className='flex items-center justify-between'>
                    <span className='text-md font-one'>
                      Get started now
                    </span>
                    <span className='ml-4 fill-gray-100 relative -top-1'>
                      <Like />
                    </span>
                  </span>
                </button>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-4 lg:mt-0">
                <span className="group flex items-center justify-center text-gray-950 hover:text-[#F9920A] transition-colors duration-300 text-xl md:text-xl lg:text-2xl xl:text-2xl font-semibold font-one text-center md:text-left">
                  <span className='fill-[#00334D] group-hover:fill-[#F9920A] transition-colors duration-300'>
                    <Telephone />
                  </span>
                  <span className='ml-4 text-[#00334D] group-hover:text-[#F9920A] transition-colors duration-300'>
                    <a href="tel:+91 95396 88800">+91 95396 88800</a>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-2 sm:-mt-2 md:-mt-0 lg:-mt-0 xl:-mt-0">
          <div className="relative w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-0 sm:gap-0 md:gap-8 lg:gap-8 xl:gap-8 px-4 md:px-32">
            <div className="relative w-full flex flex-col items-center md:items-center lg:items-start space-y-8 p-4 md:pb-10">
              <img src={logo} alt="Logo" className="max-w-[200px] object-fill bg-cover" />
              <p className="text-gray-100 font-one font-normal text-lg lg:text-[16px] text-center md:text-center lg:text-left pr-0 md:pr-10 lg:pr-10 xl:pr-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              </p>

              <div>
                <SocialMedia />
              </div>
            </div>

            {/* Services section - Updated to use servicesData */}
            <div className="relative w-full flex flex-col items-center md:items-center lg:items-start space-y-4 p-4 md:pb-10">
              <div className='hidden md:hidden lg:block xl:block absolute -left-14 w-auto h-auto'>
                <img src={shadow} className='w-auto h-72' />
              </div>
              <h2 className="text-gray-100 font-one text-3xl font-semibold text-center md:text-center lg:text-left">{servicesData.title}</h2>
              <div className="text-gray-100 font-one font-normal space-y-3">
                {servicesData.links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="block hover:text-[#F9920A] transition-colors duration-300 text-center md:text-center lg:text-left"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Us section */}
            <div className="relative w-full flex flex-col items-center md:items-center lg:items-start space-y-4 p-4 md:pb-10">
              <div className='hidden md:hidden lg:block xl:block absolute -left-14 w-auto h-auto'>
                <img src={shadow} className='w-auto h-72' />
              </div>
              <h2 className="text-gray-100 font-one text-3xl font-semibold text-center md:text-center lg:text-left">Contact Us</h2>
              <div className="text-gray-100 font-one font-normal text-lg lg:text-[16px]">
                <p className="text-center md:text-center lg:text-left text-lg lg:text-[16px]">
                  <span className='block text-lg lg:text-[16px]'>Crossroads Career Consultants Pvt. Ltd</span>
                  <span className='block text-lg lg:text-[16px]'>Level 3, Oberon Mall,</span>
                  <span className='text-lg lg:text-[16px]'>Edapally, Kochi – 682 024, Kerala</span>
                </p>
                <div className='pt-4 text-center md:text-center lg:text-left'>
                  <a className="hover:text-[#F9920A]" href="tel:+91 9539688800">+91 95396 88800</a>
                </div>
                <div className='text-center md:text-center lg:text-left'>
                  <a href="mailto:info@crossroadsge.com" className="text-center md:text-center lg:text-left hover:text-[#F9920A] transition-all duration-300">
                    info@crossroadsge.com
                  </a>
                </div>
                <div className="grid lg:flex flex-row space-x-4 lg:space-x-10 justify-center text-center space-y-2 sm:space-y-2 lg:space-y-0 mt-6">
                  <Link
                    to="/terms-and-conditions"
                    className={`text-white hover:text-[#F9920A] transition-colors duration-300 text-md lg:text-base ${location.pathname === "/terms-and-conditions"
                      ? "text-[#F9920A]"
                      : ""
                      }`}
                  >
                    Terms and Conditions
                  </Link>
                  <Link
                    to="/privacy-policy"
                    className={`text-white hover:text-[#F9920A] transition-colors duration-300 text-md lg:text-base ${location.pathname === "/privacy-policy"
                      ? "text-[#F9920A]"
                      : ""
                      }`}
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom section */}
        <div className="border-t border-white mx-4 md:mx-20 mt-10 sm:mt-10 md:mt-0 lg:mt-0 xl:mt-0">
          <div className="block md:flex items-center justify-center text-center text-md text-gray-100 font-one py-6 mx-4">
            <div>
              <p className='text-lg lg:text-[16px]'>
                © {new Date().getFullYear()} All Rights Reserved by Crossroads Career Consultants Pvt Ltd. Made With Passion By{' '}
                <a href="https://www.marketbytes.in/" className='hover:text-[#F9920A] transition-colors duration-300' target='_blank'>
                  MarketBytes WebWorks Pvt. Ltd.
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {isModalOpen && <Modal onClose={closeModal} />}
      </AnimatePresence>
    </>
  );
};

export default Footer;
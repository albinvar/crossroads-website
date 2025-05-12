import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
 
const SocialMedia = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <a
        href="https://www.facebook.com/CrossroadsOverseasEducation"
        target="_blank"
        rel="noopener noreferrer"
        className="z-10 flex justify-center items-center w-7 h-7 bg-white rounded-full text-primary-dark hover:bg-gray-200 transition-transform transform hover:scale-110"
      >
        <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4 -z-10 relative -top-[0.5px]" />
      </a>
      <a
        href="https://www.instagram.com/crossroads_ge/"
        target="_blank"
        rel="noopener noreferrer"
        className="z-10 flex justify-center items-center w-7 h-7 bg-white rounded-full text-primary-dark hover:bg-gray-200 transition-transform transform hover:scale-110"
      >
        <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 -z-10 relative -top-[0.5px]" />
      </a>
      <a
        href="https://www.linkedin.com/company/crossroads-career-consultants-pvt-ltd/"
        target="_blank"
        rel="noopener noreferrer"
        className="z-10 flex justify-center items-center w-7 h-7 bg-white rounded-full text-primary-dark hover:bg-gray-200 transition-transform transform hover:scale-110"
      >
        <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4 -z-10 relative -top-[0.5px]" />
      </a>
      <a
        href="https://www.youtube.com/@CrossroadsGE"
        target="_blank"
        rel="noopener noreferrer"
        className="z-10 flex justify-center items-center w-7 h-7 bg-white rounded-full text-primary-dark hover:bg-gray-200 transition-transform transform hover:scale-110"
      >
        <FontAwesomeIcon icon={faYoutube} className="w-4 h-4 -z-10 relative -top-[0.5px]" />
      </a>
      <a
        href="https://wa.me/+919539588800"
        target="_blank"
        rel="noopener noreferrer"
        className="z-10 flex justify-center items-center w-7 h-7 bg-white rounded-full text-primary-dark hover:bg-gray-200 transition-transform transform hover:scale-110"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 -z-10 relative -top-[0.5px]" />
      </a>
    </div>
  );
};
 
export default SocialMedia;
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import apiService from "../../api/apiService";

const SocialMedia = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    whatsapp: "",
  });

  useEffect(() => {
    apiService
      .getSocialMediaLinks()
      .then((response) => {
        const data = response.data[0];
        setSocialLinks({
          facebook: data.facebook,
          instagram: data.instagram,
          linkedin: data.linkedin,
          youtube: data.youtube,
          whatsapp: data.whatsapp,
        });
      })
      .catch((error) => {
        console.error("Error fetching social media links:", error);
      });
  }, []);

  return (
    <div className="flex justify-center items-center gap-4">
      {socialLinks.facebook && (
        <a
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 flex justify-center items-center w-7 h-7 bg-white rounded-full text-primary-dark hover:bg-gray-200 transition-transform transform hover:scale-110"
        >
          <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4 -z-10 relative -top-[0.5px]" />
        </a>
      )}
      {socialLinks.instagram && (
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 flex justify-center items-center w-7 h-7 bg-white rounded-full text-primary-dark hover:bg-gray-200 transition-transform transform hover:scale-110"
        >
          <FontAwesomeIcon icon={faInstagram} className="w-4 h-4 -z-10 relative -top-[0.5px]" />
        </a>
      )}
      {socialLinks.linkedin && (
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 flex justify-center items-center w-7 h-7 bg-white rounded-full text-primary-dark hover:bg-gray-200 transition-transform transform hover:scale-110"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4 -z-10 relative -top-[0.5px]" />
        </a>
      )}
      {socialLinks.youtube && (
        <a
          href={socialLinks.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 flex justify-center items-center w-7 h-7 bg-white rounded-full text-primary-dark hover:bg-gray-200 transition-transform transform hover:scale-110"
        >
          <FontAwesomeIcon icon={faYoutube} className="w-4 h-4 -z-10 relative -top-[0.5px]" />
        </a>
      )}
      {socialLinks.whatsapp && (
        <a
          href={`https://wa.me/+91${socialLinks.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 flex justify-center items-center w-7 h-7 bg-white rounded-full text-primary-dark hover:bg-gray-200 transition-transform transform hover:scale-110"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 -z-10 relative -top-[0.5px]" />
        </a>
      )}
    </div>
  );
};

export default SocialMedia;
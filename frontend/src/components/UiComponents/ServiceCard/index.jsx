import React from 'react';
import { Link } from 'react-router';

const ServiceCard = ({ title, description, imageSrc, url }) => {
  return (
    <Link to={url} className="flex flex-col w-full max-w-full sm:max-w-full lg:max-w-[280px] mx-auto relative group">
      <div className="relative overflow-hidden rounded-2xl transition-all duration-300 group-hover:shadow-[10px_10px_15px_rgba(0,0,0,0.2)]">
        <img
          src={imageSrc}
          alt={title}
          className="w-full object-cover transition-all duration-300 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        <div className="absolute -bottom-4 -left-4 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          <div className="bg-orange-400 w-44 h-44 rounded-full absolute z-10 opacity-60"></div>
          <div className="relative -top-10 left-9 flex items-center justify-center z-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="20"
              viewBox="0 0 31.967 23.249"
              opacity="0.5"
            >
              <path
                id="next"
                d="M32.541,14.6,22.37,4.426A1.453,1.453,0,1,0,20.315,6.48l7.691,7.691H2.453a1.453,1.453,0,1,0,0,2.906H28.006l-7.691,7.691a1.453,1.453,0,1,0,2.055,2.055L32.541,16.652a1.453,1.453,0,0,0,0-2.055Z"
                transform="translate(-1 -4)"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="20"
              viewBox="0 0 31.967 23.249"
            >
              <path
                id="next"
                d="M32.541,14.6,22.37,4.426A1.453,1.453,0,1,0,20.315,6.48l7.691,7.691H2.453a1.453,1.453,0,1,0,0,2.906H28.006l-7.691,7.691a1.453,1.453,0,1,0,2.055,2.055L32.541,16.652a1.453,1.453,0,0,0,0-2.055Z"
                transform="translate(-1 -4)"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div
        className="mt-2"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </Link>
  );
};

export default ServiceCard;
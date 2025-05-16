import React from 'react';
import { Link } from 'react-router'; 
import { ArrowRight } from '../../Icons';
import Button from '../../Button';

const NewsCard = ({ image, title, description, link }) => {
  return (
    <div className="h-full news-card bg-white rounded-lg overflow-hidden group">
      <div className="relative mx-4">
        <img
          src={image}
          alt="News Image"
          className="transition-all duration-300 rounded-lg grayscale group-hover:grayscale-0" 
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
            console.error(`Failed to load image: ${image}`);
          }}
        />
        <Button
          label="Register Now"
          className="absolute top-4 left-4 text-white text-md bg-primary-orange hover:bg-primary-dark rounded-full px-4 py-2 transition-colors duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div
          className="mt-2 flex-grow"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <Link
          to={link}
          className="mt-4 group text-primary-dark flex items-center hover:text-primary-dark-hover transition-colors duration-300"
        >
          <span className="mr-2 text-lg lg:text-[14px] font-medium">Read More</span>
          <ArrowRight
            className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 fill-primary-dark group-hover:fill-primary-dark-hover"
          />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
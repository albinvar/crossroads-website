import React from 'react';
import { Link } from 'react-router';

const CourseCard = ({ title, description, image, link }) => {
  return (
    <div className="flex flex-col bg-white shadow-[4px_4px_10px_0px_rgba(0,0,0,0.1)] hover:shadow-xl hover:shadow-gray-300 transition-all duration-300">
      <Link to={`/services/education/course/${link}`}>
        <div className="relative">
          <img
            src={image}
            alt="Course"
            className="w-full h-48 object-cover"
            onError={(e) => (e.target.src = "https://via.placeholder.com/300x200")}
          />
        </div>
        <div className="p-6">
          <div
            style={{ color: '#00334D' }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div
            className="mt-2"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="mt-4 px-4 py-2 text-sm text-white bg-[#F9920A] hover:bg-[#E08200] transition-all duration-300 rounded-full inline-block">
            More Details
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
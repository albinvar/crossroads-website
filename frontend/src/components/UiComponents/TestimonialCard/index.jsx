import React from 'react';
import PropTypes from 'prop-types';

const TestimonialCard = ({ name, description, image, video, flag, rating }) => {
  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;
    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-[#F9920A]' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.098 10.1c-.784-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative h-72">
        {video ? (
          <video
            className="w-full h-full object-cover"
            controls
            src={video}
            poster={flag || '/placeholder-image.jpg'}
          >
            Your browser does not support the video tag.
          </video>
        ) : image ? (
          <img
            className="w-full h-full object-top object-cover"
            src={image}
            alt={name || 'Testimonial'}
            onError={(e) => (e.target.src = '/placeholder-image.jpg')}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-500">No media available</span>
          </div>
        )}
      </div>
      <div className="py-3 px-4">
        <div className="flex items-center justify-between mb-4">
          <div
            dangerouslySetInnerHTML={{ __html: name || 'Anonymous' }}
          />
          <div className="flex items-center">
            {flag && (
              <img
                src={flag}
                alt="Country flag"
                className="w-5 h-5 mr-1 rounded-full border border-white"
                onError={(e) => (e.target.style.display = 'none')}
              />
            )}
            {rating && (
              <div className="flex items-center text-yellow-400">
                {renderStars(rating)}
              </div>
            )}
          </div>
        </div>
        <div
          className="pr-2 h-[120px] overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-gray-200 dark:[&::-webkit-scrollbar-thumb]:bg-primary-orange"
          dangerouslySetInnerHTML={{
            __html: description || 'No story provided.',
          }}
        />
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  video: PropTypes.string,
  flag: PropTypes.string,
  rating: PropTypes.number,
};

TestimonialCard.defaultProps = {
  name: '',
  description: '',
  image: null,
  video: null,
  flag: null,
  rating: null,
};

export default TestimonialCard;
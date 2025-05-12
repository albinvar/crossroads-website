import React, { useCallback } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import Marquee from "react-fast-marquee";
import SocialMedia from "../SocialMedia";
import Counter from "../Counter";

const Banner = ({
  backgroundImage,
  title,
  description = "",
  className = "",
  classNameTitle = "",
  showDateTime = false,
  showSocialMedia = false,
  date,
  time,
  showApplyButton = false,
  buttonText = "Apply Now",
  showCoundownCounter = false,
  data = []
}) => {
  const handleCopyUrl = useCallback(() => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("URL copied to clipboard!");
    });
  }, []);

  const handleShareUrl = useCallback(() => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: window.location.href,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      alert("Web Share API is not supported in this browser.");
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      <header
        className={`relative w-full h-[350px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[500px] flex items-center justify-center ${className}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-black via-black opacity-50"></div>
        <div className="z-10 text-center space-y-6">
          <div
            className={`max-w-7xl font-two text-xl md:text-3xl lg:text-5xl font-medium text-white mb-4 ${classNameTitle}`}
            dangerouslySetInnerHTML={{ __html: title || "" }}
          />
          {description && (
            <div
              className="w-3/5 mx-auto font-one text-sm md:text-base lg:text-lg font-light text-white leading-relaxed"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
          {showApplyButton && (
            <div className="pt-2">
              <button
                className="text-white text-md font-light bg-primary-orange hover:bg-primary-dark transition-colors duration-300 rounded-full px-6 py-2 shadow-lg"
                onClick={() => alert(`${buttonText} clicked!`)}
              >
                {buttonText}
              </button>
            </div>
          )}
        </div>
        <div className="absolute bottom-6 grid md:flex items-center justify-center md:justify-between gap-y-2 w-full">
          {showDateTime && (
            <div className="relative left-0 md:left-24 flex items-center justify-center">
              <p className="flex items-center justify-start font-one text-sm md:text-md lg:text-md font-light text-white leading-relaxed">
                <span>{date}</span>
                <div className="pl-[4px]">
                  <span>{time}</span>
                </div>
              </p>
            </div>
          )}
          {showSocialMedia && (
            <div className="relative right-0 md:right-24">
              <div className="flex space-x-4">
                <SocialMedia />
                <div className="flex space-x-4">
                  <button
                    onClick={handleCopyUrl}
                    className="flex justify-center items-center w-7 h-7 bg-white rounded-full text-primary-two hover:bg-gray-200 transition-transform transform hover:scale-110"
                    title="Copy URL"
                  >
                    <FontAwesomeIcon icon={faLink} className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleShareUrl}
                    className="flex justify-center items-center w-7 h-7 bg-white rounded-full text-primary-two hover:bg-gray-200 transition-transform transform hover:scale-110"
                    title="Share this page"
                  >
                    <FontAwesomeIcon icon={faShareAlt} className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
          {showCoundownCounter && (
            <>
              <div className="hidden lg:flex flex-col items-center w-full mb-10">
                <div className="flex flex-wrap justify-center w-full">
                  {data.map((item, index) => (
                    <div key={index} className="flex flex-col items-center border shadow-lg p-8 max-w-xs">
                      <Counter target={item.count} />
                      <h3 className="text-lg text-center text-gray-100 mt-2">{item.title}</h3>
                      <p className="text-center text-gray-100 mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:hidden flex items-center w-full mb-10">
                <Marquee speed={50} gradient={false} pauseOnHover>
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center shadow-lg p-4 w-full"
                    >
                      <Counter target={item.count} />
                      <h3 className="text-sm text-center text-gray-100 mt-2">{item.title}</h3>
                      <p className="text-sm text-center text-gray-100 mt-2">{item.description}</p>
                    </div>
                  ))}
                </Marquee>
              </div>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

Banner.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
  classNameTitle: PropTypes.string,
  showDateTime: PropTypes.bool,
  showSocialMedia: PropTypes.bool,
  date: PropTypes.string,
  time: PropTypes.string,
  showApplyButton: PropTypes.bool,
  buttonText: PropTypes.string,
  showCoundownCounter: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

Banner.defaultProps = {
  description: "",
  className: "",
  classNameTitle: "",
  showDateTime: false,
  showSocialMedia: false,
  showApplyButton: false,
  buttonText: "Apply Now",
  showCoundownCounter: false,
  data: [],
};

export default Banner
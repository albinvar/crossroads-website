import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Banner from "../../../components/Banner";
import apiService from "../../../api/apiService";
import ContactInformation from "../../../components/UiComponents/ContactInformation";

const stripHtml = (html) => {
  return html.replace(/<[^>]+>/g, "").trim();
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const bannerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
    transition: {
      duration: 0.2,
    },
  },
};

const TestimonialCard = ({ item }) => {
  return (
    <motion.div
      className="w-full h-[300px] bg-white overflow-hidden flex flex-col shadow-md rounded-lg hover:bg-gray-100 transition-colors duration-300 mx-auto"
      variants={imageVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      {item.type === "image" ? (
        <img
          src={item.image || "https://via.placeholder.com/350x280?text=No+Image"}
          alt={`Gallery Image`}
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/350x280?text=Image+Not+Found";
            console.error(`Failed to load image: ${item.image}`);
          }}
        />
      ) : (
        <video
          src={item.video || ""}
          controls
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error(`Failed to load video: ${item.video}`);
          }}
        />
      )}
    </motion.div>
  );
};

TestimonialCard.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.oneOf(["image", "video"]).isRequired,
    image: PropTypes.string,
    video: PropTypes.string,
  }).isRequired,
};

const GalleryDetail = () => {
  const { link } = useParams();
  const [gallery, setGallery] = useState(null);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("images");
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef(null);
  const cardsPerPage = 12;

  useEffect(() => {
    setIsLoading(true);
    apiService
      .getGalleryDetailsByLink(link)
      .then((response) => {
        console.log("Gallery details API response:", response.data);
        setGallery(response.data);
        setImages(
          response.data.gallery_images.map((item) => ({
            ...item,
            type: "image",
          }))
        );
        setVideos(
          response.data.gallery_videos.map((item) => ({
            ...item,
            type: "video",
          }))
        );
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching gallery details:", error);
        setError("Failed to load gallery details. Please try again later.");
        setGallery(null);
        setImages([]);
        setVideos([]);
        setIsLoading(false);
      });
  }, [link]);

  if (isLoading) {
    return (
      <motion.div
        className="text-center text-gray-500 py-8"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        Loading gallery details...
      </motion.div>
    );
  }

  if (error || !gallery) {
    return (
      <motion.div
        className="text-center text-red-500 py-8"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {error || "Gallery not found."}
      </motion.div>
    );
  }

  const data = activeTab === "images" ? images : videos;
  const totalPages = Math.ceil(data.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const bannerProps = {
    backgroundImage:
      gallery.image || "https://via.placeholder.com/1200x400?text=No+Image",
    title: stripHtml(gallery.title) || "Untitled Gallery",
    description: stripHtml(gallery.year) || "",
    className: "px-1 relative",
    classNameTitle: "relative h1 font-extrabold",
    backgroundPosition: "center",
    showDateTime: false,
    showSocialMedia: false,
    showCountdownCounter: false,
  };

  return (
    <div className="relative">
      <motion.div variants={bannerVariants} initial="hidden" animate="visible">
        <Banner {...bannerProps} />
      </motion.div>
      <motion.section
        ref={sectionRef}
        className="px-4 sm:px-4 lg:px-28 my-10 sm:my-10 lg:my-16"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto">
          <div className="flex justify-center mb-8 gap-4 sm:gap-8">
            <button
              className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-sm lg:text-sm font-medium transition-all duration-300 ${
                activeTab === "images"
                  ? "bg-[#F9920A] text-white"
                  : "bg-gray-200 text-[#00334D] hover:bg-gray-300"
              }`}
              onClick={() => {
                setActiveTab("images");
                setCurrentPage(1);
                sectionRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Images
            </button>
            <button
              className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-sm lg:text-sm font-medium transition-all duration-300 ${
                activeTab === "videos"
                  ? "bg-[#F9920A] text-white"
                  : "bg-gray-200 text-[#00334D] hover:bg-gray-300"
              }`}
              onClick={() => {
                setActiveTab("videos");
                setCurrentPage(1);
                sectionRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Videos
            </button>
          </div>
          <div className="relative mt-8 sm:mt-8 lg:mt-16">
            {data.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {currentCards.map((item, index) => (
                    <TestimonialCard key={`${currentPage}-${index}`} item={item} />
                  ))}
                </div>
                <div className="flex justify-center items-center mt-8 sm:mt-8 lg:mt-16 space-x-2">
                  <button
                    onClick={handlePrevPage}
                    className={`px-3 py-1 rounded ${
                      currentPage === 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-[#F9920A] hover:text-[#e07a00]"
                    }`}
                    disabled={currentPage === 1}
                  >
                    Prev
                  </button>
                  {pageNumbers.map((number) => (
                    <button
                      key={number}
                      onClick={() => handlePageChange(number)}
                      className={`px-3 py-1 rounded ${
                        currentPage === number
                          ? "bg-[#F9920A] text-white"
                          : "text-[#F9920A] hover:text-[#e07a00]"
                      }`}
                    >
                      {number}
                    </button>
                  ))}
                  <button
                    onClick={handleNextPage}
                    className={`px-3 py-1 rounded ${
                      currentPage === totalPages
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-[#F9920A] hover:text-[#e07a00]"
                    }`}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <motion.p
                className="text-center text-red-500 text-lg col-span-full"
                variants={contentVariants}
              >
                No gallery items available.
              </motion.p>
            )}
          </div>
        </div>
      </motion.section>
      <div className="px-4 sm:px-4 lg:px-28 mb-16 sm:mb-16 lg:mb-36 mt-14 sm:mt-14 lg:mt-20">
        <ContactInformation />
      </div>
    </div>
  );
};

export default GalleryDetail;
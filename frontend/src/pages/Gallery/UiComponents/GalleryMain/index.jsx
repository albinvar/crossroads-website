import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import apiService from "../../../../api/apiService";

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

const cardVariants = {
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

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
    },
  },
  disabled: {
    scale: 1,
  },
};

const GalleryMain = () => {
  const [galleryCards, setGalleryCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;
  const sectionRef = useRef(null);

  useEffect(() => {
    apiService
      .getGalleryCards()
      .then((response) => {
        console.log("Gallery cards API response:", response.data);
        setGalleryCards(response.data);
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching gallery cards:", error);
        setError("Failed to load gallery cards. Please try again later.");
        setGalleryCards([]);
        setIsLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(galleryCards.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = galleryCards.slice(indexOfFirstCard, indexOfLastCard);

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

  if (isLoading) {
    return (
      <motion.div
        className="text-center text-gray-500 py-8"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        Loading gallery...
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        className="text-center text-red-500 py-8"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {error}
      </motion.div>
    );
  }

  return (
    <div className="relative">
      <motion.section
        ref={sectionRef}
        className="bg-white mx-auto px-4 sm:px-6 lg:px-8 py-8"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-wrap justify-center gap-10">
          {currentCards.length > 0 ? (
            currentCards.map((card) => (
              <motion.div
                key={card.id}
                className="w-[350px] max-w-full"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                <Link to={`/gallery/${card.link}`} className="no-underline text-black">
                  <div className="border-0 rounded-lg overflow-hidden shadow-lg h-[400px]">
                    <img
                      src={card.image || "https://via.placeholder.com/350x280?text=No+Image"}
                      alt={`Image ${card.title}`}
                      className="w-full h-[280px] object-cover"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/350x280?text=Image+Not+Found";
                        console.error(`Failed to load image: ${card.image}`);
                      }}
                    />
                    <div className="p-5 text-center">
                      <div
                        className="prose"
                        dangerouslySetInnerHTML={{ __html: card.title }}
                      />
                      <div
                        className="prose"
                        dangerouslySetInnerHTML={{ __html: card.year }}
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <motion.p
              className="text-gray-600 text-center text-lg"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              No gallery cards available.
            </motion.p>
          )}
        </div>
        {galleryCards.length > 0 && (
          <div className="flex justify-center items-center mt-8 gap-2">
            <motion.button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded bg-transparent ${
                currentPage === 1
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-orange-500 hover:text-orange-600"
              } text-base font-medium`}
              variants={buttonVariants}
              whileHover={currentPage !== 1 ? "hover" : "disabled"}
              animate={currentPage === 1 ? "disabled" : undefined}
            >
              Prev
            </motion.button>
            {pageNumbers.map((number) => (
              <motion.button
                key={number}
                onClick={() => handlePageChange(number)}
                className={`px-4 py-2 rounded ${
                  currentPage === number
                    ? "bg-orange-500 text-white"
                    : "bg-transparent text-orange-500 hover:text-orange-600"
                } text-base font-medium`}
                variants={buttonVariants}
                whileHover="hover"
              >
                {number}
              </motion.button>
            ))}
            <motion.button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded bg-transparent ${
                currentPage === totalPages
                  ? "text-gray-300 cursor-not-allowed"
                  : "text-orange-500 hover:text-orange-600"
              } text-base font-medium`}
              variants={buttonVariants}
              whileHover={currentPage !== totalPages ? "hover" : "disabled"}
              animate={currentPage === totalPages ? "disabled" : undefined}
            >
              Next
            </motion.button>
          </div>
        )}
      </motion.section>
    </div>
  );
};

export default GalleryMain;
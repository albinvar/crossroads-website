import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const COURSES_PER_PAGE = 5;

const ResultsTable = ({ courses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileView, setIsMobileView] = useState(false);
  const [expandedCourseId, setExpandedCourseId] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalCourses = courses.length;
  const totalPages = Math.ceil(totalCourses / COURSES_PER_PAGE);
  const indexOfLastCourse = currentPage * COURSES_PER_PAGE;
  const indexOfFirstCourse = indexOfLastCourse - COURSES_PER_PAGE;
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDownload = (pdfUrl) => {
    if (!pdfUrl) {
      console.error('PDF URL is missing or invalid.');
      return;
    }

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfUrl.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleDetails = (courseId) => {
    setExpandedCourseId((prevId) => (prevId === courseId ? null : courseId));
  };

  const PaginationButtons = () => (
    totalPages > 1 && (
      <div className="flex justify-center items-center mt-10 space-x-2 sm:space-x-3">
        <motion.button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition duration-200 ${
            currentPage === 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-[#F9920A] hover:bg-[#F9920A]/10 hover:text-[#e07a00]'
          }`}
          disabled={currentPage === 1}
          whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
          whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
        >
          Prev
        </motion.button>
        {pageNumbers.map((number) => (
          <motion.button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition duration-200 ${
              currentPage === number
                ? 'bg-[#F9920A] text-white'
                : 'text-[#F9920A] hover:bg-[#F9920A]/10 hover:text-[#e07a00]'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {number}
          </motion.button>
        ))}
        <motion.button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition duration-200 ${
            currentPage === totalPages
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-[#F9920A] hover:bg-[#F9920A]/10 hover:text-[#e07a00]'
          }`}
          disabled={currentPage === totalPages}
          whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
          whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
        >
          Next
        </motion.button>
      </div>
    )
  );

  return (
    <div className="w-full relative">
      {isMobileView ? (
        <div className="space-y-4">
          {currentCourses.map((course, index) => (
            <motion.div
              key={course.id}
              className="border rounded-lg shadow p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-[#003050]">{course.course}</h3>
                  <p className="text-gray-600">{course.institution}</p>
                </div>
                <motion.button
                  onClick={() => toggleDetails(course.id)}
                  className="text-green-500 hover:text-green-600 focus:outline-none"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {expandedCourseId === course.id ? 'Hide' : 'Show'} Details
                </motion.button>
              </div>
              <AnimatePresence>
                {expandedCourseId === course.id && (
                  <motion.div
                    className="mt-4 space-y-2 text-sm text-[#003050]"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p><strong>Course Code:</strong> {course.courseCode}</p>
                    <p><strong>Education Level:</strong> {course.educationLevel}</p>
                    <p><strong>Stream:</strong> {course.stream}</p>
                    <div className="flex gap-2">
                      <motion.button
                        onClick={() => handleDownload(course.pdfUrl)}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Download Info
                      </motion.button>
                      <motion.button
                        className="px-4 py-2 border border-primary-orange text-primary-dark rounded-md hover:bg-orange-50 hover:text-orange-600 transition duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Apply Now
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <PaginationButtons />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead className="bg-[#003050] text-white">
              <tr>
                <th className="px-2 py-2 max-w-lg text-center text-xs font-medium uppercase tracking-wider border border-white">
                  SL No.
                </th>
                <th className="px-2 py-2 max-w-lg text-center text-xs font-medium uppercase tracking-wider border border-white">
                  Course Code
                </th>
                <th className="px-2 py-2 max-w-lg text-center text-xs font-medium uppercase tracking-wider border border-white">
                  Course
                </th>
                <th className="px-2 py-2 max-w-lg text-center text-xs font-medium uppercase tracking-wider border border-white">
                  Institution
                </th>
                <th className="px-2 py-2 max-w-lg text-center text-xs font-medium uppercase tracking-wider border border-white">
                  Education Level
                </th>
                <th className="px-2 py-2 max-w-lg text-center text-xs font-medium uppercase tracking-wider border border-white">
                  Stream
                </th>
                <th className="px-2 py-2 max-w-lg text-center text-xs font-medium uppercase tracking-wider border border-white">
                  More Info
                </th>
                <th className="px-2 py-2 max-w-lg text-center text-xs font-medium uppercase tracking-wider">
                </th>
              </tr>
            </thead>
            <tbody className="text-[#003050]">
              {currentCourses.map((course, index) => (
                <motion.tr
                  key={course.id}
                  className="bg-white hover:bg-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <td className="px-2 py-3 max-w-lg text-center whitespace-nowrap text-sm">
                    {(currentPage - 1) * COURSES_PER_PAGE + index + 1}
                  </td>
                  <td className="px-2 py-3 max-w-lg text-center whitespace-nowrap text-sm font-medium">{course.courseCode}</td>
                  <td className="px-2 py-3 max-w-lg text-center whitespace-nowrap text-sm">{course.course}</td>
                  <td className="px-2 py-3 max-w-lg text-center whitespace-nowrap text-sm">{course.institution}</td>
                  <td className="px-2 py-3 max-w-lg text-center whitespace-nowrap text-sm">{course.educationLevel}</td>
                  <td className="px-2 py-3 max-w-lg text-center whitespace-nowrap text-sm">{course.stream}</td>
                  <td className="px-2 py-3 max-w-lg text-center whitespace-nowrap text-sm">
                    <div className="flex items-center justify-center">
                      <motion.button
                        onClick={() => handleDownload(course.pdfUrl)}
                        className="flex items-center px-6 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg width="16" height="18" viewBox="0 0 32 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.9995 23.375C15.4021 23.375 14.9328 22.9075 14.9328 22.3125V3.1875C14.9328 2.5925 15.4021 2.125 15.9995 2.125C16.5968 2.125 17.0661 2.5925 17.0661 3.1875V22.3125C17.0661 22.9075 16.5968 23.375 15.9995 23.375ZM28.7995 31.875H3.19948C2.60215 31.875 2.13281 31.4075 2.13281 30.8125V26.5625C2.13281 25.9675 2.60215 25.5 3.19948 25.5C3.79681 25.5 4.26615 25.9675 4.26615 26.5625V29.75H27.7328V26.5625C27.7328 25.9675 28.2021 25.5 28.7995 25.5C29.3968 25.5 29.8661 25.9675 29.8661 26.5625V30.8125C29.8661 31.4075 29.3968 31.875 28.7995 31.875Z" fill="#FFFFFF"/>
                          <path d="M16.0001 25.5C15.8602 25.5017 15.7215 25.4742 15.5929 25.4193C15.4643 25.3644 15.3487 25.2833 15.2535 25.1813L7.7868 17.7438C7.36013 17.3188 7.36013 16.66 7.7868 16.235C8.21346 15.81 8.8748 15.81 9.30146 16.235L16.0215 22.9288L22.7415 16.235C23.1681 15.81 23.8295 15.81 24.2561 16.235C24.6828 16.66 24.6828 17.3188 24.2561 17.7438L16.7895 25.1813C16.5761 25.3938 16.2988 25.5 16.0428 25.5H16.0001Z" fill="#FFFFFF"/>
                        </svg>
                      </motion.button>
                    </div>
                  </td>
                  <td className="px-2 py-3 max-w-lg text-center flex items-center justify-center whitespace-nowrap text-sm">
                    <motion.button
                      className="px-5 py-1 text-white bg-primary-orange hover:bg-primary-dark rounded-md transition duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply Now
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          <PaginationButtons />
        </div>
      )}
    </div>
  );
};

export default ResultsTable;
import React, { useState } from 'react';
import SearchForm from '../UiComponents/SearchForm';
import ResultsTable from '../UiComponents/ResultsTable';

const sampleCourses = [
  {
    id: 1,
    courseCode: '001',
    course: 'Master of applied spatial science',
    institution: 'Charles Darwin University',
    educationLevel: 'Degree',
    stream: 'Agriculture',
    pdfUrl: '/path/to/course1.pdf',
  },
  {
    id: 2,
    courseCode: '002',
    course: 'Master of applied spatial science',
    institution: 'Charles Darwin University',
    educationLevel: 'Degree',
    stream: 'Agriculture',
    pdfUrl: '/path/to/course1.pdf',
  },
  {
    id: 3,
    courseCode: '003',
    course: 'Master of applied spatial science',
    institution: 'Charles Darwin University',
    educationLevel: 'Degree',
    stream: 'Agriculture',
    pdfUrl: '/path/to/course1.pdf',
  },
  {
    id: 4,
    courseCode: '004',
    course: 'Master of applied spatial science',
    institution: 'Charles Darwin University',
    educationLevel: 'Degree',
    stream: 'Agriculture',
    pdfUrl: '/path/to/course1.pdf',
  },
  {
    id: 5,
    courseCode: '005',
    course: 'Master of applied spatial science',
    institution: 'Charles Darwin University',
    educationLevel: 'Degree',
    stream: 'Agriculture',
    pdfUrl: '/path/to/course1.pdf',
  },
  {
    id: 6,
    courseCode: '006',
    course: 'Master of applied spatial science',
    institution: 'Charles Darwin University',
    educationLevel: 'Degree',
    stream: 'Agriculture',
    pdfUrl: '/path/to/course1.pdf',
  },
];

const FindCourse = () => {
  const [searchResults, setSearchResults] = useState(sampleCourses);
  const [isSearched, setIsSearched] = useState(false);

  const handleSearch = (filters) => {
    console.log('Search filters:', filters);
    setSearchResults(sampleCourses);
    setIsSearched(true);
  };

  return (
    <div className="w-full bg-[#003050] pt-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center py-6 text-white">Find a course</h2>
        <SearchForm onSearch={handleSearch} isSearched={isSearched} />
        {isSearched && (
          <div className="pb-16 pt-8">
            <h3 className="text-lg text-left mb-2 text-white/80">Results</h3>
            <ResultsTable courses={searchResults} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FindCourse;
import React, { useState, useEffect } from 'react';
import Banner from '../../../../components/Banner';
import apiService from '../../../../api/apiService';
import PopularCourses from '../../../Home/UiComponents/PopularCourses';
import FreeEducation from '../../../Home/UiComponents/FreeEducation';
import ContactInformation from '../../../../components/UiComponents/ContactInformation';
import FindCourse from './FindCourse';

const Course = () => {
  const [bannerData, setBannerData] = useState({
    title: '',
    image: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiService.getServiceCourseBanner()
      .then((response) => {
        const data = response.data[0];
        setBannerData({
          title: data.title || '',
          image: data.image || '',
        });
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch banner data');
        setLoading(false);
        console.error('Error fetching banner:', err);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Banner title={bannerData.title} backgroundImage={bannerData.image} />
      <FindCourse />
      <PopularCourses />
      <FreeEducation freeEducationCourseCase={false} />
      <div className='px-4 sm:px-4 lg:px-28 mb-16 sm:mb-16 lg:mb-36'>
        <ContactInformation />
      </div>
    </>
  );
};

export default Course;
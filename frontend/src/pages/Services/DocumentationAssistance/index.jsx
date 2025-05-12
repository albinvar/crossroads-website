import React, { useState, useEffect } from 'react';
import Banner from '../../../components/Banner';
import apiService from '../../../api/apiService';
import AssistanceSection from '../UiComponents/AssistanceSection';
import ContactInformation from '../../../components/UiComponents/ContactInformation';

const DocumentationAssistance = () => {
  const [bannerData, setBannerData] = useState({
    title: '',
    image: '',
    description: '',
  });

  useEffect(() => {
    apiService
      .getServiceDocumentationAssistanceBanner()
      .then((response) => {
        const { title, image, description } = response.data[0];
        setBannerData({
          title: title || '',
          image: image || '',
          description: description || '',
        });
      })
      .catch((err) => {
        console.error('Error fetching banner data:', err);
      });
  }, []);

  return (
    <>
      <Banner title={bannerData.title} backgroundImage={bannerData.image} />
      <div className="px-4 sm:px-4 lg:px-28 py-6 sm:py-6 lg:py-10">
        <div dangerouslySetInnerHTML={{ __html: bannerData.description}} />
      </div>
      <div className='px-4 sm:px-4 lg:px-28'>
      <AssistanceSection/>
      </div>
      <div className='px-4 sm:px-4 lg:px-28 mb-16 sm:mb-16 lg:mb-36 mt-10 sm:mt-10 lg:mt-10'>
        <ContactInformation/>
      </div>
    </>
  );
};

export default DocumentationAssistance;
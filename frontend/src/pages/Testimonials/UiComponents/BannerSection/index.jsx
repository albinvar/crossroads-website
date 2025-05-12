import React, { useEffect, useState } from 'react';
import Banner from '../../../../components/Banner';
import apiService from '../../../../api/apiService';

const BannerSection = () => {
  const [bannerData, setBannerData] = useState({ title: '', image: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    apiService.getTestimonialsBanner()
      .then(response => {
        if (response.data && response.data.length > 0) {
          setBannerData({
            title: response.data[0].title,
            image: response.data[0].image
          });
        } else {
          setError('No banner data found');
        }
      })
      .catch(error => {
        console.error('Error fetching about banner:', error);
        setError('Failed to fetch banner data');
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Banner
        title={bannerData.title}
        backgroundImage={bannerData.image}
      />
    </div>
  );
};

export default BannerSection;

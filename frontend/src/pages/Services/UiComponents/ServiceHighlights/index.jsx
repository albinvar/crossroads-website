import React, { useEffect } from 'react';
import ServiceCard from '../../../../components/UiComponents/ServiceCard';
import apiService from '../../../../api/apiService';

const ServiceHighlights = ({ services, setServices }) => {
  useEffect(() => {
    apiService.getServiceHighlights()
      .then(response => {
        const transformedServices = response.data
          .map((service) => ({
            title: service.title,
            description: service.description,
            imageSrc: service.image,
            url: service.link,
          }))
          .sort((a, b) => a.order - b.order);
        setServices(transformedServices);
      })
      .catch(error => {
        console.error('Error fetching service highlights:', error);
      });
  }, [setServices]); 

  return (
    <section className="py-8 mt-8 sm:mt-8 lg:mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-28">
        {services && services.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                url={service.url}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceHighlights;
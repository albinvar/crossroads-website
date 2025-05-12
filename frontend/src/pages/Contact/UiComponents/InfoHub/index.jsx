import React, { useState, useEffect } from 'react';
import apiService from '../../../../api/apiService';

const stripHtml = (html) => {
  if (!html) return '';
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};

const extractPhoneNumbers = (html) => {
  if (!html) return [];
  const div = document.createElement('div');
  div.innerHTML = html;
  const links = div.querySelectorAll('a[href^="tel:"]');
  const numbers = Array.from(links).map((link) => link.textContent.trim());
  return numbers;
};

const extractEmails = (html) => {
  if (!html) return [];
  const div = document.createElement('div');
  div.innerHTML = html;
  const links = div.querySelectorAll('a[href^="mailto:"]');
  const emails = Array.from(links).map((link) => link.textContent.trim());
  return emails;
};

const InfoHubSection = () => {
  const [infoHubData, setInfoHubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiService
      .getContactInfoHub()
      .then((response) => {
        if (!response.data || response.data.length === 0) {
          throw new Error('No contact information available.');
        }

        const apiData = response.data[0];

        const data = {
          address: {
            title: 'Address',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
              </svg>
            ),
            details: stripHtml(apiData.address) || '',
            mapLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              stripHtml(apiData.address) || 'Crossroad Career Consultants Pvt. Ltd, Level 3, Oberon Mall, Edapally, Kochi, Kerala 682024'
            )}`,
          },
          callUs: {
            title: 'Call us',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
              </svg>
            ),
            details: extractPhoneNumbers(apiData.phone),
          },
          emailUs: {
            title: 'Email us',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            ),
            details: extractEmails(apiData.email),
          },
        };
        setInfoHubData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Failed to fetch contact information. Please try again later.');
        setLoading(false);
      });
  }, []);

  const InfoHubCard = ({ title, icon, details, type, mapLink }) => {
    return (
      <div className="bg-gray-100 p-4 sm:p-6 flex flex-col items-center text-center shadow-md border-b-8 border-b-primary-orange min-h-[180px] w-full break-words">
        <div className="w-12 h-12 p-3 bg-primary-dark text-white rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-primary-dark mb-2">{title}</h3>
        {type === 'address' ? (
          <a href={mapLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm sm:text-base break-words">
            {details}
          </a>
        ) : Array.isArray(details) ? (
          details.map((item, index) => (
            <p key={index} className="text-gray-600 text-sm sm:text-base">
              {type === 'callUs' ? (
                <a href={`tel:${item}`} className="text-gray-600">
                  {item}
                </a>
              ) : type === 'emailUs' ? (
                <a href={`mailto:${item}`} className="text-gray-600">
                  {item}
                </a>
              ) : (
                item
              )}
            </p>
          ))
        ) : (
          <p className="text-gray-600 text-sm sm:text-base break-words">{details}</p>
        )}
      </div>
    );
  };

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-600">{error}</div>;
  }

  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 lg:p-0">
      <InfoHubCard
        title={infoHubData.address.title}
        icon={infoHubData.address.icon}
        details={infoHubData.address.details}
        type="address"
        mapLink={infoHubData.address.mapLink}
      />
      <InfoHubCard
        title={infoHubData.callUs.title}
        icon={infoHubData.callUs.icon}
        details={infoHubData.callUs.details}
        type="callUs"
      />
      <InfoHubCard
        title={infoHubData.emailUs.title}
        icon={infoHubData.emailUs.icon}
        details={infoHubData.emailUs.details}
        type="emailUs"
      />
    </div>
  );
};

export default InfoHubSection;

import React, { useState, useEffect } from 'react';
import apiService from "../../../../api/apiService";
import rightSectionBg from "../../../../assets/images/language-lab-bg.webp";
import Button from '../../../../components/Button';

const LanguageLabSection = () => {
  const [languageLabItems, setLanguageLabItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    apiService
      .getServiceLanguageLabListing()
      .then((response) => {
        const fetchedItems = response.data.map((item, index) => ({
          id: item.id || index + 1,
          main_title: item.main_title,
          title: item.title,
          description: item.description,
        }));
        setLanguageLabItems(fetchedItems);
        if (fetchedItems.length > 0) {
          setSelectedItem(fetchedItems[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching language lab listings:", error);
      });
  }, []);

  return (
    <div className="mx-auto py-4 sm:py-6 lg:py-10">
      <div className="w-full flex flex-col md:flex-row gap-4 sm:gap-6 lg:gap-8 min-h-[250px] xs:min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]">
        <div className="w-full md:w-1/3 min-h-[150px] xs:min-h-[200px] sm:min-h-[250px] md:min-h-full flex flex-col overflow-y-auto">
          <div className="flex flex-col py-2 xs:py-3 sm:py-4 lg:py-6">
            {languageLabItems.map((item, index) => (
              <div
                key={item.id}
                className={
                  index !== languageLabItems.length - 1
                    ? "border-b"
                    : ""
                }
              >
                <button
                  className={`w-full h-auto sm:h-auto lg:h-20 text-left px-3 xs:px-4 sm:px-5 my-2 text-xs xs:text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 leading-loose ${
                    selectedItem?.id === item.id
                      ? "bg-[#00334D] text-white relative top-2"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedItem(item)}
                  dangerouslySetInnerHTML={{ __html: item.main_title }}
                />
              </div>
            ))}
          </div>
        </div>
        <div
          className="w-full md:w-2/3 min-h-[150px] xs:min-h-[200px] sm:min-h-[250px] md:min-h-full flex flex-col overflow-hidden"
          style={{
            backgroundImage: `url(${rightSectionBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="p-3 xs:p-4 sm:p-6 lg:p-8 flex-1 flex flex-col justify-between overflow-y-auto mx-4 xs:mx-6 sm:mx-8 lg:mx-10 my-4 xs:my-6 sm:my-8 lg:my-10 bg-[#00334D]/70 border border-white/20">
            {selectedItem ? (
              <div>
                <div className="mb-4 sm:mb-6">
                  <div
                    className="mb-2 sm:mb-4"
                    dangerouslySetInnerHTML={{ __html: selectedItem.title }}
                  />
                  <div
                    dangerouslySetInnerHTML={{ __html: selectedItem.description }}
                  />
                </div>
                <Button label="Enquire Now" className="text-white text-sm font-medium bg-primary-orange hover:bg-primary-orange/80 transition-colors duration-300 px-6 py-3 shadow-lg rounded-full"/>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-white text-xs xs:text-sm sm:text-base">
                  Select a language test to view details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageLabSection;
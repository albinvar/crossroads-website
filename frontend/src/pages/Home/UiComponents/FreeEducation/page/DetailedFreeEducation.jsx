import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Banner from "../../../../../components/Banner";
import apiService from "../../../../../api/apiService";
import ContactInformation from "../../../../../components/UiComponents/ContactInformation";
import NeedQualitySection from "./UiComponents/NeedQuality";
import OtherOptions from "./UiComponents/OtherOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const DetailedFreeEducation = () => {
  const { link } = useParams();
  const [bannerData, setBannerData] = useState({
    bannerTitle: "",
    bannerImage: "",
  });
  const [keyFactTitle, setKeyFactTitle] = useState("");
  const [keyFacts, setKeyFacts] = useState([]);
  const [requirementsData, setRequirementsData] = useState({
    title: "",
    description: "",
    image: "",
    list: [],
  });
  const [qualityContent, setQualityContent] = useState({
    content: "",
  });
  const [otherOptionsTitle, setOtherOptionsTitle] = useState("");
  const [otherOptions, setOtherOptions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bannerResponse = await apiService.getFreeEducationCountryDedicatedPage(link);
        const bannerData = bannerResponse.data[0] || {};
        setBannerData({
          bannerTitle: bannerData.banner_title || "Free Education",
          bannerImage: bannerData.banner_image || "",
        });

        const keyFactTitleResponse = await apiService.getFreeEducationCountryKeyFactTitle(link);
        const keyFactTitleData = keyFactTitleResponse.data[0] || {};
        setKeyFactTitle(keyFactTitleData.key_fact_main_title || "");

        const keyFactListingsResponse = await apiService.getFreeEducationCountryKeyFactListings(link);
        setKeyFacts(keyFactListingsResponse.data || []);

        const requirementsTitleResponse = await apiService.getFreeEducationCountryRequirementsTitle(link);
        const requirementsTitleData = requirementsTitleResponse.data[0] || {};
        setRequirementsData({
          title: requirementsTitleData.requirement_title || "",
          description: requirementsTitleData.requirement_description || "",
          image: requirementsTitleData.requirement_background_image || "",
          list: [],
        });
        setQualityContent({
          content: requirementsTitleData.content || "",
        });

        const requirementsListingsResponse = await apiService.getFreeEducationCountryRequirementsListings(link);
        setRequirementsData((prev) => ({
          ...prev,
          list: requirementsListingsResponse.data.map((item) => ({
            listTitle: item.list_title || "",
            listDescription: item.list_description || "",
          })) || [],
        }));

        const otherOptionsTitleResponse = await apiService.getFreeEducationCountryOtherOptionsTitle(link);
        const otherOptionsTitleData = otherOptionsTitleResponse.data[0] || {};
        setOtherOptionsTitle(otherOptionsTitleData.main_title || "");

        const otherOptionsListingsResponse = await apiService.getFreeEducationCountryOtherOptionsListings(link);
        setOtherOptions(otherOptionsListingsResponse.data || []);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load page information");
        setBannerData({
          bannerTitle: "Free Education",
          bannerImage: "",
        });
        setKeyFactTitle("");
        setKeyFacts([]);
        setRequirementsData({
          title: "",
          description: "",
          image: "",
          list: [],
        });
        setQualityContent({
          content: "",
        });
        setOtherOptionsTitle("");
        setOtherOptions([]);
      }
    };

    fetchData();
  }, [link]);

  return (
    <>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      <Banner
        title={bannerData.bannerTitle}
        backgroundImage={bannerData.bannerImage}
      />

      {keyFactTitle && (
        <section className="px-4 sm:px-4 lg:px-28 mt-8 sm:mt-8 lg:mt-16">
          <div className="mx-auto bg-gray-50 p-6">
            <h2
              className="mb-8 text-left"
              dangerouslySetInnerHTML={{ __html: keyFactTitle }}
            />
            {keyFacts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="grid items-center justify-start"
                  >
                    <div className="flex items-center justify-start">
                      <FontAwesomeIcon
                        icon={faCheck}
                        size="xs"
                        className="relative -top-1 bg-[#F9920A] text-white mr-2 p-1 rounded-full"
                      />
                      <div
                        className="mb-2"
                        dangerouslySetInnerHTML={{ __html: fact.title }}
                      />
                    </div>
                    <div
                      className="ml-6 text-gray-600"
                      dangerouslySetInnerHTML={{ __html: fact.description }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No key facts available.</p>
            )}
          </div>
        </section>
      )}

      <div className="mt-8 sm:mt-8 lg:mt-16">
        {requirementsData.title && (
          <NeedQualitySection
            QualityMain={{
              title: requirementsData.title,
              description: requirementsData.description,
              image: requirementsData.image,
              list: requirementsData.list,
            }}
            quality={qualityContent}
          />
        )}
      </div>

      <div className="px-4 sm:px-4 lg:px-28 mt-8 sm:mt-8 lg:mt-16">
        {otherOptionsTitle && (
          <OtherOptions
            mainTitle={otherOptionsTitle}
            options={otherOptions}
          />
        )}
      </div>

      <div className="px-4 sm:px-4 lg:px-28 mb-16 sm:mb-16 lg:mb-36 mt-14 sm:mt-14 lg:mt-20">
        <ContactInformation />
      </div>
    </>
  );
};

export default DetailedFreeEducation;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Banner from "../../../../../components/Banner";
import apiService from "../../../../../api/apiService";
import IntakeSection from "./UiComponents/IntakeSection";
import VirtualAssistance from "./UiComponents/VirtualAssistance";
import ContactInformation from "../../../../../components/UiComponents/ContactInformation";
import OurCourses from "../../../UiComponents/OurCourses";

const DedicatedCountryService = () => {
  const { slug } = useParams();
  const [countryData, setCountryData] = useState({
    cardTitle: "",
    cardImage: "",
    cardDescription: "",
  });
  const [bannerData, setBannerData] = useState({
    bannerTitle: "",
    bannerImage: "",
    bannerDescription: "",
    bannerButtonName: "",
  });
  const [keyFacts, setKeyFacts] = useState([]);
  const [chooseData, setChooseData] = useState({
    title: "<h2>Why Choose This Country?</h2>",
    image: "",
    description: "<p>This destination offers a wide range of opportunities.</p>",
    list: [],
  });
  const [intakeData, setIntakeData] = useState({
    title: "<h3>Intake Information</h3>",
    startDate: "<p><strong>Start Date:</strong> TBD</p>",
    endDate: "<p><strong>End Date:</strong> TBD</p>",
    additional: "<p><strong>Additional Info:</strong> Contact support for details.</p>",
  });
  const [assistanceData, setAssistanceData] = useState({
    title: "<h2>Virtual Assistance</h2>",
    description: "<p>Contact us for virtual assistance and support.</p>",
  });
  const [coursesData, setCoursesData] = useState({
    title: "<h2>Our Courses</h2>",
    courses: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiService
      .getServiceDestinationListing()
      .then((response) => {
        const destination = response.data.find((item) => item.slug === slug);
        if (!destination) {
          throw new Error("Destination not found");
        }

        const cardTitle = destination.destination_name || "Unnamed Destination";
        setCountryData({
          cardTitle,
          cardImage: destination.destination_image || "",
          cardDescription:
            destination.destination_description || "No description available",
        });

        const subcategory = destination.subcategories[0] || {};

        const bannerTitle = subcategory.banner_title || `Discover ${cardTitle}`;
        setBannerData({
          bannerTitle,
          bannerImage: subcategory.banner_image || "",
          bannerDescription:
            subcategory.banner_description ||
            "Explore opportunities in this destination.",
          bannerButtonName: subcategory.banner_button_name || "Apply Now",
        });

        const facts = (subcategory.key_fact || []).slice(0, 4).map((fact) => ({
          title: fact.title || "No title",
          description: fact.content || "No content",
        }));
        setKeyFacts(facts);

        const chooseTitleData =
          Array.isArray(subcategory.choose_title) &&
          subcategory.choose_title.length > 0
            ? subcategory.choose_title[0]
            : {};
        setChooseData({
          title: chooseTitleData.title || "<h2>Why Choose This Country?</h2>",
          image: chooseTitleData.image || "",
          description:
            chooseTitleData.description ||
            "<p>This destination offers a wide range of opportunities.</p>",
          list: (Array.isArray(subcategory.choose_list)
            ? subcategory.choose_list
            : []
          ).map((item) => ({
            listTitle: item.list_title || "<h4>No Title</h4>",
            listDescription:
              item.list_description || "<p>No description available.</p>",
          })),
        });

        const intakeInfo =
          Array.isArray(subcategory.intake_information) &&
          subcategory.intake_information.length > 0
            ? subcategory.intake_information[0]
            : {};
        setIntakeData({
          title:
            intakeInfo.intake_information_title || "<h3>Intake Information</h3>",
          startDate:
            intakeInfo.start_date || "<p><strong>Start Date:</strong> TBD</p>",
          endDate:
            intakeInfo.end_date || "<p><strong>End Date:</strong> TBD</p>",
          additional:
            intakeInfo.additional_information ||
            "<p><strong>Additional Info:</strong> Contact support for details.</p>",
        });

        const assistanceInfo =
          Array.isArray(subcategory.virtual_assistance) &&
          subcategory.virtual_assistance.length > 0
            ? subcategory.virtual_assistance[0]
            : {};
        setAssistanceData({
          title: assistanceInfo.title || "<h2>Virtual Assistance</h2>",
          description:
            assistanceInfo.description ||
            "<p>Contact us for virtual assistance and support.</p>",
        });

        const coursesTitle =
          Array.isArray(subcategory.our_courses_title) &&
          subcategory.our_courses_title.length > 0
            ? subcategory.our_courses_title[0]
            : {};
        const coursesList = Array.isArray(subcategory.our_courses_listing)
          ? subcategory.our_courses_listing
          : [];
        setCoursesData({
          title: coursesTitle.title || "<h2>Our Courses</h2>",
          courses: coursesList.map((course) => ({
            image: course.image || "",
            title: course.title || "No title",
            description: course.description || "No description",
            order: course.order || 0,
          })),
        });
      })
      .catch((err) => {
        setError("Failed to fetch country data");
        console.error("Error fetching data:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-8">{error}</div>;
  }

  return (
    <>
      <Banner
        title={bannerData.bannerTitle}
        backgroundImage={bannerData.bannerImage}
        showApplyButton={true}
        buttonText={bannerData.bannerButtonName}
      />
      <div className="px-4 sm:px-4 lg:px-28">
        <div className="py-8 sm:py-8 lg:py-10">
          <div className="text-center">
            <div
              dangerouslySetInnerHTML={{ __html: bannerData.bannerDescription }}
            />
          </div>
        </div>
        <div className="pb-20">
          {keyFacts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFacts.map((fact, index) => (
                <div
                  key={index}
                  className="relative py-5 bg-gray-100 text-center rounded-t-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div
                    className="mb-2"
                    dangerouslySetInnerHTML={{ __html: fact.title }}
                  />
                  <div
                    className="mb-2"
                    dangerouslySetInnerHTML={{ __html: fact.description }}
                  />
                  <div className="w-full absolute bottom-0 border-[4px] border-primary-orange"></div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-base text-gray-600">
              No key facts available for{" "}
              <span dangerouslySetInnerHTML={{ __html: countryData.cardTitle }} />
              . Please contact support for more information.
            </p>
          )}
        </div>
      </div>
      <section className="pb-8 sm:pb-8 lg:pb-20">
        <IntakeSection whyChoose={chooseData} intake={intakeData} />
      </section>
      <section className="pb-8 sm:pb-8 lg:pb-14">
        <VirtualAssistance assistance={assistanceData} />
      </section>
      <section className="pb-8 sm:pb-8 lg:pb-16">
        <OurCourses coursesData={coursesData} />
      </section>
      <div className="px-4 sm:px-4 lg:px-28 mb-16 sm:mb-16 lg:mb-36">
        <ContactInformation />
      </div>
    </>
  );
};

export default DedicatedCountryService;
import apiClient from "./apiClient";

const apiService = {
  getHomeBanner: () => {
    return apiClient.get("/home/home-banner/");
  },
  getPopularCourseTabs: () => {
    return apiClient.get("/courses/popular-courses/tabs/");
  },
  getFreeCourseDetailPageBanner: (slug) => {
    const url = `/courses/course-banner-entry/?course_slug=${encodeURIComponent(slug)}`;
    return apiClient.get(url);
  },
  getFreeCourseDetailPageTabs: (slug) => {
    return apiClient.get(`/courses/course-tab-entry/?course_slug=${encodeURIComponent(slug)}`);
  },
  getFreeCourseDetailPageWhyChooseTitle: (slug) => {
    const url = `/courses/course-why-choose-title-entry/?course_slug=${encodeURIComponent(slug)}`;
    return apiClient.get(url);
  },
  getFreeCourseDetailPageWhyChoose: (slug) => {
    return apiClient.get(`/courses/course-why-choose-entry/?course_slug=${encodeURIComponent(slug)}`);
  },
  getCoursesByTab: (tab) => {
    return apiClient.get(`/courses/course-listings/by-tab/?tab=${encodeURIComponent(tab)}`);
  },
  getAboutHighlights: () => {
    return apiClient.get("/about/about-highlights/");
  },
  getServiceHighlights: () => {
    return apiClient.get("/service/service-highlights/");
  },
  getFreeEducationTitle: () => {
    return apiClient.get("/free-education/free-education-title/");
  },
  getFreeEducationCountries: () => {
    return apiClient.get("/free-education/free-education-country/");
  },
  getFreeEducationCountryDedicatedPage: (slug) => {
    return apiClient.get(`/free-education/free-education-country-banner-entry/?free_education_country_slug=${encodeURIComponent(slug)}`);
  },
  getFreeEducationCountryKeyFactTitle: (slug) => {
    return apiClient.get(`/free-education/free-education-country-key-fact-title-entry/?free_education_country_slug=${encodeURIComponent(slug)}`);
  },
  getFreeEducationCountryKeyFactListings: (slug) => {
    return apiClient.get(`/free-education/free-education-country-key-fact-listing-entry/?free_education_country_slug=${encodeURIComponent(slug)}`);
  },
  getFreeEducationCountryRequirementsTitle: (slug) => {
    return apiClient.get(`/free-education/free-education-country-requirements-title-entry/?free_education_country_slug=${encodeURIComponent(slug)}`);
  },
  getFreeEducationCountryRequirementsListings: (slug) => {
    return apiClient.get(`/free-education/free-education-country-requirements-listing-entry/?free_education_country_slug=${encodeURIComponent(slug)}`);
  },
  getFreeEducationCountryOtherOptionsTitle: (slug) => {
    return apiClient.get(`/free-education/free-education-country-other-options-title-entry/?free_education_country_slug=${encodeURIComponent(slug)}`);
  },
  getFreeEducationCountryOtherOptionsListings: (slug) => {
    return apiClient.get(`/free-education/free-education-country-other-options-listing-entry/?free_education_country_slug=${encodeURIComponent(slug)}`);
  },
  getFreeEducationCourses: (link = null) => {
    const url = link ? `/courses/free-education-courses/?link=${encodeURIComponent(link)}` : `/courses/free-education-courses/`;
    return apiClient.get(url);
  },
  getCourseListings: (link = null) => {
    const url = link ? `/courses/course-listings/?link=${encodeURIComponent(link)}` : `/courses/course-listings/`;
    return apiClient.get(url);
  },
  getNewsTitle: () => {
    return apiClient.get("/home/news-events-title/");
  },
  getNewsEventsByTab: () => {
    return apiClient.get("/news-and-events/news-events-listing/");
  },
  getNewsEventByLink: (link) => {
    return apiClient.get(`/news-and-events/news-events-listing/by-link/${encodeURIComponent(link)}/`);
  },
  getNewsEventsRecap: () => {
    return apiClient.get("/news-and-events/news-events-recap/");
  },
  getTestimonialTitle: () => {
    return apiClient.get("/home/testimonial-title/");
  },
  getTestimonialImages: () => {
    return apiClient.get("/home/testimonial-images/");
  },
  getTestimonialVideos: () => {
    return apiClient.get("/home/testimonial-videos/");
  },
  getAboutBanner: () => {
    return apiClient.get("/about/about-banner/");
  },
  getAboutTailorGuidance: () => {
    return apiClient.get("/about/about-tailor-guidance/");
  },
  getAboutWhyCrossroadsTitle: () => {
    return apiClient.get("/about/about-why-crossroads-title/");
  },
  getAboutWhyCrossroads: () => {
    return apiClient.get("/about/about-why-crossroads/");
  },
  getAboutMissionVision: () => {
    return apiClient.get("/about/about-mission-vision/");
  },
  getAboutOurValuesTitle: () => {
    return apiClient.get("/about/about-our-values-title/");
  },
  getAboutOurValues: () => {
    return apiClient.get("/about/about-our-values/");
  },
  getTestimonialsBanner: () => {
    return apiClient.get("/testimonials/testimonial-banner/");
  },
  getTestimonialsTab: () => {
    return apiClient.get("/testimonials/testimonials-tab/");
  },
  getTestimonialsImage: () => {
    return apiClient.get("/testimonials/testimonials-image-listings/");
  },
  getTestimonialsVideo: () => {
    return apiClient.get("/testimonials/testimonials-video-listings/");
  },
  getServiceDocumentationAssistanceBanner: () => {
    return apiClient.get("/service/service-doumentation-assistance-banner/");
  },
  getServiceDocumentationAssistanceTabs: () => {
    return apiClient.get("/service/service-documentation-assistance-tabs/");
  },
  getServiceDocumentationAssistanceListings: () => {
    return apiClient.get("/service/service-documentation-assistance-listings/");
  },
  getServiceLanguageLabBanner: () => {
    return apiClient.get("/service/service-language-lab-banner/");
  },
  getServiceLanguageLabListing: () => {
    return apiClient.get("/service/service-language-lab-listing/");
  },
  getServiceCountryBanner: () => {
    return apiClient.get("/service/service-country-banner/");
  },
  getServiceDestinationListing: () => {
    return apiClient.get("/service/service-destination-listings/");
  },
  getEducationDestinationPageData: (slug) => {
    return apiClient.get(`/service/service-destination-banner-entry/?destination_slug=${slug}`);
  },
  getServiceCourseBanner: () => {
    return apiClient.get("/service/service-course-banner/");
  },
  getContactBanner: () => {
    return apiClient.get("/contact/contact-banner/");
  },
  getContactInfoHub: () => {
    return apiClient.get("/contact/contact-info-hub/");
  },
  getTermsConditionsBanner: () => {
    return apiClient.get("/terms-and-conditions/terms-conditions-banner/");
  },
  getTermsConditionsContent: () => {
    return apiClient.get("/terms-and-conditions/terms-conditions-content/");
  },
  getPrivacyPolicyBanner: () => {
    return apiClient.get("/privacy-policy/privacy-policy-banner/");
  },
  getPrivacyPolicyContent: () => {
    return apiClient.get("/privacy-policy/privacy-policy-content/");
  },
  getNewsEventsBanner: () => {
    return apiClient.get("/news-and-events/news-events-banner/");
  },
  getGalleryBanner: () => {
    return apiClient.get("/gallery/gallery-banner/");
  },
  getGalleryCards: () => {
    return apiClient.get("/gallery/gallery-create/");
  },
  getGalleryDetailsByLink: (link) => {
    return apiClient.get(`/gallery/gallery-create/by-link/${encodeURIComponent(link)}/`);
  },
  getGalleryImagesByGalleryId: (galleryId) => {
    return apiClient.get(`/gallery/gallery-image-listing/?gallery=${galleryId}`);
  },
  getGalleryVideosByGalleryId: (galleryId) => {
    return apiClient.get(`/gallery/gallery-video-listing/?gallery=${galleryId}`);
  },
  getBlogBanner: () => {
    return apiClient.get("/blog/blog-banner/");
  },
  getBlogPosts: () => {
    return apiClient.get("/blog/blog-post-create/");
  },
  getBlogPostByLink: (link) => {
    return apiClient.get(`/blog/blog-post-create/by-link/${encodeURIComponent(link)}/`);
  },
  getSocialMediaLinks: () => {
    return apiClient.get("/social-media/social-media-links/");
  },
};

export default apiService;
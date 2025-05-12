import React from "react";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Country from "./pages/Services/Education/Country";
import Course from "./pages/Services/Education/Course";
import DocumentationAssistance from "./pages/Services/DocumentationAssistance";
import LanguageLab from "./pages/Services/LanguageLab";
import DedicatedCountryService from "./pages/Services/Education/Country/DedicatedCountryService";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NewsEvents from "./pages/NewsEvents";
import NewsEventsDetail from "./pages/NewsEvents/pages/NewsEventsDetail";
import Gallery from "./pages/Gallery";
import Blogs from "./pages/Blogs";
import GalleryDetail from "./pages/Gallery/pages/GalleryDetail";
import BlogDetail from "./pages/Blogs/page/BlogDetail";
import DetailedFreeEducation from "./pages/Home/UiComponents/FreeEducation/page/DetailedFreeEducation";
import DetailedFreeCourses from "./pages/Home/UiComponents/FreeEducation/page/DetailedFreeCourses";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/services/education/country" element={<Country />} />
        <Route path="/services/education/country/:slug" element={<DedicatedCountryService />} />
        <Route path="/services/education/find-a-course" element={<Course />} />
        <Route path="/services/documentation-assistance" element={<DocumentationAssistance />} />
        <Route path="/services/language-lab" element={<LanguageLab />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/news-and-events" element={<NewsEvents />} />
        <Route path="/news-and-events/:link" element={<NewsEventsDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:link" element={<GalleryDetail />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:link" element={<BlogDetail />} />
        <Route path="/free-education/:link" element={<DetailedFreeEducation />} />
        <Route path="/services/education/course/:link" element={<DetailedFreeCourses />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
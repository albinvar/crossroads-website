import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Navigate, useLocation } from 'react-router';
import Login from './pages/Auth/Login';
import ForgotPassword from './pages/Auth/ForgotPassword';
import OTPVerification from './pages/Auth/OTPVerification';
import ResetPassword from './pages/Auth/ResetPassword';
import apiClient from './api/apiClient';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Home from './pages/Main/Home';
import About from './pages/Main/About';
import Testimonials from './pages/Main/Testimonials';
import Service from './pages/Main/Services';
import Contact from './pages/Main/Contact';
import TermsConditions from './pages/Main/TermsConditions';
import PrivacyPolicy from './pages/Main/PrivacyPolicy';
import NewsEvents from './pages/Main/NewsEvents';
import Blog from './pages/Main/Blog';
import Gallery from './pages/Main/Gallery';
import FreeEducation from './pages/Main/FreeEducation';
import Courses from './pages/Main/Courses';

const DashboardPage = () => <div className="mt-14"><Dashboard /></div>;
const HomePage = () => <div className="mt-14"><Home /></div>;
const AboutPage = () => <div className="mt-14"><About /></div>;
const ProfilePage = () => <div className="mt-14"><Profile /></div>;
const TestimonialsPage = () => <div className="mt-14"><Testimonials /></div>;
const ServicePage = () => <div className="mt-14"><Service /></div>;
const ContactPage = () => <div className="mt-14"><Contact /></div>;
const TermsConditionsPage = () => <div className="mt-14"><TermsConditions /></div>;
const PrivacyPolicyPage = () => <div className="mt-14"><PrivacyPolicy /></div>;
const NewsEventsPage = () => <div className="mt-14"><NewsEvents /></div>;
const BlogPage = () => <div className="mt-14"><Blog /></div>;
const GalleryPage = () => <div className="mt-14"><Gallery /></div>;
const FreeEducationPage = () => <div className="mt-14"><FreeEducation /></div>;
const CoursesPage = () => <div className="mt-14"><Courses/></div>

const PrivateRoute = ({ element }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('access_token') || sessionStorage.getItem('access_token');

      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        await apiClient.get('/auth/profile/');
        setIsAuthenticated(true);
      } catch (error) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('refresh_token');
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-[#00334d] text-sm">Loading...</p>
      </div>
    );
  }

  return isAuthenticated ? element : <Navigate to="/login" state={{ from: location }} replace />;
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/otp-verification",
    element: <OTPVerification />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <PrivateRoute element={<DashboardPage />} />,
      },
      {
        path: 'home-section',
        element: <PrivateRoute element={<HomePage />} />,
      },
      {
        path: 'about-section',
        element: <PrivateRoute element={<AboutPage />} />,
      },
      {
        path: 'profile',
        element: <PrivateRoute element={<ProfilePage />} />,
      },
      {
        path: 'testimonials-section',
        element: <PrivateRoute element={<TestimonialsPage />} />,
      },
      {
        path: 'services-section',
        element: <PrivateRoute element={<ServicePage />} />,
      },
      {
        path: 'contact-section',
        element: <PrivateRoute element={<ContactPage />} />,
      },
      {
        path: 'terms-and-conditions-section',
        element: <PrivateRoute element={<TermsConditionsPage />} />,
      },
      {
        path: 'privacy-policy-section',
        element: <PrivateRoute element={<PrivacyPolicyPage />} />,
      },
      {
        path: 'news-and-events-section',
        element: <PrivateRoute element={<NewsEventsPage />} />,
      },
      {
        path: 'blog-section',
        element: <PrivateRoute element={<BlogPage />} />,
      },
      {
        path: 'gallery-section',
        element: <PrivateRoute element={<GalleryPage />} />,
      },
      {
        path: 'free-education-country-page-section',
        element: <PrivateRoute element={<FreeEducationPage />} />,
      },
            {
        path: 'course-page-section',
        element: <PrivateRoute element={<CoursesPage />} />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
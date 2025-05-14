import React, { useState } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Captcha from "../../Captcha";
import { Link } from "react-router";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    helpOption: "",
    message: "",
    IsChecked: true,
  });

  const [errors, setErrors] = useState({});
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleHelpOption = (option) => {
    setFormData((prevData) => ({
      ...prevData,
      helpOption: option,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.helpOption) newErrors.helpOption = "Please select an option";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (!formData.IsChecked) newErrors.IsChecked = "You must consent to proceed";
    if (!recaptchaToken) newErrors.recaptcha = "reCAPTCHA verification failed";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    console.log("Form submitted:", { ...formData, recaptchaToken });
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      helpOption: "",
      message: "",
      IsChecked: true,
    });
    setRecaptchaToken("");
    alert("Form submitted successfully!");
  };

  const reCaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  console.log("reCAPTCHA Key:", reCaptchaKey);
  if (!reCaptchaKey) {
    console.error("reCAPTCHA site key is not defined. Please set VITE_RECAPTCHA_SITE_KEY in .env");
    return <div className="text-red-400 text-sm">reCAPTCHA configuration error. Please spicontact support.</div>;
  }

  return (
    <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
      <div>
        <form
          onSubmit={handleSubmit}
          className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-200 text-xs mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-lg bg-transparent border border-gray-200 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange-hover focus:border-none text-sm"
              placeholder=""
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-200 text-xs mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-lg bg-transparent border border-gray-200 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange-hover focus:border-none text-sm"
              placeholder=""
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-gray-200 text-xs mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 rounded-lg bg-transparent border border-gray-200 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange-hover focus:border-none text-sm"
              placeholder=""
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="location" className="text-gray-200 text-xs mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="p-3 rounded-lg bg-transparent border border-gray-200 text-gray-200 placeholder-gray-400 focus-outline-none focus:ring-2 focus:ring-primary-orange-hover focus:border-none text-sm"
              placeholder=""
            />
            {errors.location && (
              <p className="text-red-400 text-xs mt-1">{errors.location}</p>
            )}
          </div>
          <div className="md:col-span-2 flex flex-col mt-5">
            <label className="text-gray-200 text-xs mb-2">
              How Can We Help You
            </label>
            <div className="flex flex-row w-full space-x-3">
              <button
                type="button"
                onClick={() => handleHelpOption("Education")}
                className={`w-full py-3 rounded-lg border border-gray-200 text-gray-200 transition-colors text-sm ${
                  formData.helpOption === "Education"
                    ? "bg-[#F9920A] border-[#F9920A]"
                    : "hover:bg-[#F9920A] hover:border-[#F9920A]"
                }`}
              >
                Education
              </button>
              <button
                type="button"
                onClick={() => handleHelpOption("Job Assistance")}
                className={`w-full py-3 rounded-lg border border-gray-200 text-gray-200 transition-colors text-sm ${
                  formData.helpOption === "Job Assistance"
                    ? "bg-[#F9920A] border-[#F9920A]"
                    : "hover:bg-[#F9920A] hover:border-[#F9920A]"
                }`}
              >
                Job Assistance
              </button>
              <button
                type="button"
                onClick={() => handleHelpOption("Migration")}
                className={`w-full py-3 rounded-lg border border-gray-200 text-gray-200 transition-colors text-sm ${
                  formData.helpOption === "Migration"
                    ? "bg-[#F9920A] border-[#F9920A]"
                    : "hover:bg-[#F9920A] hover:border-[#F9920A]"
                }`}
              >
                Migration
              </button>
            </div>
            {errors.helpOption && (
              <p className="text-red-400 text-xs mt-2">{errors.helpOption}</p>
            )}
          </div>
          <div className="md:col-span-2 flex flex-col">
            <label htmlFor="message" className="text-gray-200 text-xs mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="p-3 rounded-lg bg-transparent border border-gray-200 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange-hover focus:border-none text-sm resize-none"
              placeholder=""
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">{errors.message}</p>
            )}
          </div>
          <div className="md:col-span-2 flex items-center justify-start space-x-3">
            <input
              type="checkbox"
              id="consent"
              name="IsChecked"
              checked={formData.IsChecked}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <p className="text-gray-200 text-sm leading-tight">
              I agree to the <Link to="/terms-and-conditions">Terms and Conditions </Link>and <Link to="/privacy-policy">Privacy Policy</Link>
            </p>
            {errors.IsChecked && (
              <p className="text-red-400 text-xs mt-2 font-medium">
                {errors.IsChecked}
              </p>
            )}
          </div>
          <div className="md:col-span-2">
            <Captcha setRecaptchaToken={setRecaptchaToken} />
            {errors.recaptcha && (
              <p className="text-red-400 text-xs mt-2 font-medium">{errors.recaptcha}</p>
            )}
          </div>
          <div className="md:col-span-2 flex justify-start">
            <button
              type="submit"
              className="mt-2 text-gray-200 hover:text-primary-dark text-md bg-primary-orange hover:bg-gray-100 rounded-full px-10 py-2.5 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Mobile Layout */}
        <form
          onSubmit={handleSubmit}
          className="grid lg:hidden grid-cols-1 gap-4 -mt-6"
        >
          <div className="flex flex-col">
            <label htmlFor="name-mobile" className="text-gray-200 text-lg mb-2">
              Name
            </label>
            <input
              type="text"
              id="name-mobile"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-2.5 rounded-lg bg-transparent border border-gray-200 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange-hover focus:border-none text-sm"
              placeholder=""
            />
            {errors.name && (
              <p className="text-red-400 text-lg mt-1">{errors.name}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email-mobile" className="text-gray-200 text-lg mb-2">
              Email
            </label>
            <input
              type="email"
              id="email-mobile"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2.5 rounded-lg bg-transparent border border-gray-200 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange-hover focus:border-none text-sm"
              placeholder=""
            />
            {errors.email && (
              <p className="text-red-400 text-lg mt-1">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone-mobile" className="text-gray-200 text-lg mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone-mobile"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-2.5 rounded-lg bg-transparent border border-gray-200 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange-hover focus:border-none text-sm"
              placeholder=""
            />
            {errors.phone && (
              <p className="text-red-400 text-lg mt-1">{errors.phone}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="location-mobile"
              className="text-gray-200 text-lg mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location-mobile"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="p-2.5 rounded-lg bg-transparent border border-gray-200 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange-hover focus:border-none text-sm"
              placeholder=""
            />
            {errors.location && (
              <p className="text-red-400 text-lg mt-1">{errors.location}</p>
            )}
          </div>
          <div className="flex flex-col mt-3">
            <label className="text-gray-200 text-lg mb-2">
              How Can We Help You
            </label>
            <div className="flex flex-col w-full space-y-2">
              <button
                type="button"
                onClick={() => handleHelpOption("Education")}
                className={`w-full py-2.5 rounded-lg border border-gray-200 text-gray-200 transition-colors text-lg ${
                  formData.helpOption === "Education"
                    ? "bg-[#F9920A] border-[#F9920A]"
                    : "hover:bg-[#F9920A] hover:border-[#F9920A]"
                }`}
              >
                Education
              </button>
              <button
                type="button"
                onClick={() => handleHelpOption("Job Assistance")}
                className={`w-full py-2.5 rounded-lg border border-gray-200 text-gray-200 transition-colors text-lg ${
                  formData.helpOption === "Job Assistance"
                    ? "bg-[#F9920A] border-[#F9920A]"
                    : "hover:bg-[#F9920A] hover:border-[#F9920A]"
                }`}
              >
                Job Assistance
              </button>
              <button
                type="button"
                onClick={() => handleHelpOption("Migration")}
                className={`w-full py-2.5 rounded-lg border border-gray-200 text-gray-200 transition-colors text-lg ${
                  formData.helpOption === "Migration"
                    ? "bg-[#F9920A] border-[#F9920A]"
                    : "hover:bg-[#F9920A] hover:border-[#F9920A]"
                }`}
              >
                Migration
              </button>
            </div>
            {errors.helpOption && (
              <p className="text-red-400 text-lg mt-2">{errors.helpOption}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="message-mobile"
              className="text-gray-200 text-lg mb-2"
            >
              Message
            </label>
            <textarea
              id="message-mobile"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="p-2.5 rounded-lg bg-transparent border border-gray-200 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange-hover focus:border-none text-sm resize-none"
              placeholder=""
            />
            {errors.message && (
              <p className="text-red-400 text-lg mt-1">{errors.message}</p>
            )}
          </div>
          <div className="flex items-center justify-start space-x-3">
            <input
              type="checkbox"
              id="consent-mobile"
              name="IsChecked"
              checked={formData.IsChecked}
              onChange={handleChange}
              className="h-5 w-5 text-primary-dark border-gray-300 rounded focus:ring-primary-dark-hover"
            />
            <p className="text-gray-200 text-sm leading-tight">
              By submitting, I give my consent to receive messages, emails, or
              calls from the brand regarding their updates.
            </p>
            {errors.IsChecked && (
              <p className="text-red-400 text-xs mt-2 font-medium">
                {errors.IsChecked}
              </p>
            )}
          </div>
          <div>
            <Captcha setRecaptchaToken={setRecaptchaToken} />
            {errors.recaptcha && (
              <p className="text-red-400 text-xs mt-2 font-medium">{errors.recaptcha}</p>
            )}
          </div>
          <div className="flex justify-center mb-8">
            <button
              type="submit"
              className="text-gray-200 hover:text-primary-dark text-sm bg-primary-orange hover:bg-gray-100 rounded-full px-8 py-2 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default ContactForm;
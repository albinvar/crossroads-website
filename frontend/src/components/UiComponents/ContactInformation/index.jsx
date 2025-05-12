import React from "react";
import ContactForm from "../Forms/ContactForm";
import CutOut from "../../CutOut";

const ContactInformation = () => {
  return (
    <div className="relative bg-primary-dark w-full h-auto flex flex-col justify-center items-center rounded-lg overflow-hidden md:flex-row px-4 pt-8 pb-8 md:px-14 md:pt-14 md:pb-10">
      <div className="absolute -top-52 left-28 hidden md:block">
        <CutOut />
      </div>
      <div className="w-full md:w-[48%] pl-0 md:pl-10 relative top-0 md:-top-12">
        <h2 className="text-3xl font-bold text-white mb-4 flex flex-col md:text-4xl">
          <span>Contact</span>
          <span className="block mt-2">Information</span>
        </h2>
        <p className="text-gray-300 text-lg sm:text-lg lg:text-[16px]">
          Any question or remarks? Just write us a message!
        </p>
      </div>
      <div className="w-full md:w-[52%] relative top-6 md:top-0 mt-8 md:mt-0">
        <ContactForm />
      </div>
      <div className="absolute -bottom-52 right-28 hidden md:block">
        <CutOut />
      </div>
    </div>
  );
};

export default ContactInformation;

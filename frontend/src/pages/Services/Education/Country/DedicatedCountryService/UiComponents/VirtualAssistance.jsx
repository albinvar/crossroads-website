import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../../../../../../components/Modal";

const VirtualAssistance = ({ assistance }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="w-full bg-[#00334D] text-center">
        <div className="px-4 sm:px-8 lg:px-16 py-6 sm:py-8 lg:py-10 flex flex-col justify-start">
          <div
            className="mb-4 sm:mb-6"
            dangerouslySetInnerHTML={{ __html: assistance.title }}
          />
          <div
            className="mb-4 sm:mb-6 max-w-3xl mx-auto"
            style={{ lineHeight: "1.5" }}
            dangerouslySetInnerHTML={{ __html: assistance.description }}
          />
          <div className="flex justify-center items-center">
            <button className="mt-2 w-32 sm:w-40 bg-primary-orange hover:bg-[#fcfcfc] text-white hover:text-primary-dark text-xs sm:text-sm font-medium py-2 px-4 rounded-full transition-all duration-300 ease-in-out"
            onClick={openModal}>
              Enquire Now
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && <Modal onClose={closeModal} />}
      </AnimatePresence>
    </>
  );
};

export default VirtualAssistance;

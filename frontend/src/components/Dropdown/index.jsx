import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const Dropdown = ({ name, value, onChange, options, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (selectedValue) => {
    onChange(name, selectedValue);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedOption = options.find((option) => option.value === value);
  const placeholder = options[0]?.label || '';
  const selectableOptions = options.filter((option) => option.value !== ''); 

  return (
    <div className="relative w-80" ref={dropdownRef}>
      <motion.div
        className="flex items-center px-2 py-2 border border-gray-300 rounded-md bg-[#003050] text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={toggleDropdown}
        whileHover={{ backgroundColor: '#004070' }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute left-2">{icon}</div>
        <span className="ml-6 flex-1 text-sm">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <motion.svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {selectableOptions.map((option) => (
              <motion.li
                key={option.value}
                className={`px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 cursor-pointer ${
                  option.value === value ? 'bg-blue-50 font-semibold' : ''
                }`}
                onClick={() => handleSelect(option.value)}
                whileHover={{ backgroundColor: '#e6f0ff' }}
                transition={{ duration: 0.1 }}
              >
                {option.label}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  icon: PropTypes.node.isRequired,
};

export default Dropdown;
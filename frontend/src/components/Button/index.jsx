import React from 'react';

const Button = ({ label, className, onClick }) => {
  return (
    <button
      className={`${className} flex items-center justify-center`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
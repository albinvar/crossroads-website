import React from "react";

const CutOut = () => {
  return (
    <div className="relative flex items-center justify-center h-80 w-80">
      <div className="bg-secondary-dark w-80 h-80 rounded-full absolute z-10"></div>
      <div className="bg-white w-40 h-40 rounded-full absolute z-20"></div>
    </div>
  );
};

export default CutOut;
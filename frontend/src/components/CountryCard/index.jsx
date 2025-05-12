import React from 'react';

const CountryCard = ({ name, flagSrc, borderOrientation = 'to bottom' }) => {
  return (
    <>
      <style>
        {`
          @keyframes borderRotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .animate-border-rotate {
            animation: borderRotate 50s linear infinite;
          }
        `}
      </style>

      <div className="z-10 flex flex-col items-center transition-transform duration-300 hover:scale-110">
        <div className="relative overflow-hidden" style={{ width: '200px', height: '200px' }}>
          <div className="relative">
            <img
              src={flagSrc}
              alt={`${name} flag`}
              className="rounded-full border-3 border-transparent transition-transform duration-200 hover:scale-105 p-1.5"
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
            <div
              className="absolute inset-0 rounded-full animate-border-rotate"
              style={{
                background: `linear-gradient(${borderOrientation}, #F9920A 50%, #00334D 50%)`,
                padding: '2px',
                WebkitMask:
                  'radial-gradient(circle at center, transparent 64%, black 64%)',
                mask: 'radial-gradient(circle at center, transparent 64%, black 64%)',
              }}
            />
          </div>
        </div>
        <div
          className="mt-8 font-semibold text-lg"
          style={{ color: '#00334D' }}
          dangerouslySetInnerHTML={{ __html: name }}
        />
      </div>
    </>
  );
};

export default CountryCard;
import React from 'react';

const CallIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="18"
    className={className}
    fill="#fff"
  >
    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
  </svg>
);

const MailIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="white"
    viewBox="0 0 512 512"
    className={className}
  >
    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
  </svg>
);

const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="#fff"
    opacity="0.8"
    width="25"
    height="25"
  >
    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
  </svg>
);

const WhiteShadowIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="77"
    height="311.011"
    viewBox="0 0 77 311.011"
    className={className}
  >
    <g id="Group_465" data-name="Group 465" transform="translate(6)">
      <rect
        id="Rectangle_44"
        data-name="Rectangle 44"
        width="23"
        height="222.011"
        rx="11.5"
        transform="translate(21 45)"
        opacity="0.37"
      />
      <rect
        id="Rectangle_45"
        data-name="Rectangle 45"
        width="44"
        height="311.011"
        transform="translate(0 0)"
        fill="#fff"
      />
    </g>
  </svg>
);

const ArrowRightIcon = ({ className = '', fill = '#00334D' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    viewBox="0 0 31.967 23.249"
  >
    <path
      id="next"
      d="M32.541,14.6,22.37,4.426A1.453,1.453,0,1,0,20.315,6.48l7.691,7.691H2.453a1.453,1.453,0,1,0,0,2.906H28.006l-7.691,7.691a1.453,1.453,0,1,0,2.055,2.055L32.541,16.652a1.453,1.453,0,0,0,0-2.055Z"
      transform="translate(-1 -4)"
      fill="#00334D"
      className={className}
    />
  </svg>
);

const AngleRightIcon = ({ className = '', fill = '' }) => (
  <svg
    fill={fill}
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 5l7 7-7 7"
      className={className}
    />
  </svg>
);

const LikeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 33 37.546"
  >
    <g id="like" transform="translate(0)">
      <path
        id="Path_153"
        data-name="Path 153"
        className="cls-1"
        d="M0,120.773a1.1,1.1,0,0,0,1.1,1.1H7.7a3.3,3.3,0,0,0,2.6-1.277,27.44,27.44,0,0,0,8.28,1.277H27.5a3.3,3.3,0,0,0,3.067-4.516,3.3,3.3,0,0,0,1.59-5.384,3.292,3.292,0,0,0,0-4.4,3.3,3.3,0,0,0-2.457-5.5H23.678q.128-.3.264-.616A12.482,12.482,0,0,0,25.3,96.573,5.559,5.559,0,0,0,19.8,91a1.1,1.1,0,0,0-1.078.884l-.562,2.809c-.738,3.689-1.553,4.107-4.585,5.66-.8.41-1.743.893-2.842,1.52a3.305,3.305,0,0,0-3.033-2H1.1a1.1,1.1,0,0,0-1.1,1.1Zm14.577-18.462a12.315,12.315,0,0,0,3.757-2.478,9.318,9.318,0,0,0,1.983-4.709l.36-1.8A3.419,3.419,0,0,1,23.1,96.573a10.911,10.911,0,0,1-1.178,4.013c-.21.487-.424.985-.615,1.487H19.8a1.1,1.1,0,0,0,0,2.2h9.9a1.1,1.1,0,0,1,0,2.2H27.5a1.1,1.1,0,1,0,0,2.2h2.2a1.1,1.1,0,1,1,0,2.2H27.5a1.1,1.1,0,1,0,0,2.2h2.2a1.1,1.1,0,0,1,0,2.2H27.5a1.1,1.1,0,1,0,0,2.2,1.1,1.1,0,0,1,0,2.2H18.584A25.249,25.249,0,0,1,11,118.509V104.264c1.418-.846,2.6-1.454,3.578-1.952ZM2.2,102.073H7.7a1.1,1.1,0,0,1,1.1,1.1v15.4a1.1,1.1,0,0,1-1.1,1.1H2.2Zm0,0"
        transform="translate(0 -84.327)"
      />
      <path
        id="Path_154"
        data-name="Path 154"
        className="cls-1"
        d="M62.2,423.1a1.1,1.1,0,1,1-1.1-1.1A1.1,1.1,0,0,1,62.2,423.1Zm0,0"
        transform="translate(-55.6 -391.054)"
      />
      <path
        id="Path_155"
        data-name="Path 155"
        className="cls-1"
        d="M270,1.1V3.373a1.1,1.1,0,0,0,2.2,0V1.1a1.1,1.1,0,0,0-2.2,0Zm0,0"
        transform="translate(-250.201)"
      />
      <path
        id="Path_156"
        data-name="Path 156"
        className="cls-1"
        d="M340.664,35.716l-1.556,1.556a1.1,1.1,0,0,0,1.556,1.556l1.555-1.556a1.1,1.1,0,1,0-1.555-1.556Zm0,0"
        transform="translate(-313.942 -32.798)"
      />
      <path
        id="Path_157"
        data-name="Path 157"
        className="cls-1"
        d="M180.323,35.716a1.1,1.1,0,0,0,0,1.556l1.555,1.556a1.1,1.1,0,0,0,1.556-1.556l-1.556-1.556A1.1,1.1,0,0,0,180.323,35.716Zm0,0"
        transform="translate(-166.801 -32.798)"
      />
    </g>
  </svg>
);

const TelephoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 28 28"
  >
    <g id="telephone-call" transform="translate(-2 -2)">
      <path
        id="Path_158"
        data-name="Path 158"
        className="cls-1"
        d="M29.393,23.36c-.874-.733-6-3.979-6.852-3.83-.4.071-.706.412-1.525,1.389a11.687,11.687,0,0,1-1.244,1.347,10.757,10.757,0,0,1-2.374-.88A14.7,14.7,0,0,1,10.614,14.6a10.757,10.757,0,0,1-.88-2.374,11.687,11.687,0,0,1,1.347-1.244c.976-.819,1.318-1.123,1.389-1.525.149-.854-3.1-5.978-3.83-6.852C8.334,2.243,8.056,2,7.7,2,6.668,2,2,7.772,2,8.52c0,.061.1,6.07,7.689,13.791C17.41,29.9,23.419,30,23.48,30c.748,0,6.52-4.668,6.52-5.7,0-.356-.243-.634-.607-.94Z"
      />
      <path
        id="Path_159"
        data-name="Path 159"
        className="cls-1"
        d="M23,15h2a8.009,8.009,0,0,0-8-8V9a6.006,6.006,0,0,1,6,6Z"
      />
      <path
        id="Path_160"
        data-name="Path 160"
        className="cls-1"
        d="M28,15h2A13.015,13.015,0,0,0,17,2V4A11.013,11.013,0,0,1,28,15Z"
      />
    </g>
  </svg>
);

const VideoPlayIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 189.524 189.524"
  >
    <g id="play" opacity="0.46">
      <g id="Group_564" data-name="Group 564">
        <path
          id="Path_6387"
          data-name="Path 6387"
          d="M94.762,180.048A85.286,85.286,0,1,0,9.476,94.762,85.286,85.286,0,0,0,94.762,180.048Zm0,9.476A94.762,94.762,0,1,0,0,94.762,94.763,94.763,0,0,0,94.762,189.524Z"
          fill="#fff"
          fillRule="evenodd"
        />
      </g>
      <g id="Group_565" data-name="Group 565">
        <path
          id="Path_6388"
          data-name="Path 6388"
          d="M119.386,94.762,75.809,65.711v58.1Zm8.8-5.519a6.633,6.633,0,0,1,0,11.039L76.645,134.646a6.634,6.634,0,0,1-10.313-5.52V60.4A6.633,6.633,0,0,1,76.645,54.88Z"
          fill="#fff"
          fillRule="evenodd"
        />
      </g>
    </g>
  </svg>
);

const MenuDotsIcon = ({ className = '' }) => (
  <svg
    className={`w-6 h-6 ${className}`}
    fill="#fff"
    stroke="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="4" y="4" width="6" height="6" fill="currentColor" />
    <rect x="14" y="4" width="6" height="6" fill="currentColor" />
    <rect x="4" y="14" width="6" height="6" fill="currentColor" />
    <rect x="14" y="14" width="6" height="6" fill="currentColor" />
  </svg>
);

const ArrowDownIcon = ({ className = '', fill = '#F9920A' }) => (
  <svg
    className={`w-5 h-5 ${className}`}
    fill="none"
    stroke={fill}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const InstagramIcon = () => (
    <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#fcfcfc] hover:fill-[#00334D] transition-colors duration-300"
    >
        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#00334D" />
        <path
            d="M29 20.5C29.8284 20.5 30.5 19.8284 30.5 19C30.5 18.1716 29.8284 17.5 29 17.5C28.1716 17.5 27.5 18.1716 27.5 19C27.5 19.8284 28.1716 20.5 29 20.5Z"
            fill="#F9920A"
        />
        <path
            d="M28 15C30.76 15 33 17.24 33 20V28C33 30.76 30.76 33 28 33H20C17.24 33 15 30.76 15 28V20C15 17.24 17.24 15 20 15H24H28Z"
            stroke="#F9920A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M24 20C26.21 20 28 21.79 28 24C28 26.21 26.21 28 24 28C21.79 28 20 26.21 20 24C20 21.79 21.79 20 24 20Z"
            stroke="#F9920A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const CopyIcon = () => (
    <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#fcfcfc] hover:fill-[#00334D] transition-colors duration-300"
    >
        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#00334D" />
        <path
            d="M21.1724 26.829L26.8294 21.172M19.0504 23.293L17.6364 24.707C17.265 25.0784 16.9704 25.5194 16.7693 26.0047C16.5683 26.49 16.4648 27.0102 16.4648 27.5355C16.4648 28.0608 16.5683 28.5809 16.7693 29.0662C16.9704 29.5515 17.265 29.9925 17.6364 30.364C18.0079 30.7354 18.4489 31.03 18.9342 31.2311C19.4195 31.4321 19.9396 31.5356 20.4649 31.5356C20.9902 31.5356 21.5104 31.4321 21.9957 31.2311C22.481 31.03 22.922 30.7354 23.2934 30.364L24.7054 28.95M23.2924 19.05L24.7064 17.636C25.0779 17.2645 25.5189 16.9699 26.0042 16.7688C26.4895 16.5678 27.0096 16.4644 27.5349 16.4644C28.0602 16.4644 28.5804 16.5678 29.0657 16.7688C29.551 16.9699 29.992 17.2645 30.3634 17.636C30.7349 18.0074 31.0295 18.4484 31.2306 18.9337C31.4316 19.419 31.535 19.9392 31.535 20.4645C31.535 20.9898 31.4316 21.5099 31.2306 21.9952C31.0295 22.4805 30.7349 22.9215 30.3634 23.293L28.9494 24.707"
            stroke="#F9920A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const LinkedInIcon = () => (
    <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#fcfcfc] hover:fill-[#00334D] transition-colors duration-300"
    >
        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#00334D" />
        <path
            d="M18.9404 15C18.9402 15.5305 18.7292 16.0391 18.3539 16.4139C17.9787 16.7888 17.4699 16.9993 16.9394 16.999C16.409 16.9988 15.9004 16.7878 15.5255 16.4125C15.1506 16.0373 14.9402 15.5285 14.9404 14.998C14.9407 14.4676 15.1517 13.959 15.5269 13.5841C15.9022 13.2092 16.411 12.9988 16.9414 12.999C17.4719 12.9993 17.9805 13.2103 18.3554 13.5855C18.7302 13.9608 18.9407 14.4696 18.9404 15ZM19.0004 18.48H15.0004V31H19.0004V18.48ZM25.3204 18.48H21.3404V31H25.2804V24.43C25.2804 20.77 30.0504 20.43 30.0504 24.43V31H34.0004V23.07C34.0004 16.9 26.9404 17.13 25.2804 20.16L25.3204 18.48Z"
            fill="#F9920A"
        />
    </svg>
);

const FacebookIcon = () => (
    <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[#fcfcfc] hover:fill-[#00334D] transition-colors duration-300"
    >
        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="#00334D" />
        <path
            d="M21.396 34H25.396V25.99H29L29.396 22.01H25.396V20C25.396 19.7348 25.5014 19.4804 25.6889 19.2929C25.8764 19.1054 26.1308 19 26.396 19H29.396V15H26.396C25.0699 15 23.7981 15.5268 22.8605 16.4645C21.9228 17.4021 21.396 18.6739 21.396 20V22.01H19.396L19 25.99H21.396V34Z"
            fill="#F9920A"
        />
    </svg>
);

export const Call = (props) => <CallIcon {...props} />;
export const Mail = (props) => <MailIcon {...props} />;
export const Hamburger = (props) => <HamburgerIcon {...props} />;
export const WhiteShadow = (props) => <WhiteShadowIcon {...props} />;
export const ArrowRight = (props) => <ArrowRightIcon {...props} />;
export const AngleRight = (props) => <AngleRightIcon {...props} />;
export const Like = (props) => <LikeIcon {...props} />;
export const Telephone = (props) => <TelephoneIcon {...props} />;
export const VideoPlay = (props) => <VideoPlayIcon {...props} />;
export const MenuDots = (props) => <MenuDotsIcon {...props} />;
export const ArrowDown = (props) => <ArrowDownIcon {...props} />;
export const Instagram = (props) => <InstagramIcon {...props} />;
export const Copy = (props) => <CopyIcon {...props} />;
export const LinkedIn = (props) => <LinkedInIcon {...props} />;
export const Facebook = (props) => <FacebookIcon {...props} />;

const Icons = {
  Call,
  Mail,
  Hamburger,
  WhiteShadow,
  ArrowRight,
  AngleRight,
  Like,
  Telephone,
  VideoPlay,
  MenuDots,
  ArrowDown,
  Instagram,
  Copy,
  LinkedIn,
  Facebook,
};

export default Icons;
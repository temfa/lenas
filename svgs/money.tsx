import React from "react";

const MoneySvg = () => {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_1303_38)">
        <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
        <rect x="2.5" y="1.5" width="47" height="47" rx="9.5" stroke="#E9EAEB" />
        <path
          d="M22.5 27.6667C22.5 28.9553 23.5447 30 24.8333 30H27C28.3807 30 29.5 28.8807 29.5 27.5C29.5 26.1193 28.3807 25 27 25H25C23.6193 25 22.5 23.8807 22.5 22.5C22.5 21.1193 23.6193 20 25 20H27.1667C28.4553 20 29.5 21.0447 29.5 22.3333M26 18.5V20M26 30V31.5M36 25C36 30.5228 31.5228 35 26 35C20.4772 35 16 30.5228 16 25C16 19.4772 20.4772 15 26 15C31.5228 15 36 19.4772 36 25Z"
          stroke="#414651"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter id="filter0_d_1303_38" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0 0.0705882 0 0 0 0.05 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1303_38" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1303_38" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default MoneySvg;

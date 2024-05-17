import React from 'react';
import { google, slack, atlassian, shopify, dropbox } from "../../data/imports";

const images = [
  { src: slack, alt: "Slack" },
  { src: atlassian, alt: "Atlassian" },
  { src: google, alt: "Google" },
  { src: shopify, alt: "Shopify" },
  { src: dropbox, alt: "Dropbox" },
];

const Brand = () => {
  return (
    <div className="w-10/12 mx-auto flex justify-between items-center py-8 px-4 md:px-16 gap-x-10">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative flex flex-col items-center gap-4 w-1/5 p-4 bg-richblack-900 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] blur-lg opacity-20 z-[-1]"></div>
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-auto max-w-[80px] md:max-w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Brand;

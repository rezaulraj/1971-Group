import React from "react";
import firstImage from "../../../assets/ai/bg1.webp";
import secondImage from "../../../assets/ai/bg4.webp";
const DownloadFintech = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute left-0 bottom-0 w-1/3 h-1/2 bg-cover bg-no-repeat opacity-80"
        style={{
          backgroundImage: `url(${firstImage})`,
          maskImage: "linear-gradient(to right, black, transparent)",
        }}
      />

      <div
        className="absolute right-0 top-0 w-2/3 h-2/2 bg-cover bg-no-repeat opacity-80"
        style={{
          backgroundImage: `url(${secondImage})`,
          maskImage: "linear-gradient(to left, black, transparent)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-teal-900/80 via-gray-900/70 to-teal-900/60 z-10" />

      <div className="relative z-20 text-center px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          Download FinTech Recruiting Guide for free
        </h1>

        <button className="relative px-8 py-4 bg-gradient-to-r from-teal-500 to-gray-700 rounded-full text-white font-semibold text-lg overflow-hidden group">
          <span className="relative z-10">Get It Now</span>
          <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
          <span className="absolute top-0 left-0 w-full h-0.5 bg-teal-300 group-hover:h-full transition-all duration-500 opacity-70" />
        </button>
      </div>
    </div>
  );
};

export default DownloadFintech;

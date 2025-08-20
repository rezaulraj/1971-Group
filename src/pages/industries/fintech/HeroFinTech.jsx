import React from "react";
import bgimage from "../../../assets/fintech/bghero.webp?url";
import cardimage from "../../../assets/fintech/bgcard.webp?url";
import avoter from "../../../assets/fintech/avter.png?url";

const HeroFinTech = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-teal-900 to-blue-900">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-400/20 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-teal-400/20 filter blur-3xl"></div>
        <div className="absolute top-2/3 left-2/3 w-28 h-28 rounded-full bg-gray-300 filter blur-3xl"></div>
      </div>

      <div
        className="absolute right-0 top-0 bottom-0 w-[60%] bg-cover bg-center z-10 opacity-90"
        style={{ backgroundImage: `url(${bgimage})` }}
      ></div>

      <div className="relative z-20 container mx-auto px-6 py-24 flex md:flex-row flex-col gap-4 items-center min-h-screen">
        <div className="w-full">
          <div className="max-w-lg p-8 rounded-2xl backdrop-blur-sm bg-white/10">
            <h1 className="text-5xl font-bold leading-tight mb-4 text-white/80">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                Global FinTech
              </span>
              <br />
              recruitment & staffing
              <br />
              for fast-growing companies
            </h1>

            <p className="text-lg text-gray-200 mb-8">
              We connect you with the best FinTech talents and help to close any
              vacancy in the field of Financial Technologies
            </p>

            <div className="flex items-center gap-6">
              <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:opacity-90">
                Hire talent
              </button>

              <div className="flex items-center backdrop-blur-sm bg-white/10 rounded-full pl-1 pr-4 py-1">
                <img
                  src={avoter}
                  alt="Author"
                  className="w-12 h-12 rounded-full border-2 border-white/30 shadow-md"
                />
                <span className="ml-3 font-medium text-gray-200">
                  Our Expert
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-2/2 pl-12 relative">
          <div className="relative">
            <img
              src={cardimage}
              alt="FinTech Card"
              className="w-full max-w-lg transform rotate-2 hover:rotate-0 transition-transform duration-500 opacity-95"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFinTech;

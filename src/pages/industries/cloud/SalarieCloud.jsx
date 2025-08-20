import React from "react";
import { FiDownload } from "react-icons/fi";
import image1 from "../../../assets/cloud/salery.webp";
import image2 from "../../../assets/cloud/salary2.webp";

const SalarieCloud = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-600/30 rounded-full border border-blue-400/30">
              <p className="text-sm font-medium text-blue-200">
                Industry Report
              </p>
            </div>

            <h2 className="text-4xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">
                Salaries and Trends
              </span>
              <br />
              in the Cloud Computing
            </h2>

            <p className="text-lg text-blue-100/80">
              Discover the latest compensation benchmarks and hiring trends in
              the cloud technology sector
            </p>

            <button className="flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 group mt-6">
              <span>Get it now</span>
              <FiDownload className="ml-3 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden border-2 border-white/10 backdrop-blur-sm bg-white/5">
                <img
                  src={image1}
                  alt="Cloud Computing Salary Trends"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-2/5 rounded-xl overflow-hidden border-2 border-white/10 shadow-2xl backdrop-blur-sm bg-white/5">
                <img
                  src={image2}
                  alt="Cloud Technology Growth"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalarieCloud;

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import image from "../../../assets/cloud/heroimage.webp";
import clogo1 from "../../../assets/home/l1.webp";
import clogo2 from "../../../assets/home/l2.webp";
import clogo3 from "../../../assets/home/l3.webp";
import clogo4 from "../../../assets/home/l4.webp";
import clogo5 from "../../../assets/home/l5.webp";

const HeroCloud = () => {
  const logos = [clogo1, clogo2, clogo3, clogo4, clogo5];
  const duplicatedLogos = [...logos, ...logos]; // For seamless looping

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-700/80 to-blue-800/80">
      {/* Main Hero Section */}
      <div className="container mx-auto px-6 py-20 md:py-24 lg:py-32 ">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Text Content */}
          <div className="lg:w-2/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Global Cloud Computing recruitment & staffing
              <br />
              <span className="text-gray-200">for fast-growing companies</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              We help companies drive success by connecting them with top cloud
              computing talents
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300">
                Hire talent
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative overflow-hidden">
              <img
                src={image}
                alt="Cloud computing professionals"
                className="w-full h-auto object-cover "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Client Logo Carousel */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 py-8 md:py-12 overflow-hidden">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-white/80 text-sm uppercase tracking-wider font-medium mb-8">
            Trusted by innovative companies worldwide
          </h3>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-blue-700 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-blue-700 to-transparent z-10"></div>

            <div className="flex items-center justify-center">
              <div className="animate-marquee whitespace-nowrap">
                {duplicatedLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="inline-block mx-8 h-12 opacity-80 hover:opacity-100 transition-opacity"
                  >
                    <img
                      src={logo}
                      alt="Client logo"
                      className="h-full w-auto object-contain filter brightness-0 invert"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-r from-cyan-100/30 to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-b from-blue-100/20 to-transparent -z-10"></div>
    </div>
  );
};

export default HeroCloud;

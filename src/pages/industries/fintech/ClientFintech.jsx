import React from "react";
import clogo1 from "../../../assets/home/l1.webp";
import clogo2 from "../../../assets/home/l2.webp";
import clogo3 from "../../../assets/home/l3.webp";
import clogo4 from "../../../assets/home/l4.webp";
import clogo5 from "../../../assets/home/l5.webp";
const ClientFintech = () => {
  const logos = [clogo1, clogo2, clogo3, clogo4, clogo5];
  const duplicatedLogos = [...logos, ...logos];
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-r from-teal-900 to-blue-900">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto mb-20 p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg hover:shadow-teal-500/10 transition-all duration-300">
          <h3 className="text-center text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-300">
            TRUSTED BY AI PIONEERS
          </h3>
          <p className="text-center mt-4 text-gray-400">
            Partnered with the most innovative projects in Artificial
            Intelligence
          </p>
        </div>

        <div className="relative h-32 overflow-hidden group">
          <div className="absolute inset-0 backdrop-blur-sm bg-black/30 rounded-xl border border-white/5"></div>

          <div className="absolute flex items-center h-full space-x-16 animate-marquee whitespace-nowrap">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 p-6 bg-white/5 backdrop-blur-xs rounded-lg border border-white/5 hover:bg-teal-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20"
              >
                <img
                  src={logo}
                  alt="Trusted company"
                  className="h-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          <div className="absolute flex items-center h-full space-x-16 animate-marquee2 whitespace-nowrap">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 p-6 bg-white/5 backdrop-blur-xs rounded-lg border border-white/5 hover:bg-teal-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20"
              >
                <img
                  src={logo}
                  alt="Trusted company"
                  className="h-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          {/* Gradient edge fade */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900/90 to-transparent z-20" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900/90 to-transparent z-20" />
        </div>
      </div>
    </section>
  );
};

export default ClientFintech;

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import bgImage from "../../../assets/fintech/shado.webp";
import hiringcase1 from "../../../assets/web/hacon.webp";
import hiringcase2 from "../../../assets/web/bitlab.webp";

const HireCaseCloud = () => {
  const cases = [
    {
      image: hiringcase1,
      title:
        "How we helped Hacken scale their Smart contracts auditor team by 45% over 3 months",
      link: "more",
    },
    {
      image: hiringcase2,
      title:
        "How we hired 7 talents and improved the Bitmedia Labs' business processes",
      link: "more",
    },
  ];

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: `url(${bgImage}) no-repeat center center`,
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-gray-900/90"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our hiring cases
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border-2 border-white/10 hover:border-cyan-400/50 transition-all duration-500"
            >
              <div className="relative h-80">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 to-transparent">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {caseStudy.title}
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center text-cyan-300 font-medium group-hover:text-white transition-colors"
                >
                  <span>{caseStudy.link}</span>
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireCaseCloud;

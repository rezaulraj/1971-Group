import React from "react";
import { FiArrowRight } from "react-icons/fi";
import hacon from "../../assets/web/hacon.webp";
import bitlab from "../../assets/web/bitlab.webp";

const CaseStudy = () => {
  const caseStudies = [
    {
      title: "Hacken",
      description: "Scaling a Smart Contract Auditing Team by 45%",

      cta: "Read more →",
      image: hacon,
      color: "from-blue-500/10 to-purple-600/10",
    },
    {
      title: "Bitmedia Labs",
      description: "Hiring 7 Key Talents & Optimizing Business Processes",

      cta: "Read more →",
      image: bitlab,
      color: "from-blue-600/10 to-indigo-700/10",
    },
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400/10 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 120 + 60}px`,
              height: `${Math.random() * 120 + 60}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${
                Math.random() * 15 + 10
              }s linear infinite both`,
              opacity: Math.random() * 0.15 + 0.05,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Case Studies
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-gray-800/60 backdrop-blur-lg border border-blue-400/20 hover:border-blue-400/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transform transition-transform hover:-translate-y-2 border-r-10 border-t-10"
            >
              <div className="relative h-60 overflow-hidden p-4">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${study.color} opacity-70`}
                ></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {study.title}
                </h3>
                <p className="text-lg text-blue-200 mb-3">
                  {study.description}
                </p>

                <div className="flex items-center text-blue-400">
                  <span className="mr-2">{study.cta}</span>
                  <FiArrowRight />
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-600/10"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(
              ${Math.random() * 40 - 20}px,
              ${Math.random() * 40 - 20}px
            );
          }
        }
      `}</style>
    </div>
  );
};

export default CaseStudy;

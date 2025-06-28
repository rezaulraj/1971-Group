import React from "react";
import { FaEthereum, FaBitcoin, FaLink } from "react-icons/fa";
import { SiBinance, SiSolana } from "react-icons/si";
import clogo1 from "../../../assets/home/l1.webp";
import clogo2 from "../../../assets/home/l2.webp";
import clogo3 from "../../../assets/home/l3.webp";
import clogo4 from "../../../assets/home/l4.webp";
import clogo5 from "../../../assets/home/l5.webp";
const TrustedByAi = () => {
  const logos = [clogo1, clogo2, clogo3, clogo4, clogo5];
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-orange-950 via-black to-orange-900">
      {/* Glassmorphism Container */}
      <div className="absolute inset-0 backdrop-blur-xl bg-white/5 z-0"></div>

      {/* Floating Crypto Icons */}
      <div className="absolute inset-0 overflow-hidden z-1">
        {[FaEthereum, SiBinance, FaBitcoin, SiSolana, FaLink].map((Icon, i) => (
          <div
            key={i}
            className="absolute text-white/10 animate-float"
            style={{
              fontSize: `${Math.random() * 40 + 30}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 40 + 20}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <Icon className="opacity-20 hover:opacity-40 transition-opacity" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Glassmorphism Title Card */}
        <div className="max-w-2xl mx-auto mb-20 p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
          <h3 className="text-center text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300">
            TRUSTED BY AI PIONEERS
          </h3>
          <p className="text-center mt-4 text-gray-400">
            Partnered with the most innovative projects in Artificial Intelligence
          </p>
        </div>

        {/* Glass Logo Marquee */}
        <div className="relative h-32 overflow-hidden group">
          <div className="absolute inset-0 backdrop-blur-sm bg-black/30 rounded-xl border border-white/5"></div>

          <div className="absolute flex items-center h-full space-x-16 animate-marquee whitespace-nowrap">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 p-6 bg-white/5 backdrop-blur-xs rounded-lg border border-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
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
                className="flex-shrink-0 p-6 bg-white/5 backdrop-blur-xs rounded-lg border border-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <img
                  src={logo}
                  alt="Trusted company"
                  className="h-12 object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          {/* Gradient fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900/90 to-transparent z-20"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900/90 to-transparent z-20"></div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(
                ${Math.random() * 200 - 100}px,
                ${Math.random() * 100 - 50}px
              )
              rotate(180deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee2 {
          0% {
            transform: translateX(50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 50s linear infinite;
        }
      `}</style>
    </section>
  );
};
export default TrustedByAi;

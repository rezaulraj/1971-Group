import React from "react";
import {
  FaSearch,
  FaUsers,
  FaRocket,
  FaShieldAlt,
  FaEthereum,
  FaCode,
} from "react-icons/fa";
import { SiSolidity, SiBinance } from "react-icons/si";
import herobg from "../../assets/web/herobg.webp";
import hero from "../../assets/web/heroimage.jpg";

const HeroWeb3 = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-800 to-emerald-900 opacity-90 z-0"></div>

      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${herobg})`,
          animation: "pan 30s infinite linear",
          opacity: 0.7,
        }}
      ></div>

      <div className="absolute inset-0 bg-radial-gradient from-blue-500/20 via-transparent to-transparent z-0"></div>

      <div className="absolute inset-0 bg-black/60 z-1"></div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl shadow-blue-500/20">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-300">
                Global Web3 Recruitment & Staffing
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-200 font-medium">
                Empowering fast-growing companies with top Web3 talent.
              </p>

              <p className="text-lg mb-10 text-gray-300 max-w-lg">
                We specialize in filling Web3 roles quickly and effectively,
                helping you build a skilled, dedicated team tailored to your
                needs.
              </p>

              <button className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/30">
                <span className="relative z-10">Hire Top Talent Today</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>

              <div className="grid grid-cols-2 gap-6 mt-16">
                {[
                  {
                    icon: <FaSearch className="text-3xl" />,
                    text: "Pre-vetted Talent",
                  },
                  {
                    icon: <FaUsers className="text-3xl" />,
                    text: "Global Network",
                  },
                  {
                    icon: <FaRocket className="text-3xl" />,
                    text: "Fast Placement",
                  },
                  {
                    icon: <FaShieldAlt className="text-3xl" />,
                    text: "Secure Process",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="mr-4 p-2 bg-white/30 rounded-full group-hover:bg-blue-500/30 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="group-hover:text-blue-300 text-gray-400 transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative max-w-lg mx-auto">
              <div className="relative z-10">
                <img
                  src={hero}
                  alt="Web3 Talent"
                  className="rounded-2xl shadow-2xl border-4 border-white/20 transform rotate-2 hover:rotate-0 transition-all duration-500"
                />
              </div>

              <div className="absolute -top-8 -left-8 w-20 h-20 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float1">
                <FaEthereum className="text-3xl text-blue-300" />
              </div>

              <div className="absolute -bottom-10 -right-6 w-24 h-24 bg-purple-600/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float2">
                <SiSolidity className="text-3xl text-purple-300" />
              </div>

              <div className="absolute top-1/4 -right-10 w-16 h-16 bg-emerald-600/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float3">
                <SiBinance className="text-2xl text-emerald-300" />
              </div>

              <div className="absolute bottom-1/4 -left-12 w-14 h-14 bg-blue-400/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float4">
                <FaCode className="text-xl text-blue-200" />
              </div>

              <div className="absolute -inset-8 rounded-3xl bg-blue-500/10 blur-2xl -z-10"></div>
              <div className="absolute top-0 left-0 w-full h-full rounded-2xl border-2 border-white/10 -z-20"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true" global="true">{`
        @keyframes pan {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(15px, -20px) rotate(5deg);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-20px, 15px) rotate(-5deg);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(10px, 25px);
          }
        }
        @keyframes float4 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-15px, -10px);
          }
        }
        .animate-float1 {
          animation: float1 8s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 10s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 12s ease-in-out infinite;
        }
        .animate-float4 {
          animation: float4 9s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroWeb3;

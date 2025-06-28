import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  FaRobot,
  FaBrain,
  FaMicrochip,
  FaCode,
  FaNetworkWired,
  FaChartLine,
  FaDatabase,
  FaShieldAlt,
} from "react-icons/fa";
import { SiTensorflow, SiOpenai } from "react-icons/si";
import herobig from "../../../assets/ai/herobig.webp";
import herosmall from "../../../assets/ai/herosmall.webp";
import { FaEthereum, FaBitcoin, FaLink } from "react-icons/fa";
import { SiBinance, SiSolana } from "react-icons/si";
import clogo1 from "../../../assets/home/l1.webp";
import clogo2 from "../../../assets/home/l2.webp";
import clogo3 from "../../../assets/home/l3.webp";
import clogo4 from "../../../assets/home/l4.webp";
import clogo5 from "../../../assets/home/l5.webp";

const HeroAi = () => {
  const logos = [clogo1, clogo2, clogo3, clogo4, clogo5];
  const duplicatedLogos = [...logos, ...logos];
  const [lights, setLights] = useState([]);
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Light effects setup - using teal and orange
    const colors = [
      "rgba(0, 200, 200, 0.2)", // Teal
      "rgba(50, 50, 50, 0.1)", // Dark gray
      "rgba(255, 120, 0, 0.2)", // Orange
    ];
    const lightEffects = Array.from({ length: 9 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 700 + 500,
      color: colors[i % 3],
      speed: Math.random() * 0.2 + 0.1,
    }));
    setLights(lightEffects);

    // AI icon bubbles setup with teal/orange accents
    const aiIcons = [
      <FaRobot className="text-teal-400" size={32} />,
      <FaBrain className="text-orange-400" size={32} />,
      <FaMicrochip className="text-teal-300" size={32} />,
      <FaCode className="text-orange-300" size={32} />,
      <FaNetworkWired className="text-teal-200" size={32} />,
      <FaChartLine className="text-orange-200" size={32} />,
      <FaDatabase className="text-teal-100" size={32} />,
      <FaShieldAlt className="text-orange-100" size={32} />,
      <SiTensorflow className="text-teal-50" size={32} />,
      <SiOpenai className="text-white" size={32} />,
    ];
    const bubbleEffects = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100 + 100,
      size: Math.random() * 40 + 60,
      icon: aiIcons[i % aiIcons.length],
      speed: Math.random() * 3 + 2,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.7 + 0.3,
    }));
    setBubbles(bubbleEffects);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradient - teal to black to orange */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-black to-orange-900"></div>

      {/* Big image as background at top right */}
      <div
        className="absolute right-0 top-0 w-1/2 h-[80vh] bg-cover bg-no-repeat bg-right z-10"
        style={{ backgroundImage: `url(${herobig})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-teal-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Small image as background at bottom left */}
      <div
        className="absolute left-6 top-[30%] w-1/2 h-[80vh] bg-cover bg-no-repeat rounded-lg overflow-hidden z-10"
        style={{ backgroundImage: `url(${herosmall})` }}
      ></div>

      {/* Floating light effects */}
      {lights.map((light) => (
        <div
          key={light.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${light.x}%`,
            top: `${light.y}%`,
            width: `${light.size}px`,
            height: `${light.size}px`,
            background: `radial-gradient(circle, ${light.color}, transparent 70%)`,
            filter: "blur(120px)",
            opacity: 0.4,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}

      {/* Centered content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-gray-200 to-orange-400">
              Global AI <br /> recruitment & staffing <br /> for fast-growing
              companies
            </span>
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 mb-12">
              We help you to quickly hire AI specialists for all business needs
              of startups, fast-growing companies and enterprises
            </p>
          </div>

          <button className="px-12 py-5 rounded-xl bg-gradient-to-r from-teal-600 to-orange-600 text-white font-bold text-lg transition-all duration-500 transform hover:scale-105 group hover:shadow-lg hover:shadow-orange-500/30">
            <span className="flex items-center justify-center">
              Book a call
              <FiArrowRight className="ml-3 transition-all duration-300 group-hover:translate-x-2" />
            </span>
          </button>
        </div>
      </div>

      {/* AI Icon Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-teal-400/30 transition-all duration-300"
            style={{
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              animation: `float ${bubble.speed}s ease-in infinite`,
              animationDelay: `${bubble.delay}s`,
              opacity: bubble.opacity,
              transform: `translate(-50%, -50%)`,
            }}
          >
            <div className="hover:scale-110 transition-transform duration-300">
              {bubble.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-teal-400/20"
            style={{
              width: `${Math.random() * 10 + 3}px`,
              height: `${Math.random() * 10 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${
                Math.random() * 15 + 10
              }s linear infinite both`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
      </div>

      {/* Client Section */}
      <section className="relative py-28 overflow-hidden ">
        {/* Glassmorphism Container */}
        {/* <div className="absolute inset-0 backdrop-blur-xl bg-white/5 z-0"></div> */}

        {/* Floating Crypto Icons */}
        <div className="absolute inset-0 overflow-hidden z-1">
          {[FaEthereum, SiBinance, FaBitcoin, SiSolana, FaLink].map(
            (Icon, i) => (
              <div
                key={i}
                className="absolute text-teal-400/10 animate-float"
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
            )
          )}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Glassmorphism Title Card */}
          <div className="max-w-2xl mx-auto mb-20 p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg hover:shadow-teal-500/10 transition-all duration-300">
            <h3 className="text-center text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-300">
              TRUSTED BY AI PIONEERS
            </h3>
            <p className="text-center mt-4 text-gray-400">
              Partnered with the most innovative projects in Artificial
              Intelligence
            </p>
          </div>

          {/* Glass Logo Marquee */}
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

            {/* Gradient fades */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900/90 to-transparent z-20"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900/90 to-transparent z-20"></div>
          </div>
        </div>
      </section>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0.1;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
            opacity: 0;
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
    </div>
  );
};

export default HeroAi;

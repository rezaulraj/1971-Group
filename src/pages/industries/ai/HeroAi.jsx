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

const HeroAi = () => {
  const [lights, setLights] = useState([]);
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    // Light effects setup
    const colors = [
      "rgba(0, 100, 255, 0.15)",
      "rgba(50, 50, 50, 0.1)",
      "rgba(255, 0, 50, 0.15)",
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

    // AI icon bubbles setup
    const aiIcons = [
      <FaRobot size={40} />,
      <FaBrain size={40} />,
      <FaMicrochip size={40} />,
      <FaCode size={40} />,
      <FaNetworkWired size={40} />,
      <FaChartLine size={40} />,
      <FaDatabase size={40} />,
      <FaShieldAlt size={40} />,
      <SiTensorflow size={40} />,
      <SiOpenai size={40} />,
    ];
    const bubbleEffects = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100 + 100, // Start below the viewport
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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br -z-0 from-blue-900 via-gray-900 to-red-900/80"></div>

      {/* Big image as background at top right */}
      <div
        className="absolute right-0 top-0 w-1/2 h-[80vh] bg-cover bg-no-repeat bg-right"
        style={{ backgroundImage: `url(${herobig})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-blue-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Small image as background at bottom left */}
      <div
        className="absolute left-6 bottom-6 w-1/2 h-[80vh] bg-cover bg-no-repeat rounded-lg overflow-hidden"
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
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-gray-200 to-red-500/60">
              Global AI
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            recruitment & staffing for fast-growing companies
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-12">
            We help you to quickly hire AI specialists for all business needs of
            startups, fast-growing companies and enterprises
          </p>

          <button className="px-12 py-5 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold text-lg transition-all duration-500 transform hover:scale-105 group">
            <span className="flex items-center justify-center">
              Book a call
              <FiArrowRight className="ml-3 transition-all duration-300 group-hover:translate-x-2" />
            </span>
          </button>
        </div>
      </div>

      {/* AI Icon Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
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
            <div className="text-white/70">{bubble.icon}</div>
          </div>
        ))}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10"
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
      `}</style>
    </div>
  );
};

export default HeroAi;

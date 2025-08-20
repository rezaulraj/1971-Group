import React from "react";
import {
  FaCode,
  FaServer,
  FaLayerGroup,
  FaEthereum,
  FaUserTie,
  FaChartLine,
  FaPalette,
  FaProjectDiagram,
  FaShieldAlt,
  FaSearchDollar,
} from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";

const WeHireWeb3 = () => {

  const categories = [
    {
      name: "Web3 Specialists & Engineers",
      icon: <SiBlockchaindotcom className="text-3xl" />,
    },
    {
      name: "Core Blockchain Developers",
      icon: <FaCode className="text-3xl" />,
    },
    {
      name: "Full-Stack Web3 Developers",
      icon: <FaLayerGroup className="text-3xl" />,
    },
    {
      name: "Smart Contract Developers",
      icon: <FaEthereum className="text-3xl" />,
    },
    {
      name: "Front-End & Back-End Web3 Developers",
      icon: <FaServer className="text-3xl" />,
    },
    {
      name: "Blockchain DevOps Engineers",
      icon: <FaShieldAlt className="text-3xl" />,
    },
    { name: "QA Specialists", icon: <FaSearchDollar className="text-3xl" /> },
    {
      name: "Blockchain Researchers & Architects",
      icon: <FaChartLine className="text-3xl" />,
    },
    { name: "Web3 Designers", icon: <FaPalette className="text-3xl" /> },
    {
      name: "Product & Project Managers",
      icon: <FaProjectDiagram className="text-3xl" />,
    },
    {
      name: "Crypto Marketing, Sales & C-Level Executives",
      icon: <FaUserTie className="text-3xl" />,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
    
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400/10 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 80 + 30}px`,
              height: `${Math.random() * 80 + 30}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 5}s linear infinite`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
            We Hire Top Talent Across the Web3 Ecosystem
          </h2>
          <p className="text-lg text-gray-400 mt-8 max-w-3xl mx-auto">
            From early-stage startups to scaling blockchain companies, we help
            you find the right experts for every need:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gray-800/20 backdrop-blur-lg border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 overflow-hidden"
            >
              
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full bg-gray-700/30 group-hover:bg-blue-400/20 backdrop-blur-sm border border-gray-600/50 group-hover:border-blue-400/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                  {category.name}
                </h3>
              </div>

            
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -inset-1 bg-blue-400/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true" global="true">{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(
                ${Math.random() * 100 - 50}px,
                ${Math.random() * 100 - 50}px
              )
              rotate(180deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default WeHireWeb3;

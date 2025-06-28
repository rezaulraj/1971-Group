import React from "react";
import bgimage from "../../../assets/ai/bgimage.webp?url";
import {
  FaChartLine,
  FaDatabase,
  FaRobot,
  FaCloud,
  FaBrain,
  FaProjectDiagram,
  FaFlask,
  FaSearch,
  FaCode,
  FaUserTie,
  FaEye,
  FaLanguage,
  FaBalanceScale,
  FaServer,
  FaMicrochip,
  FaNetworkWired,
} from "react-icons/fa";

const roles = [
  { title: "Business Intelligence Developers", icon: <FaChartLine /> },
  { title: "Big Data Engineers", icon: <FaDatabase /> },
  { title: "AI Architects", icon: <FaNetworkWired /> },
  { title: "Cloud Computing Developers", icon: <FaCloud /> },
  { title: "Machine Learning Engineers", icon: <FaBrain /> },
  { title: "Robotics Scientists", icon: <FaRobot /> },
  { title: "Robotics Engineers and Developers", icon: <FaMicrochip /> },
  { title: "AI Project & Product Managers", icon: <FaProjectDiagram /> },
  { title: "Data Scientists", icon: <FaFlask /> },
  { title: "AI Researchers / AI Research Scientists", icon: <FaSearch /> },
  { title: "Deep Learning Developers", icon: <FaCode /> },
  { title: "Big Data Architects", icon: <FaServer /> },
  { title: "AI C-levels, Marketers, Sales, etc.", icon: <FaUserTie /> },
  { title: "Computer Vision Engineers", icon: <FaEye /> },
  {
    title: "Natural Language Processing Specialists (NLP)",
    icon: <FaLanguage />,
  },
  { title: "AI Ethics Specialists", icon: <FaBalanceScale /> },
];

const WeHire = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background with image */}
      <div className="absolute inset-0 -top-10 z-0">
        <img
          src={bgimage}
          alt="background"
          className="w-full h-full object-cover"
        />
        {/* Bubble effects */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${10 + Math.random() * 30}px`,
              height: `${10 + Math.random() * 30}px`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out ${
                Math.random() * 5
              }s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8 backdrop-blur-sm">
        {/* Glass panel */}
        <div className="w-full max-w-6xl bg-gradient-to-br from-teal-900/20 via-gray-900/20 to-teal-950/20 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
          {/* Title */}
          <div className="relative p-8 md:p-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 relative inline-block">
              <span className="relative z-10">We hire</span>
              <span className="absolute bottom-0 left-0 w-full h-2 bg-teal-400/80 rounded-full z-0"></span>
            </h1>

            {/* Roles grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {roles.map((role, index) => {
                // Alternate between teal, gray, and orange
                let bgColor;
                if (index % 3 === 0) {
                  bgColor = "bg-teal-500/20 hover:bg-teal-500/30";
                } else if (index % 3 === 1) {
                  bgColor = "bg-gray-500/20 hover:bg-gray-500/30";
                } else {
                  bgColor = "bg-orange-500/20 hover:bg-orange-500/30";
                }

                return (
                  <div
                    key={index}
                    className={`${bgColor} p-4 rounded-lg border border-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-start gap-3`}
                  >
                    <span className="text-white text-xl mt-1">{role.icon}</span>
                    <p className="text-white text-lg font-medium flex-1">
                      {role.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bubble animation */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(0);
          }
          75% {
            transform: translateY(-20px) translateX(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default WeHire;

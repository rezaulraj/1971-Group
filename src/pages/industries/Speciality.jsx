import React from "react";
import {
  SiNodedotjs,
  SiJavascript,
  SiReact,
  SiRust,
  SiHaskell,
  SiPython,
  SiSolidity,
} from "react-icons/si";
import { FaEthereum, FaViacoin } from "react-icons/fa";
import { TbBrandGolang } from "react-icons/tb";
import { FaBarsStaggered } from "react-icons/fa6";

const Speciality = () => {
  const technologies = [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "JavaScript (JS)", icon: <SiJavascript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Move (used in Aptos/Sui blockchains)", icon: <FaBarsStaggered /> },
    { name: "Vyper (Ethereum smart contract language)", icon: <FaViacoin /> },
    { name: "Rust", icon: <SiRust /> },
    { name: "Haskell", icon: <SiHaskell /> },
    { name: "Go (Golang)", icon: <TbBrandGolang /> },
    { name: "Solidity (Ethereum's main language)", icon: <SiSolidity /> },
    { name: "Python", icon: <SiPython /> },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated floating elements */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, rgba(${
              Math.random() > 0.5 ? "156, 39, 176" : "96, 165, 250"
            }, ${Math.random() * 0.3 + 0.2}) 0%, transparent 70%)`,
            width: `${Math.random() * 120 + 30}px`,
            height: `${Math.random() * 120 + 30}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 20 + 10}s linear infinite both`,
            filter: `blur(${Math.random() * 10 + 5}px)`,
            opacity: 0,
            animationFillMode: "forwards",
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
            Tech Stack & Specializations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies & Languages:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 shadow-lg hover:shadow-xl shadow-black/30 hover:shadow-purple-500/20"
            >
              {/* Animated background element */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at ${
                    Math.random() * 100
                  }% ${
                    Math.random() * 100
                  }%, rgba(156, 39, 176, 0.15) 0%, transparent 70%)`,
                }}
              ></div>

              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="mb-4 p-4 rounded-xl bg-gray-700/40 group-hover:bg-purple-500/20 backdrop-blur-sm border border-gray-600/50 group-hover:border-purple-400/50 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  {React.cloneElement(tech.icon, {
                    className:
                      "text-3xl text-gray-300 group-hover:text-purple-400",
                  })}
                </div>
                <h3 className="text-sm sm:text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </h3>
              </div>

              {/* Hover light effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-purple-400/20 pointer-events-none transition-all duration-700 group-hover:scale-[1.03]"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: translate(
                ${Math.random() * 100 - 50}px,
                ${Math.random() * 100 - 50}px
              )
              rotate(180deg);
            opacity: 0.3;
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Speciality;

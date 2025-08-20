import React from "react";
import { FaEthereum, FaBitcoin, FaLink, FaServer } from "react-icons/fa";
import { SiBinance, SiSolana } from "react-icons/si";

const AnimatedBackgroundCard = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-2xl w-full h-[500px] max-w-6xl mx-auto my-20">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-emerald-400 opacity-90"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-grid-white/10"></div>
      </div>

      <div className="absolute top-1/4 -left-20 w-40 h-12 bg-white/10 backdrop-blur-sm rounded-lg animate-float1"></div>
      <div className="absolute bottom-1/3 -right-16 w-32 h-10 bg-white/15 backdrop-blur-sm rounded-lg animate-float2"></div>

      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full animate-float3"></div>
      <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-white/15 backdrop-blur-sm rounded-full animate-float4"></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white p-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
            Web3
          </span>{" "}
          &
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
            {" "}
            Web2
          </span>{" "}
          Solutions
        </h2>

        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Bridging decentralized innovation with traditional web infrastructure
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div className="flex flex-col items-center">
            <FaEthereum className="text-4xl mb-3 text-purple-300 animate-bounce" />
            <span>Blockchain</span>
          </div>
          <div className="flex flex-col items-center">
            <FaServer className="text-4xl mb-3 text-blue-300 animate-pulse" />
            <span>Cloud</span>
          </div>
          <div className="flex flex-col items-center">
            <SiBinance className="text-4xl mb-3 text-yellow-300 animate-spin-slow" />
            <span>DeFi</span>
          </div>
          <div className="flex flex-col items-center">
            <FaLink className="text-4xl mb-3 text-emerald-300 animate-ping-slow" />
            <span>APIs</span>
          </div>
        </div>
      </div>

      <style jsx="true" global="true">{`
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(50px, 30px) rotate(5deg);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-40px, 20px) rotate(-3deg);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, -20px);
          }
        }
        @keyframes float4 {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-25px, 15px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-float1 {
          animation: float1 8s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 10s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 7s ease-in-out infinite;
        }
        .animate-float4 {
          animation: float4 9s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s ease-in-out infinite;
        }
        .bg-grid-white\/10 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackgroundCard;

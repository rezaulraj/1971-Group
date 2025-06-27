import React from "react";
import { FaRocket } from "react-icons/fa";
import { FaHillAvalanche } from "react-icons/fa6";
import {
  SiEthereum,
  SiSolana,
  SiPolkadot,
  SiStellar,
//   SiEos,
//   SiTezos,
  SiPolygon,
  SiCardano,
  SiHedera,
//   SiKlaytn,
  SiIota,
//   SiTron,
//   SiNeo,
  SiAlgorand,
//   SiWaves,

//   SiNearprotocol,
  SiLightning,
} from "react-icons/si";

const Partners = () => {
  // Array of ecosystem icons with their corresponding React Icons
  const ecosystems = [
    { name: "Ethereum", icon: <SiEthereum /> },
    { name: "Solana", icon: <SiSolana /> },
    { name: "Polkadot", icon: <SiPolkadot /> },
    { name: "Stellar", icon: <SiStellar /> },
    // { name: "EOS", icon: <SiEos /> },
    // { name: "Tezos", icon: <SiTezos /> },
    { name: "Polygon", icon: <SiPolygon /> },
    { name: "Cardano", icon: <SiCardano /> },
    { name: "Hedera Hashgraph", icon: <SiHedera /> },
    // { name: "Klaytn", icon: <SiKlaytn /> },
    { name: "IOTA", icon: <SiIota /> },
    // { name: "TRON", icon: <SiTron /> },
    { name: "Cosmos", icon: <FaRocket /> },
    // { name: "NEO", icon: <SiNeo /> },
    { name: "Algorand", icon: <SiAlgorand /> },
    // { name: "Waves", icon: <SiWaves /> },
    { name: "Avalanche", icon: <FaHillAvalanche /> },
    // { name: "Elrond", icon: <FaElrond /> },
    // { name: "NEAR", icon: <SiNearprotocol /> },
    { name: "Lightning Network", icon: <SiLightning /> },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400/20 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6">
            Partnering with Talent
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Shaping the Future of Web3
          </p>
          <p className="text-lg text-gray-400 mt-8 max-w-3xl mx-auto">
            We collaborate with visionary professionals who are building the
            next generation of Web3 technologies across leading blockchain
            ecosystems.
          </p>
        </div>

        <div className="bg-gray-800/20 backdrop-blur-lg rounded-2xl border-r-8 border-b-8 border border-gray-700/50 p-8 shadow-xl">
          <h3 className="text-2xl font-semibold text-center text-gray-300 mb-8">
            Supported Ecosystems
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {ecosystems.map((eco, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800/30 hover:bg-blue-400/10 transition-all duration-300 border border-gray-700/50 hover:border-blue-400/50"
              >
                <div className="text-4xl mb-3 text-gray-400 group-hover:text-blue-400 transition-colors duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]">
                  {eco.icon}
                </div>
                <span className="text-sm text-center text-gray-400 group-hover:text-white">
                  {eco.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
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

export default Partners;

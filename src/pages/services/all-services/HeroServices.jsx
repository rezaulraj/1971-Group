import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../../assets/allservice/hero.jpg?url";
import clogo1 from "../../../assets/home/l1.webp?url";
import clogo2 from "../../../assets/home/l2.webp?url";
import clogo3 from "../../../assets/home/l3.webp?url";
import clogo4 from "../../../assets/home/l4.webp?url";
import clogo5 from "../../../assets/home/l5.webp?url";

const HeroServices = () => {
  const ourClient = [
    { clogo: clogo1 },
    { clogo: clogo2 },
    { clogo: clogo3 },
    { clogo: clogo4 },
    { clogo: clogo5 },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 opacity-10"></div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float1"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float2"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-400 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float3"></div>
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="bg-gradient-to-r from-blue-50/10 to-purple-600/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Recruitment Services
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Global Recruitment Solutions to Drive Your Business Forward
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                At 1971 Group, we deliver full-cycle recruitment services
                designed to save you time, reduce hiring costs, and connect you
                with top-tier talent across continents.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
                Book a Call
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl"></div>
              <img
                src={heroImage}
                alt="Recruitment Services"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 mb-8">
            Our Clients
          </h1>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            We're trusted by fast-scaling companies across industries from
            startups to enterprise-level brands who rely on us to power their
            workforce growth.
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-12">
            {ourClient.map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={client.clogo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx="true" global="true">{`
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(20px, -20px) rotate(5deg);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-15px, 15px) rotate(-5deg);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(15px, 20px) rotate(3deg);
          }
        }
        .animate-float1 {
          animation: float1 15s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 18s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroServices;

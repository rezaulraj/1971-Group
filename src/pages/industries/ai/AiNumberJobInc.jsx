import React from "react";
import { motion } from "framer-motion";
import aiImage from "../../../assets/ai/ai.webp?url";

const AiNumberJobInc = () => {
  const stats = [
    { value: "$0", label: "prepayment to begin the hiring process" },
    { value: "4", label: "weeks on average to close a vacancy" },
    { value: "3", label: "months guarantee for the candidate" },
    { value: "3", label: "technical interviews with candidates per week" },
    { value: "10", label: "out of 10 is our Net promoter score (NPS)" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-900/30 via-gray-900/90 to-teal-950/80">
      {/* Background floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-800 rounded-full filter blur-[100px] opacity-5 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-gray-700 rounded-full filter blur-[100px] opacity-5 animate-float-delay"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-medium text-white mb-12 text-center max-w-4xl mx-auto leading-tight"
        >
          The number of Artificial Intelligence vacancies is constantly growing
          and new AI jobs are being created, but we can close all of them on
          your request.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6"
          >
            <div className="flex flex-col gap-6">
              <div className="shrink-0">
                <img
                  src={aiImage}
                  alt="AI Specialist"
                  className="w-20 h-20 rounded-full object-cover border-2 border-teal-400/30"
                />
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                We successfully find AI specialists all over the world to create
                teams for developing new products, changing technologies, and
                achieving goals.
              </p>
            </div>
          </motion.div>

          {/* Right side - Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="p-5 backdrop-blur-sm bg-gradient-to-br from-gray-800/30 to-gray-900/20 rounded-lg border border-gray-700/30 hover:border-teal-400/30 transition-all duration-300"
              >
                <h3 className="text-3xl font-bold text-teal-400 mb-1">
                  {stat.value}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 leading-tight">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        @keyframes float-delay {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(15px) translateX(-10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AiNumberJobInc;

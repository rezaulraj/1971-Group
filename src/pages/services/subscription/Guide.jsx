import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiCheckCircle,
  FiUsers,
  FiClock,
  FiBarChart2,
  FiArrowRight,
} from "react-icons/fi";
import guide from "../../../assets/subscription/gide.webp";
import Calendly from "../../../components/Calendly";

const Guide = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      icon: <FiCheckCircle className="text-xl" />,
      text: "Proven hiring strategies",
    },
    {
      icon: <FiUsers className="text-xl" />,
      text: "Talent attraction techniques",
    },
    {
      icon: <FiClock className="text-xl" />,
      text: "Time-saving processes",
    },
    {
      icon: <FiBarChart2 className="text-xl" />,
      text: "Data-driven insights",
    },
  ];

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F1EE] overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#000b30]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition duration-500 group">
              <img
                src={guide}
                alt="Hiring Guide"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000b30]/70 via-transparent to-transparent"></div>
              <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#000b30] px-4 py-2 rounded-full font-bold text-sm">
                Free Resource
              </div>
            </div>
          </motion.div>

          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.h2
              className="text-4xl font-bold text-[#000b30]"
              variants={itemVariants}
            >
              Your Guide to Smarter, More Efficient Hiring
            </motion.h2>

            <motion.p
              className="text-xl text-gray-700 leading-relaxed"
              variants={itemVariants}
            >
              Discover actionable strategies to streamline your recruitment
              process and attract the right talent your company needs to grow
              and succeed.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-6 py-4"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-white/20"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <button
                onClick={() => setShowCalendly(true)}
                className="bg-gradient-to-r from-[#D4AF37] to-[#c6a22f] hover:from-[#c6a22f] hover:to-[#D4AF37] text-[#000b30] font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center cursor-pointer"
              >
                Book Free Consultation
                <FiArrowRight className="ml-2" />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-[#000b30] to-[#1a2a6b] rounded-2xl p-10 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Transform Your Hiring Process?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Get your free guide and start building your dream team today.
            </p>
            <button
              onClick={() => setShowCalendly(true)}
              className="bg-[#D4AF37] text-[#000b30] font-bold py-3 px-8 rounded-lg hover:bg-[#c6a22f] transition-all duration-300 transform hover:scale-105 inline-flex items-center cursor-pointer"
            >
              Download Free Guide
              <FiDownload className="ml-2" />
            </button>
          </div>
        </motion.div>
      </div>

      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
};

export default Guide;

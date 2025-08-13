import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiCheckCircle,
  FiUsers,
  FiClock,
  FiBarChart2,
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
      icon: <FiCheckCircle className="text-blue-500" size={20} />,
      text: "Proven hiring strategies",
    },
    {
      icon: <FiUsers className="text-blue-500" size={20} />,
      text: "Talent attraction techniques",
    },
    {
      icon: <FiClock className="text-blue-500" size={20} />,
      text: "Time-saving processes",
    },
    {
      icon: <FiBarChart2 className="text-blue-500" size={20} />,
      text: "Data-driven insights",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition duration-500">
              <img
                src={guide}
                alt="Hiring Guide"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h2
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900"
              variants={itemVariants}
            >
              Your Guide to Smarter, More Efficient Hiring
            </motion.h2>

            <motion.p className="text-lg text-gray-600" variants={itemVariants}>
              Discover actionable strategies to streamline your recruitment
              process and attract the right talent your company needs to grow
              and succeed.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 py-4"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-2"
                  variants={itemVariants}
                >
                  {feature.icon}
                  <span className="text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <button
                onClick={() => setShowCalendly(true)}
                className="inline-flex cursor-pointer items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Book Free Consultation
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
};

export default Guide;

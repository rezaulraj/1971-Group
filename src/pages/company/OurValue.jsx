import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaBullseye, FaChartLine, FaStar } from "react-icons/fa";

const OurValue = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  const values = [
    {
      icon: <FaHandshake className="text-3xl text-yellow-400" />,
      title: "Mutually Beneficial Partnerships",
      description:
        "We build relationships where success is shared and your growth drives our growth.",
    },
    {
      icon: <FaBullseye className="text-3xl text-blue-300" />,
      title: "Integrity and Transparency",
      description:
        "Open communication and honesty form the foundation of all our interactions.",
    },
    {
      icon: <FaChartLine className="text-3xl text-green-400" />,
      title: "Exceeding Expectations",
      description:
        "We commit to realistic promises and consistently strive to go above and beyond.",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#001153] via-[#1a2a6b] to-[#334380] opacity-95"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={item} className="text-center mb-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block mb-4"
          >
            <FaStar className="text-4xl text-yellow-400 animate-pulse" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Core Values
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-lg border-t-4 border-l-4 border-white/10"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  repeatType: "reverse",
                }}
                className="mb-6"
              >
                {value.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {value.title}
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1 }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        >
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-blue-500 filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-10 right-20 w-40 h-40 rounded-full bg-purple-500 filter blur-3xl opacity-20"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default OurValue;

import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaBullseye,
  FaHandshake,
  FaUsers,
  FaLightbulb,
  FaChartLine,
} from "react-icons/fa";

const MissionVision = () => {
  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const header = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="max-w-6xl w-full rounded-2xl overflow-hidden shadow-2xl">
        {/* Gradient Header */}
        <motion.div
          variants={header}
          className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 p-6 text-white text-center"
        >
          <h1 className="text-4xl font-bold">Our Core Values</h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 0.5 }}
            className="mt-2 text-xl"
          >
            Driving success through people and partnerships
          </motion.p>
        </motion.div>

        <div className="flex flex-col md:flex-row bg-white">
          {/* Left Side - Our Approach */}
          <motion.div
            variants={item}
            className="w-full md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-gray-50 to-blue-50"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="bg-blue-100 p-3 rounded-full mr-4"
              >
                <FaRocket className="text-blue-600 text-2xl" />
              </motion.div>
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Our Approach
              </h2>
            </motion.div>

            <motion.div variants={container} className="space-y-6">
              {[
                {
                  icon: (
                    <FaUsers className="text-teal-500 text-xl mt-1 mr-3 flex-shrink-0" />
                  ),
                  text: "At 1971 Group, we're a goal-driven team that values culture over rigid processes.",
                },
                {
                  icon: (
                    <FaChartLine className="text-purple-500 text-xl mt-1 mr-3 flex-shrink-0" />
                  ),
                  text: "We've created a workplace where growth, collaboration, and shared success are at the heart of everything we do.",
                },
                {
                  icon: (
                    <FaHandshake className="text-blue-500 text-xl mt-1 mr-3 flex-shrink-0" />
                  ),
                  text: "There's nothing more rewarding than learning together — and celebrating every win as one team.",
                },
                {
                  icon: (
                    <FaLightbulb className="text-yellow-500 text-xl mt-1 mr-3 flex-shrink-0" />
                  ),
                  text: "Get to know us, and you'll feel the energy that fuels our mission.",
                },
              ].map((point, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  {point.icon}
                  <p className="text-lg text-gray-700">{point.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Mission and Vision */}
          <motion.div
            variants={item}
            className="w-full md:w-1/2 p-8 md:p-12 bg-gradient-to-br from-gray-50 to-purple-50"
          >
            {/* Mission */}
            <motion.div variants={container} className="mb-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center mb-4"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="bg-purple-100 p-3 rounded-full mr-4"
                >
                  <FaBullseye className="text-purple-600 text-2xl" />
                </motion.div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Our Mission
                </h2>
              </motion.div>
              <motion.p variants={item} className="text-lg text-gray-700 pl-16">
                At 1971 Group, we connect ambitious companies with exceptional
                talent — building teams that drive lasting success.
              </motion.p>
            </motion.div>

            {/* Vision */}
            <motion.div variants={container}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center mb-4"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="bg-pink-100 p-3 rounded-full mr-4"
                >
                  <FaLightbulb className="text-pink-600 text-2xl" />
                </motion.div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-600">
                  Our Vision
                </h2>
              </motion.div>
              <motion.p variants={item} className="text-lg text-gray-700 pl-16">
                To become the trusted recruitment partner that both clients and
                candidates choose first, every time.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default MissionVision;

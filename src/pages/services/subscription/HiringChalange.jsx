import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHardHat,
  FaMoneyBillWave,
  FaClock,
  FaSearch,
  FaUserTie,
  FaChartLine,
  FaHandshake,
  FaUsers,
} from "react-icons/fa";
import hirer from "../../../assets/subscription/solve.jpg";

const HiringChallenge = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("hiring-challenge");
      if (element) {
        const top = element.getBoundingClientRect().top;
        setIsVisible(top < window.innerHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // First grid - Main statistics
  const mainStats = [
    {
      icon: <FaHardHat className="text-blue-600" size={24} />,
      value: 65,
      suffix: "%",
      text: "of companies face hiring difficulties",
    },
    {
      icon: <FaMoneyBillWave className="text-blue-600" size={24} />,
      value: 14900,
      prefix: "$",
      text: "average cost of a bad hire",
    },
  ];

  // Second grid - Supporting statistics
  const supportingStats = [
    {
      icon: <FaClock className="text-blue-600" size={24} />,
      value: 35,
      suffix: "%",
      text: "unfilled positions for 12+ weeks",
    },
    {
      icon: <FaSearch className="text-blue-600" size={24} />,
      value: 74,
      suffix: "%",
      text: "employers can't fill roles",
    },
  ];

  // Additional benefits grid
  const benefits = [
    {
      icon: <FaUserTie className="text-blue-600" size={20} />,
      text: "Expert recruiters",
    },
    {
      icon: <FaChartLine className="text-blue-600" size={20} />,
      text: "Data-driven approach",
    },
    {
      icon: <FaHandshake className="text-blue-600" size={20} />,
      text: "Guaranteed results",
    },
    {
      icon: <FaUsers className="text-blue-600" size={20} />,
      text: "Large talent network",
    },
  ];

  const Counter = ({ value, prefix, suffix }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const duration = 2000; // 2 seconds
        const start = 0;
        const end = value;
        const startTime = performance.now();

        const animate = (currentTime) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const currentValue = Math.floor(progress * (end - start) + start);
          setDisplayValue(currentValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      }
    }, [isVisible, value]);

    return (
      <div className="flex items-baseline">
        {prefix && (
          <span className="text-2xl font-bold text-gray-900 mr-1">
            {prefix}
          </span>
        )}
        <span className="text-2xl font-bold text-gray-900">{displayValue}</span>
        {suffix && (
          <span className="text-2xl font-bold text-gray-900 ml-1">
            {suffix}
          </span>
        )}
      </div>
    );
  };

  const counterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div
      id="hiring-challenge"
      className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-gray-50"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content with multiple grids */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Solving Your Biggest Hiring Challenges
            </h2>

            {/* First grid - Main statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mainStats.map((stat, index) => (
                <motion.div
                  key={`main-${index}`}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={counterVariants}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg mr-4">
                      {stat.icon}
                    </div>
                    <div>
                      <Counter
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                      <p className="mt-2 text-gray-600 text-sm">{stat.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second grid - Supporting statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportingStats.map((stat, index) => (
                <motion.div
                  key={`support-${index}`}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={counterVariants}
                  transition={{ delay: (index + mainStats.length) * 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-3 bg-blue-100 rounded-lg mr-4">
                      {stat.icon}
                    </div>
                    <div>
                      <Counter
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                      <p className="mt-2 text-gray-600 text-sm">{stat.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits grid */}
            <div className="bg-blue-600 rounded-lg p-6">
              <h3 className="text-white font-medium mb-4">
                Our Solutions Include:
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={`benefit-${index}`} className="flex items-center">
                    <span className="text-white mr-2">{benefit.icon}</span>
                    <span className="text-white text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition duration-500">
              <img
                src={hirer}
                alt="Hiring challenges"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold">
                  Don't Let Hiring Challenges Slow You Down
                </h3>
                <p className="mt-2 text-blue-100">
                  Our solutions help you overcome these common obstacles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringChallenge;

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
  FaArrowRight,
} from "react-icons/fa";
import hirer from "../../../assets/subscription/solve.jpg";
import Calendly from "../../../components/Calendly";

const HiringChallenge = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

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

  const mainStats = [
    {
      icon: <FaHardHat className="text-2xl" />,
      value: 60,
      suffix: "%",
      text: "of companies face hiring difficulties",
    },
    {
      icon: <FaMoneyBillWave className="text-2xl" />,
      value: 10700,
      prefix: "$",
      text: "average cost of a bad hire",
    },
  ];

  const supportingStats = [
    {
      icon: <FaClock className="text-2xl" />,
      value: 33,
      suffix: "%",
      text: "unfilled positions for 12+ weeks",
    },
    {
      icon: <FaSearch className="text-2xl" />,
      value: 72,
      suffix: "%",
      text: "employers can't fill roles",
    },
  ];

  const benefits = [
    {
      icon: <FaUserTie className="text-xl" />,
      text: "Expert recruiters",
    },
    {
      icon: <FaChartLine className="text-xl" />,
      text: "Data-driven approach",
    },
    {
      icon: <FaHandshake className="text-xl" />,
      text: "Guaranteed results",
    },
    {
      icon: <FaUsers className="text-xl" />,
      text: "Large talent network",
    },
  ];

  const Counter = ({ value, prefix, suffix }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const duration = 2000;
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
          <span className="text-3xl font-bold text-[#000b30] mr-1">
            {prefix}
          </span>
        )}
        <span className="text-3xl font-bold text-[#000b30]">
          {displayValue}
        </span>
        {suffix && (
          <span className="text-3xl font-bold text-[#000b30] ml-1">
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
      className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F1EE]"
    >
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#000b30]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#000b30] mb-4">
                Solving Your Biggest Hiring Challenges
              </h2>
              <p className="text-xl text-gray-700">
                Discover how our innovative approach tackles the most common
                recruitment obstacles faced by businesses today.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mainStats.map((stat, index) => (
                <motion.div
                  key={`main-${index}`}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={counterVariants}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-start">
                    <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mr-4">
                      {stat.icon}
                    </div>
                    <div>
                      <Counter
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                      <p className="mt-3 text-gray-700">{stat.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportingStats.map((stat, index) => (
                <motion.div
                  key={`support-${index}`}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={counterVariants}
                  transition={{ delay: (index + mainStats.length) * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-white/20"
                >
                  <div className="flex items-start">
                    <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mr-4">
                      {stat.icon}
                    </div>
                    <div>
                      <Counter
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                      <p className="mt-3 text-gray-700">{stat.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-[#000b30] to-[#1a2a6b] rounded-2xl p-8"
            >
              <h3 className="text-white font-bold text-xl mb-6">
                Our Solutions Include:
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={`benefit-${index}`} className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mr-3">
                      {benefit.icon}
                    </div>
                    <span className="text-white font-medium">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setShowCalendly(true)}
                className="mt-6 bg-[#D4AF37] text-[#000b30] font-bold py-3 px-6 rounded-lg hover:bg-[#c6a22f] transition-all duration-300 transform hover:scale-105 flex items-center"
              >
                Get Started
                <FaArrowRight className="ml-2" />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition duration-500 group">
              <img
                src={hirer}
                alt="Hiring challenges"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000b30]/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-3">
                  Don't Let Hiring Challenges Slow You Down
                </h3>
                <p className="text-gray-200">
                  Our innovative solutions help you overcome these common
                  obstacles and build your dream team
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#000b30] px-4 py-2 rounded-full font-bold text-sm">
                Solution Ready
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
};

export default HiringChallenge;

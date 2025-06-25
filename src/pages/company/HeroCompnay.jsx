import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGlobe,
  FaRocket,
  FaUserTie,
  FaBuilding,
  FaPiggyBank,
  FaBriefcase,
  FaChartLine,
} from "react-icons/fa";
import heroi1 from "../../assets/company/c1.webp";
import heroi3 from "../../assets/company/c3.jpg";
import heroi5 from "../../assets/company/c5.jpeg";
import heroi6 from "../../assets/company/c7.jpeg";
import clogo1 from "../../assets/home/l1.webp";
import clogo2 from "../../assets/home/l2.webp";
import clogo3 from "../../assets/home/l3.webp";
import clogo4 from "../../assets/home/l4.webp";
import clogo5 from "../../assets/home/l5.webp";

const HeroCompany = () => {
  const [counters, setCounters] = useState({
    companies: 0,
    savings: 0,
    hires: 0,
    successRate: 0,
  });

  const features = [
    {
      icon: <FaGlobe className="text-teal-400" size={20} />,
      text: "Global talent network",
    },
    {
      icon: <FaRocket className="text-purple-400" size={20} />,
      text: "Fast hiring cycles",
    },
    {
      icon: <FaUserTie className="text-blue-400" size={20} />,
      text: "Specialized recruiters",
    },
  ];

  const companyImages = [
    { src: heroi1, alt: "Tech team working" },
    { src: heroi3, alt: "Team meeting" },
    { src: heroi5, alt: "Company event" },
    { src: heroi6, alt: "Team collaboration" },
  ];

  const clientLogos = [
    { src: clogo1, alt: "Client logo 1" },
    { src: clogo2, alt: "Client logo 2" },
    { src: clogo3, alt: "Client logo 3" },
    { src: clogo4, alt: "Client logo 4" },
    { src: clogo5, alt: "Client logo 5" },
  ];

  const achievements = [
    {
      icon: <FaBuilding className="text-blue-400" size={24} />,
      value: 70,
      suffix: "+",
      title: "Companies Transformed",
      description:
        "We've helped over 70 businesses optimize their hiring processes and boost profitability.",
    },
    {
      icon: <FaPiggyBank className="text-green-400" size={24} />,
      value: 32,
      suffix: "%",
      title: "Average Cost Savings",
      description:
        "Our clients save an average of 32% on recruitment expenses with our efficient hiring solutions.",
    },
    {
      icon: <FaBriefcase className="text-purple-400" size={24} />,
      value: 100,
      suffix: "+",
      title: "Hires at Top Global Companies",
      description:
        "Hundreds of our candidates are now thriving at some of the world's leading organizations.",
    },
    {
      icon: <FaChartLine className="text-teal-400" size={24} />,
      value: 97.8,
      suffix: "%",
      title: "Probation Success Rate",
      description:
        "Nearly all specialists we place successfully pass their probation periods, proving the quality of our selection process.",
    },
  ];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        setCounters({
          companies: Math.floor(progress * 70),
          savings: Math.floor(progress * 32),
          hires: Math.floor(progress * 100),
          successRate: parseFloat((progress * 97.8).toFixed(1)),
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    // Trigger animation when component mounts
    animateCounters();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Custom SVG Gradient Background */}
      <svg
        className="absolute inset-0 w-full h-full -z-10"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="hero-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#f0f9ff" />
            <stop offset="50%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#bae6fd" />
          </linearGradient>
          <pattern
            id="grid-pattern"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <rect width="60" height="60" fill="url(#hero-gradient)" />
            <path
              d="M60 0L0 60"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
            />
            <path
              d="M-60 60L60-60"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid-pattern)"
          opacity="0.8"
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#hero-gradient)"
          opacity="0.4"
        />
      </svg>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              Global Tech Recruitment & Staffing for High-Growth Companies
            </h1>

            <p className="text-xl text-gray-700">
              We deliver exclusive recruitment solutions that help businesses
              scale faster, smarter, and stronger.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="mr-3 bg-gradient-to-br from-blue-100 to-teal-100 p-2 rounded-full">
                    {feature.icon}
                  </span>
                  <span className="text-gray-800 font-medium">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all flex items-center shadow-md"
            >
              Book a Call Today
              <FaArrowRight className="ml-2" />
            </motion.button>
          </motion.div>

          {/* Right side - Image grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {companyImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`relative rounded-xl overflow-hidden shadow-lg ${
                  index === 0 || index === 3 ? "h-64" : "h-48"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-gray-300/50"
        >
          <p className="text-center text-gray-600 mb-6 font-medium">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="h-12 grayscale hover:grayscale-0 transition-all bg-white/80 backdrop-blur-sm p-2 rounded-lg"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full object-contain opacity-80 hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Achievements Section with bg-gray-900 */}
      <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all"
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-gray-700 rounded-full mb-4">
                    {achievement.icon}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    {index === 0 && counters.companies}
                    {index === 1 && counters.savings}
                    {index === 2 && counters.hires}
                    {index === 3 && counters.successRate}
                    {achievement.suffix}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default HeroCompany;

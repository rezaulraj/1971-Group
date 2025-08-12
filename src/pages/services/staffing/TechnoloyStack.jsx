import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaUserClock,
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaHandshakeAltSlash,
} from "react-icons/fa";

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

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
  },
};

const SpecializationCard = ({ icon: Icon, title, description, benefits }) => (
  <motion.div
    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-blue-200"
    variants={cardVariants}
    whileHover="hover"
  >
    <div className="p-6">
      <div className="flex items-start mb-4">
        <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
          <Icon className="text-blue-600 text-2xl" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
          Key Benefits
        </h4>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span className="text-gray-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const TalentSpecializations = () => {
  const services = [
    {
      icon: FaSearch,
      title: "Precision Talent Matching",
      description:
        "We don't just fill positions—we find candidates who excel in your unique environment.",
      benefits: [
        "90% first-year retention rate",
        "Cultural fit assessments",
        "Skills-to-role alignment",
      ],
    },
    {
      icon: FaUserClock,
      title: "Flexible Staffing Solutions",
      description:
        "Scale your workforce up or down without the overhead of traditional hiring.",
      benefits: [
        "Contract-to-hire options",
        "Short-term project staffing",
        "Seamless onboarding",
      ],
    },
    {
      icon: FaUsers,
      title: "High-Volume Hiring",
      description:
        "Rapidly deploy quality talent for seasonal peaks or expansion initiatives.",
      benefits: [
        "30% faster time-to-fill",
        "Bulk candidate screening",
        "Turnkey onboarding programs",
      ],
    },
    {
      icon: FaChartLine,
      title: "Strategic Workforce Planning",
      description:
        "Proactively build talent pipelines for critical roles before you need them.",
      benefits: [
        "Future-ready skills mapping",
        "Succession planning",
        "Market salary benchmarking",
      ],
    },
    {
      icon: FaLightbulb,
      title: "Specialized Recruitment",
      description:
        "Access niche talent pools for hard-to-fill roles across industries.",
      benefits: [
        "Industry-specific networks",
        "Passive candidate outreach",
        "Competitive offer strategies",
      ],
    },
    {
      icon: FaHandshakeAltSlash,
      title: "Managed Staffing Programs",
      description:
        "Outsource your entire recruitment function with guaranteed results.",
      benefits: [
        "Dedicated account management",
        "Performance-based pricing",
        "90-day replacement guarantee",
      ],
    },
  ];

  return (
    <motion.section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Staffing Solutions That Deliver Results
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Whether you need one perfect candidate or an entire team, we provide{" "}
            <span className="font-semibold text-blue-600">
              flexible, scalable staffing
            </span>{" "}
            with measurable impact.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <SpecializationCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TalentSpecializations;

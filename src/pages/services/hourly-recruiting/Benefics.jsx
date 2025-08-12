import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiDollarSign,
  FiZap,
  FiMessageSquare,
  FiCheckCircle,
  FiAward,
  FiUsers,
  FiClock,
  FiBarChart2,
} from "react-icons/fi";
import Calendly from "../../../components/Calendly";

const Benefits = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const benefits = [
    {
      icon: <FiDollarSign className="text-3xl" />,
      title: "Cost-Efficient Hiring",
      description:
        "Only pay for successful placements with our performance-based model—no retainers, no hidden fees, just results.",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: <FiZap className="text-3xl" />,
      title: "Lightning-Fast Results",
      description:
        "Average time-to-fill of just 14 days through our optimized sourcing pipeline and proactive candidate engagement.",
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: "Top 10% Talent Pool",
      description:
        "Access to passive candidates and vetted professionals you won't find on job boards—we target the best so you don't have to.",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      icon: <FiMessageSquare className="text-3xl" />,
      title: "White-Glove Service",
      description:
        "Dedicated account manager with weekly syncs, real-time tracking, and collaborative hiring decisions tailored to your needs.",
      color: "text-amber-600",
      bg: "bg-amber-100",
    },
    {
      icon: <FiCheckCircle className="text-3xl" />,
      title: "Risk-Free Guarantee",
      description:
        "90-day replacement guarantee on all placements—we stand behind our matches with confidence.",
      color: "text-red-600",
      bg: "bg-red-100",
    },
    {
      icon: <FiBarChart2 className="text-3xl" />,
      title: "Data-Driven Matching",
      description:
        "Proprietary assessment tools and cultural fit analysis to ensure long-term retention and team compatibility.",
      color: "text-indigo-600",
      bg: "bg-indigo-100",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-red-500/20 transform -skew-y-6 scale-125 opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 via-amber-500/10 to-pink-500/10 opacity-30"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Partner With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
            We're not just recruiters—we're growth partners who combine
            <span className="font-semibold text-blue-600">
              {" "}
              deep market knowledge
            </span>
            ,
            <span className="font-semibold text-purple-600">
              {" "}
              proven methodologies
            </span>
            , and
            <span className="font-semibold text-green-600">
              {" "}
              relentless execution
            </span>{" "}
            to build your ideal team.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all hover:border-blue-200"
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div
                className={`${benefit.bg} ${benefit.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}
              >
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Button Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <button
            onClick={() => setShowCalendly(true)}
            className="relative inline-flex cursor-pointer items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 group overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10 flex items-center">
              <span>Become a Partner</span>
              <svg
                className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </button>
          <p className="mt-4 text-gray-600">
            Ready to transform your hiring process? Let's get started.
          </p>
        </motion.div>
      </div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
};

export default Benefits;

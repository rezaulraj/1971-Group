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

const Benefits = () => {
  const benefits = [
    {
      icon: <FiDollarSign className="text-2xl" />,
      title: "Cost-Efficient Hiring",
      description:
        "Only pay for successful placements with our performance-based model—no retainers, no hidden fees, just results.",
    },
    {
      icon: <FiZap className="text-2xl" />,
      title: "Lightning-Fast Results",
      description:
        "Average time-to-fill of just 14 days through our optimized sourcing pipeline and proactive candidate engagement.",
    },
    {
      icon: <FiUsers className="text-2xl" />,
      title: "Top 10% Talent Pool",
      description:
        "Access to passive candidates and vetted professionals you won't find on job boards—we target the best so you don't have to.",
    },
    {
      icon: <FiMessageSquare className="text-2xl" />,
      title: "White-Glove Service",
      description:
        "Dedicated account manager with weekly syncs, real-time tracking, and collaborative hiring decisions tailored to your needs.",
    },
    {
      icon: <FiCheckCircle className="text-2xl" />,
      title: "Risk-Free Guarantee",
      description:
        "90-day replacement guarantee on all placements—we stand behind our matches with confidence.",
    },
    {
      icon: <FiBarChart2 className="text-2xl" />,
      title: "Data-Driven Matching",
      description:
        "Proprietary assessment tools and cultural fit analysis to ensure long-term retention and team compatibility.",
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
    <div className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000b30] to-[#0a1a4d]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4AF37]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4">
            Why Partner With Us
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mt-4">
            We're not just recruiters—we're growth partners who combine
            <span className="font-semibold text-[#D4AF37]">
              {" "}
              deep market knowledge
            </span>
            ,
            <span className="font-semibold text-[#D4AF37]">
              {" "}
              proven methodologies
            </span>
            , and
            <span className="font-semibold text-[#D4AF37]">
              {" "}
              relentless execution
            </span>{" "}
            to build your ideal team.
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full mt-6"></div>
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
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 group"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                {benefit.description}
              </p>

              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] w-0 group-hover:w-full transition-all duration-500"></div>
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
          <a
            href="/join-as-partner"
            className="relative inline-flex cursor-pointer items-center px-8 py-4 bg-[#D4AF37] text-[#000b30] font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 group overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
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
          </a>
          <p className="mt-4 text-gray-300">
            Ready to transform your hiring process? Let's get started.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;

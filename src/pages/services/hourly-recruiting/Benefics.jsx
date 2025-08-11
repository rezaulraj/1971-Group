import React from "react";
import { motion } from "framer-motion";
import {
  FiDollarSign,
  FiZap,
  FiMessageSquare,
  FiCheckCircle,
  FiAward,
} from "react-icons/fi";

const Benefits = () => {
  const benefits = [
    {
      icon: <FiDollarSign className="text-3xl" />,
      title: "Transparent Hourly Rates",
      description:
        "Flexible recruiting with no hidden fees and no long-term contracts.",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: <FiZap className="text-3xl" />,
      title: "Quick Hiring Turnaround",
      description:
        "Get started right after signing, with most roles filled within just two weeks on average.",
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      icon: <FiMessageSquare className="text-3xl" />,
      title: "Clear, Ongoing Communication",
      description:
        "Stay informed every step of the way with regular updates, shared workflows, and collaborative input.",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      icon: <FiCheckCircle className="text-3xl" />,
      title: "Trusted & Reliable",
      description:
        "We’re backed by 40+ positive reviews, a strong reputation, and a flawless track record with no legal issues, just results.",
      color: "text-amber-600",
      bg: "bg-amber-100",
    },
    {
      icon: <FiAward className="text-3xl" />,
      title: "Proven Industry Expertise",
      description:
        "Our team combines deep industry insight, top-tier sourcing skills, and the latest tools to deliver the right talent fast.",
      color: "text-red-600",
      bg: "bg-red-100",
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
    <div className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
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
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
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
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div
                className={`${benefit.bg} ${benefit.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}
              >
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;

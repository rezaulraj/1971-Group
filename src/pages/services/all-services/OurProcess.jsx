import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaCalendarCheck,
  FaHandshake,
  FaClipboardCheck,
} from "react-icons/fa";

const OurProcess = () => {
  const steps = [
    {
      title: "Discovery",
      time: "1-3 Days",
      icon: <FaSearch className="text-xl" />,
      items: [
        "Company & role briefing",
        "Vacancy documentation",
        "Contract initiation",
      ],
      cardColor: "bg-gradient-to-br from-blue-100 to-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600",
      timeBadge: "bg-blue-100 text-blue-800",
    },
    {
      title: "Full-Cycle Recruitment",
      time: "1-4 Weeks",
      icon: <FaCalendarCheck className="text-xl" />,
      items: [
        "Talent sourcing",
        "Screening, scheduling & interviews",
        "Weekly updates & client support",
      ],
      cardColor: "bg-gradient-to-br from-purple-100 to-purple-50",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600",
      timeBadge: "bg-purple-100 text-purple-800",
    },
    {
      title: "Selection & Offer",
      time: "4-6 Weeks",
      icon: <FaHandshake className="text-xl" />,
      items: [
        "Offer negotiation",
        "NDA signing",
        "Final handover of successful candidates",
      ],
      cardColor: "bg-gradient-to-br from-cyan-100 to-cyan-50",
      borderColor: "border-cyan-200",
      iconColor: "text-cyan-600",
      timeBadge: "bg-cyan-100 text-cyan-800",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fast, Transparent, and Effective Hiring
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              className={`relative rounded-xl p-6 shadow-sm border ${step.borderColor} ${step.cardColor} h-full flex flex-col`}
            >
              {/* Time Badge */}
              <div
                className={`absolute -top-3 right-4 px-3 py-1 rounded-full text-sm font-medium ${step.timeBadge} shadow`}
              >
                {step.time}
              </div>

              <div
                className={`flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-white ${step.iconColor}`}
              >
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {step.title}
              </h3>

              <ul className="space-y-3">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0 mt-1 mr-3 text-green-500">
                      <FaClipboardCheck />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;

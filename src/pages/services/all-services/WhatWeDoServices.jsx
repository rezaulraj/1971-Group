import React from "react";
import { motion } from "framer-motion";
import {
  FaHandHoldingUsd,
  FaCalendarAlt,
  FaUsersCog,
  FaInfoCircle,
} from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

const WhatWeDoServices = () => {
  const services = [
    {
      title: "Pay-Per-Hire Recruiting",
      description:
        "Results-driven recruitment where you pay only when we deliver.",
      details:
        "We handle the entire hiring process from sourcing to onboarding based on a performance-based model.",
      icon: <FaHandHoldingUsd className="text-2xl" />,
      link: "#",
      moreInfoLink: "/pay-par-hire-services",
      gradient: "bg-gradient-to-br from-blue-600 to-indigo-700",
      borderColor: "border-blue-400",
      iconBg: "bg-blue-500/20",
      iconColor: "text-blue-400",
      buttonText: "Check Pricing",
    },
    {
      title: "Subscription-Based Recruiting",
      description:
        "Flexible, full-cycle recruitment on a monthly subscription.",
      details:
        "Enjoy seamless recruitment process outsourcing tailored to your evolving hiring needs.",
      icon: <FaCalendarAlt className="text-2xl" />,
      link: "#",
      moreInfoLink: "/subscription-services",
      gradient: "bg-gradient-to-br from-purple-600 to-fuchsia-700",
      borderColor: "border-purple-400",
      iconBg: "bg-purple-500/20",
      iconColor: "text-purple-400",
      buttonText: "Check Pricing",
    },
    {
      title: "Recruitment Process Outsourcing (RPO)",
      description: "Fully outsource your recruitment to our specialized teams.",
      details:
        "We act as an extension of your HR department—handling search, selection, and onboarding at the project, department, or company level.",
      icon: <FaUsersCog className="text-2xl" />,
      link: "#",
      moreInfoLink: "/staffing-services",
      gradient: "bg-gradient-to-br from-cyan-600 to-teal-700",
      borderColor: "border-cyan-400",
      iconBg: "bg-cyan-500/20",
      iconColor: "text-cyan-400",
      buttonText: "Check Pricing",
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            transition: {
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            transition: {
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 30, 0],
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive recruitment solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className={`relative rounded-tl-[50px] rounded-tr-lg rounded-br-[50px] p-8 shadow-2xl transition-all duration-300 border-t-4 ${service.borderColor} ${service.gradient} h-full flex flex-col overflow-hidden group`}
            >
              {/* More Info Button - appears on hover */}
              <a
                href={service.moreInfoLink}
                className="absolute right-0 bottom-0 transform -translate-y-1/2 translate-x-full group-hover:translate-x-0
      bg-white/90 text-gray-900 px-4 py-2 rounded-l-lg flex items-center
      transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
              >
                <FaInfoCircle className="mr-2" />
                More Info
              </a>

              <div
                className={`flex items-center justify-center w-14 h-14 mb-6 rounded-full backdrop-blur-sm ${service.iconBg}`}
              >
                <span className={service.iconColor}>{service.icon}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-200 mb-2 font-medium">
                {service.description}
              </p>

              <p className="text-gray-300 mb-6">{service.details}</p>

              <div className="mt-auto">
                <motion.a
                  href={service.link}
                  className="inline-flex items-center font-semibold text-white group"
                  whileHover={{ x: 5 }}
                >
                  {service.buttonText}
                  <HiArrowNarrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDoServices;

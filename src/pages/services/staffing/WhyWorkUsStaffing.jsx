import React from "react";
import { motion } from "framer-motion";
import {
  FaSyncAlt,
  FaStar,
  FaBolt,
  FaHandshake,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";

const WhyWorkUsStaffing = () => {
  const benefits = [
    {
      icon: FaSyncAlt,
      title: "Flexible Hiring Options",
      description:
        "Whether you need short-term support or long-term leadership, we hire top developers, engineers, executives, and C-level specialists tailored to your project timeline.",
    },
    {
      icon: FaStar,
      title: "Top-Tier Talent Quality",
      description:
        "Access a global talent pool through our extensive candidate database. We provide only highly qualified professionals who match your specific requirements.",
    },
    {
      icon: FaBolt,
      title: "Fast Hiring Process",
      description:
        "We rapidly fill critical roles and project gaps—delivering candidate CVs and onboarding support in record time.",
    },
    {
      icon: FaHandshake,
      title: "Risk-Free Partnership",
      description:
        "Minimize the risk of bad hires, delays, or disruptions. Our vetted process ensures you get reliable professionals from the start.",
    },
    {
      icon: FaMoneyBillWave,
      title: "Cost-Efficient Solutions",
      description:
        "We offer all-inclusive pricing with flexible plans and multiple payment options, including traditional methods and crypto.",
    },
    {
      icon: FaChartLine,
      title: "Boosted Productivity",
      description:
        "Through smart staffing and business strategies, we help expand your team's output, reduce time to market, and achieve your business goals faster.",
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
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001153] via-[#1a2a6b] to-[#334380] opacity-95"></div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M15 15h30v30H15z' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Work With Us
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover the key advantages of partnering with our recruitment and
            staffing services.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white/10 bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="bg-blue-500 bg-opacity-20 p-3 rounded-full mr-4">
                  <benefit.icon className="text-blue-300 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-blue-100 pl-14">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWorkUsStaffing;

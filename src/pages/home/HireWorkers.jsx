import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiAward,
  FiUserCheck,
  FiTrendingUp,
  FiShield,
  FiClock,
  FiDollarSign,
  FiHeart,
} from "react-icons/fi";
import Calendly from "../../components/Calendly";

const HireWorkers = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const benefits = [
    {
      icon: <FiAward className="text-3xl" />,
      title: "Premium Talent Network",
      description:
        "Access our exclusive pool of pre-vetted professionals from the 1971 Group - rigorously screened for skills, experience, and cultural fit.",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      icon: <FiUserCheck className="text-3xl" />,
      title: "95% Retention Rate",
      description:
        "Our matching algorithm and human expertise combine to deliver candidates who stay - 3x longer than industry averages.",
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: "Growth-Ready Professionals",
      description:
        "Talent trained in the 1971 methodology come with built-in adaptability and continuous learning mindsets.",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: "Full Compliance",
      description:
        "Every candidate comes with complete documentation and background verification - zero legal surprises.",
      color: "text-amber-600",
      bg: "bg-amber-100",
    },
    {
      icon: <FiClock className="text-3xl" />,
      title: "Rapid Placement",
      description:
        "Average 11-day placement time through our optimized recruitment pipeline and immediate availability candidates.",
      color: "text-red-600",
      bg: "bg-red-100",
    },
    {
      icon: <FiDollarSign className="text-3xl" />,
      title: "Cost Efficiency",
      description:
        "Save 40% on average hiring costs compared to traditional agencies with our performance-based model.",
      color: "text-indigo-600",
      bg: "bg-indigo-100",
    },
  ];

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
    <div className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 transform -skew-y-3 scale-105 opacity-50"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] opacity-10"></div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            <FiHeart className="mr-2" /> Trusted Since 2010
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Leading Recruiters Choose Our Talent
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 15 years, the 1971 Group has been the{" "}
            <span className="font-semibold text-blue-600">gold standard</span>{" "}
            in workforce solutions, delivering exceptional candidates that drive
            business growth.
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
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all hover:border-blue-200 relative group"
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              <div className="relative z-10">
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
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Access Elite Talent?
          </h3>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Join hundreds of recruiters who trust the 1971 Group for their most
            critical hiring needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setShowCalendly(true)}
              className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg cursor-pointer"
            >
              Request Candidate Profiles
            </button>
            <button
              onClick={() => setShowCalendly(true)}
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all hover:scale-105 cursor-pointer"
            >
              Speak With Our Team
            </button>
          </div>
        </motion.div>
      </div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
};

export default HireWorkers;

import React from "react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaBriefcase,
  FaRocket,
  FaBuilding,
  FaIndustry,
  FaLaptopCode,
} from "react-icons/fa";

const CaseStudies = () => {
  const studies = [
    {
      title: "Hired over 7 experts in less than 3 months",
      icon: <FaLaptopCode className="text-3xl text-blue-300" />,
      highlight:
        "Hired over 7 experts in less than 3 months, achieving a 100% success rate from job posting to onboarding.",
      description:
        "Achieved a perfect 100% success rate in talent acquisition, from initial job posting to final onboarding.",
      stats: "100% success rate | 3 month timeline",
    },
    {
      title: "Full team staffing completed in 2 months",
      icon: <FaChartLine className="text-3xl text-purple-300" />,
      highlight:
        "Full team staffing completed in 2 months, including senior and C-level roles, resulting in a 350% productivity boost and optimized internal systems.",
      description:
        "Delivered complete team staffing with senior leadership, driving 350% productivity gains and system optimization.",
      stats: "350% productivity boost | 2 month completion",
    },
    {
      title: "Scaled specialized teams by 45%",
      icon: <FaIndustry className="text-3xl text-cyan-300" />,
      highlight:
        "Helped scale specialized teams by 45% within 3 months, delivering top-tier talent to support global expansion.",
      description:
        "Accelerated global growth with 45% team expansion of specialized talent in just one quarter.",
      stats: "45% team growth | 3 month timeframe",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#000b30] via-[#0a1a4d] to-[#1a2a6b] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
            transition: {
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -20, 0],
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Executive Recruitment Excellence
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Our proven methodology delivers exceptional leadership talent across
            industries, with measurable impact on organizational performance.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white/10 p-3 rounded-lg">{study.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {study.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaRocket className="text-blue-300 mt-1 flex-shrink-0" />
                  <p className="text-white">{study.highlight}</p>
                </div>

                <div className="flex items-start gap-3">
                  <FaBriefcase className="text-blue-300 mt-1 flex-shrink-0" />
                  <p className="text-blue-100">{study.description}</p>
                </div>

                <div className="flex items-start gap-3">
                  <FaUsers className="text-blue-300 mt-1 flex-shrink-0" />
                  <p className="text-white font-medium">{study.stats}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2">250+</h3>
              <p className="text-blue-200">C-Level Placements</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2">95%</h3>
              <p className="text-blue-200">Retention After 2 Years</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2">15</h3>
              <p className="text-blue-200">Industry Specializations</p>
            </div>
          </div>
        </motion.div>
        <div className="flex items-center justify-center mt-10">
          <a
            href="/case-study"
            className="bg-gradient-to-br from-blue-100/80 to-amber-100/80 text-xl font-medium rounded-2xl px-4 p-3 shadow-2xl hover:scale-95 transition-transform duration-300"
          >
            View Our Methodology
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

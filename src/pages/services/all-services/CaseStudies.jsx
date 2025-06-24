import React from "react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaBriefcase,
  FaRocket,
} from "react-icons/fa";

const CaseStudies = () => {
  const studies = [
    {
      company: "Bitmedia Labs",
      icon: <FaUserTie className="text-3xl text-blue-300" />,
      highlight:
        "Hired 7 experts across technical and non-technical roles in under 3 months.",
      description:
        "We achieved a 100% success rate while improving Bitmedia Labs' overall hiring process—from job ad creation to final onboarding.",
      stats: "100% success rate",
    },
    {
      company: "Aprioreo",
      icon: <FaChartLine className="text-3xl text-purple-300" />,
      highlight:
        "Filled all open positions in 2 months, including a C-level role.",
      description:
        "Our support led to a 350% productivity boost and helped Aprioreo structure efficient internal business systems.",
      stats: "350% productivity boost",
    },
    {
      company: "Hacken",
      icon: <FaShieldAlt className="text-3xl text-cyan-300" />,
      highlight:
        "Scaled their smart contract auditing team by 45% in just 3 months.",
      description:
        "We successfully hired 15 Web3 professionals, supporting Hacken's expansion in the cybersecurity and blockchain sector.",
      stats: "45% team growth",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#000b30] via-[#0a1a4d] to-[#1a2a6b] relative overflow-hidden">
      {/* Animated background elements */}
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Case Studies</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Real-world success stories from our recruitment partnerships
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
                    {study.company}
                  </h3>
                  <p className="text-blue-200 font-medium">Recruiting</p>
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
              <h3 className="text-4xl font-bold text-white mb-2">100%</h3>
              <p className="text-blue-200">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2">3x</h3>
              <p className="text-blue-200">Faster Hiring</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2">200+</h3>
              <p className="text-blue-200">Roles Filled</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;

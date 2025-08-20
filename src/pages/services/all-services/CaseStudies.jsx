import React, { useState } from "react";
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
  FaArrowRight,
} from "react-icons/fa";
import Calendly from "../../../components/Calendly";

const CaseStudies = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const studies = [
    {
      title: "Hired over 7 experts in less than 3 months",
      icon: <FaLaptopCode className="text-2xl" />,
      highlight:
        "Hired over 7 experts in less than 3 months, achieving a 100% success rate from job posting to onboarding.",
      description:
        "Achieved a perfect 100% success rate in talent acquisition, from initial job posting to final onboarding.",
      stats: "100% success rate | 3 month timeline",
      color: "from-blue-600/20 to-blue-800/20",
      accent: "bg-blue-500",
      index: 0,
    },
    {
      title: "Full team staffing completed in 2 months",
      icon: <FaChartLine className="text-2xl" />,
      highlight:
        "Full team staffing completed in 2 months, including senior and C-level roles, resulting in a 350% productivity boost and optimized internal systems.",
      description:
        "Delivered complete team staffing with senior leadership, driving 350% productivity gains and system optimization.",
      stats: "350% productivity boost | 2 month completion",
      color: "from-purple-600/20 to-purple-800/20",
      accent: "bg-purple-500",
      index: 1,
    },
    {
      title: "Scaled specialized teams by 45%",
      icon: <FaIndustry className="text-2xl" />,
      highlight:
        "Helped scale specialized teams by 45% within 3 months, delivering top-tier talent to support global expansion.",
      description:
        "Accelerated global growth with 45% team expansion of specialized talent in just one quarter.",
      stats: "45% team growth | 3 month timeframe",
      color: "from-cyan-600/20 to-cyan-800/20",
      accent: "bg-cyan-500",
      index: 2,
    },
  ];

  const stats = [
    { value: "250+", label: "C-Level Placements", icon: <FaUserTie /> },
    { value: "95%", label: "Retention After 2 Years", icon: <FaShieldAlt /> },
    { value: "15", label: "Industry Specializations", icon: <FaBuilding /> },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#000b30] via-[#0a1a4d] to-[#1a2a6b] relative overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-3xl"
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
          className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-3xl"
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
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            transition: {
              duration: 16,
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
          <div className="inline-flex items-center px-4 py-2 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm font-semibold mb-4">
            <FaRocket className="mr-2" /> Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-4">
            Executive Recruitment Excellence
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Our proven methodology delivers exceptional leadership talent across
            industries, with measurable impact on organizational performance.
          </p>
        </motion.div>

    
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {studies.map((study) => (
            <motion.div
              key={study.index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: study.index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
              onMouseEnter={() => setHoveredCard(study.index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  study.color
                } rounded-xl transition-all duration-500 ${
                  hoveredCard === study.index ? "opacity-100" : "opacity-50"
                }`}
              ></div>

              <div className="relative bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 h-full">
             
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                    {study.icon}
                  </div>
                  <div
                    className={`h-1 w-8 ${
                      study.accent
                    } rounded-full transition-all duration-500 ${
                      hoveredCard === study.index ? "w-16" : ""
                    }`}
                  ></div>
                </div>
 
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {study.title}
                </h3>

            
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <FaRocket className="text-[#D4AF37] mt-1 flex-shrink-0" />
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {study.highlight}
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <FaBriefcase className="text-[#D4AF37] mt-1 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">{study.description}</p>
                  </div>
                </div>

            
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <FaUsers className="text-[#D4AF37] flex-shrink-0" />
                  <p className="text-white font-medium text-sm">
                    {study.stats}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 backdrop-blur-sm rounded-2xl p-8 border border-[#D4AF37]/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our executive recruitment expertise can drive
              your organization's success.
            </p>
            <button
              onClick={() => setShowCalendly(true)}
              className="bg-[#D4AF37] text-[#000b30] font-bold py-4 px-8 rounded-lg hover:bg-[#c6a22f] transition-all duration-300 transform hover:scale-105 flex items-center mx-auto cursor-pointer"
            >
              Schedule a Consultation
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </motion.div>
      </div>

      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </section>
  );
};

export default CaseStudies;

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaUserClock,
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaHandshakeAltSlash,
  FaArrowRight,
  FaClipboardCheck,
} from "react-icons/fa";
import Calendly from "../../../components/Calendly";

const TalentSpecializations = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const services = [
    {
      icon: FaSearch,
      title: "Precision Talent Matching",
      description:
        "We don't just fill positions—we find candidates who excel in your unique environment.",
      benefits: [
        "90% first-year retention rate",
        "Cultural fit assessments",
        "Skills-to-role alignment",
      ],
      iconColor: "text-[#D4AF37]",
      timeBadge: "bg-[#D4AF37] text-[#000b30]",
    },
    {
      icon: FaUserClock,
      title: "Flexible Staffing Solutions",
      description:
        "Scale your workforce up or down without the overhead of traditional hiring.",
      benefits: [
        "Contract-to-hire options",
        "Short-term project staffing",
        "Seamless onboarding",
      ],
      iconColor: "text-[#D4AF37]",
      timeBadge: "bg-[#D4AF37] text-[#000b30]",
    },
    {
      icon: FaUsers,
      title: "High-Volume Hiring",
      description:
        "Rapidly deploy quality talent for seasonal peaks or expansion initiatives.",
      benefits: [
        "30% faster time-to-fill",
        "Bulk candidate screening",
        "Turnkey onboarding programs",
      ],
      iconColor: "text-[#D4AF37]",
      timeBadge: "bg-[#D4AF37] text-[#000b30]",
    },
    {
      icon: FaChartLine,
      title: "Strategic Workforce Planning",
      description:
        "Proactively build talent pipelines for critical roles before you need them.",
      benefits: [
        "Future-ready skills mapping",
        "Succession planning",
        "Market salary benchmarking",
      ],
      iconColor: "text-[#D4AF37]",
      timeBadge: "bg-[#D4AF37] text-[#000b30]",
    },
    {
      icon: FaLightbulb,
      title: "Specialized Recruitment",
      description:
        "Access niche talent pools for hard-to-fill roles across industries.",
      benefits: [
        "Industry-specific networks",
        "Passive candidate outreach",
        "Competitive offer strategies",
      ],
      iconColor: "text-[#D4AF37]",
      timeBadge: "bg-[#D4AF37] text-[#000b30]",
    },
    {
      icon: FaHandshakeAltSlash,
      title: "Managed Staffing Programs",
      description:
        "Outsource your entire recruitment function with guaranteed results.",
      benefits: [
        "Dedicated account management",
        "Performance-based pricing",
        "90-day replacement guarantee",
      ],
      iconColor: "text-[#D4AF37]",
      timeBadge: "bg-[#D4AF37] text-[#000b30]",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000b30] to-[#0a1a4d] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">
            Staffing Solutions That Deliver Results
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Whether you need one perfect candidate or an entire team, we provide{" "}
            <span className="font-semibold text-[#D4AF37]">
              flexible, scalable staffing
            </span>{" "}
            with measurable impact.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 h-full flex flex-col group"
              >
                {/* Success Rate Badge */}
                <div
                  className={`absolute -top-3 right-4 px-3 py-1 rounded-full text-sm font-medium ${service.timeBadge} shadow-lg`}
                >
                  {index === 0
                    ? "90% Success"
                    : index === 2
                    ? "30% Faster"
                    : index === 5
                    ? "90-Day Guarantee"
                    : "Premium"}
                </div>

                <div
                  className={`flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#D4AF37]/10 ${service.iconColor} group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300`}
                >
                  <IconComponent className="text-xl" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-6">{service.description}</p>

                <div className="mt-auto">
                  <h4 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-wider mb-3">
                    Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="flex-shrink-0 mt-1 mr-3 text-[#D4AF37]">
                          <FaClipboardCheck />
                        </span>
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Hiring Process?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your staffing needs and how our specialized
              solutions can drive your business forward.
            </p>
            <button
              onClick={() => setShowCalendly(true)}
              className="bg-[#D4AF37] text-[#000b30] font-bold py-3 px-8 rounded-lg hover:bg-[#c6a22f] transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
            >
              Get Started
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </section>
  );
};

export default TalentSpecializations;

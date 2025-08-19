import React, { useState } from "react";
import { FaStar, FaBriefcase, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Calendly from "../../../components/Calendly";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const hoverCard = {
  scale: 1.03,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
  },
};

const OurExpertise = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const expertiseItems = [
    {
      icon: <FaStar className="text-[#D4AF37] text-2xl" />,
      title: "Employer Branding",
      description:
        "We create a compelling and authentic image of your company as an employer. This attracts high-quality applicants and helps retain key employees.",
      benefit: "Gain a competitive edge in attracting and keeping top talent.",
      cta: ["Check Prices", "Learn More"],
    },
    {
      icon: <FaBriefcase className="text-[#D4AF37] text-2xl" />,
      title: "Employee Experience",
      description:
        "We structure and enhance the employee journey to boost engagement and turn your staff into brand advocates.",
      benefit: "Happy employees attract great talent.",
      cta: ["Check Prices", "Learn More"],
    },
  ];

  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-[#D4AF37]"
        >
          What We Do
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={hoverCard}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700"
            >
              <div className="p-8">
                <motion.div
                  className="flex items-center mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="p-3 rounded-full bg-gray-700 mr-4 flex items-center justify-center"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-[#D4AF37]">
                    {item.title}
                  </h3>
                </motion.div>

                <motion.p
                  className="text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {item.description}
                </motion.p>

                <motion.div
                  className="bg-gray-700 p-4 rounded-lg mb-6 border-l-4 border-[#D4AF37]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-200 font-medium">{item.benefit}</p>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {item.cta.map((text, i) => (
                    <motion.button
                      onClick={() => setShowCalendly(true)}
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center px-5 py-3 rounded-lg text-sm font-medium transition-all ${
                        i === 0
                          ? "bg-[#D4AF37] text-gray-900 hover:bg-[#C5A234]"
                          : "text-[#D4AF37] border border-[#D4AF37] hover:bg-gray-700"
                      }`}
                    >
                      {text}
                      {i === 0 && (
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <FaArrowRight className="ml-2 text-xs" />
                        </motion.span>
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </section>
  );
};

export default OurExpertise;

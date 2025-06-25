import React from "react";
import { FaStar, FaBriefcase, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

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
  const expertiseItems = [
    {
      icon: <FaStar className="text-yellow-400 text-2xl" />,
      title: "Building Your Employer Brand",
      description:
        "We shape a standout identity for your company that appeals to job seekers and engages your current team.",
      benefit: "Gain a competitive edge in attracting and keeping top talent.",
      cta: ["Check Prices", "Learn More"],
    },
    {
      icon: <FaBriefcase className="text-blue-400 text-2xl" />,
      title: "Enhancing the Employee Journey",
      description:
        "We create meaningful employee experiences that boost satisfaction and turn your workforce into powerful brand advocates.",
      benefit: "Happy employees attract great talent.",
      cta: ["Check Prices", "Learn More"],
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          Our Expertise
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
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-8">
                <motion.div
                  className="flex items-center mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="p-3 rounded-full bg-gray-100 mr-4"
                    whileHover={{ rotate: 15 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </motion.div>

                <motion.p
                  className="text-gray-600 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {item.description}
                </motion.p>

                <motion.p
                  className="text-gray-700 font-medium mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  {item.benefit}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {item.cta.map((text, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center px-5 py-2 rounded-full text-sm font-medium ${
                        i === 0
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "text-blue-600 border border-blue-600 hover:bg-blue-50"
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
    </section>
  );
};

export default OurExpertise;

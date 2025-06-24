import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaClock,
  FaChartLine,
  FaWallet,
  FaUserTie,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";
import benefitc1 from "../../../assets/allservice/be1.webp";
import benefitc2 from "../../../assets/allservice/be2.webp";
import benefitc3 from "../../../assets/allservice/be3.webp";
import benefitc4 from "../../../assets/allservice/be4.webp";
import benefitc5 from "../../../assets/allservice/be5.webp";
import benefitc6 from "../../../assets/allservice/be6.webp";
import benefitc7 from "../../../assets/allservice/be7.webp";

const Benefits = () => {
  const benefits = [
    {
      title: "Faster Scaling",
      description: "Accelerate your growth with quick access to top talent",
      icon: <FaRocket className="text-2xl" />,
      iconColor: "text-orange-400",
      borderColor: "border-orange-400",
    },
    {
      title: "Time Savings",
      description:
        "Reduce time-to-hire by up to 70% with our streamlined process",
      icon: <FaClock className="text-2xl" />,
      iconColor: "text-blue-400",
      borderColor: "border-blue-400",
    },
    {
      title: "Cost Efficiency",
      description:
        "Lower your cost-per-hire with our optimized recruitment models",
      icon: <FaWallet className="text-2xl" />,
      iconColor: "text-green-400",
      borderColor: "border-green-400",
    },
    {
      title: "Quality Talent",
      description: "Access pre-vetted candidates with proven track records",
      icon: <FaUserTie className="text-2xl" />,
      iconColor: "text-purple-400",
      borderColor: "border-purple-400",
    },
    {
      title: "Reduced Risk",
      description: "Our replacement guarantees protect your investment",
      icon: <FaShieldAlt className="text-2xl" />,
      iconColor: "text-red-400",
      borderColor: "border-red-400",
    },
    {
      title: "Strategic Partnership",
      description: "Long-term collaboration focused on your business goals",
      icon: <FaHandshake className="text-2xl" />,
      iconColor: "text-indigo-400",
      borderColor: "border-indigo-400",
    },
    {
      title: "Performance Metrics",
      description: "Data-driven approach with transparent reporting",
      icon: <FaChartLine className="text-2xl" />,
      iconColor: "text-amber-400",
      borderColor: "border-amber-400",
    },
  ];

  const logos = [
    benefitc1,
    benefitc2,
    benefitc3,
    benefitc4,
    benefitc5,
    benefitc6,
    benefitc7,
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        ease: "easeOut",
      },
    },
  };

  // Infinite carousel animation
  const carouselVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-overlay filter blur-3xl"
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
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 bg-green-500 rounded-full mix-blend-overlay filter blur-3xl"
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Key Benefits</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We help businesses scale faster, streamline operations, and boost
            profitability by connecting them to the right people—efficiently and
            reliably.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col`}
            >
              <div
                className={`flex items-center justify-center w-12 h-12 mb-4 rounded-lg ${benefit.iconColor} bg-white/5`}
              >
                <span>{benefit.icon}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-300 mb-6">{benefit.description}</p>

              <div className="mt-auto">
                <div
                  className={`h-1 w-16 rounded-full ${benefit.borderColor} bg-opacity-50`}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite Logo Carousel */}
        <div className="mt-24 overflow-hidden py-8">
          <motion.div
            className="flex items-center"
            variants={carouselVariants}
            animate="animate"
          >
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="mx-8 w-28 h-28 flex-shrink-0 bg-white/5 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center border border-white/10"
              >
                <img
                  src={logo}
                  alt="Company logo"
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

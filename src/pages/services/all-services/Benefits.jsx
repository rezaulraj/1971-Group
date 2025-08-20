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
  FaCar,
} from "react-icons/fa";
import benefitc1 from "../../../assets/allservice/be1.webp";
import benefitc2 from "../../../assets/allservice/be2.webp";
import benefitc3 from "../../../assets/allservice/be3.webp";
import benefitc4 from "../../../assets/allservice/be4.webp";
import benefitc5 from "../../../assets/allservice/be5.webp";
import benefitc6 from "../../../assets/allservice/be6.webp";
import benefitc7 from "../../../assets/allservice/be7.webp";
import bgkeybenific from "../../../assets/industry/keybenific.jpeg";

const Benefits = () => {
  const benefits = [
    {
      title: "Key Benefits",
      description:
        "We help businesses scale efficiently, optimize recruitment operations, and improve ROI by consistently delivering the right talent at the right time.",
      icon: <FaRocket className="text-2xl" />,
      iconColor: "text-[#D4AF37]",
      borderColor: "border-[#D4AF37]",
    },
    {
      title: "Faster Growth",
      description:
        "Expand your team quickly with access to high-quality talent when you need it.",
      icon: <FaClock className="text-2xl" />,
      iconColor: "text-[#D4AF37]",
      borderColor: "border-[#D4AF37]",
    },
    {
      title: "Time Efficiency",
      description:
        "Cut your time-to-hire by up to 70% through a refined, end-to-end hiring process.",
      icon: <FaWallet className="text-2xl" />,
      iconColor: "text-[#D4AF37]",
      borderColor: "border-[#D4AF37]",
    },
    {
      title: "Cost Optimization",
      description:
        "Reduce your overall hiring costs with our scalable, fixed-fee recruitment model.",
      icon: <FaUserTie className="text-2xl" />,
      iconColor: "text-[#D4AF37]",
      borderColor: "border-[#D4AF37]",
    },
    {
      title: "High-Caliber Talent",
      description:
        "Get matched with thoroughly screened professionals with verified experience and results.",
      icon: <FaShieldAlt className="text-2xl" />,
      iconColor: "text-[#D4AF37]",
      borderColor: "border-[#D4AF37]",
    },
    {
      title: "Lower Hiring Risk",
      description:
        "Our built-in replacement guarantees ensure peace of mind and long-term value.",
      icon: <FaHandshake className="text-2xl" />,
      iconColor: "text-[#D4AF37]",
      borderColor: "border-[#D4AF37]",
    },
    {
      title: "Strategic Collaboration",
      description:
        "We become an extension of your business aligned with your hiring goals and growth plans.",
      icon: <FaChartLine className="text-2xl" />,
      iconColor: "text-[#D4AF37]",
      borderColor: "border-[#D4AF37]",
    },
    {
      title: "Transparent Reporting",
      description:
        "We've helped place top-tier specialists across 10+ countries, with 90.8% successfully passing probation.",
      icon: <FaCar className="text-2xl" />,
      iconColor: "text-[#D4AF37]",
      borderColor: "border-[#D4AF37]",
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
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
 
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgkeybenific})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#000b30]/90 via-[#0a1a4d]/85 to-[#1a2a6b]/90"></div>
      </div>

    
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
          <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">
            Key Benefits
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We help businesses scale efficiently, optimize recruitment
            operations, and improve ROI by consistently delivering the right
            talent at the right time.
          </p>
        </motion.div>

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
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 h-full flex flex-col group"
            >
              <div
                className={`flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-[#D4AF37]/10 ${benefit.iconColor} group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300`}
              >
                <span>{benefit.icon}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-200 mb-6">{benefit.description}</p>

              <div className="mt-auto">
                <div
                  className={`h-1 w-16 rounded-full ${benefit.borderColor} bg-opacity-50 group-hover:bg-opacity-100 transition-all duration-300`}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>


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
                className="mx-8 w-28 h-28 flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center border border-white/20 hover:border-[#D4AF37]/50 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt="Company logo"
                  className="w-full h-full object-contain"
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

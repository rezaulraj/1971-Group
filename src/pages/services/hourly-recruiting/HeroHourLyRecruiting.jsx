import React from "react";
import { motion } from "framer-motion";
import {
  FiClock,
  FiDollarSign,
  FiUsers,
  FiCalendar,
  FiArrowRight,
  FiZap,
  FiSearch,
  FiBriefcase,
} from "react-icons/fi";
import herohour from "../../../assets/allservice/herohour.jpg?url";
import clogo1 from "../../../assets/home/l1.webp?url";
import clogo2 from "../../../assets/home/l2.webp?url";
import clogo3 from "../../../assets/home/l3.webp?url";
import clogo4 from "../../../assets/home/l4.webp?url";
import clogo5 from "../../../assets/home/l5.webp?url";

const HeroHourLyRecruiting = () => {
  const ourClient = [
    { clogo: clogo1 },
    { clogo: clogo2 },
    { clogo: clogo3 },
    { clogo: clogo4 },
    { clogo: clogo5 },
  ];

  const features = [
    {
      icon: <FiDollarSign className="text-2xl" />,
      title: "Cost Reduction Without Compromise",
      description:
        "Need to hire just 1–2 professionals? Our hourly recruiting model is the most cost-efficient solutionpay only for the hours worked, with no upfront or hidden fees. It’s designed to save you time and budget while ensuring maximum value. Whether you’re looking for a designer, software engineer, admin support, or an executive, we deliver results with zero waste.",
      bgColor: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      icon: <FiZap className="text-2xl" />,
      title: "On-Demand Global Hiring",
      description:
        "We offer on-demand recruitment services for a wide range of roles, from skilled specialists to leadership positions. Hire globally without long-term commitments and start building your team as soon as tomorrow.",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      icon: <FiSearch className="text-2xl" />,
      title: "CV Sourcing Services",
      description:
        "Already have an HR team but need a talent pipeline? We offer on-demand resume sourcing, including candidate shortlisting, CV searches by role and region, and customized talent lists tailored to your team’s needs. Only need CVs? We’ve got you covered.",
      bgColor: "bg-purple-200",
      textColor: "text-purple-600",
    },
  ];

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
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  const featureCardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 transform -skew-y-6 -rotate-6 scale-125"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              Hourly Recruiting
            </motion.h1>

            <motion.p className="text-lg text-gray-600" variants={itemVariants}>
              Flexible hiring solutions pay only for the hours we work on your
              vacancies.
            </motion.p>

            <motion.div variants={itemVariants}>
              <button className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl group">
                Schedule a Call
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Icons Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6 mt-8"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FiClock className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Flexible Hours</h3>
                  <p className="text-sm text-gray-500">
                    Scale up or down as needed
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FiDollarSign className="text-green-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Cost-Effective</h3>
                  <p className="text-sm text-gray-500">
                    Pay only for what you use
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <FiUsers className="text-purple-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Tailored Service
                  </h3>
                  <p className="text-sm text-gray-500">
                    Customized to your needs
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-pink-100 rounded-lg">
                  <FiCalendar className="text-pink-600 text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">On-Demand</h3>
                  <p className="text-sm text-gray-500">
                    Available when you need us
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Image */}
          <motion.div className="relative" variants={imageVariants}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src={herohour}
                alt="Hourly Recruiting"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg max-w-xs">
                  <h3 className="font-semibold text-gray-900">
                    Expert Recruiters
                  </h3>
                  <p className="text-sm text-gray-600">
                    Our team has 15+ years of industry experience
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Client Logos Marquee */}
        <motion.div className="mt-20 overflow-hidden" variants={itemVariants}>
          <div className="border-t border-b border-gray-200 py-6">
            <motion.div
              className="flex items-center space-x-16"
              variants={logoVariants}
              animate="animate"
            >
              <span className="text-lg font-medium text-gray-500 whitespace-nowrap">
                Trusted by Global Clients
              </span>
              {ourClient.map((client, index) => (
                <img
                  key={index}
                  src={client.clogo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              ))}
              {/* Duplicate for seamless loop */}
              {ourClient.map((client, index) => (
                <img
                  key={`dup-${index}`}
                  src={client.clogo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/50 rounded-xl p-6 shadow-md border border-gray-100 overflow-hidden relative"
              variants={featureCardVariants}
              whileHover="hover"
            >
              <div
                className={`absolute top-0 left-0 w-full h-1 ${feature.bgColor}`}
              ></div>
              <div
                className={`p-3 ${feature.bgColor} rounded-lg inline-flex mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroHourLyRecruiting;

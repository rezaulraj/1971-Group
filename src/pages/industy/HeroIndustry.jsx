import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiUsers,
  FiBriefcase,
  FiTarget,
  FiClock,
} from "react-icons/fi";
import clogo1 from "../../assets/clined/cl1.png?url";
import clogo2 from "../../assets/clined/cl2.png?url";
import clogo3 from "../../assets/clined/cl3.png?url";
import clogo4 from "../../assets/clined/cl4.png?url";
import clogo5 from "../../assets/clined/cl5.png?url";
import clogo6 from "../../assets/clined/cl6.png?url";
import clogo7 from "../../assets/clined/cl7.png?url";
import clogo8 from "../../assets/clined/cl8.png?url";
import heroIndusty from "../../assets/industry/recruitment_industry.jpg";
import Calendly from "../../components/Calendly";

const HeroIndustry = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const ourClient = [
    { clogo: clogo1 },
    { clogo: clogo2 },
    { clogo: clogo3 },
    { clogo: clogo4 },
    { clogo: clogo5 },
    { clogo: clogo6 },
    { clogo: clogo7 },
    { clogo: clogo8 },
  ];

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

  const serviceCards = [
    {
      title: "Talent Acquisition",
      description:
        "Find the right candidates for your open positions with precision sourcing and screening.",
      icon: <FiUsers className="text-2xl text-blue-600" />,
      bg: "bg-blue-50",
    },
    {
      title: "Executive Search",
      description:
        "Connect with proven leaders who can guide your organization to long-term success.",
      icon: <FiBriefcase className="text-2xl text-purple-600" />,
      bg: "bg-purple-50",
    },
    {
      title: "Workforce Planning",
      description:
        "Strategic staffing solutions that align with your growth objectives.",
      icon: <FiTarget className="text-2xl text-green-600" />,
      bg: "bg-green-50",
    },
    {
      title: "Contract Staffing",
      description:
        "Flexible, on-demand staffing for project-based and seasonal needs.",
      icon: <FiClock className="text-2xl text-orange-600" />,
      bg: "bg-orange-50",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 transform -skew-y-6 -rotate-6 scale-125"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-transparent opacity-70"></div>

      <motion.div
        className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-200/30 blur-xl"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-purple-200/30 blur-xl"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="space-y-8">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              Transform Your Workforce with{" "}
              <span className="text-blue-600">Manpower Solution</span>
            </motion.h1>

            <motion.p className="text-lg text-gray-600" variants={itemVariants}>
              We deliver elite talent solutions customized to your business
              goals helping you build winning teams that accelerate growth.
            </motion.p>

            <motion.div variants={itemVariants}>
              <button
                onClick={() => setShowCalendly(true)}
                className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl group cursor-pointer"
              >
                Book a Call
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6 mt-8"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FiUsers className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Top Talent</h3>
                  <p className="text-sm text-gray-500">
                    Access to premium candidates
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <FiBriefcase className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Industry Experts
                  </h3>
                  <p className="text-sm text-gray-500">
                    Specialized recruiters
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <FiTarget className="text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Strategic Approach
                  </h3>
                  <p className="text-sm text-gray-500">
                    Data-driven methodologies
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-pink-100 rounded-lg">
                  <FiClock className="text-pink-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    Quick Turnaround
                  </h3>
                  <p className="text-sm text-gray-500">Fast placement times</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div className="relative" variants={imageVariants}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src={heroIndusty}
                alt="Manpower Solutions"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg max-w-xs">
                  <h3 className="font-semibold text-gray-900">
                    Workforce Excellence
                  </h3>
                  <p className="text-sm text-gray-600">
                    Building teams that drive business success
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="border-t border-b border-gray-200 py-6">
            <motion.div
              className="flex items-center space-x-16"
              variants={logoVariants}
              animate="animate"
            >
              <span className="text-lg font-medium text-gray-500 whitespace-nowrap">
                Trusted by Industry Leaders
              </span>
              {ourClient.map((client, index) => (
                <motion.img
                  key={index}
                  src={client.clogo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  whileHover={{ scale: 1.1 }}
                />
              ))}
              {/* Duplicate for seamless loop */}
              {ourClient.map((client, index) => (
                <motion.img
                  key={`dup-${index}`}
                  src={client.clogo}
                  alt={`Client Logo ${index + 1}`}
                  className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Core Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCards.map((service, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl ${service.bg} border border-transparent hover:border-gray-200 transition-all`}
                variants={featureCardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
};

export default HeroIndustry;

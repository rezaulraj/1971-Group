import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiClock,
  FiDollarSign,
  FiArrowRight,
  FiZap,
  FiSearch,
} from "react-icons/fi";
import herohour from "../../../assets/allservice/herohour.jpg?url";
import clogo1 from "../../../assets/clined/cl1.png?url";
import clogo2 from "../../../assets/clined/cl2.png?url";
import clogo3 from "../../../assets/clined/cl3.png?url";
import clogo4 from "../../../assets/clined/cl4.png?url";
import clogo5 from "../../../assets/clined/cl5.png?url";
import clogo6 from "../../../assets/clined/cl6.png?url";
import clogo7 from "../../../assets/clined/cl7.png?url";
import clogo8 from "../../../assets/clined/cl8.png?url";
import Calendly from "../../../components/Calendly";
import {
  FaGlobe,
  FaUserTie,
  FaHandshake,
  FaChartLine,
  FaAward,
} from "react-icons/fa";

const HeroHourLyRecruiting = () => {
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

  const features = [
    {
      icon: <FiDollarSign className="text-2xl" />,
      title: "Cost Reduction Without Compromise",
      description:
        "Need to hire just 1–2 professionals? Our hourly recruiting model is the most cost-efficient solution—pay only for the hours worked, with no upfront or hidden fees. It's designed to save you time and budget while ensuring maximum value. Whether you're looking for a designer, software engineer, admin support, or an executive, we deliver results with zero waste.",
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
        "Already have an HR team but need a talent pipeline? We offer on-demand resume sourcing, including candidate shortlisting, CV searches by role and region, and customized talent lists tailored to your team's needs. Only need CVs? We've got you covered.",
      bgColor: "bg-purple-200",
      textColor: "text-purple-600",
    },
  ];

  const benefits = [
    {
      icon: <FaGlobe className="text-2xl" />,
      title: "Global Reach",
      description: "Access talent from 80+ countries worldwide",
    },
    {
      icon: <FaUserTie className="text-2xl" />,
      title: "Expert Vetting",
      description: "Rigorous screening process for quality assurance",
    },
    {
      icon: <FiClock className="text-2xl" />,
      title: "Fast Placement",
      description: "Average 7-day placement for most positions",
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Trusted Partner",
      description: "15+ years of recruitment excellence",
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Growth Focused",
      description: "Talent that drives your business forward",
    },
    {
      icon: <FaAward className="text-2xl" />,
      title: "Award Winning",
      description: "Recognized for excellence in recruitment",
    },
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
    <div className="relative overflow-hidden min-h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${herohour})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#000b30]/90 via-[#0a1a4d]/80 to-[#1a2a6b]/90"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#D4AF37]/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-float1"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#D4AF37]/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-float2"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#D4AF37]/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-float3"></div>
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="space-y-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20"
            >
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
                variants={itemVariants}
              >
                Hourly Recruiting
              </motion.h1>

              <motion.h2
                className="text-2xl md:text-3xl font-semibold text-[#D4AF37] mb-6"
                variants={itemVariants}
              >
                Flexible Hiring Solutions for Modern Businesses
              </motion.h2>

              <motion.p
                className="text-lg text-gray-200 mb-6"
                variants={itemVariants}
              >
                Pay only for the hours we work on your vacancies. Our innovative
                hourly recruiting model delivers premium talent acquisition
                without the premium price tag.
              </motion.p>

              <motion.div variants={itemVariants}>
                <button
                  onClick={() => setShowCalendly(true)}
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#c6a22f] hover:from-[#c6a22f] hover:to-[#D4AF37] text-[#000b30] font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 group cursor-pointer"
                >
                  Schedule a Call
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6 mt-8"
              variants={itemVariants}
            >
              {benefits.slice(0, 4).map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-[#D4AF37]/20 rounded-lg group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300 text-[#D4AF37]">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-white">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-200">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">
                    80%
                  </div>
                  <p className="text-gray-200">
                    Cost Savings Compared to Traditional Agencies
                  </p>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">
                    24h
                  </div>
                  <p className="text-gray-200">
                    Average Response Time for New Requests
                  </p>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">
                    15+
                  </div>
                  <p className="text-gray-200">
                    Years of Recruitment Expertise
                  </p>
                </div>
                <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">
                    95%
                  </div>
                  <p className="text-gray-200">Client Satisfaction Rate</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#D4AF37]/10 rounded-xl border border-[#D4AF37]/20">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Expert Recruiters
                </h3>
                <p className="text-gray-200">
                  Our specialized team has 15+ years of industry experience
                  across technology, finance, healthcare, and executive search.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center relative z-10"
        >
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Trusted By Industry Leaders
            </h3>
            <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
              We're proud to partner with fast-scaling companies across
              industries from startups to enterprise-level brands who rely on us
              to power their workforce growth.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-8">
              {ourClient.map((client, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300"
                >
                  <img
                    src={client.clogo}
                    alt={`Client Logo ${index + 1}`}
                    className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-24 relative z-10"
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
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              Our Hourly Recruiting Advantages
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 rounded-xl p-6 shadow-md border border-white/10 overflow-hidden relative group hover:bg-white/10 transition-all duration-300"
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
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-200">{feature.description}</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 text-center relative z-10"
        >
          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#1a2a6b]/50 backdrop-blur-md p-12 rounded-2xl border border-[#D4AF37]/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Experience the future of recruitment with our flexible hourly
              model. Get premium talent acquisition without the premium price
              tag.
            </p>
            <button
              onClick={() => setShowCalendly(true)}
              className="bg-gradient-to-r from-[#D4AF37] to-[#c6a22f] hover:from-[#c6a22f] hover:to-[#D4AF37] text-[#000b30] font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-lg cursor-pointer"
            >
              Start Your Project Today
            </button>
          </div>
        </motion.div>
      </div>

      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />

      <style jsx="true" global="true">{`
        @keyframes float1 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(20px, -20px) rotate(5deg);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-15px, 15px) rotate(-5deg);
          }
        }
        @keyframes float3 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(15px, 20px) rotate(3deg);
          }
        }
        .animate-float1 {
          animation: float1 15s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 18s ease-in-out infinite;
        }
        .animate-float3 {
          animation: float3 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroHourLyRecruiting;

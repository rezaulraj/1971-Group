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

  const serviceCards = [
    {
      title: "Talent Acquisition",
      description:
        "Find the right candidates for your open positions with precision sourcing and screening.",
      icon: <FiUsers className="text-2xl" />,
    },
    {
      title: "Executive Search",
      description:
        "Connect with proven leaders who can guide your organization to long-term success.",
      icon: <FiBriefcase className="text-2xl" />,
    },
    {
      title: "Workforce Planning",
      description:
        "Strategic staffing solutions that align with your growth objectives.",
      icon: <FiTarget className="text-2xl" />,
    },
    {
      title: "Contract Staffing",
      description:
        "Flexible, on-demand staffing for project-based and seasonal needs.",
      icon: <FiClock className="text-2xl" />,
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroIndusty})`,
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
        <div className="grid grid-cols-1 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 text-center"
          >
            <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Transform Your Workforce
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#D4AF37] mb-6">
                Elite Manpower Solutions for Business Growth
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                We deliver elite talent solutions customized to your business
                goals helping you build winning teams that accelerate growth.
              </p>
              <button
                onClick={() => setShowCalendly(true)}
                className="bg-gradient-to-r from-[#D4AF37] to-[#c6a22f] hover:from-[#c6a22f] hover:to-[#D4AF37] text-[#000b30] font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 text-lg cursor-pointer"
              >
                Book a Call
                <FiArrowRight className="ml-2 inline-block" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
                Core Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceCards.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 group text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-4 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300 mx-auto">
                      {service.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-200 text-sm">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Trusted By Industry Leaders
            </h3>
            <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
              We're trusted by fast-scaling companies across industries from
              startups to enterprise-level brands who rely on us to power their
              workforce growth.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-12">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">
              80+
            </div>
            <div className="text-gray-200">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">
              15+
            </div>
            <div className="text-gray-200">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">
              95%
            </div>
            <div className="text-gray-200">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">
              7 Days
            </div>
            <div className="text-gray-200">Average Placement</div>
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

export default HeroIndustry;

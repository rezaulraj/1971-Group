import React, { useState } from "react";
import { motion } from "framer-motion";
import herogrobaltanent from "../../assets/home/grobaltanent.webp?url";
import clogo1 from "../../assets/clined/cl1.png?url";
import clogo2 from "../../assets/clined/cl2.png?url";
import clogo3 from "../../assets/clined/cl3.png?url";
import clogo4 from "../../assets/clined/cl4.png?url";
import clogo5 from "../../assets/clined/cl5.png?url";
import clogo6 from "../../assets/clined/cl6.png?url";
import clogo7 from "../../assets/clined/cl7.png?url";
import clogo8 from "../../assets/clined/cl8.png?url";
import Calendly from "../../components/Calendly";
import {
  FaArrowRight,
  FaClock,
  FaStar,
  FaUserTie,
  FaGlobe,
  FaHandshake,
  FaChartLine,
  FaAward,
  FaRocket,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const HeroHome = () => {
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

  const stats = [
    {
      icon: <FaClock className="text-2xl" />,
      value: "4 weeks",
      label: "Average time to fill positions",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-500/20",
    },
    {
      icon: <FaStar className="text-2xl" />,
      value: "40+",
      label: "Glowing client testimonials",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-500/20",
    },
    {
      icon: <FaUserTie className="text-2xl" />,
      value: "350+",
      label: "Top professionals successfully placed",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-500/20",
    },
  ];

  const benefits = [
    {
      icon: <FaGlobe className="text-2xl" />,
      title: "Global Talent Access",
      description:
        "Connect with exceptional professionals from 80+ countries worldwide",
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Trusted Partnership",
      description: "15+ years of recruitment excellence with proven results",
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Growth Acceleration",
      description: "Talent solutions designed to drive your business forward",
    },
    {
      icon: <FaAward className="text-2xl" />,
      title: "Award-Winning Service",
      description: "Recognized for excellence in global recruitment",
    },
    {
      icon: <FaRocket className="text-2xl" />,
      title: "Rapid Placement",
      description: "Streamlined process for faster hiring outcomes",
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen">
      <Helmet>
        <title>1971 Group | Global Talent Recruitment</title>
        <meta
          name="description"
          content="1971 Group is your Gulf-based partner for world-class talent recruitment. Access global professionals, accelerate hiring, and build visionary teams."
        />
        <meta
          name="keywords"
          content="Global Talent Recruitment, Gulf Recruitment, Hire Professionals, International Hiring, 1971 Group"
        />
        <meta
          property="og:title"
          content="1971 Group | Global Talent Recruitment"
        />
        <meta
          property="og:description"
          content="Partner with 1971 Group for global recruitment solutions. We connect fast-growing companies with top professionals worldwide."
        />
        <meta property="og:image" content={herogrobaltanent} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${herogrobaltanent})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#000b30]/95 via-[#0a1a4d]/90 to-[#1a2a6b]/95"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#D4AF37]/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-float1"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#D4AF37]/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-float2"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#D4AF37]/20 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-float3"></div>
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                <span className="text-[#D4AF37]">Global Talent</span>{" "}
                <span className="font-light">Recruitment</span> <br />
                <span className="font-light text-white">
                  for Visionary Companies
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                1971 Group is your premier Gulf-based partner for accessing
                world-class talent. We simplify global hiring with tailored
                solutions that help fast-growing companies build exceptional
                teams and accelerate their success.
              </p>
              <motion.button
                onClick={() => setShowCalendly(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center lg:justify-start px-8 py-4 rounded-full text-lg font-bold bg-gradient-to-r from-[#D4AF37] to-[#c6a22f] hover:from-[#c6a22f] hover:to-[#D4AF37] text-[#000b30] transition-all duration-300 mx-auto lg:mx-0 cursor-pointer"
              >
                Discover Talent Solutions
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-3"
                >
                  <FaArrowRight />
                </motion.span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-tl-[45px] rounded-br-[45px] border border-white/20 hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className={`p-4 rounded-full ${stat.bgColor} mr-4`}>
                    {stat.icon}
                  </div>
                  <div>
                    <h3
                      className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </h3>
                    <p className="text-gray-200 font-medium">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Why Partner With 1971 Group?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 group text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-4 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300 mx-auto">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-200 text-sm">{benefit.description}</p>
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
          className="mt-20 text-center"
        >
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Trusted By Industry Innovators
            </h3>
            <p className="text-lg text-gray-200 mb-8 max-w-3xl mx-auto">
              We partner with forward-thinking companies across industries who
              rely on our expertise to build high-performing teams that drive
              innovation and growth.
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

export default HeroHome;

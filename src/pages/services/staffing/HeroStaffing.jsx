import React, { useState } from "react";
import { motion } from "framer-motion";
import heroStaffing from "../../../assets/staffing/herostaf.jpg?url";
import clogo1 from "../../../assets/clined/cl1.png?url";
import clogo2 from "../../../assets/clined/cl2.png?url";
import clogo3 from "../../../assets/clined/cl3.png?url";
import clogo4 from "../../../assets/clined/cl4.png?url";
import clogo5 from "../../../assets/clined/cl5.png?url";
import clogo6 from "../../../assets/clined/cl6.png?url";
import clogo7 from "../../../assets/clined/cl7.png?url";
import clogo8 from "../../../assets/clined/cl8.png?url";
import {
  FaArrowRight,
  FaUsers,
  FaChartBar,
  FaLightbulb,
  FaUserPlus,
  FaShieldAlt,
  FaExchangeAlt,
  FaHandshake,
  FaRocket,
  FaGlobe,
  FaAward,
  FaClock,
} from "react-icons/fa";
import Calendly from "../../../components/Calendly";

const BenefitItem = ({ icon: Icon, text }) => (
  <motion.div
    className="flex items-center bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300"
    whileHover={{ scale: 1.05 }}
  >
    <Icon className="text-[#D4AF37] mr-3 text-xl" />
    <span className="text-white font-medium">{text}</span>
  </motion.div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 h-full group"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center mb-6">
      <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mr-4 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300">
        <Icon className="text-2xl" />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
      {description}
    </p>

    <div className="absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] w-0 group-hover:w-full transition-all duration-500"></div>
  </motion.div>
);

const ClientLogo = ({ src, alt }) => (
  <motion.div
    className="mx-4 lg:mx-8 inline-flex items-center bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300"
    whileHover={{ scale: 1.1 }}
  >
    <img
      src={src}
      alt={alt}
      className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
      loading="lazy"
    />
  </motion.div>
);

const StatCard = ({ icon: Icon, value, label }) => (
  <motion.div
    className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto mb-4 text-[#D4AF37]">
      <Icon className="text-2xl" />
    </div>
    <div className="text-3xl font-bold text-white mb-2">{value}</div>
    <div className="text-gray-300">{label}</div>
  </motion.div>
);

const HeroStaffing = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const benefits = [
    { icon: FaUsers, text: "Scalable Teams" },
    { icon: FaChartBar, text: "Cost Efficiency" },
    { icon: FaLightbulb, text: "Specialized Expertise" },
    { icon: FaUserPlus, text: "Quick Onboarding" },
  ];

  const features = [
    {
      icon: FaShieldAlt,
      title: "Start Hiring with Zero Risk",
      description:
        "No upfront payments required, our process is fast, affordable, and hassle-free. We're ready to get started immediately, handling payroll, taxes, and compliance for you.",
    },
    {
      icon: FaExchangeAlt,
      title: "Flexible Staffing for Every Need",
      description:
        "Whether you need temporary support or long-term hires, our adaptable staffing solutions are tailored to fit your project scope. Effortlessly scale your team up or down as needed.",
    },
    {
      icon: FaHandshake,
      title: "Retention That Delivers Results",
      description:
        "We prioritize more than just hiring; we focus on cultural fit and long-term success. Our goal is to place remote talent that not only performs but thrives with your team.",
    },
  ];

  const stats = [
    { icon: FaRocket, value: "87%", label: "Faster Hiring" },
    { icon: FaGlobe, value: "50+", label: "Countries Served" },
    { icon: FaAward, value: "98%", label: "Client Satisfaction" },
    { icon: FaClock, value: "24/7", label: "Support" },
  ];

  const ourClient = [
    { clogo: clogo1, alt: "Client 1" },
    { clogo: clogo2, alt: "Client 2" },
    { clogo: clogo3, alt: "Client 3" },
    { clogo: clogo4, alt: "Client 4" },
    { clogo: clogo5, alt: "Client 5" },
    { clogo: clogo6, alt: "Client 6" },
    { clogo: clogo7, alt: "Client 7" },
    { clogo: clogo8, alt: "Client 8" },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroStaffing})`,
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 text-center mb-20"
        >
          <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Staffing & Outstaffing Services
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#D4AF37] mb-6">
              Scale Smarter. Hire Faster.
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              Scale your team seamlessly with our expert outstaffing solutions
              designed to help fast-growing companies expand their workforce,
              enhance flexibility, and drive productivity.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <BenefitItem
                  key={index}
                  icon={benefit.icon}
                  text={benefit.text}
                />
              ))}
            </div>

            <motion.button
              onClick={() => setShowCalendly(true)}
              className="relative inline-flex cursor-pointer items-center px-8 py-4 bg-[#D4AF37] text-[#000b30] font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 group overflow-hidden text-lg mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center">
                <span>Book a Call</span>
                <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
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

            <div className="relative py-8 overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl mt-8">
              <motion.div
                className="flex items-center justify-center animate-marquee whitespace-nowrap"
                aria-hidden="true"
              >
                {[...ourClient, ...ourClient].map((client, idx) => (
                  <ClientLogo key={idx} src={client.clogo} alt={client.alt} />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Staffing Solutions
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Our comprehensive approach ensures you get the right talent with
              the right terms for your business needs.
            </p>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
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
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
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
        .animate-marquee {
          animation: marquee 25s linear infinite;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default HeroStaffing;

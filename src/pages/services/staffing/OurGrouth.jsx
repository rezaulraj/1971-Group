import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaUserTie,
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";
import Calendly from "../../../components/Calendly";

const ServiceCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-[#D4AF37]/30 group"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className="p-8">
      <div className="flex items-center mb-6">
        <div className="bg-[#D4AF37]/20 p-4 rounded-full mr-5 group-hover:bg-[#D4AF37] transition-colors duration-300">
          <Icon className="text-[#D4AF37] text-2xl group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">
        {description}
      </p>
      <div className="flex justify-between space-x-4">
        <a
          href="/blogs"
          className="text-[#D4AF37] font-medium hover:text-[#c6a22f] flex items-center transition-colors group-hover:underline"
        >
          Learn more{" "}
          <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </motion.div>
);

const OurServices = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const services = [
    {
      icon: FaHandshake,
      title: "Strategic Hiring Partnerships",
      description:
        "We become an extension of your HR team, delivering exceptional candidates who align perfectly with your company culture and values.",
    },
    {
      icon: FaUserTie,
      title: "Executive Talent Acquisition",
      description:
        "Find visionary leaders who inspire teams and drive organizational success through our discreet, high-touch search process.",
    },
    {
      icon: FaUsers,
      title: "High-Volume Recruitment",
      description:
        "Effortlessly scale your workforce with our streamlined processes that maintain quality while filling multiple roles quickly.",
    },
    {
      icon: FaChartLine,
      title: "Workforce Planning Solutions",
      description:
        "Proactively build talent pipelines and succession plans to future-proof your organization against market changes.",
    },
    {
      icon: FaLightbulb,
      title: "Employer Brand Development",
      description:
        "Transform your recruitment marketing to attract top performers by showcasing what makes your company truly special.",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            People Solutions That Make the Difference
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We go beyond matching resumes to job descriptions—we create{" "}
            <span className="font-semibold text-[#D4AF37]">
              meaningful connections
            </span>{" "}
            that drive organizational success and employee satisfaction.
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {services.slice(3).map((service, index) => (
              <ServiceCard
                key={index + 3}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index + 3}
              />
            ))}
          </div>
        </div>

     
        <motion.div
          className="text-center mt-16 bg-gradient-to-r from-[#D4AF37]/10 to-[#c6a22f]/10 p-8 rounded-2xl border border-[#D4AF37]/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Talent Strategy?
          </h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how our people solutions can drive your organization
            forward.
          </p>
          <motion.button
            onClick={() => setShowCalendly(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D4AF37] text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-[#c6a22f] transition-colors duration-300 flex items-center mx-auto cursor-pointer"
          >
            Get Started <FaArrowRight className="ml-2" />
          </motion.button>
        </motion.div>
      </div>
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </section>
  );
};

export default OurServices;

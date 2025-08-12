import React from "react";
import { motion } from "framer-motion";
import itstaff from "../../../assets/staffing/itstaf.webp?url";
import {
  FaDownload,
  FaChartLine,
  FaMoneyBillWave,
  FaRocket,
} from "react-icons/fa";

const ItStaffing = () => {
  const benefits = [
    {
      icon: <FaChartLine className="text-xl" />,
      text: "Scale your team rapidly",
    },
    {
      icon: <FaMoneyBillWave className="text-xl" />,
      text: "Reduce operational costs",
    },
    {
      icon: <FaRocket className="text-xl" />,
      text: "Boost development speed",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Multicolor gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10"></div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M15 15h30v30H15z' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Image */}
          <motion.div
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={itstaff}
              alt="IT Outstaffing Team"
              className="w-full h-auto object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Your Guide to IT Outstaffing
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Discover how to successfully implement outstaffing in your
              business to scale faster, reduce costs, and boost efficiency.
            </p>

            {/* Benefits list */}
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <span className="bg-white p-2 rounded-full shadow-md mr-4 text-blue-600">
                    {benefit.icon}
                  </span>
                  <span className="text-lg text-gray-800">{benefit.text}</span>
                </motion.li>
              ))}
            </ul>

            {/* Download button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center cursor-pointer"
            >
              Book Free Consultation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ItStaffing;

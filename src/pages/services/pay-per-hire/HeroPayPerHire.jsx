import React from "react";
import { motion } from "framer-motion";
import {
  FiDollarSign,
  FiCheckCircle,
  FiCalendar,
  FiArrowRight,
} from "react-icons/fi";
import heroimagebig from "../../../assets/allservice/heropay.webp?url";
import herosmall from "../../../assets/allservice/hero1.jpeg?url";
import clogo1 from "../../../assets/home/l1.webp?url";
import clogo2 from "../../../assets/home/l2.webp?url";
import clogo3 from "../../../assets/home/l3.webp?url";
import clogo4 from "../../../assets/home/l4.webp?url";
import clogo5 from "../../../assets/home/l5.webp?url";

const HeroPayPerHire = () => {
  const ourClient = [
    { clogo: clogo1 },
    { clogo: clogo2 },
    { clogo: clogo3 },
    { clogo: clogo4 },
    { clogo: clogo5 },
  ];

  // Duplicate the array to create a seamless loop
  const duplicatedClients = [...ourClient, ...ourClient];

  return (
    <div className="relative overflow-hidden">
      {/* Multicolor Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-green-500/20 transform -skew-y-6 scale-125 opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/15 via-pink-500/15 to-amber-500/15 opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Pay-Per-Hire Recruitment
            </h1>

            <p className="text-lg text-gray-600">
              We offer commission-based recruitment services where you only pay
              a fee when a successful hire is made—a results-driven approach to
              talent acquisition.
            </p>

            <button className="flex items-center gap-3 px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl group">
              Book a Call
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-lg text-green-600">
                  <FiCheckCircle className="text-xl" />
                </div>
                <span className="text-gray-700">Risk-free hiring</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                  <FiDollarSign className="text-xl" />
                </div>
                <span className="text-gray-700">Pay only for success</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <FiCalendar className="text-xl" />
                </div>
                <span className="text-gray-700">Fast turnaround</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Big Image */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl z-10">
              <img
                src={heroimagebig}
                alt="Pay-Per-Hire Recruitment"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Small Image */}
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-xl overflow-hidden border-4 border-white shadow-lg z-20">
              <img
                src={herosmall}
                alt="Successful hire"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        {/* Client Logos Section */}
        <div className="mt-24 overflow-hidden">
          <h3 className="text-center text-xl font-medium text-gray-600 mb-8">
            Trusted by leading companies
          </h3>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

            <motion.div
              className="flex"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-8 py-4 grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={client.clogo}
                    alt="Client logo"
                    className="h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPayPerHire;

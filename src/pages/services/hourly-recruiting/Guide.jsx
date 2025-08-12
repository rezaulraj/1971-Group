import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import guide from "../../../assets/allservice/gride.jpg?url";

const Guide = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#001153] via-[#1a2a6b] to-[#334380] opacity-95"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src={guide}
                alt="Talent Acquisition Guide"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            className="text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Mastering Talent Acquisition
            </h2>

            <p className="text-lg text-gray-200 mb-8">
              Practical tips to streamline your hiring process and attract the
              right talent your company needs.
            </p>

            <button className="flex items-center gap-3 px-6 py-3 bg-white text-[#001153] font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl group">
              <span>Book 30 Minute Schedule</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Additional Info */}
            <div className="mt-8 flex items-center gap-4 text-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Expert-approved strategies</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Immediately actionable</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Guide;

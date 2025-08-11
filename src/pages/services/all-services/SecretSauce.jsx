import React from "react";
import { motion } from "framer-motion";
import logo from "/logo.png?url";
import { FaLinkedin } from "react-icons/fa";

const SecretSauce = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Text Content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Secret Sauce
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We’ve helped place top-tier specialists across 10+ countries, with
              90.8% successfully passing probation
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-3xl font-bold text-indigo-600">10k+</h3>
                <p className="text-gray-500">Professionals</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-3xl font-bold text-indigo-600">80+</h3>
                <p className="text-gray-500">Countries</p>
              </div>
            </div>

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2">
              Explore Our Network
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </motion.div>

          {/* Right Side - Logos */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-white p-8 rounded-2xl text-center shadow-lg border border-gray-100">
              {/* Main Logo */}
              <div className="flex justify-center mb-8">
                <img
                  src={logo}
                  alt="Company Logo"
                  className="h-16 object-contain"
                />
              </div>
              <div className="text-6xl text-[#0077B5]">+</div>
              {/* LinkedIn Integration */}
              <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100">
                <div className="flex justify-center mb-4">
                  <FaLinkedin className="text-4xl text-[#0077B5]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  LinkedIn Integration
                </h3>
                <p className="text-gray-600 text-sm">
                  Direct access to the world's largest professional network
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 -right-8 w-32 h-32 bg-indigo-100 rounded-full blur-xl opacity-40"></div>
            <div className="absolute -z-10 bottom-8 -left-8 w-24 h-24 bg-blue-100 rounded-full blur-xl opacity-40"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecretSauce;

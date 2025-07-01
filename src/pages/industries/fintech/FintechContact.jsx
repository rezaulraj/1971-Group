import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaComment,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import contactbg from "../../../assets/fintech/contactbg.webp";

const FintechContact = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Gradient background with texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-gray-900/90 to-blue-900/95">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${contactbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
        />
      </div>

      {/* Decorative elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-blue-800/10 blur-3xl"></div>
      </div> */}

      <div className="relative max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 z-10">
        {/* Left - Contact Form */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/90 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-gray-700/50 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Contact us
            </span>
          </h3>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name field */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FaUser />
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Email field */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FaEnvelope />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Phone field */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaPhone />
              </div>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Company field */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaBuilding />
              </div>
              <input
                type="text"
                placeholder="Company name"
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Message field */}
            <div className="relative">
              <div className="absolute left-3 top-4 text-gray-400">
                <FaComment />
              </div>
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <span className="relative z-10">Send Message</span>
              <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
              {/* <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></span> */}
            </button>
          </form>
        </div>

        {/* Right - Information */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/90 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-gray-700/50 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Let's connect
            </span>
          </h2>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Our team is ready to provide personalized consultation and discuss
            how we can drive your FinTech business forward with top-tier talent
            solutions.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-600/20 to-blue-600/20 text-cyan-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">
                  Immediate Response
                </h4>
                <p className="text-gray-400">
                  Our experts typically respond within 2 business hours to
                  discuss your requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-600/20 to-indigo-600/20 text-purple-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-medium text-lg">
                  Flexible Engagement
                </h4>
                <p className="text-gray-400">
                  We adapt to your schedule with meetings available across
                  global timezones.
                </p>
              </div>
            </div>
          </div>

          <button className="w-full px-8 py-4 bg-gradient-to-r from-cyan-700 to-blue-700 rounded-xl text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Schedule Consultation</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FintechContact;

import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaComment,
} from "react-icons/fa";
import image from "../../../assets/ai/bg5.webp?url";

const ContactAi = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900/20 via-gray-900/80 to-blue-900/10 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Background image on right side */}
      <div
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-2/2 bg-cover bg-no-repeat bg-center opacity-20"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Gradient overlay for background image */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-blue-900/40 to-transparent" />

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-red-900/50 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/50 to-transparent" />
      </div>

      <div className="relative max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 z-10">
        {/* Left side - Text with glass effect */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/10 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 via-gray-100 to-blue-300 mb-6">
            Let's have a call
          </h2>

          <p className="text-lg text-gray-300 mb-8">
            We are always ready to conduct a personal consultation and discuss
            how we can be useful for your business success.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-red-500/20 text-red-300">
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
                <h4 className="text-white font-medium">Quick Response</h4>
                <p className="text-gray-400 text-sm">
                  Get answers within 24 hours
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-blue-500/20 text-blue-300">
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
                <h4 className="text-white font-medium">Flexible Scheduling</h4>
                <p className="text-gray-400 text-sm">
                  Available at your convenience
                </p>
              </div>
            </div>
          </div>

          <button className="mt-10 px-8 py-4 bg-gradient-to-r from-red-500 to-blue-600 rounded-xl text-white font-semibold text-lg hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300">
            Book a call
          </button>
        </div>

        {/* Right side - Form with enhanced glass effect */}
        <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 lg:p-12 border border-white/10 shadow-2xl overflow-hidden">
          {/* Additional glass effect layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-red-900/20 backdrop-blur-sm z-0" />

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-8">Contact us</h3>

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
                    className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Message field */}
              <div className="relative">
                <div className="absolute left-3 top-4 text-gray-400">
                  <FaComment />
                </div>
                <textarea
                  placeholder="Your message"
                  rows="4"
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAi;

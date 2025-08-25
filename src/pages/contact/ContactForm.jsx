import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheck,
  FaArrowRight,
} from "react-icons/fa";
import Calendly from "../../components/Calendly";
const ContactForm = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  return (
    <div className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0a1a4d] sm:text-5xl mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Let's Get Started on Your Recruitment Success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl"></div>
            <div className="relative bg-white/50 rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Send Us a Message
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+1 (___) ___-____"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="captcha"
                    name="captcha"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    required
                  />
                  <label className="ml-2 block text-sm text-gray-600">
                    I'm not a robot
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D4AF37]/90 to-[#D4AF37] text-[#0a1a4d] font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center group"
                >
                  <span className="mr-2">Send Message</span>
                  <FaPaperPlane className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl"></div>
              <div className="relative bg-white/80 rounded-2xl shadow-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Reach Out
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  We're always ready to provide personal consultations and craft
                  recruitment strategies tailored to your company's growth.
                </p>

                <div className="space-y-6">
                  {/* <div className="flex items-start group">
                    <div className="flex-shrink-0 bg-gradient-to-br from-[#000b30]/95 via-[#0a1a4d]/90 to-[#1a2a6b]/95 p-3 rounded-lg text-white group-hover:from-[#D4AF37] group-hover:to-[#D4AF37] transition-all">
                      <FaPhone className="text-xl" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">
                        Reach Out
                      </h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div> */}

                  <div className="flex items-start group">
                    <div className="flex-shrink-0 bg-gradient-to-br from-[#000b30]/95 via-[#0a1a4d]/90 to-[#1a2a6b]/95 p-3 rounded-lg text-white group-hover:from-[#D4AF37] group-hover:to-[#D4AF37] transition-all">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">
                        Email Our Team
                      </h4>
                      <p className="text-gray-600">support@1971.group</p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="flex-shrink-0 bg-gradient-to-br from-[#000b30]/95 via-[#0a1a4d]/90 to-[#1a2a6b]/95 p-3 rounded-lg text-white group-hover:from-[#D4AF37] group-hover:to-[#D4AF37] transition-all">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">
                        Office
                      </h4>
                      <p className="text-gray-600">
                        Sheikh Zayed Rd - Al Barsha - Al Barsha 1 - Dubai -
                        United Arab Emirates
                      </p>
                      <p className="text-gray-600">
                        28A Vicarage Ln, London E15 4ES, United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => setShowCalendly(true)}
                    className="flex items-center px-8 py-4 rounded-full text-lg font-bold bg-gradient-to-r from-[#D4AF37]/90 to-[#D4AF37] text-[#0a1a4d] transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105"
                  >
                    Book a Call
                    <FaArrowRight className="ml-2 animate-pulse" />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-2xl"></div>
              <div className="relative bg-white/80 rounded-2xl p-4 shadow-2xl overflow-hidden border border-white/20">
                <h3 className="text-2xl font-semibold text-gray-800 p-8 pb-4">
                  Find Us
                </h3>
                <div className="h-80 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.3239996610864!2d55.13450567537759!3d25.069954377793096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f13435f3abe57%3A0xb4c00b9d46311cd0!2sSheikh%20Zayed%20Rd%20-%20Dubai%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sbd!4v1756126264239!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-b-2xl"
                  ></iframe>
                </div>
                {/* <div className="p-6 pt-4">
                  <p className="text-gray-600">
                    Visit our office at the Empire State Building for a personal
                    consultation.
                  </p>
                </div> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-8 right-6/12 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-lg shadow-xl z-50 flex items-center"
          >
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
              <FaCheck className="text-white" />
            </div>
            <div>
              <p className="font-semibold">Message Sent Successfully!</p>
              <p className="text-sm">We'll get back to you within 24 hours.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
        @keyframes float4 {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(-20px, -15px) rotate(-3deg);
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
        .animate-float4 {
          animation: float4 17s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;

import React, { useState, useEffect } from "react";
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
import { Helmet } from "react-helmet";

const Contact = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const fetchBackgroundImage = async () => {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos/random?query=business-office,professional&client_id=YOUR_UNSPLASH_ACCESS_KEY"
        );
        const data = await response.json();
        setBgImage(data.urls.regular);
      } catch (error) {
        console.error("Error fetching background image:", error);

        setBgImage(
          "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
        );
      }
    };

    fetchBackgroundImage();
  }, []);

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
    <div
      id="contact-us"
      className="relative min-h-screen overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
    >
      <Helmet>
        <meta
          name="description"
          content="Contact 1971 Group for premium recruitment services. Get access to pre-vetted professionals, discuss your hiring needs, and find the best talent solutions."
        />
        <meta
          name="keywords"
          content="contact recruitment agency, hire workers, staffing solutions, talent acquisition, employer contact, recruitment consultation"
        />
        <meta
          property="og:title"
          content="Contact 1971 Group - Recruitment Solutions"
        />
        <meta
          property="og:description"
          content="Get in touch with 1971 Group for premium recruitment services and access to pre-vetted professionals."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact 1971 Group",
            description: "Contact page for 1971 Group recruitment services",
            url: window.location.href,
            mainEntity: {
              "@type": "Organization",
              name: "1971 Group",
              description:
                "Premium recruitment and staffing solutions provider",
              email: "contact@1971group.com",
              telephone: "+1-555-0197",
              areaServed: "Global",
            },
          })}
        </script>
      </Helmet>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#000b30]/80 via-[#0a1a4d]/70 to-[#1a2a6b]/90"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
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
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm rounded-2xl"></div>
            <div className="relative bg-white/95 rounded-2xl shadow-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold text-[#000b30] mb-6">
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
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="captcha"
                    name="captcha"
                    className="h-4 w-4 rounded border-gray-300 text-[#D4AF37] focus:ring-[#D4AF37]"
                    required
                  />
                  <label className="ml-2 block text-sm text-gray-600">
                    I'm not a robot
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#000b30] to-[#1a2a6b] hover:from-[#1a2a6b] hover:to-[#000b30] text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center group cursor-pointer"
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
              <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-sm rounded-2xl"></div>
              <div className="relative bg-white/95 rounded-2xl shadow-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold text-[#000b30] mb-6">
                  Reach Out
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  We're always ready to provide personal consultations and craft
                  recruitment strategies tailored to your company's growth.
                </p>

                <div className="space-y-6">
                  {/* <div className="flex items-start group">
                    <div className="flex-shrink-0 bg-[#D4AF37]/10 p-3 rounded-lg text-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-all">
                      <FaPhone className="text-xl" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">
                        Call Us Now
                      </h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div> */}

                  <div className="flex items-start group">
                    <div className="flex-shrink-0 bg-[#D4AF37]/10 p-3 rounded-lg text-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-all">
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
                    <div className="flex-shrink-0 bg-[#D4AF37]/10 p-3 rounded-lg text-[#D4AF37] group-hover:bg-[#D4AF37]/20 transition-all">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">
                        Where to Find Us
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
                    className="flex items-center px-8 py-4 rounded-full text-lg font-bold bg-gradient-to-r from-[#D4AF37] to-[#c6a22f] text-[#000b30] transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105"
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
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#000b30]/20 to-[#0a1a4d]/20 z-10 pointer-events-none rounded-2xl"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209179518!2d-73.9878449241641!3d40.7484409713896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="grayscale-[30%] hover:grayscale-0 transition-all duration-500 rounded-2xl"
              ></iframe>
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
            className="fixed top-8 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-lg shadow-xl z-50 flex items-center"
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
    </div>
  );
};

export default Contact;

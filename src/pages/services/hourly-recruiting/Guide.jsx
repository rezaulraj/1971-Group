import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import guide from "../../../assets/allservice/gride.jpg?url";
import Calendly from "../../../components/Calendly";
import { Helmet } from "react-helmet";

const Guide = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  return (
    <div className="relative overflow-hidden">
      <Helmet>
        <meta
          name="description"
          content="Download our Talent Acquisition Guide to master hiring strategies. Learn expert-approved, actionable tips to attract top talent and streamline your recruitment process."
        />
        <meta
          name="keywords"
          content="talent acquisition guide, hiring strategies, recruitment tips, recruitment process, expert hiring tips"
        />
        <meta
          property="og:title"
          content="Talent Acquisition Guide - Your Company Name"
        />
        <meta
          property="og:description"
          content="Practical tips and expert strategies to improve your hiring process. Download our guide and hire the best talent efficiently."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Mastering Talent Acquisition",
            description:
              "Practical tips to streamline your hiring process and attract the right talent your company needs.",
            image: guide,
            author: {
              "@type": "Organization",
              name: "1971 Group",
              url: "https://yourwebsite.com",
            },
            publisher: {
              "@type": "Organization",
              name: "1971 Group",
              logo: {
                "@type": "ImageObject",
                url: "https://yourwebsite.com/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://yourwebsite.com/guide",
            },
          })}
        </script>
      </Helmet>
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

            <button
              onClick={() => setShowCalendly(true)}
              className="flex items-center gap-3 px-6 py-3 bg-white text-[#001153] font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl group cursor-pointer"
            >
              <span>Book 30 Minute Schedule</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

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
      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
    </div>
  );
};

export default Guide;

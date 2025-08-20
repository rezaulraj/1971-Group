import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tab1image from "../../../assets/ai/tab1.webp";
import tab2image from "../../../assets/ai/tab2.webp";
import tab3image from "../../../assets/ai/tab3.webp";
import tab4image from "../../../assets/ai/tab4.webp";
import { FiArrowRight } from "react-icons/fi";

const WhatWeDoAi = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    {
      id: "tab1",
      title: "Pay-per-hire recruiting",
      description:
        "We find the perfect AI talent for your needs with our performance-based recruitment model. Only pay when we successfully place a candidate.",
      image: tab1image,
      number: "01",
      features: [
        "No upfront costs",
        "Success-based pricing",
        "90-day replacement guarantee",
        "Dedicated recruitment specialist",
      ],
    },
    {
      id: "tab2",
      title: "Subscription recruiting",
      description:
        "Get unlimited AI talent sourcing with our monthly subscription model. Perfect for companies with ongoing hiring needs.",
      image: tab2image,
      number: "02",
      features: [
        "Flat monthly rate",
        "Unlimited candidate sourcing",
        "Priority access to top talent",
        "Dedicated account manager",
      ],
    },
    {
      id: "tab3",
      title: "Hourly rate recruitment",
      description:
        "Flexible recruitment support billed by the hour. Ideal for short-term projects or specific hiring initiatives.",
      image: tab3image,
      number: "03",
      features: [
        "Flexible engagement",
        "Expert recruiters on demand",
        "Transparent time tracking",
        "Scalable to your needs",
      ],
    },
    {
      id: "tab4",
      title: "Staffing",
      description:
        "Comprehensive staffing solutions for your AI projects. We handle everything from sourcing to onboarding.",
      image: tab4image,
      number: "04",
      features: [
        "End-to-end staffing solutions",
        "Quick deployment",
        "Ongoing performance management",
        "Customized staffing plans",
      ],
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/20 via-gray-900/20 to-purple-500/20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-400 rounded-full filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-float-delay"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive AI talent solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="col-span-1 lg:col-span-4 space-y-4">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 flex items-start ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-teal-500/10 to-teal-500/5 border-l-4 border-teal-400 shadow-lg shadow-teal-400/10"
                    : "bg-gray-800/50 hover:bg-gray-800/70 border-l-4 border-transparent"
                }`}
              >
                <div
                  className={`text-3xl font-bold mr-4 ${
                    activeTab === tab.id ? "text-teal-400" : "text-gray-500"
                  }`}
                >
                  {tab.number}
                </div>
                <div className="text-left">
                  <h3
                    className={`text-lg font-semibold ${
                      activeTab === tab.id ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {tab.title}
                  </h3>
                  <div
                    className={`h-1 w-8 mt-2 rounded-full transition-all duration-300 ${
                      activeTab === tab.id ? "bg-teal-400" : "bg-gray-600"
                    }`}
                  ></div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="col-span-1 lg:col-span-8 relative h-full min-h-[500px]">
            <AnimatePresence mode="wait">
              {tabs.map(
                (tab) =>
                  activeTab === tab.id && (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 h-full"
                    >
                      <div className="h-full flex flex-col lg:flex-row gap-6">
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                          className="flex-1 rounded-2xl overflow-hidden border border-gray-700/50 shadow-xl"
                        >
                          <img
                            src={tab.image}
                            alt={tab.title}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>

                        <div className="flex-1 bg-gray-800/50 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 shadow-xl flex flex-col">
                          <div className="flex items-start gap-6 mb-6">
                            <div className="bg-teal-400/10 text-teal-400 text-3xl font-bold rounded-lg w-16 h-16 flex items-center justify-center border border-teal-400/20">
                              {tab.number}
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white">
                                {tab.title}
                              </h3>
                              <div className="h-1 w-12 bg-teal-400 rounded-full mt-2"></div>
                            </div>
                          </div>

                          <p className="text-gray-300 text-lg mb-8 flex-grow">
                            {tab.description}
                          </p>

                          <div className="mb-8">
                            <h4 className="text-lg font-semibold text-white mb-4">
                              Key Features:
                            </h4>
                            <ul className="space-y-3">
                              {tab.features.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                  <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                                  <span className="text-gray-300">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <a
                            href="#"
                            className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium group transition-colors self-start"
                          >
                            Learn more about this service
                            <FiArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style jsx="true" global="true">{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        @keyframes float-delay {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhatWeDoAi;

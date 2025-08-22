import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHandHoldingUsd,
  FaCalendarAlt,
  FaUsersCog,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import Calendly from "../../../components/Calendly";
import { Helmet } from "react-helmet-async";

const WhatWeDoServices = () => {
  const [showCalendly, setShowCalendly] = useState(false);

  const services = [
    {
      title: "Pay-Per-Hire Recruiting",
      description:
        "Results-driven recruitment where you pay only when we deliver.",
      backTitle: "Performance-Based Model",
      backDescription:
        "We handle the entire hiring process from sourcing to onboarding based on a performance-based model.",
      features: [
        "No upfront costs",
        "Pay only for successful placements",
        "Full recruitment cycle management",
        "Quality guarantee",
      ],
      icon: <FaHandHoldingUsd className="text-2xl" />,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500 to-blue-700",
      backColor: "bg-gradient-to-br from-blue-600 to-indigo-700",
      link: "/pay-par-hire-services",
      buttonText: "Check Pricing",
    },
    {
      title: "Subscription-Based Recruiting",
      description:
        "Flexible, full-cycle recruitment on a monthly subscription.",
      backTitle: "Recruitment as a Service",
      backDescription:
        "Enjoy seamless recruitment process outsourcing tailored to your evolving hiring needs.",
      features: [
        "Monthly subscription model",
        "Unlimited hiring support",
        "Dedicated recruitment team",
        "Scalable solutions",
      ],
      icon: <FaCalendarAlt className="text-2xl" />,
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-purple-500 to-purple-700",
      backColor: "bg-gradient-to-br from-purple-600 to-fuchsia-700",
      link: "/subscription-services",
      buttonText: "Check Pricing",
    },
    {
      title: "Recruitment Process Outsourcing (RPO)",
      description: "Fully outsource your recruitment to our specialized teams.",
      backTitle: "End-to-End Recruitment",
      backDescription:
        "We act as an extension of your HR department—handling search, selection, and onboarding at the project, department, or company level.",
      features: [
        "Complete process outsourcing",
        "Customized recruitment strategies",
        "Talent pipeline development",
        "Metrics and reporting",
      ],
      icon: <FaUsersCog className="text-2xl" />,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "from-teal-500 to-teal-700",
      backColor: "bg-gradient-to-br from-cyan-600 to-teal-700",
      link: "/staffing-services",
      buttonText: "Check Pricing",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#000b30] via-[#0a1a4d] to-[#1a2a6b] relative overflow-hidden">
      <Helmet>
        <meta
          name="description"
          content="1971 Group offers comprehensive recruitment solutions: Pay-Per-Hire, Subscription-Based Recruiting, and RPO services. Flexible, cost-effective hiring models."
        />
        <meta
          name="keywords"
          content="recruitment services, pay-per-hire, subscription recruiting, RPO services, staffing solutions, hiring models, recruitment process outsourcing"
        />
        <meta
          property="og:title"
          content="Recruitment Services & Solutions - 1971 Group"
        />
        <meta
          property="og:description"
          content="Flexible recruitment solutions including Pay-Per-Hire, Subscription-Based, and RPO services tailored to your business needs."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Recruitment Services",
            description:
              "Comprehensive recruitment solutions including Pay-Per-Hire, Subscription-Based, and RPO services",
            itemListElement: [
              {
                "@type": "Service",
                name: "Pay-Per-Hire Recruiting",
                description:
                  "Results-driven recruitment where you pay only when we deliver successful placements",
              },
              {
                "@type": "Service",
                name: "Subscription-Based Recruiting",
                description:
                  "Flexible, full-cycle recruitment on a monthly subscription model",
              },
              {
                "@type": "Service",
                name: "Recruitment Process Outsourcing (RPO)",
                description:
                  "Fully outsource your recruitment to our specialized teams",
              },
            ],
          })}
        </script>
      </Helmet>
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            transition: {
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            transition: {
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37] rounded-full mix-blend-overlay filter blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 30, 0],
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#D4AF37] mb-4">What We Do</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive recruitment solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group perspective w-full h-[440px]"
            >
              <div className="relative preserve-3d w-full h-full rounded-2xl shadow-2xl transition-transform duration-700 group-hover:rotate-y-180">
                <div
                  className="absolute inset-0 rounded-2xl overflow-hidden backface-hidden flex flex-col justify-end p-6 text-white"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 11, 48, 0.4), rgba(10, 26, 77, 0.8)), url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="bg-[#000b30]/80 p-6 rounded-xl backdrop-blur-sm">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-[#D4AF37]/20 backdrop-blur-sm">
                      <span className="text-[#D4AF37]">{service.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-gray-200">{service.description}</p>

                    <button
                      onClick={() => setShowCalendly(true)}
                      className="mt-6 inline-flex items-center font-semibold text-[#D4AF37] group cursor-pointer"
                    >
                      {service.buttonText}
                      <HiArrowNarrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 rounded-2xl overflow-hidden backface-hidden rotate-y-180 flex flex-col justify-between p-6 text-white bg-[#1a2a6b]`}
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      {service.backTitle}
                    </h3>
                    <p className="mb-4 text-gray-200">
                      {service.backDescription}
                    </p>

                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-gray-200"
                        >
                          <FaCheckCircle className="text-[#D4AF37]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center">
                    <a
                      href={service.link}
                      className="inline-flex items-center gap-2 text-[#D4AF37] px-4 py-2 rounded-lg font-semibold transition hover:text-[#c6a22f] cursor-pointer"
                    >
                      <FaInfoCircle className="mr-2" />
                      More Info
                    </a>
                    <button
                      onClick={() => setShowCalendly(true)}
                      className="inline-flex items-center font-semibold text-white cursor-pointer hover:text-[#D4AF37] transition-colors cursor-pointer"
                    >
                      Get Started
                      <HiArrowNarrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />

      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default WhatWeDoServices;

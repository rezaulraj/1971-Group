import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaCalendarCheck,
  FaHandshake,
  FaClipboardCheck,
  FaArrowRight,
} from "react-icons/fa";
import { Helmet } from "react-helmet";

const OurProcess = () => {
  const steps = [
    {
      title: "Discovery",
      time: "1-3 Days",
      icon: <FaSearch className="text-xl" />,
      items: [
        "Company & role briefing",
        "Vacancy documentation",
        "Contract initiation",
      ],
      iconColor: "text-[#D4AF37]",
      timeBadge: "bg-[#D4AF37] text-[#000b30]",
    },
    {
      title: "Full-Cycle Recruitment",
      time: "1-4 Weeks",
      icon: <FaCalendarCheck className="text-xl" />,
      items: [
        "Talent sourcing",
        "Screening, scheduling & interviews",
        "Weekly updates & client support",
      ],
      iconColor: "text-[#D4AF37]",
      timeBadge: "bg-[#D4AF37] text-[#000b30]",
    },
    {
      title: "Selection & Offer",
      time: "4-6 Weeks",
      icon: <FaHandshake className="text-xl" />,
      items: [
        "Offer negotiation",
        "NDA signing",
        "Final handover of successful candidates",
      ],
      iconColor: "text-[#D4AF37]",
      timeBadge: "bg-[#D4AF37] text-[#000b30]",
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000b30] to-[#0a1a4d] relative overflow-hidden">
      <Helmet>
        <meta
          name="description"
          content="Discover 1971 Group's 3-step recruitment process: Discovery, Full-Cycle Recruitment, and Selection & Offer. Fast, transparent hiring in 4-6 weeks."
        />
        <meta
          name="keywords"
          content="recruitment process, hiring methodology, talent acquisition process, candidate selection, recruitment timeline, hiring steps"
        />
        <meta property="og:title" content="Recruitment Process - 1971 Group" />
        <meta
          property="og:description"
          content="Our 3-step recruitment process ensures fast, transparent, and effective hiring with complete candidate vetting and selection."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "1971 Group Recruitment Process",
            description: "3-step recruitment process for effective hiring",
            totalTime: "PT6W",
            step: [
              {
                "@type": "HowToStep",
                name: "Discovery",
                text: "Company & role briefing, vacancy documentation, contract initiation",
                totalTime: "PT3D",
              },
              {
                "@type": "HowToStep",
                name: "Full-Cycle Recruitment",
                text: "Talent sourcing, screening, scheduling & interviews, weekly updates",
                totalTime: "PT4W",
              },
              {
                "@type": "HowToStep",
                name: "Selection & Offer",
                text: "Offer negotiation, NDA signing, final candidate handover",
                totalTime: "PT2W",
              },
            ],
          })}
        </script>
      </Helmet>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fast, Transparent, and Effective Hiring
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 h-full flex flex-col group"
            >
              <div
                className={`absolute -top-3 right-4 px-3 py-1 rounded-full text-sm font-medium ${step.timeBadge} shadow-lg`}
              >
                {step.time}
              </div>

              <div
                className={`flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#D4AF37]/10 ${step.iconColor} group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300`}
              >
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>

              <ul className="space-y-3 mb-6">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0 mt-1 mr-3 text-[#D4AF37]">
                      <FaClipboardCheck />
                    </span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                  <div
                    className="bg-[#D4AF37] h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${(index + 1) * 33}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Start</span>
                  <span>Complete</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Hiring Process?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your hiring needs and how we can streamline the
              process for you.
            </p>
            <button className="bg-[#D4AF37] text-[#000b30] font-bold py-3 px-8 rounded-lg hover:bg-[#c6a22f] transition-all duration-300 transform hover:scale-105 flex items-center mx-auto cursor-pointer">
              Get Started
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;

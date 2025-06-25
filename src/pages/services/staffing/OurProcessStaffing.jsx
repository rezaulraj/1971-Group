import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaUsers, FaChartLine, FaCheck } from "react-icons/fa";

const OurProcessStaffing = () => {
  const steps = [
    {
      title: "1. Selecting the Right Talent",
      description:
        "We begin by understanding your business and defining the ideal candidates.",
      icon: <FaUserTie className="text-xl" />,
      items: [
        "Company introduction",
        "Identifying required skills and roles",
        "Interviewing and shortlisting top talent",
      ],
      cardColor: "bg-gradient-to-br from-blue-100 to-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      title: "2. Seamless Team Integration",
      description:
        "We ensure smooth onboarding and set up all essential workflows.",
      icon: <FaUsers className="text-xl" />,
      items: [
        "Integrating talent into your existing team or project",
        "Establishing clear communication and operational processes",
      ],
      cardColor: "bg-gradient-to-br from-purple-100 to-purple-50",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600",
    },
    {
      title: "3. Scalable Team Growth",
      description:
        "We help you grow confidently with a flexible and strategic approach.",
      icon: <FaChartLine className="text-xl" />,
      items: [
        "Creating a tailored scaling plan",
        "Expanding your team on demand",
        "Delivering measurable results",
      ],
      cardColor: "bg-gradient-to-br from-cyan-100 to-cyan-50",
      borderColor: "border-cyan-200",
      iconColor: "text-cyan-600",
    },
  ];

  // Animation variants
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Hiring Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fast, reliable, and tailored to your goals — receive your first
            candidates' CVs in just 3–5 days.
          </p>
        </motion.div>

        {/* Process Steps */}
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
              className={`relative rounded-xl p-8 shadow-sm border ${step.borderColor} ${step.cardColor} h-full flex flex-col`}
            >
              <div
                className={`flex items-center justify-center w-14 h-14 mb-6 rounded-full bg-white shadow-md ${step.iconColor}`}
              >
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 mb-5">{step.description}</p>

              <ul className="space-y-3">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="flex-shrink-0 mt-1 mr-3 text-green-500">
                      <FaCheck />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcessStaffing;

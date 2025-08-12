import React from "react";
import { motion } from "framer-motion";
import { FaClipboardList, FaRocket, FaCheckCircle } from "react-icons/fa";

const OurHiringProcess = () => {
  const steps = [
    {
      title: "Step 1: Tell Us About You",
      description: "We start by understanding your unique needs and goals",
      icon: <FaClipboardList className="text-xl" />,
      items: [
        "Your company goals",
        "Brand & experience audit",
        "Unique value proposition",
      ],
      cardColor: "bg-gradient-to-br from-blue-100 to-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600",
    },
    {
      title: "Step 2: We Drive Change",
      description: "We create a customized hiring strategy for your business",
      icon: <FaRocket className="text-xl" />,
      items: [
        "Define employee lifecycle",
        "Structure team touchpoints",
        "Align HR to business needs",
      ],
      cardColor: "bg-gradient-to-br from-purple-100 to-purple-50",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600",
    },
    {
      title: "Step 3: Finalize & Deploy",
      description: "We implement the solution and get you ready to grow",
      icon: <FaCheckCircle className="text-xl" />,
      items: [
        "Implement tools & training",
        "Present results",
        "Begin onboarding",
      ],
      cardColor: "bg-gradient-to-br from-green-100 to-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600",
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Process: From Inquiry to Hire in 3-5 Days
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A streamlined approach to quickly connect you with the right talent
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
                      <FaCheckCircle />
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

export default OurHiringProcess;

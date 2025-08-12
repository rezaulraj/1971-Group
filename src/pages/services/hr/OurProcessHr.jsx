import React from "react";
import { FaHandshake, FaChess, FaRocket, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const OurProcessHr = () => {
  const steps = [
    {
      number: "1",
      icon: <FaHandshake className="text-blue-600 text-xl" />,
      title: "Tell Us About Your Company",
      description:
        "We start by getting to know your company and its unique needs.",
      checklist: [
        "Overview of your organization",
        "Audit of your current employer brand and employee experience",
        "Identify your unique value proposition for employees",
      ],
    },
    {
      number: "2",
      icon: <FaChess className="text-purple-600 text-xl" />,
      title: "We Drive the Change",
      description:
        "We map out the key areas for improvement and implement impactful changes.",
      checklist: [
        "Map out employee touchpoints",
        "Define lifecycle stages",
        "Design efficient HR processes",
      ],
    },
    {
      number: "3",
      icon: <FaRocket className="text-teal-600 text-xl" />,
      title: "Final Delivery",
      description:
        "We equip your team with tools and training for long-term success.",
      checklist: [
        "Recommend the right technology solutions",
        "Provide training for leadership",
        "Present a strategic roadmap and final deliverables",
      ],
    },
  ];

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-3 text-gray-800"
        >
          Our HR Process
        </motion.h2>
        <h4 className="text-xl font-medium text-center mb-3 text-gray-600 italic">
          'Faster Hiring. Smarter Strategy.'
        </h4>
        <p className="text-lg text-center text-gray-800 mb-10">
          Receive your first batch of qualified CVs within just 3–5 days.
        </p>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 transform translate-x-0.5 md:hidden"></div>

          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="relative"
              >
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 items-center justify-center w-10 h-10 rounded-full bg-white border-2 border-blue-100 shadow-sm z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center w-full h-full"
                  >
                    <span className="text-sm font-semibold text-gray-700">
                      {step.number}
                    </span>
                    <div className="absolute">{step.icon}</div>
                  </motion.div>
                </div>

                <div className="md:hidden absolute left-0 -translate-x-1/2 top-6 flex items-center justify-center w-8 h-8 rounded-full bg-white border-2 border-blue-100 shadow-sm z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center justify-center w-full h-full"
                  >
                    <span className="text-xs font-semibold text-gray-700">
                      {step.number}
                    </span>
                    <div className="absolute text-sm">{step.icon}</div>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ y: -3 }}
                  className={`bg-white p-6 rounded-lg shadow-md border border-gray-100 md:w-[calc(50%-28px)] ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-10"
                      : "md:ml-auto md:pl-10"
                  } ml-8 md:ml-0`}
                >
                  <div className="flex items-center mb-3">
                    <div className="md:hidden mr-3 text-blue-600">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold flex items-center gap-4 flex-wrap text-gray-800">
                      <span className="hidden md:inline-block">
                        {step.icon}
                      </span>{" "}
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.checklist.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start text-sm"
                      >
                        <span className="inline-block mr-2 text-green-500 mt-0.5">
                          <FaCheck />
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcessHr;

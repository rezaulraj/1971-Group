import React from "react";
import { motion } from "framer-motion";
import {
  FiClock,
  FiDollarSign,
  FiPieChart,
  FiFileText,
  FiArrowRight,
} from "react-icons/fi";
import hourlyWhat from "../../../assets/allservice/hourll.jpg?url";
import hourlyfee from "../../../assets/allservice/recfee.jpg?url";

const AboutRecruitmentServices = () => {
  const services = [
    {
      image: hourlyWhat,
      icon: <FiClock className="text-3xl" />,
      title: "What Is Hourly Recruiting?",
      description:
        "Gain a clear understanding of recruitment services billed by the hour, how they operate, their key features, and the pros and cons of hourly contracts between employers and recruiters.",
      bgColor: "bg-blue-600",
      textColor: "text-blue-100",
      borderColor: "border-blue-400",
      buttonColor: "hover:text-blue-300",
    },
    {
      image: hourlyfee,
      icon: <FiDollarSign className="text-3xl" />,
      title: "Understanding Recruitment Fees and Models",
      description:
        "Explore popular recruitment pricing models including hourly billing, retained search, percentage-based fees, and fixed-fee recruitment. Understand how each works and when it’s best to use them.",
      bgColor: "bg-purple-600",
      textColor: "text-purple-100",
      borderColor: "border-purple-400",
      buttonColor: "hover:text-purple-300",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const hoverCard = {
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="bg-gray-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See How Our Recruitment Services Work for You
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group h-full"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div
                className={`relative rounded-xl overflow-hidden shadow-2xl h-full flex flex-col bg-gray-800`}
                variants={hoverCard}
              >
                <div className="relative h-64 flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <div
                    className={`p-4 ${service.textColor} rounded-full bg-black/20 w-16 h-16 flex items-center justify-center mb-6 border ${service.borderColor}`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6 flex-grow">
                    {service.description}
                  </p>

                  <a
                    href="/blogs"
                    className={`flex items-center gap-2 text-sm font-medium self-start ${service.buttonColor} transition-colors cursor-pointer`}
                  >
                    Learn more
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="bg-gray-800 rounded-xl p-8 border-l-4 border-teal-500 h-full">
            <div className="flex items-start gap-4 h-full">
              <div className="p-3 bg-teal-500/20 rounded-lg border border-teal-500/30">
                <FiPieChart className="text-teal-400 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Flexible Engagement</h4>
                <p className="text-gray-400">
                  Easily scale your recruitment efforts up or down based on your
                  hiring needs, no long-term commitments required.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 border-l-4 border-amber-500 h-full">
            <div className="flex items-start gap-4 h-full">
              <div className="p-3 bg-amber-500/20 rounded-lg border border-amber-500/30">
                <FiFileText className="text-amber-400 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Transparent Pricing</h4>
                <p className="text-gray-400">
                  Enjoy a straightforward pricing structure with no hidden fees.
                  You only pay for the actual time spent on your recruitment.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutRecruitmentServices;

import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaBullhorn, FaCheckCircle } from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
  },
};

const iconVariants = {
  hover: {
    rotate: [0, -10, 10, 0],
    transition: { duration: 0.7 },
  },
};

const roleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300 },
  },
};

const SpecializationCard = ({ icon: Icon, title, description, roles }) => (
  <motion.div
    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
  >
    <div className="p-6">
      <div className="flex items-start mb-4">
        <motion.div
          className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0"
          variants={iconVariants}
          whileHover="hover"
        >
          <Icon className="text-blue-600 text-2xl" />
        </motion.div>
        <div>
          <motion.h3
            className="text-xl font-bold text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="text-gray-600 mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {description}
          </motion.p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <motion.h4
          className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Key Roles
        </motion.h4>
        <div className="flex flex-wrap gap-2">
          {roles.map((role, index) => (
            <motion.span
              key={index}
              className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
              variants={roleVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.7 + index * 0.05 }}
            >
              {role}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const TechnologyStack = () => {
  const specializations = [
    {
      icon: FaBrain,
      title: "Management & Business Analysis",
      description:
        "Lead and manage your tech projects with professionals who bring structure and strategy.",
      roles: [
        "CTO",
        "IT Project Manager",
        "Product Manager",
        "Business Analyst",
        "Team Lead",
      ],
    },
    {
      icon: FaBullhorn,
      title: "Marketing & HR",
      description:
        "Build your brand and scale your team with skilled marketers and HR professionals.",
      roles: [
        "CMO",
        "Content Creator",
        "PPC Specialist",
        "Email Marketer",
        "Traffic Manager",
        "HR Business Partner",
        "Recruiter",
        "HR Director",
        "Copywriter",
      ],
    },
    {
      icon: FaCheckCircle,
      title: "QA, Infrastructure & Support",
      description:
        "Ensure product reliability and seamless operations with experienced QA and support teams.",
      roles: [
        "QA Engineers",
        "DevOps",
        "System Administrators",
        "IT Support Specialists",
      ],
    },
  ];

  return (
    <motion.section
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technology Stack & Areas of Specialization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide expert talent across a wide range of technologies and
            roles—tailored to your business needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {specializations.map((specialization, index) => (
            <SpecializationCard
              key={index}
              icon={specialization.icon}
              title={specialization.title}
              description={specialization.description}
              roles={specialization.roles}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechnologyStack;

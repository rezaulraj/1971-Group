import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaHandshake, FaUsers, FaChartLine } from "react-icons/fa";
import recuit from "../../assets/company/reca.jpg?url";
import ceo from "../../assets/company/ceo.jpg?url";
import defferents from "../../assets/company/deff.jpg?url";

const CompanyBlog = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  const blogPosts = [
    {
      image: recuit,
      icon: <FaHandshake className="text-3xl text-purple-600" />,
      title: "Recruitment Agencies: Why They Matter and How They Work",
      description:
        "Explore the key role recruitment agencies play in modern hiring and the value they bring to businesses of all sizes.",
    },
    {
      image: ceo,
      icon: <FaChartLine className="text-3xl text-blue-600" />,
      title: "Subscription Recruitment – Explained",
      description:
        "An exclusive interview with the CEO of 1971 Group on how subscription-based recruiting is reshaping the industry.",
    },
    {
      image: defferents,
      icon: <FaUsers className="text-3xl text-teal-600" />,
      title: "Recruiters vs. Sourcers: What's the Difference?",
      description:
        "Understand the distinct roles of recruiters and sourcers — and how both are essential to building top-performing teams.",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div variants={item} className="text-center mb-16">
          <motion.div whileHover={{ scale: 1.1 }} className="inline-block mb-6">
            <FaSearch className="text-4xl text-blue-600" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Recruitment Insights at Their Best
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-6">
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    repeatType: "reverse",
                  }}
                  className="mb-4"
                >
                  {post.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {post.description}
                </p>
                <div className="mt-6">
                  <a
                    href="/blogs"
                    className=" px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full shadow-md"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1 }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-blue-200 filter blur-3xl opacity-40"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-purple-200 filter blur-3xl opacity-40"></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CompanyBlog;

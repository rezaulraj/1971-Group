import React from "react";
import { motion } from "framer-motion";
import { FiMic, FiCpu, FiUsers, FiArrowRight } from "react-icons/fi";
import interview from "../../../assets/allservice/interview.webp";
import airecruitment from "../../../assets/allservice/airecuti.jpeg";
import tips from "../../../assets/allservice/trips.webp";

const RecruitBlogs = () => {
  const blogPosts = [
    {
      image: interview,
      icon: <FiMic className="text-2xl" />,
      title: "Inside Embedded Recruitment: CEO Interview",
      description:
        "A conversation with 1971 Group' CEO on how embedded recruitment adds value, improves hiring speed, and reduces costs.",
      color: "text-blue-600",
      bg: "bg-blue-100",
      border: "border-blue-200",
    },
    {
      image: airecruitment,
      icon: <FiCpu className="text-2xl" />,
      title: "The Future of Recruitment? Still Human.",
      description:
        "While tools can assist, relationships, intuition, and culture fit will always drive the best hires. Companies that prioritize candidate experience, employer branding, and strategic networking will win the war for talent.",
      color: "text-purple-600",
      bg: "bg-purple-100",
      border: "border-purple-200",
    },
    {
      image: tips,
      icon: <FiUsers className="text-2xl" />,
      title: "How to Build a Strong Talent Pool",
      description:
        "Actionable tips to help you proactively attract and nurture top candidates for future hiring needs.",
      color: "text-green-600",
      bg: "bg-green-100",
      border: "border-green-200",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Multicolor Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-purple-500/15 to-green-500/15 transform -skew-y-6 scale-125 opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-pink-500/10 to-amber-500/10 opacity-40"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Insights from Our Recruitment Blog
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all"
              variants={item}
              whileHover="hover"
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div
                  className={`absolute top-4 right-4 ${post.bg} ${post.color} ${post.border} w-12 h-12 rounded-full flex items-center justify-center border`}
                >
                  {post.icon}
                </div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.description}
                </p>
                <a
                  href="/blogs"
                  className={`flex items-center gap-2 text-sm font-medium ${post.color} hover:underline`}
                >
                  Read more
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RecruitBlogs;

import React from "react";
import { motion } from "framer-motion";
import service1 from "../../../assets/staffing/ser1.jpg?url";
import service2 from "../../../assets/staffing/ser2.jpg?url";
import service3 from "../../../assets/staffing/ser3.avif?url";
import { FaFileAlt, FaBullseye, FaLock } from "react-icons/fa";

const StaffingServices = () => {
  const insights = [
    {
      icon: <FaFileAlt className="text-2xl" />,
      title: "Writing Job Ads That Get Noticed",
      description:
        "Your job posting is your first chance to impress. Try these tips:\n\n Start with why – 'Help us revolutionize customer service' works better than 'Customer service rep needed'\n Be specific about day-to-day work – Candidates want to picture themselves in the role\n Include salary ranges – Posts with salary info get 30% more applications",
      image: service1,
      link: "/blogs",
    },
    {
      icon: <FaBullseye className="text-2xl" />,
      title: "The Power of Employee Referrals",
      description:
        "Your best hires often come through people who already work for you:\n\n Offer meaningful rewards – Cash bonuses work, but extra PTO days can be more motivating\n Make it easy – Create a simple portal where employees can submit contacts\n Make it easy – Create a simple portal where employees can submit contacts",
      image: service2,
      link: "/blogs",
    },
    {
      icon: <FaLock className="text-2xl" />,
      title: "Interviewing for Soft Skills",
      description:
        "Technical skills can be taught – attitude can't. Look for:\n\n ✔️ Problem-solving – 'Tell me about a work challenge you overcame'\n✔️ Teamwork – 'Describe a time you helped a struggling coworker'\n ✔️ Adaptability – 'How do you handle sudden changes at work?'",
      image: service3,
      link: "/blogs",
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
    hidden: { y: 50, opacity: 0 },
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
    rest: { y: 0 },
    hover: { y: -10 },
  };

  const hoverImage = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">
            Explore Insights on Staffing & Talent Acquisition
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover valuable resources to enhance your hiring strategy
          </p>
        </motion.div>

        {/* Insights Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              variants={item}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group"
            >
              <motion.div
                variants={hoverCard}
                className="h-full bg-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col"
              >
                {/* Image */}
                <motion.div
                  variants={hoverImage}
                  className="overflow-hidden h-48"
                >
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#D4AF37] p-2 rounded-lg mr-4 text-white">
                      {insight.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#D4AF37]">
                      {insight.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 mb-6 flex-1 line-clamp-3">
                    {insight.description}
                  </p>

                  <a
                    href={insight.link}
                    className="text-[#D4AF37] font-medium hover:text-[#D4AF37] transition-colors inline-flex items-center"
                  >
                    More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StaffingServices;

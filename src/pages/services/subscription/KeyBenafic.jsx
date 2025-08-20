import React from "react";
import { motion } from "framer-motion";
import {
  FaLock,
  FaUsers,
  FaBolt,
  FaSyncAlt,
  FaDollarSign,
  FaHandshake,
} from "react-icons/fa";

const KeyBenafic = () => {
  const benefits = [
    {
      icon: <FaLock className="text-2xl" />,
      title: "Fixed Monthly Fee",
      description:
        "Clear, predictable costs with a fixed-fee model, no hidden charges, just transparent monthly payments as outlined in your contract.",
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Dedicated Recruitment Team",
      description:
        "A tailored team of skilled sourcers and recruiters assigned specifically to meet your unique hiring goals.",
    },
    {
      icon: <FaBolt className="text-2xl" />,
      title: "Fast & Reliable Hiring",
      description:
        "We start recruiting as soon as your contract is signed, with an average time-to-fill of just 3 weeks per vacancy.",
    },
    {
      icon: <FaSyncAlt className="text-2xl" />,
      title: "Replacement Guarantee",
      description:
        "Enjoy peace of mind with our 3-month candidate replacement guarantee, plus real-time CRM access to monitor progress every step of the way.",
    },
    {
      icon: <FaDollarSign className="text-2xl" />,
      title: "Reduced Hiring Costs",
      description:
        "Tap into a broad talent pool covering technical, non-technical, and executive roles, while reducing unnecessary hiring costs.",
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Long-Term Partnership",
      description:
        "We focus on building lasting relationships, enhancing your recruitment, talent attraction, and employee retention strategies.",
    },
  ];

 
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
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000b30] to-[#0a1a4d] overflow-hidden">
      
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">
            Key Benefits of Our Recruitment Service
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover why leading companies choose our subscription recruitment
            model for their hiring needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-6 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300 mx-auto">
                {benefit.icon}
              </div>

              <h3 className="text-xl font-bold text-white text-center mb-4">
                {benefit.title}
              </h3>

              <p className="text-gray-300 text-center leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

     
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">
                  3x
                </div>
                <div className="text-gray-300">Faster Hiring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">
                  45%
                </div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">
                  95%
                </div>
                <div className="text-gray-300">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-2">
                  24/7
                </div>
                <div className="text-gray-300">Dedicated Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyBenafic;

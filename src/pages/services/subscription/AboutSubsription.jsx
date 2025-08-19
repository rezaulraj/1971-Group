import React from "react";
import { FaMicrophone, FaSyncAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

import ceoImage from "../../../assets/subscription/ceo.jpg?url";
import subscriptionImage from "../../../assets/subscription/sebc.avif?url";

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
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -8,
    transition: { duration: 0.3 },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const subscriptionData = {
  title: "Learn More About Subscription Recruitment",
  cards: [
    {
      id: 1,
      icon: <FaMicrophone className="text-2xl" />,
      title: "Interview Insight CEO: Inside Subscription-Based Hiring",
      subtitle:
        "An in-depth look at how subscription recruitment sets itself apart from traditional hiring models:",
      content:
        "“...The main distinctions lie in the cost-efficient payment structure and the benefit of having a dedicated sourcer and recruiter working full-time exclusively on the client's roles...”",
      image: ceoImage,
      cta: "More",
    },
    {
      id: 2,
      icon: <FaSyncAlt className="text-2xl" />,
      title: "What Is Subscription-Based (Embedded) Recruitment?",
      subtitle: "",
      content:
        "Also known as a Recruitment Subscription Service (RSS) or embedded recruitment, this model is designed for businesses with ongoing hiring needs. Instead of paying per hire, you pay a fixed monthly fee that covers all recruitment activities for the duration of your subscription. The result? A streamlined, predictable, and highly cost-effective way to build your team.",
      image: subscriptionImage,
      cta: "More",
    },
  ],
};

const SubscriptionCard = ({ card }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
      className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-[#D4AF37]/30 h-full flex flex-col"
    >
      {card.id === 1 ? (
        <>
          <div className="p-8 flex-1">
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mr-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
            </motion.div>
            {card.subtitle && (
              <motion.p
                className="text-gray-300 italic mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {card.subtitle}
              </motion.p>
            )}
            <motion.blockquote
              className="border-l-4 border-[#D4AF37] pl-6 my-6 text-gray-200 text-lg leading-relaxed"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {card.content}
            </motion.blockquote>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="/blogs"
                className="inline-flex items-center text-[#D4AF37] font-medium hover:text-[#c6a22f] transition-colors group"
              >
                {card.cta}
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <div className="p-8 flex-1">
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mr-4">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
            </motion.div>
            {card.subtitle && (
              <motion.p
                className="text-gray-300 italic mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                {card.subtitle}
              </motion.p>
            )}
            <motion.p
              className="text-gray-200 text-lg leading-relaxed"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {card.content}
            </motion.p>
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="/blogs"
                className="inline-flex items-center text-[#D4AF37] font-medium hover:text-[#c6a22f] transition-colors group"
              >
                {card.cta}
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </>
      )}
    </motion.div>
  );
};

const AboutSubscription = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#000b30] to-[#0a1a4d] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-[#D4AF37]"
          variants={fadeIn}
        >
          {subscriptionData.title}
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-10"
          variants={containerVariants}
        >
          {subscriptionData.cards.map((card) => (
            <SubscriptionCard key={card.id} card={card} />
          ))}
        </motion.div>

        {/* Additional CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#1a2a6b]/50 backdrop-blur-md p-10 rounded-2xl border border-[#D4AF37]/30">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Explore Subscription Recruitment?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Discover how our subscription model can transform your hiring
              process and deliver exceptional results.
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-[#D4AF37] to-[#c6a22f] hover:from-[#c6a22f] hover:to-[#D4AF37] text-[#000b30] font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Get Started
              <FaArrowRight className="ml-2" />
            </a>
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default AboutSubscription;

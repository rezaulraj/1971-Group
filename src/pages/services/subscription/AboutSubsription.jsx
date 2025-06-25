import React from "react";
import { FaMicrophone, FaSyncAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

// Import your images
import ceoImage from "../../../assets/subscription/ceo.jpg?url";
import subscriptionImage from "../../../assets/subscription/sebc.avif?url";

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
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -5,
    transition: { duration: 0.2 },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

// Subscription data in JSON format
const subscriptionData = {
  title: "Learn More About Subscription Recruitment",
  cards: [
    {
      id: 1,
      icon: <FaMicrophone className="text-purple-500 text-2xl mr-3" />,
      title: "Interview with 1971 Group' CEO",
      subtitle:
        '"Inside Subscription-Based Hiring" — An exclusive conversation with Vasco Grieg on how subscription recruitment differs from traditional models:',
      content:
        "“...There are several key differences—namely, the cost-saving payment structure, and the dedicated sourcer and recruiter who work full-time exclusively on the client's roles...”",
      image: ceoImage,
      cta: "More",
    },
    {
      id: 2,
      icon: <FaSyncAlt className="text-teal-500 text-2xl mr-3" />,
      title: "What Is Subscription-Based (Embedded) Recruitment?",
      subtitle: "",
      content:
        "Also known as Recruitment Subscription Service (RSS) or embedded recruitment, this model is ideal for companies that regularly hire. It involves a fixed monthly fee covering all recruitment activities during the subscription period—making it one of the most cost-effective hiring solutions available.",
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
      animate="visible"
      whileHover="hover"
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {card.id === 1 ? (
        <>
          <div className="p-6">
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {card.icon}
              <h3 className="text-xl font-semibold text-gray-700">
                {card.title}
              </h3>
            </motion.div>
            {card.subtitle && (
              <motion.p
                className="text-gray-500 italic mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {card.subtitle}
              </motion.p>
            )}
            <motion.blockquote
              className="border-l-4 border-purple-300 pl-4 my-4 text-gray-600"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              {card.content}
            </motion.blockquote>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <button className="flex items-center text-gray-600 font-medium hover:text-gray-800 transition-colors">
                {card.cta} <FaArrowRight className="ml-2 text-gray-500" />
              </button>
            </motion.div>
          </div>
          <motion.img
            src={card.image}
            alt={card.title}
            className="w-full h-48 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
        </>
      ) : (
        <>
          <motion.img
            src={card.image}
            alt={card.title}
            className="w-full h-48 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
          <div className="p-6">
            <motion.div
              className="flex items-center mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {card.icon}
              <h3 className="text-xl font-semibold text-gray-700">
                {card.title}
              </h3>
            </motion.div>
            {card.subtitle && (
              <motion.p
                className="text-gray-500 italic mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {card.subtitle}
              </motion.p>
            )}
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              {card.content}
            </motion.p>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <button className="flex items-center text-gray-600 font-medium hover:text-gray-800 transition-colors">
                {card.cta} <FaArrowRight className="ml-2 text-gray-500" />
              </button>
            </motion.div>
          </div>
        </>
      )}
    </motion.div>
  );
};

const AboutSubscription = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-gray-800"
        variants={fadeIn}
      >
        {subscriptionData.title}
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {subscriptionData.cards.map((card) => (
          <SubscriptionCard key={card.id} card={card} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutSubscription;

import React, { useState } from "react";
import {
  FiDollarSign,
  FiRepeat,
  FiUsers,
  FiBookOpen,
  FiMessageCircle,
  FiPhoneCall,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const FrequentlyAskedSub = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Recruitment Subscription?",
      answer:
        "Recruitment subscription is a monthly-based hiring model that enables companies to access continuous and strategic recruitment support. It empowers long-term hiring success through consistent collaboration with a dedicated recruitment team.",
      icon: <FiRepeat className="text-blue-400" />,
    },
    {
      question: "How Does the Subscription Payment Model Work?",
      answer:
        "It’s a fixed monthly payment system for the duration of your subscription. You get full access to a recruitment team that works exclusively on your hiring needs—recruiting as many candidates as necessary during that time.",
      icon: <FiDollarSign className="text-green-400" />,
    },
    {
      question:
        "Are Embedded Recruiting and Subscription-Based Recruiting the Same?",
      answer:
        "Yes, they are the same. Both involve integrating a dedicated recruitment team into your operations for ongoing talent acquisition under a subscription agreement.",
      icon: <FiUsers className="text-purple-400" />,
    },
    {
      question: "What Does RSS Mean in This Context?",
      answer:
        "RSS stands for Recruitment Subscription Service. It’s simply another term for the recruitment subscription model.",
      icon: <FiBookOpen className="text-yellow-400" />,
    },
    {
      question: "How Do I Get Started with Recruitment Subscription?",
      answer:
        "Getting started is easy:\n\n• Fill out the contact form at the bottom of the page\n• Or book a free consultation call with our team to discuss your specific needs",
      icon: <FiPhoneCall className="text-pink-400" />,
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recruitment Subscription: Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className={`w-full flex items-center justify-between p-6 text-left ${
                  activeIndex === index
                    ? "bg-gray-800"
                    : "bg-gray-800/70 hover:bg-gray-800"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-gray-700 rounded-lg">{faq.icon}</div>
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                </div>
                {activeIndex === index ? (
                  <FiChevronUp className="text-gray-400 text-xl" />
                ) : (
                  <FiChevronDown className="text-gray-400 text-xl" />
                )}
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeIndex === index ? "max-h-screen py-6 px-8" : "max-h-0"
                }`}
              >
                <div className="prose prose-invert text-gray-300">
                  {faq.answer.split("\n").map((paragraph, i) => (
                    <p key={i} className="mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedSub;

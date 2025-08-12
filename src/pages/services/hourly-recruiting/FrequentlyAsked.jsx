import React, { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiFileText,
  FiSettings,
  FiUsers,
  FiClock,
  FiDollarSign,
  FiAward,
} from "react-icons/fi";

const FrequentlyAsked = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What Is Hourly Recruiting, exactly?",
      answer:
        "It’s a model where the client pays only for the hours worked by the recruiter, not per hire. This can be through a freelancer, an in-house recruiter, or a specialized agency like ours.",
      icon: <FiFileText className="text-blue-400" />,
    },
    {
      question: "How does an hourly recruitment agreement work?",
      answer:
        "You sign a simple hourly-based contract. We define your goals, assign expert recruiters, and start the process. You’re billed based on time spent  nothing more.",
      icon: <FiSettings className="text-purple-400" />,
    },
    {
      question: "Who benefits most from hourly recruiting?",
      answer:
        "Startups, SMEs, and companies hiring just 1–2 roles or needing short-term recruitment help. It’s also ideal for companies needing only sourcing (CV delivery).",
      icon: <FiUsers className="text-green-400" />,
    },
    {
      question: "How long does it take to hire one person?",
      answer:
        "It usually takes 7 to 14 days, depending on the role complexity.",
      icon: <FiClock className="text-amber-400" />,
    },
    {
      question: "What’s the average hourly rate?",
      answer:
        "Rates are flexible and depend on the role's level and complexity, with most standard positions falling within a competitive hourly range.",
      icon: <FiDollarSign className="text-red-400" />,
    },
    {
      question: "Which positions are most expensive to fill?",
      answer:
        "C-level roles (CEO, CFO, CTO) are typically the most expensive due to complexity, seniority, and guarantee requirements.",
      icon: <FiAward className="text-indigo-400" />,
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Understanding Hourly Recruiting: Is It Worth It?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
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

export default FrequentlyAsked;

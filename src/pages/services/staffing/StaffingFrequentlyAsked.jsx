import React, { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiUsers,
  FiCode,
  FiClock,
  FiTrendingUp,
  FiShield,
  FiFileText,
  FiMessageSquare,
} from "react-icons/fi";

const StaffingFrequentlyAsked = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What Is Outstaffing?",
      answer:
        "Outstaffing is a remote employment model where you manage the daily tasks and workflow of external specialists, while we handle payroll, benefits, and HR admin.",
      icon: <FiUsers className="text-blue-400" />,
    },
    {
      question: "What roles can I hire through outstaffing?",
      answer:
        "From junior developers to C-suite leaders, we offer a broad range of IT professionals including engineers, designers, QA specialists, analysts, and more.",
      icon: <FiCode className="text-green-400" />,
    },
    {
      question: "How is remote talent managed efficiently?",
      answer:
        "We provide project managers and use top-tier communication tools to ensure clear collaboration, accountability, and progress tracking.",
      icon: <FiClock className="text-yellow-400" />,
    },
    {
      question: "What is the standard contract duration?",
      answer:
        "We offer flexible contracts  from short-term projects to multi-year engagements. Standard contracts usually run for 12 months.",
      icon: <FiFileText className="text-purple-400" />,
    },
    {
      question: "How does pricing work?",
      answer:
        "We use a transparent pricing model based on hourly or monthly rates. Costs vary depending on seniority, role, and project complexity.",
      icon: <FiTrendingUp className="text-teal-400" />,
    },
    {
      question: "What are the key benefits of using your outstaffing services?",
      answer:
        "• Reduced recruitment costs\n\n• Access to global talent\n• Fast hiring process\n• High flexibility\n• Deep industry knowledge\n• Innovative solutions",
      icon: <FiMessageSquare className="text-pink-400" />,
    },
    {
      question: "How do you ensure data confidentiality and security?",
      answer:
        "We follow strict data protection protocols, use secure tools, and comply with international regulations to ensure full client confidentiality.",
      icon: <FiShield className="text-red-400" />,
    },
    {
      question: "How do I get started?",
      answer:
        "Fill out the contact form or schedule a call. We'll discuss your needs and start matching you with qualified candidates right away.",
      icon: <FiMessageSquare className="text-indigo-400" />,
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
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

export default StaffingFrequentlyAsked;

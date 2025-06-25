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
        "Outstaffing is a flexible remote employment model where a company hires professionals from a third-party provider to perform specific tasks or projects. While the client company manages day-to-day operations and task distribution, the outstaffing provider handles payroll, equipment, and workspace arrangements.",
      icon: <FiUsers className="text-blue-400" />,
    },
    {
      question:
        "What Types of IT Professionals Can Be Hired Through Outstaffing?",
      answer:
        "You can hire a wide variety of IT experts, including:\n\n• Software Developers (all levels)\n• UI/UX Designers\n• QA Specialists\n• Project Managers\n• Business Analysts\n• Non-technical roles\n• C-level Executives\n\nWe can source professionals ranging from junior specialists to senior leaders.",
      icon: <FiCode className="text-green-400" />,
    },
    {
      question: "Is Remote Team Management Efficient with Outstaffing?",
      answer:
        "Yes, very efficient. At OnHires, we use the latest project management tools, video conferencing platforms, and real-time chat systems to ensure smooth collaboration.\n\nWe also assign a dedicated project manager who acts as your main point of contact, ensuring transparency and seamless communication.\n\nOur Promise:\n\n• Transparent communication\n• Strong cultural and business fit\n• Talents who are responsive and available\n• Consistent, high-quality results",
      icon: <FiClock className="text-yellow-400" />,
    },
    {
      question: "What Is the Typical Contract Duration?",
      answer:
        "Outstaffing contracts can be:\n\n• Short-term, for temporary or urgent needs\n• Long-term, extending up to several years\n\nThe standard contract duration is usually 1 year.",
      icon: <FiFileText className="text-purple-400" />,
    },
    {
      question: "How Does Pricing Work?",
      answer:
        "We offer flexible pricing models based on:\n\n• Hourly rates (our preferred model)\n• Monthly fees\n\nPricing depends on factors such as:\n\n• The specialist’s experience level\n• Contract length\n• Project complexity",
      icon: <FiTrendingUp className="text-teal-400" />,
    },
    {
      question: "What Are the Benefits of IT Outstaffing?",
      answer:
        "With OnHires, you get:\n\n• Cost-effective hiring\n• Access to high-quality global talent\n• Flexible team scaling\n• Deep industry and domain expertise\n• Market-driven insights and recommendations\n• Innovation in staffing and project solutions",
      icon: <FiMessageSquare className="text-pink-400" />,
    },
    {
      question: "How Do You Ensure Data Security & Confidentiality?",
      answer:
        "We strictly comply with local regulations and international data security standards. Our security practices include:\n\n• Encrypted communication channels\n• Limited access to client data\n• Industry-standard data protection protocols",
      icon: <FiShield className="text-red-400" />,
    },
    {
      question: "How Can I Get Started?",
      answer:
        "It's easy!\n\n➡️ Fill out the contact form below\n➡️ Or book a free consultation call to discuss your staffing needs directly with our team.",
      icon: <FiMessageSquare className="text-indigo-400" />,
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            IT Outstaffing: Frequently Asked Questions
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

import React, { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiDollarSign,
  FiFileText,
  FiUsers,
  FiCheckCircle,
  FiGlobe,
  FiLink2,
  FiCloud,
} from "react-icons/fi";

const PayFrequentlyAsked = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What Is Pay-Per-Hire Recruitment?",
      answer:
        "It’s a commission-based recruitment model where the client pays a pre-agreed percentage of the hired candidate’s annual salary. This fee is only due upon successful placement.",
      icon: <FiDollarSign className="text-green-400" />,
    },
    {
      question: "Are there other recruitment pricing models?",
      answer:
        "Yes, the four main models include:\n\n• Salary Percentage (Contingency Recruiting)\n• Flat Fee Recruiting\n• Hourly Billed Recruiting\n• Retained (Executive) Search",
      icon: <FiFileText className="text-blue-400" />,
    },
    {
      question: "What is retained search?",
      answer:
        "Retained search is often used for executive or highly confidential roles. It involves a partnership-based agreement with upfront fees and full-cycle recruitment support, from sourcing to job offer.",
      icon: <FiUsers className="text-indigo-400" />,
    },
    {
      question:
        "What’s the difference between pay-per-hire and flat fee recruitment?",
      answer:
        "Pay-per-hire involves a variable fee based on salary. Flat fee recruitment is a fixed-price service, often focused on advertising and applicant delivery rather than full-cycle hiring.",
      icon: <FiCheckCircle className="text-purple-400" />,
    },
    {
      question: "Does 1971 Group use the pay-per-hire model exclusively?",
      answer:
        "Yes. We specialize in the pay-per-hire model because it aligns with our commitment to performance, transparency, and client success.",
      icon: <FiGlobe className="text-yellow-400" />,
    },
    {
      question: "What are the advantages of this model?",
      answer:
        "• You only pay if we deliver results\n\n• Custom contracts and guarantee periods\n• Flexibility to update job criteria mid-search\n• No financial risk upfront\n• Transparency in consultation\n\nChoose a firm based on trust, experience, and alignment with your hiring goals.",
      icon: <FiLink2 className="text-red-400" />,
    },
    {
      question:
        "Should payment model be a deciding factor when choosing a recruitment agency?",
      answer:
        "Not entirely. More important is the agency’s reputation, client feedback, placement success, and service transparency. A discovery call is a great way to assess the fit.",
      icon: <FiGlobe className="text-teal-400" />,
    },
    {
      question: "How can I learn more about your agency?",
      answer:
        "Visit our official website or LinkedIn page for insights, client testimonials, and company updates. You can also contact us through the form on our site.",
      icon: <FiCloud className="text-blue-400" />,
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pay-Per-Hire Recruitment: All You Need to Know
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

export default PayFrequentlyAsked;

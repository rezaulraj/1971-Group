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
        "Pay-per-hire is a contingency-based recruitment model where a company pays the recruitment agency a pre-agreed percentage of the hired candidate’s annual salary. This percentage is determined at the start of the partnership and can vary depending on the position’s level and complexity. The fee is only charged once a successful hire is made.",
      icon: <FiDollarSign className="text-green-400" />,
    },
    {
      question: "What Other Recruitment Payment Models Exist?",
      answer:
        "Yes, in addition to pay-per-hire, there are four primary recruitment payment models, each with its own structure:\n\n• Salary Percentage (Contingency Recruiting)\n• Flat Fee Recruiting\n• Hourly Billed Recruiting\n• Retained (Executive) Search",
      icon: <FiFileText className="text-blue-400" />,
    },
    {
      question: "What Are the Key Recruitment Fee Models?",
      answer:
        "1. Retained Search: Used for executive roles, this model involves a partnership with full-cycle hiring services and premium confidentiality.\n\n2. Contingency (Pay-Per-Hire): Agencies are paid only when a hire is made, often with a replacement guarantee.\n\n3. Flat Fee: Clients pay a fixed rate for defined services such as job ads or resume sourcing.\n\n4. Hourly Billed: The client pays based on hours worked by the recruiter, ideal for partial or short-term hiring needs.",
      icon: <FiUsers className="text-indigo-400" />,
    },
    {
      question: "Which Model Does OnHires Use?",
      answer:
        "OnHires primarily uses the pay-per-hire model. We find it both effective and aligned with our client-first philosophy. It offers flexibility, clear expectations, and payment only upon results.",
      icon: <FiCheckCircle className="text-purple-400" />,
    },
    {
      question: "What Are the Advantages of Pay-Per-Hire?",
      answer:
        "• Tailored Agreements: Each contract is adapted to your goals and needs.\n• Replacement Guarantee: We offer a set period for free replacement if needed.\n• Flexible Requirements: Clients can refine role criteria throughout the hiring process.",
      icon: <FiGlobe className="text-yellow-400" />,
    },
    {
      question: "Should You Choose a Firm Based on Its Pricing Model?",
      answer:
        "Not necessarily. While pricing is important, you should prioritize:\n\n• The agency’s reputation\n• Verified client reviews\n• Industry expertise\n• Transparency in consultation\n\nChoose a firm based on trust, experience, and alignment with your hiring goals.",
      icon: <FiLink2 className="text-red-400" />,
    },
    {
      question: "How Can I Learn More About OnHires?",
      answer:
        "Visit our official website to explore services and client stories. You can also check our LinkedIn page for updates. Need help? Fill out the contact form on our website to speak directly with our team.",
      icon: <FiGlobe className="text-teal-400" />,
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

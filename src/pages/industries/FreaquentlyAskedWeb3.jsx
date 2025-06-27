import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FrequentlyAskedWeb3 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question:
        "What Kind of IT Talent Do Web3 Recruitment Agencies Usually Seek?",
      answer:
        "Web3 recruitment agencies typically focus on sourcing highly specialized developers and IT professionals tailored to their clients' needs. These include:\n\n• Full-Stack Web3 Developers\n• Front-End Web3 Developers\n• Core Blockchain Developers\n• Smart Contract Engineers\n• Web3.js Developers\n• DeFi Engineers, and more.\n\nTheir primary responsibilities often involve building and maintaining decentralized applications (dApps) running on Web3 protocols.",
    },
    {
      question:
        "How Long Does It Take to Hire a Web3 Developer Through a Recruitment Agency?",
      answer:
        "Given the high demand in the Web3 space, recruitment timelines are critical. At OnHires, our average time to fill a Web3 role is three weeks. Our experienced recruiters leverage an extensive candidate network and advanced sourcing tools to ensure fast and accurate placements.",
    },
    {
      question: "Is OnHires Only Focused on Web3 Recruitment?",
      answer:
        "Not at all. While we provide specialized Web3 recruitment services, OnHires is a global IT hiring agency that works across a wide range of industries. We recruit:\n\n• C-Level Executives\n• FinTech Experts\n• AI & Machine Learning Specialists\n• Cloud Computing Professionals\n• DevOps Engineers, and more.\n\nWeb3 hiring is just one part of our broader mission to connect top talent with innovative companies across the tech landscape.",
    },
    {
      question: "What Makes OnHires Different From Other Recruitment Agencies?",
      answer:
        "If you're looking to hire top-tier IT professionals quickly and effectively, OnHires is the partner you need. Our strengths include:\n\n• A dedicated IT recruitment team with deep industry expertise\n• A large, pre-vetted candidate pool\n• Proven processes for job posting, screening, and interviewing\n• A customized approach to every client's hiring goals\n• Speed: we fill positions within weeks, not months\n\nWe focus on precision, speed, and cultural fit—delivering not just candidates, but long-term contributors.",
    },
    {
      question: "What Are Your Payment Options?",
      answer:
        "We offer flexible and client-friendly payment models, including:\n\n• Pay-per-hire\n• Subscription-based hiring\n• Milestone-based payments\n• Single or multiple installment plans\n• Crypto payments\n\nOur goal is to tailor collaboration terms that are transparent, fair, and mutually beneficial.",
    },
    {
      question: "How Can I Learn More or Get Started?",
      answer:
        "It's easy. Just fill out the contact form on our website, and a member of our team will reach out shortly. You can also:\n\n• Explore our website for detailed service overviews\n• Read our blog for insights and tips\n• Download free recruitment guides\n• Schedule a consultation directly with our team",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-blue-900/50">
      {/* Floating 3D elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400/10 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${
                Math.random() * 20 + 10
              }s linear infinite both`,
              opacity: Math.random() * 0.15 + 0.05,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gray-200">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl bg-gray-800/40 backdrop-blur-lg border border-gray-700/50 overflow-hidden transition-all duration-500
                ${
                  activeIndex === index
                    ? "shadow-lg shadow-blue-500/20 border-blue-400/50"
                    : "hover:border-blue-400/30"
                }`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center group"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <FiChevronUp className="text-blue-400 text-xl" />
                ) : (
                  <FiChevronDown className="text-gray-400 group-hover:text-blue-400 text-xl transition-colors" />
                )}
              </button>

              <div
                className={`px-6 pb-5 transition-all duration-500 overflow-hidden
                  ${
                    activeIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
              >
                <div className="text-gray-300 whitespace-pre-line">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          50% {
            transform: translate(
                ${Math.random() * 40 - 20}px,
                ${Math.random() * 40 - 20}px
              )
              rotate(5deg);
          }
        }
      `}</style>
    </div>
  );
};

export default FrequentlyAskedWeb3;

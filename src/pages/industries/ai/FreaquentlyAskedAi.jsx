import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
const FreaquentlyAskedAi = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question:
        "Please, indicate the areas of business that call for experts in the field of AI.",
      answer:
        "Today, as the AI recruiting statistics show, AI professionals are widely involved in almost all business industries, from purely technological ones, like cloud computing, to industries like education, healthcare, finance, and even entertainment.",
    },
    {
      question:
        "Who do AI recruiting companies usually recruit as AI technologies specialists?",
      answer:
        "In AI recruitment or data science recruitment, AI hiring firms pay plenty of attention to talent AI finding among such IT workers as machine learning engineers, data scientists, robotics and computer vision engineers, NLP specialists, robotics and deep learning developers, AI architects, research scientists, product managers, business strategists, and many others.",
    },
    {
      question:
        "How long does it normally take data analyst recruiters from data analytics recruitment agencies to recruit AI specialists for a client?",
      answer:
        "This indicator depends on many factors, particularly the number of job seekers the data science recruitment agency needs to hire, the degree of uniqueness of the vacancy, the abilities wanted, etc. As a rule, companies hiring data scientists or companies hiring data analysts take an average one-three weeks. OnHires is not a data science recruiting agency or an AI recruitment agency. Our company specializes in searching for a much wider circle of IT talent, but our recruitment department workers spend on average three weeks to complete a client’s order. ",
    },
    {
      question:
        "Does a data science headhunter use specific talent discovering methods?",
      answer:
        "Usually, in IT recruiting, which includes data scientist recruitment, they utilize similar approaches to discovering candidates. Experienced recruiting enterprises apply their extensive candidate pools and a variety of reliable, proven, and effective hiring platforms and tools to obtain the right job seekers.",
    },
    {
      question:
        "When a recruitment firm is looking for particular AI professionals, do the recruiters check whether applicants possess compulsory skills? ",
      answer:
        "Yes, there are some essential basic skills AI candidates have to have if they are hopeful of getting a job offer. These basic skills contain the following:\n• machine learning;\n• deep knowledge of programming languages;\n• professional knowledge of neural networks;\n• good experience in data analysis;\n• experience in cloud computing;\n• proficiency in mathematics;\n• proficiency in natural language processing;\n• computer vision.",
    },
    {
      question:
        "How can I find out more details about the services supplied by OnHires as well as the terms of cooperation?",
      answer:
        "IIf you fill out the form on our website and send it, a company representative will contact you and agree on a convenient time and format for communication so that you can get answers to all your questions firsthand. ",
    },
    {
      question:
        "What do I need to do to download your guides and receive newsletters with new materials?",
      answer:
        "You need to fill out the form on the main page of our site, and you will be able to download our guides and reports and receive our newsletters with updates. Besides, you always have the opportunity to read numerous articles on the company’s blog. You will definitely find a lot of helpful information and facts there.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-900/20 via-gray-900/30 to-red-900/50">
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

export default FreaquentlyAskedAi;

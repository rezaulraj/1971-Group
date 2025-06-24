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
      question: "What Is Hourly Recruiting?",
      answer:
        "Hourly recruiting is a flexible recruitment outsourcing model where the client pays only for the time a recruiter spends working on a hiring project. This could involve a freelance recruiter, a specialist from a recruitment agency, or a dedicated hiring team working under an hourly contract. Unlike traditional models, the final cost is not fixed upfront—only the hourly rate is specified in the agreement.",
      icon: <FiFileText className="text-blue-400" />,
    },
    {
      question: "What Does an Hourly Recruiting Contract Include?",
      answer:
        "An hourly recruiting agreement outlines a time-based collaboration between the client and the recruitment provider. The contract defines the hourly rate and the scope of services, which may include:\n\n• Full-cycle candidate recruitment\n• Sourcing and submitting qualified resumes\n• Conducting candidate interviews\n• Creating job descriptions\n• Developing interview questions\n\nThe list of services can be tailored to the specific needs of each project.",
      icon: <FiSettings className="text-purple-400" />,
    },
    {
      question: "How Does the Hourly Recruiting Process Work?",
      answer:
        "The process typically includes these key steps:\n\n1. Signing an agreement between the client and the recruitment provider\n2. Defining the hourly rate for recruitment services\n3. The recruiter or team performs the agreed scope of work\n4. The total number of hours worked is calculated\n5. The client is invoiced based on hours spent",
      icon: <FiUsers className="text-green-400" />,
    },
    {
      question: "Who Benefits from the Hourly Recruitment Model?",
      answer:
        "This model is ideal for:\n\n• Companies looking to hire 1–2 specialists quickly\n• Organizations needing only partial recruiting support (e.g., shortlisting resumes)\n• Businesses with limited hiring needs who want cost transparency and flexibility\n\nHourly recruiting offers a lean and efficient solution for small-scale hiring projects.",
      icon: <FiClock className="text-amber-400" />,
    },
    {
      question: "How Many Hours Does It Take to Hire One Candidate?",
      answer:
        "The time required to fill a position can vary based on role complexity. On average, it may take anywhere from a few days to a few weeks to complete a hire, depending on the job requirements.",
      icon: <FiDollarSign className="text-red-400" />,
    },
    {
      question: "What Is the Average Hourly Rate?",
      answer:
        "Hourly rates vary depending on the position and recruiter expertise. The industry average is around $45/hour, but rates can increase for highly specialized roles or when additional service guarantees are included.\n\nOnHires offers competitive hourly rates starting from $25/hour.",
      icon: <FiAward className="text-indigo-400" />,
    },
    {
      question: "Which Roles Are the Most Expensive to Fill?",
      answer:
        "C-level executive positions are the most costly and time-consuming to recruit. These roles demand extensive vetting, longer timelines, and deeper expertise—making the overall process more expensive.",
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

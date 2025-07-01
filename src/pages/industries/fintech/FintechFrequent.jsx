import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
const FintechFrequent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question:
        "Could you tell me about FinTech recruitment, what sense this term includes, and what the business sector looks like in your firm?",
      answer:
        "FinTech recruiting literally denotes scanning for pros possessing a set of unique proficiencies and relevant attainments to work in the sector. This concept usually refers to all technologies implicated in the monetary segment.\n Moreover, these technicalities have been developed directly to improve, robotize and optimize the process of providing numerous fiscal services. As touching our agency, among second things, it is entangled in finding and hiring such experts. ",
    },
    {
      question:
        "Are there any specific singularities for employing FinTech specialists? Which ones?",
      answer:
        "Yes, virtually, hiring in FinTech possesses some original specifics, which our company’s recruiters pay special attention to. In particular, the candidates, to match the financial enterprises’ demands, must meet high requirements for the following parameters:·  Strong technical capabilities, for example, information analysis, language programming, and database control.·  Solid understanding of financial regulations and compliance.·  Grave anterior economic area standing, enclosing functioning in investing, banking, and other finance-related services.·  Prompt capacity for adjustments, which signifies speedy learning of new knacks and techniques.·  Cultural match with the client’s organization.",
    },
    {
      question:
        "Can you list the most in-request FinTech workers your company retrieves?",
      answer:
        "Sure. We detect a wide circle of economic sphere workers: FinTech software developers and engineers; app or blockchain developers; monetary, quantitative, budget, and cybersecurity analysts; FinTech project, product, and fiscal managers; account executives, etc. ",
    },
    {
      question:
        "What exactly does the expert discovering process in FinTech activate?",
      answer:
        "This quite complex operation is composed of a row of given activities:·  Signing the covenant with the hiring enterprise.·  Job posting.·  Resume screening to indicate relevant workmanship, knacks, education, or qualifications.·  Initial screening to estimate the potential employee's communication capabilities, awareness of the role, and generally coinciding with the organization’s culture.·  Completing a technical assessment or coding test by the job seeker to evaluate their industrial abilities, problem-solving aptitudes, or familiarity with relevant technicalities appropriate for the industry.·  Interviewing the selected applicants.·  A case study presented by the applicant to appreciate their analytical thinking, presentation skills, and ability to apply their knowledge to real-world scenarios.·  Reference checking to verify the applicant's qualifications, work experience, and professional conduct.·  Job offering, outlining the terms and conditions of employment, including salary, benefits, start date, and other relevant details, and negotiating aspects of the proposal, such as offset or profits, before accepting it.·  Onboarding, assuming completing paperwork, setting up accounts, orientation sessions, and introducing the new employee to their team.",
    },
    {
      question:
        "Do you select only fiscal technology professionals for organizations or any others? ",
      answer:
        "Our agency specializes primarily in discovering IT employees for Information Technology enterprises. But our experienced headhunters, if needed, are capable of finding and hiring for you any specialist you want in the shortest possible time, even the rarest one.",
    },
    {
      question: "How to contact your recruitment agency?",
      answer:
        "We would like to explain you what steps you should take to reach our agency’s representatives and get more detailed information about what recruiting services you furnish. It is the thing you can do very easily. You only need to pad the form on our official website or book a call, and we will relate to you as fast as possible.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/80 via-gray-900/70 to-blue-900/80">
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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
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

export default FintechFrequent;

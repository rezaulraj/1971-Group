import React from "react";
import { FiUsers, FiTrendingUp, FiCode, FiArrowRight } from "react-icons/fi";
import image1 from "../../assets/web/hacon.webp";
import image2 from "../../assets/web/bitlab.webp";
import image3 from "../../assets/web/apri.png";

const CaseStudyBlog = () => {
  const caseStudies = [
    {
      icon: <FiUsers className="text-2xl" />,
      image: image2,
      title:
        "How we hired 7 talents and improved the Bitmedia Labs' business processes",
      summary:
        "We closed 7 positions in 3 months, including not only developers but also other IT specialists, and reach the 100% success rate.",
      description:
        "We organized all the recruitment process stages at the highest level from writing the job ads and screening the candidates to interviewing the potential employees and sending our offers to Bitmedia Labs.",
      category: "Recruiting",
    },
    {
      icon: <FiTrendingUp className="text-2xl" />,
      image: image3,
      title: "How we managed to increase Aprioreo's productivity by 350%",
      summary:
        "As a result of Aprioreo's cooperation with our recruitment agency OnHires: all the open positions have been filled in 2 months.",
      description:
        "6 specialists have been hired, including a C-level specialist, the productivity of Aprioreo has increased by 350%, and Aprioreo has received efficient help in building and organizing business processes.",
      category: "Recruiting",
    },
    {
      icon: <FiCode className="text-2xl" />,
      image: image1,
      title:
        "How we helped Hacken scale their Smart contracts auditor team by 45% over 3 months",
      summary:
        "Our experience of cooperation with a cybersecurity & blockchain company.",
      description:
        "Key Objective: hire 15 top-notch smart contract talents in Web3 industry, scale Hacken's team and increase department staff.",
      category: "Recruiting",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Success Stories
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className="p-2 bg-teal-500/20 rounded-lg text-teal-600">
                    {caseStudy.icon}
                  </div>
                  <span className="text-sm font-medium text-white bg-teal-600 px-3 py-1 rounded-full">
                    {caseStudy.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600 mb-4">{caseStudy.summary}</p>
                <p className="text-gray-500 text-sm mb-6">
                  {caseStudy.description}
                </p>

                <a
                  href="/blogs"
                  className="inline-flex items-center text-teal-600 font-medium group-hover:text-teal-800 transition-colors"
                >
                  <span>Read full case study</span>
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyBlog;

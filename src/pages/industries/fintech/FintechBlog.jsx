import React from "react";
import {
  FaUserPlus,
  FaChartLine,
  FaSearchDollar,
  FaFileAlt,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import bgImage from "../../../assets/fintech/shado.webp";
import hiringcase1 from "../../../assets/web/hacon.webp";
import hiringcase2 from "../../../assets/web/bitlab.webp";
import blogtech1 from "../../../assets/fintech/blog1.jpg";
import blogtech2 from "../../../assets/fintech/blog2.png";
import blogtech3 from "../../../assets/fintech/blog3.png";

const FintechBlog = () => {
  const hiringCases = [
    {
      image: hiringcase1,
      title:
        "How we helped Hacken scale their Smart contracts auditor team by 45% over 3 months",
      icon: <FaUserPlus className="text-xl" />,
      category: "Case Study",
    },
    {
      image: hiringcase2,
      title:
        "How we hired 7 talents and improved the Bitmedia Labs' business processes",
      icon: <FaChartLine className="text-xl" />,
      category: "Success Story",
    },
  ];

  const blogArticles = [
    {
      image: blogtech1,
      title:
        "The most demanded Finance and FinTech specialists in the world and their salaries",
      icon: <FaSearchDollar className="text-xl" />,
      category: "Market Trends",
    },
    {
      image: blogtech2,
      title: "The specifics of recruitment in FinTech",
      icon: <FaFileAlt className="text-xl" />,
      category: "Recruitment",
    },
    {
      image: blogtech3,
      title: "The vital points of the recruitment process in FinTech",
      icon: <FaFileAlt className="text-xl" />,
      category: "Best Practices",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background image covering 60% width */}
      <div
        className="absolute inset-y-0 right-0 w-3/5 bg-cover bg-no-repeat bg-center opacity-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-teal-800/70 to-gray-700/80"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-teal-300">hiring cases</span> & insights
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Discover our success stories and the latest trends in FinTech
            recruitment
          </p>
        </div>

        {/* Top Hiring Cases - 2 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
          {hiringCases.map((caseStudy, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden border-t-6 border-r-6 border-white/10 hover:border-teal-300/50 transition-all duration-500 group "
            >
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-64 object-cover object-center"
              />

              {/* Content container with glass effect */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="p-2 bg-teal-400/20 rounded-lg">
                    {caseStudy.icon}
                  </div>
                  <span className="text-sm font-medium text-teal-300">
                    {caseStudy.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {caseStudy.title}
                </h3>
              </div>

              {/* Hover button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <button className="flex items-center space-x-2 px-6 py-3 bg-teal-500 rounded-lg font-medium hover:bg-teal-600 transition-colors">
                  <span>Read case study</span>
                  <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-4xl font-bold text-white mb-4 max-w-2xl leading-tight mb-10">
          The articles about FinTech recruitment and FinTech talents
        </h2>
        {/* Bottom Blog Articles - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogArticles.map((article, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border-t-6 border-r-6 border-white/10 hover:border-gray-300/30 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="p-2 bg-teal-400/20 rounded-lg">
                    {article.icon}
                  </div>
                  <span className="text-sm font-medium text-teal-300">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-4">
                  {article.title}
                </h3>
                <button className="flex items-center space-x-2 text-sm text-teal-300 group-hover:text-white transition-colors">
                  <span>Read article</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FintechBlog;

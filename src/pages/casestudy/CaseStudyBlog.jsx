import React from "react";
import {
  FiUsers,
  FiTrendingUp,
  FiBriefcase,
  FiArrowRight,
} from "react-icons/fi";
import image1 from "../../assets/case/hospitality.jpg?url";
import image2 from "../../assets/case/constraction.webp?url";
import image3 from "../../assets/case/agreculture.webp?url";
import { Link } from "react-router-dom";

const CaseStudyBlog = () => {
  const caseStudies = [
    {
      id: "transforming-hospitality-staffing",
      icon: <FiUsers className="text-2xl" />,
      image: image1,
      title: "Transforming Hospitality Staffing for a Luxury Hotel Chain",
      summary:
        "We filled 85+ positions across 5 properties in 6 months, reducing time-to-hire by 40% while improving candidate quality.",
      description:
        "Our tailored recruitment strategy addressed high turnover in the hospitality sector by focusing on cultural fit and career development opportunities, resulting in 30% lower turnover compared to industry averages.",
      category: "Hospitality",
    },
    {
      id: "workforce-solutions-construction",
      icon: <FiTrendingUp className="text-2xl" />,
      image: image2,
      title: "Workforce Solutions for Major Construction Project",
      summary:
        "Delivered 200+ skilled tradespeople within tight deadlines for a $500M infrastructure project.",
      description:
        "We implemented specialized sourcing strategies to overcome regional labor shortages, ensuring the project stayed on schedule while maintaining strict safety and certification requirements.",
      category: "Construction",
    },
    {
      id: "seasonal-agricultural-workforce",
      icon: <FiBriefcase className="text-2xl" />,
      image: image3,
      title: "Seasonal Workforce Solutions for Large-Scale Farming Operation",
      summary:
        "Provided 300+ skilled agricultural workers for peak harvest seasons across multiple locations.",
      description:
        "We developed a specialized recruitment pipeline for seasonal agricultural workers, implementing training programs that increased productivity by 25% while reducing onboarding time by 40%.",
      category: "Agriculture",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recruitment Success Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proven results in diverse sectors through strategic talent
            acquisition
          </p>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="p-2 bg-teal-500/20 rounded-lg text-[#1a2a6b]">
                    {caseStudy.icon}
                  </div>
                  <span className="text-sm font-medium text-white bg-[#D4AF37] px-3 py-1 rounded-full">
                    {caseStudy.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600 mb-4">{caseStudy.summary}</p>
                <p className="text-gray-500 text-sm mb-6">
                  {caseStudy.description}
                </p>

                <Link
                  to={`/case-study/${caseStudy.id}`}
                  className="inline-flex items-center text-[#D4AF37] font-medium group-hover:text-[#D4AF37] transition-colors"
                >
                  <span>Read full case study</span>
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-12">
          <Link
            to={"/blogs"}
            className="px-8 py-3 bg-[#000b30]/90 text-white rounded-lg font-medium hover:bg-[#000b30] transition-colors flex items-center mx-auto"
          >
            <span>View All Case Studies</span>
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyBlog;

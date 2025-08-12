import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FiUsers,
  FiTrendingUp,
  FiBriefcase,
  FiArrowRight,
  FiClock,
  FiCalendar,
  FiChevronLeft,
} from "react-icons/fi";
import image1 from "../../assets/case/hospitality.jpg?url";
import image2 from "../../assets/case/constraction.webp?url";
import image3 from "../../assets/case/agreculture.webp?url";
const CaseStudyBlogDetails = () => {
  const caseStudies = [
    {
      id: "transforming-hospitality-staffing",
      icon: <FiUsers className="text-2xl" />,
      image: image1,
      title: "Transforming Hospitality Staffing for a Luxury Hotel Chain",
      summary:
        "We filled 85+ positions across 5 properties in 6 months, reducing time-to-hire by 40% while improving candidate quality.",
      description: [
        "Our tailored recruitment strategy addressed high turnover in the hospitality sector by focusing on cultural fit and career development opportunities, resulting in 30% lower turnover compared to industry averages.",
        "We implemented a multi-channel sourcing approach that combined traditional job boards with targeted social media campaigns and local community outreach.",
        "The candidate screening process was enhanced with role-specific assessments that evaluated both technical skills and service orientation.",
      ],
      category: "Hospitality",
      date: "March 15, 2023",
      readTime: "5 min read",
      stats: [
        { value: "85+", label: "Positions filled" },
        { value: "40%", label: "Reduction in time-to-hire" },
        { value: "30%", label: "Lower turnover rate" },
      ],
      challenges: [
        "High industry turnover rates (averaging 60% annually)",
        "Seasonal demand fluctuations",
        "Need for candidates with specific luxury service experience",
      ],
      solutions: [
        "Developed a talent pipeline with hospitality schools",
        "Created competitive compensation packages with clear career paths",
        "Implemented ongoing training programs",
      ],
    },
    {
      id: "workforce-solutions-construction",
      icon: <FiTrendingUp className="text-2xl" />,
      image: image2,
      title: "Workforce Solutions for Major Construction Project",
      summary:
        "Delivered 200+ skilled tradespeople within tight deadlines for a $500M infrastructure project.",
      description: [
        "We implemented specialized sourcing strategies to overcome regional labor shortages, ensuring the project stayed on schedule while maintaining strict safety and certification requirements.",
        "Partnered with trade schools and apprenticeship programs to identify emerging talent.",
        "Developed a mobile-friendly application process to accommodate on-site workers.",
      ],
      category: "Construction",
      date: "January 10, 2023",
      readTime: "7 min read",
      stats: [
        { value: "200+", label: "Skilled tradespeople placed" },
        { value: "0", label: "Project delays due to staffing" },
        { value: "100%", label: "Certification compliance" },
      ],
    },
    {
      id: "seasonal-agricultural-workforce",
      icon: <FiBriefcase className="text-2xl" />,
      image: image3,
      title: "Seasonal Workforce Solutions for Large-Scale Farming Operation",
      summary:
        "Provided 300+ skilled agricultural workers for peak harvest seasons across multiple locations.",
      description: [
        "We developed a specialized recruitment pipeline for seasonal agricultural workers, implementing training programs that increased productivity by 25% while reducing onboarding time by 40%.",
        "Established partnerships with agricultural communities in regions with complementary harvest schedules.",
        "Created multi-lingual training materials and onboarding processes.",
      ],
      category: "Agriculture",
      date: "November 5, 2022",
      readTime: "6 min read",
      stats: [
        { value: "300+", label: "Workers placed" },
        { value: "25%", label: "Productivity increase" },
        { value: "40%", label: "Reduced onboarding time" },
      ],
    },
  ];
  const { id } = useParams();
  const caseStudy = caseStudies.find((study) => study.id === id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Case Study Not Found
          </h1>
          <Link
            to="/case-studies"
            className="inline-flex items-center text-teal-600 hover:text-teal-800 transition-colors"
          >
            <FiChevronLeft className="mr-1" />
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent">
          <div className="container mx-auto px-6 h-full flex flex-col justify-end pb-12">
            <div className="max-w-3xl">
              <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white bg-teal-600 rounded-full">
                {caseStudy.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {caseStudy.title}
              </h1>
              <div className="flex items-center text-white space-x-6">
                <div className="flex items-center">
                  <FiCalendar className="mr-2" />
                  <span>{caseStudy.date}</span>
                </div>
                <div className="flex items-center">
                  <FiClock className="mr-2" />
                  <span>{caseStudy.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-6 pt-8">
        <Link
          to="/case-studies"
          className="inline-flex items-center text-teal-600 hover:text-teal-800 transition-colors"
        >
          <FiChevronLeft className="mr-1" />
          Back to Case Studies
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Summary Section */}
          <div className="p-8 md:p-12 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {caseStudy.summary}
            </p>
          </div>

          {/* Stats Section */}
          <div className="p-8 md:p-12 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Key Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudy.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm text-center"
                >
                  <p className="text-4xl font-bold text-teal-600 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Solutions */}
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-red-600 mb-4">
                  Challenges
                </h3>
                <ul className="space-y-3">
                  {caseStudy.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-600 mb-4">
                  Our Solutions
                </h3>
                <ul className="space-y-3">
                  {caseStudy.solutions.map((solution, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="p-8 md:p-12 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Case Study Details
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              {caseStudy.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <div className="p-8 md:p-12 bg-teal-50">
              <div className="max-w-3xl mx-auto">
                <blockquote className="text-xl italic text-gray-700 mb-4">
                  "{caseStudy.testimonial.text}"
                </blockquote>
                <div className="font-medium">
                  <p className="text-teal-600">
                    {caseStudy.testimonial.author}
                  </p>
                  <p className="text-gray-500">{caseStudy.testimonial.role}</p>
                </div>
              </div>
            </div>
          )}

          {/* CTA
          <div className="p-8 md:p-12 text-center">
            <Link
              to="/case-studies"
              className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
            >
              View All Case Studies
              <FiArrowRight className="ml-2" />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyBlogDetails;
